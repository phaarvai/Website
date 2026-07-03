import { mkdir, appendFile } from "fs/promises";
import path from "path";

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

function shouldPersist(): boolean {
  if (process.env.CONTACT_PERSIST === "false") return false;
  if (process.env.CONTACT_PERSIST === "true") return true;
  return process.env.NODE_ENV === "production";
}

async function persistSubmission(data: ContactSubmission): Promise<boolean> {
  if (!shouldPersist()) return false;

  const dir = process.env.CONTACT_DATA_DIR || path.join(process.cwd(), ".data");
  await mkdir(dir, { recursive: true });
  const file = path.join(dir, "contact-submissions.jsonl");
  await appendFile(file, `${JSON.stringify(data)}\n`, "utf8");
  return true;
}

function formatSubject(data: ContactSubmission): string {
  const source = data.source.replace(/_/g, " ");
  const org = data.organization || data.name;
  return `Phaarvai [${source}] — ${org}`;
}

async function sendViaResend(data: ContactSubmission): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Phaarvai <onboarding@resend.dev>";

  if (!apiKey || !to) return;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: formatSubject(data),
      text: formatEmailBody(data),
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Resend error: ${err}`);
  }
}

async function sendViaPostmark(data: ContactSubmission): Promise<void> {
  const apiKey = process.env.POSTMARK_SERVER_TOKEN;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) return;

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
  const hasResend = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL);
  const hasPostmark = Boolean(
    process.env.POSTMARK_SERVER_TOKEN && process.env.CONTACT_TO_EMAIL && process.env.CONTACT_FROM_EMAIL
  );
  const provider = process.env.CONTACT_EMAIL_PROVIDER?.toLowerCase();
  const emailConfigured = hasResend || hasPostmark || Boolean(provider);
  const destination = process.env.CONTACT_TO_EMAIL ?? null;

  return {
    emailConfigured,
    destination,
    provider: provider ?? (hasResend ? "resend" : hasPostmark ? "postmark" : null),
    persistEnabled: shouldPersist(),
    webhookConfigured: Boolean(process.env.CONTACT_WEBHOOK_URL),
  };
}

export async function deliverContactSubmission(
  data: Omit<ContactSubmission, "submittedAt" | "deliveryStatus">
): Promise<{ emailed: boolean; persisted: boolean; deliveryStatus: ContactSubmission["deliveryStatus"] }> {
  let deliveryStatus: ContactSubmission["deliveryStatus"] = "logged";
  const submittedAt = new Date().toISOString();

  let emailed = false;
  const provider = process.env.CONTACT_EMAIL_PROVIDER?.toLowerCase();
  const hasResend = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL);
  const hasPostmark = Boolean(
    process.env.POSTMARK_SERVER_TOKEN && process.env.CONTACT_TO_EMAIL && process.env.CONTACT_FROM_EMAIL
  );

  const submission: ContactSubmission = {
    ...data,
    submittedAt,
    deliveryStatus,
  };

  if (hasResend || hasPostmark || provider) {
    try {
      if (provider === "postmark" || (hasPostmark && provider !== "resend")) {
        await sendViaPostmark(submission);
        emailed = true;
      } else if (provider === "resend" || hasResend) {
        await sendViaResend(submission);
        emailed = true;
      }
      deliveryStatus = "emailed";
      submission.deliveryStatus = deliveryStatus;
    } catch (error) {
      submission.deliveryStatus = "failed";
      console.error("[contact] Email delivery failed:", error);
      await persistSubmission(submission);
      await notifyWebhook(submission);
      throw error;
    }
  }

  const persisted = await persistSubmission(submission);
  await notifyWebhook(submission);

  console.info("[contact] Submission received", {
    source: submission.source,
    name: submission.name,
    email: submission.email,
    organization: submission.organization,
    deliveryStatus: submission.deliveryStatus,
    emailed,
    persisted,
  });

  return { emailed, persisted, deliveryStatus: submission.deliveryStatus };
}
