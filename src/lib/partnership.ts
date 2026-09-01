import {
  GENERIC_EMAIL_ERROR,
  getClientSafeEmailError,
  getResendApiKey,
  getResendFromEmail,
  logResendError,
  sendResendEmail,
  type ResendErrorShape,
} from "@/lib/resend-mail";

export interface PartnershipSubmission {
  name: string;
  email: string;
  organization: string;
  role: string;
  partnershipType: string;
  message: string;
  submittedAt: string;
}

function getPartnershipToEmail(): string | undefined {
  return process.env.PARTNERSHIP_TO_EMAIL?.trim() || undefined;
}

export function sanitizeField(value: string, maxLen: number): string {
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, maxLen);
}

function formatSubject(data: PartnershipSubmission): string {
  return `New Partnership Inquiry – ${data.organization}`;
}

function formatEmailBody(data: PartnershipSubmission): string {
  return [
    "New Partnership Inquiry",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company/Organization: ${data.organization}`,
    `Role: ${data.role}`,
    `Partnership Type: ${data.partnershipType}`,
    `Message/Description: ${data.message}`,
    "",
    `Submitted At: ${data.submittedAt}`,
  ].join("\n");
}

function isResendConfigured(): boolean {
  return Boolean(getResendApiKey() && getResendFromEmail() && getPartnershipToEmail());
}

export function getPartnershipDeliveryConfig() {
  return {
    emailConfigured: isResendConfigured(),
    destination: getPartnershipToEmail() ?? null,
    fromEmail: getResendFromEmail() ?? null,
    provider: isResendConfigured() ? "resend" : null,
    resendConfigured: Boolean(getResendApiKey()),
    fromEmailConfigured: Boolean(getResendFromEmail()),
    destinationConfigured: Boolean(getPartnershipToEmail()),
  };
}

export type PartnershipDeliveryResult =
  | { emailed: true; provider: string }
  | { emailed: false; error: string; status: 500 | 503 };

export async function deliverPartnershipSubmission(
  data: Omit<PartnershipSubmission, "submittedAt">
): Promise<PartnershipDeliveryResult> {
  const fromRaw = getResendFromEmail();
  const to = getPartnershipToEmail();

  if (!getResendApiKey() || !fromRaw || !to) {
    console.error("[partnership] Resend is not configured", {
      hasApiKey: Boolean(getResendApiKey()),
      hasFromEmail: Boolean(fromRaw),
      hasDestination: Boolean(to),
    });

    return {
      emailed: false,
      error:
        "Partnership email is not configured. Set RESEND_API_KEY, RESEND_FROM_EMAIL, and PARTNERSHIP_TO_EMAIL.",
      status: 503,
    };
  }

  const submittedAt = new Date().toISOString();
  const submission: PartnershipSubmission = {
    name: sanitizeField(data.name, 200),
    email: sanitizeField(data.email, 320),
    organization: sanitizeField(data.organization, 200),
    role: sanitizeField(data.role, 200),
    partnershipType: sanitizeField(data.partnershipType, 200),
    message: sanitizeField(data.message, 5000),
    submittedAt,
  };

  try {
    const result = await sendResendEmail({
      from: fromRaw,
      to,
      replyTo: submission.email,
      subject: formatSubject(submission),
      text: formatEmailBody(submission),
    });

    if (!result.success) {
      logResendError("partnership", result.error, {
        from: fromRaw,
        to,
        organization: submission.organization,
      });

      return {
        emailed: false,
        error: getClientSafeEmailError(result.error, GENERIC_EMAIL_ERROR),
        status: 500,
      };
    }

    console.info("[partnership] Inquiry emailed successfully", {
      organization: submission.organization,
      destination: to,
    });

    return { emailed: true, provider: "resend" };
  } catch (error) {
    const resendError = error as ResendErrorShape;
    logResendError("partnership", resendError, {
      from: fromRaw,
      to,
      organization: submission.organization,
    });

    return {
      emailed: false,
      error: getClientSafeEmailError(resendError, GENERIC_EMAIL_ERROR),
      status: 500,
    };
  }
}
