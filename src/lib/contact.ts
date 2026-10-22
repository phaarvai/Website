import { mkdir, appendFile } from "fs/promises";
import path from "path";
import {
  GENERIC_EMAIL_ERROR,
  getClientSafeEmailError,
  getResendApiKey,
  getResendFromEmail,
  logResendError,
  sendResendEmail,
  type ResendErrorShape,
} from "@/lib/resend-mail";

export interface ContactSubmission {
  name: string;
  email: string;
  organization?: string;
  role?: string;
  country?: string;
  orgType?: string;
  partnerType?: string;
  themeInterest?: string;
  areaOfInterest?: string;
  message: string;
  source: string;
  submittedAt: string;
  deliveryStatus: "logged" | "emailed" | "failed";
}

const DEFAULT_CONTACT_TO = "partnerships@phaarvai.com";

function getContactToEmail(): string {
  return process.env.CONTACT_TO_EMAIL?.trim() || DEFAULT_CONTACT_TO;
}

function shouldPersist(): boolean {
  if (process.env.CONTACT_PERSIST === "false") return false;
  return true;
}

async function persistSubmission(data: ContactSubmission): Promise<boolean> {
  if (!shouldPersist()) return false;

  try {
    const dir = process.env.CONTACT_DATA_DIR || path.join(process.cwd(), ".data");
    await mkdir(dir, { recursive: true });
    const file = path.join(dir, "contact-submissions.jsonl");
    await appendFile(file, `${JSON.stringify(data)}\n`, "utf8");
    return true;
  } catch (error) {
    console.error("[contact] Failed to persist submission:", error);
    return false;
  }
}

function formatSubject(data: ContactSubmission): string {
  const source = data.source.replace(/_/g, " ");
  const org = data.organization || data.name;
  return `Phaarvai [${source}] — ${org}`;
}

async function sendViaResend(data: ContactSubmission): Promise<void> {
  const from = getResendFromEmail();
  const to = getContactToEmail();

  if (!getResendApiKey() || !from) {
    throw new Error(
      "Contact email is not configured. Set RESEND_API_KEY and RESEND_FROM_EMAIL."
    );
  }

  const result = await sendResendEmail({
    from,
    to,
    replyTo: data.email,
    subject: formatSubject(data),
    text: formatEmailBody(data),
  });

  if (!result.success) {
    logResendError("contact", result.error, { from, to, source: data.source });
    const error = new Error(
      getClientSafeEmailError(result.error, GENERIC_EMAIL_ERROR)
    ) as Error & { resendError?: ResendErrorShape };
    error.resendError = result.error;
    throw error;
  }
}

async function sendViaPostmark(data: ContactSubmission): Promise<boolean> {
  const apiKey = process.env.POSTMARK_SERVER_TOKEN;
  const to = getContactToEmail();
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !from) return false;

  const res = await fetch("https://api.postmarkapp.com/email", {
    method: "POST",
    headers: {
      "X-Postmark-Server-Token": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      From: from,
      To: to,
      ReplyTo: data.email,
      Subject: formatSubject(data),
      TextBody: formatEmailBody(data),
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Postmark error: ${err}`);
  }

  return true;
}

/**
 * Email delivery that only needs CONTACT_TO_EMAIL (no Resend/Postmark keys).
 * First inquiry triggers an activation email to that inbox — click Activate once.
 * Docs: https://formsubmit.co/ajax-documentation
 */
async function sendViaFormSubmit(data: ContactSubmission): Promise<boolean> {
  const to = getContactToEmail();
  const disabled = process.env.CONTACT_FORMSUBMIT === "false";
  if (disabled || !to) return false;

  const res = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(to)}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
      organization: data.organization || "",
      role: data.role || "",
      partnerType: data.partnerType || data.orgType || "",
      areaOfInterest: data.areaOfInterest || data.themeInterest || "",
      country: data.country || "",
      source: data.source,
      message: data.message,
      _subject: formatSubject(data),
      _replyto: data.email,
      _template: "table",
    }),
  });

  const payload = (await res.json().catch(() => ({}))) as {
    success?: string | boolean;
    message?: string;
  };

  if (!res.ok) {
    throw new Error(`FormSubmit error: ${payload.message || res.statusText}`);
  }

  // FormSubmit returns success even when activation is pending.
  return true;
}

function formatEmailBody(data: ContactSubmission): string {
  return [
    `Source: ${data.source}`,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Organization: ${data.organization || "—"}`,
    `Role: ${data.role || "—"}`,
    `Partnership interest: ${data.partnerType || data.orgType || data.areaOfInterest || "—"}`,
    `Domain interest: ${data.themeInterest || "—"}`,
    `Country: ${data.country || "—"}`,
    "",
    "Message:",
    data.message,
    "",
    `Submitted: ${data.submittedAt}`,
    `Delivery status: ${data.deliveryStatus}`,
  ].join("\n");
}

async function notifyWebhook(data: ContactSubmission): Promise<void> {
  const url = process.env.CONTACT_WEBHOOK_URL;
  if (!url) return;

  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type: "contact_submission", data }),
  }).catch(() => {
    /* non-blocking */
  });
}

