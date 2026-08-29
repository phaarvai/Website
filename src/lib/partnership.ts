/**
 * Partnership inquiry email delivery via Resend.
 * Success requires emailed === true.
 */

import { Resend } from "resend";

export interface PartnershipSubmission {
  name: string;
  email: string;
  organization: string;
  role: string;
  partnershipType: string;
  message: string;
  submittedAt: string;
}

const RESEND_NOT_CONFIGURED_ERROR =
  "Partnership email is not configured. Set RESEND_API_KEY, RESEND_FROM_EMAIL, and PARTNERSHIP_TO_EMAIL in your server environment, then restart the development server.";

function getPartnershipToEmail(): string | undefined {
  return process.env.PARTNERSHIP_TO_EMAIL?.trim() || undefined;
}

function getResendFromEmail(): string | undefined {
  return process.env.RESEND_FROM_EMAIL?.trim() || undefined;
}

function getDevFromEmail(): string | undefined {
  return process.env.RESEND_DEV_FROM_EMAIL?.trim() || undefined;
}

function getResendAccountEmail(): string | undefined {
  return process.env.RESEND_ACCOUNT_EMAIL?.trim() || undefined;
}

/** Ensure Resend receives "Name <email@domain.com>" format. */
function normalizeFromEmail(from: string): string {
  const trimmed = from.trim().replace(/^["']|["']$/g, "");
  if (trimmed.includes("<") && trimmed.includes(">")) return trimmed;
  return `Phaarvai <${trimmed}>`;
}

function isDomainVerificationError(error: {
  statusCode?: number | null;
  message?: string | null;
}): boolean {
  return (
    error.statusCode === 403 &&
    /domain is not verified|not verified/i.test(error.message ?? "")
  );
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

function formatEmailBody(data: PartnershipSubmission, intendedTo?: string): string {
  const lines = [
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
  ];

  if (intendedTo) {
    lines.splice(2, 0, `Intended inbox: ${intendedTo}`, "");
  }

  return lines.join("\n");
}

function isResendConfigured(): boolean {
  return Boolean(
    process.env.RESEND_API_KEY?.trim() &&
      getResendFromEmail() &&
      getPartnershipToEmail()
  );
}

export function getPartnershipDeliveryConfig() {
  return {
    emailConfigured: isResendConfigured(),
    destination: getPartnershipToEmail() ?? null,
    fromEmail: getResendFromEmail() ?? null,
    provider: isResendConfigured() ? "resend" : null,
    resendConfigured: Boolean(process.env.RESEND_API_KEY?.trim()),
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
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = getResendFromEmail();
  const to = getPartnershipToEmail();

  if (!apiKey || !from || !to) {
    console.error("[partnership] Resend is not configured", {
      hasApiKey: Boolean(apiKey),
      hasFromEmail: Boolean(from),
      hasDestination: Boolean(to),
    });
    return {
      emailed: false,
      error: RESEND_NOT_CONFIGURED_ERROR,
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

  const resend = new Resend(apiKey);

  try {
    const primary = await resend.emails.send({
      from: normalizeFromEmail(from),
      to: [to],
      replyTo: submission.email,
      subject: formatSubject(submission),
      text: formatEmailBody(submission),
    });

    if (!primary.error) {
      console.info("[partnership] Inquiry emailed via Resend", {
        organization: submission.organization,
        destination: to,
      });
      return { emailed: true, provider: "resend" };
    }

    // Optional dev fallback when domain is not yet verified in Resend.
    const devFrom = getDevFromEmail();
    const accountEmail = getResendAccountEmail();
    if (isDomainVerificationError(primary.error) && devFrom && accountEmail) {
      const fallback = await resend.emails.send({
        from: normalizeFromEmail(devFrom),
        to: [accountEmail],
        replyTo: submission.email,
        subject: `${formatSubject(submission)} [route to ${to}]`,
        text: formatEmailBody(submission, to),
      });

      if (!fallback.error) {
        console.info("[partnership] Inquiry emailed via Resend dev fallback", {
          organization: submission.organization,
          destination: accountEmail,
          intendedTo: to,
        });
        return { emailed: true, provider: "resend-dev-fallback" };
      }

      console.error("[partnership] Resend dev fallback failed:", fallback.error);
    }

    console.error("[partnership] Resend delivery failed:", primary.error);
    return {
      emailed: false,
      error:
        isDomainVerificationError(primary.error)
          ? "Email could not be sent. Verify your domain in the Resend dashboard, then restart the server."
          : "Something went wrong. Please try again later.",
      status: 500,
    };
  } catch (error) {
    console.error("[partnership] Resend delivery failed:", error);
    return {
      emailed: false,
      error: "Something went wrong. Please try again later.",
      status: 500,
    };
  }
}