export function getContactDeliveryConfig() {
  const to = getContactToEmail();
  const hasResend = Boolean(getResendApiKey() && getResendFromEmail());
  const hasPostmark = Boolean(process.env.POSTMARK_SERVER_TOKEN && process.env.CONTACT_FROM_EMAIL);
  const formSubmitEnabled = process.env.CONTACT_FORMSUBMIT !== "false";
  const provider = process.env.CONTACT_EMAIL_PROVIDER?.toLowerCase();

  let activeProvider: string | null = null;
  if (hasResend && (provider === "resend" || !provider || provider === "auto")) {
    activeProvider = "resend";
  } else if (hasPostmark && (provider === "postmark" || !hasResend)) {
    activeProvider = "postmark";
  } else if (formSubmitEnabled && to) {
    activeProvider = "formsubmit";
  }

  return {
    emailConfigured: Boolean(activeProvider),
    destination: to,
    fromEmail: getResendFromEmail() ?? null,
    provider: activeProvider,
    persistEnabled: shouldPersist(),
    webhookConfigured: Boolean(process.env.CONTACT_WEBHOOK_URL),
  };
}

export type ContactDeliveryResult =
  | {
      emailed: true;
      persisted: boolean;
      deliveryStatus: "emailed";
      provider: string;
    }
  | {
      emailed: false;
      persisted: boolean;
      deliveryStatus: "failed" | "logged";
      error: string;
      status: 500 | 503;
    };

function getActiveContactProvider(): string | null {
  const provider = process.env.CONTACT_EMAIL_PROVIDER?.toLowerCase();
  const hasResend = Boolean(getResendApiKey() && getResendFromEmail());
  const hasPostmark = Boolean(process.env.POSTMARK_SERVER_TOKEN && process.env.CONTACT_FROM_EMAIL);
  const formSubmitEnabled = process.env.CONTACT_FORMSUBMIT !== "false";
  const to = getContactToEmail();

  if (hasResend && (provider === "resend" || provider === "auto" || !provider)) {
    return "resend";
  }
  if (hasPostmark && (provider === "postmark" || !hasResend)) {
    return "postmark";
  }
  if (formSubmitEnabled && to) {
    return "formsubmit";
  }
  return null;
}

export async function deliverContactSubmission(
  data: Omit<ContactSubmission, "submittedAt" | "deliveryStatus">
): Promise<ContactDeliveryResult> {
  const submittedAt = new Date().toISOString();
  const activeProvider = getActiveContactProvider();

  const submission: ContactSubmission = {
    ...data,
    submittedAt,
    deliveryStatus: "logged",
  };

  if (!activeProvider) {
    console.error("[contact] Email provider is not configured", {
      hasApiKey: Boolean(getResendApiKey()),
      hasFromEmail: Boolean(getResendFromEmail()),
      destination: getContactToEmail(),
    });

    return {
      emailed: false,
      persisted: false,
      deliveryStatus: "failed",
      error:
        "Contact email is not configured. Set RESEND_API_KEY, RESEND_FROM_EMAIL, and CONTACT_TO_EMAIL.",
      status: 503,
    };
  }

  try {
    if (activeProvider === "resend") {
      await sendViaResend(submission);
    } else if (activeProvider === "postmark") {
      const sent = await sendViaPostmark(submission);
      if (!sent) {
        return {
          emailed: false,
          persisted: false,
          deliveryStatus: "failed",
          error:
            "Contact email is not configured. Set POSTMARK_SERVER_TOKEN and CONTACT_FROM_EMAIL.",
          status: 503,
        };
      }
    } else {
      await sendViaFormSubmit(submission);
    }

    submission.deliveryStatus = "emailed";
    const persisted = await persistSubmission(submission);
    await notifyWebhook(submission);

    console.info("[contact] Inquiry emailed successfully", {
      source: submission.source,
      name: submission.name,
      destination: getContactToEmail(),
      provider: activeProvider,
      persisted,
    });

    return {
      emailed: true,
      persisted,
      deliveryStatus: "emailed",
      provider: activeProvider,
    };
  } catch (error) {
    submission.deliveryStatus = "failed";
    const persisted = await persistSubmission(submission);
    await notifyWebhook(submission);

    const message =
      error instanceof Error && error.message
        ? error.message
        : GENERIC_EMAIL_ERROR;

    console.error("[contact] Email delivery failed:", {
      source: submission.source,
      provider: activeProvider,
      message,
      persisted,
    });

    return {
      emailed: false,
      persisted,
      deliveryStatus: "failed",
      error: message,
      status: 500,
    };
  }
}
