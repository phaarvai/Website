import { Resend } from "resend";

export type ResendErrorShape = {
  statusCode?: number | null;
  message?: string | null;
  name?: string;
};

export const GENERIC_EMAIL_ERROR =
  "Something went wrong. Please try again later.";

export function getResendApiKey(): string | undefined {
  return process.env.RESEND_API_KEY?.trim() || undefined;
}

/** Primary sender env var: RESEND_FROM_EMAIL (falls back to CONTACT_FROM_EMAIL). */
export function getResendFromEmail(): string | undefined {
  return (
    process.env.RESEND_FROM_EMAIL?.trim() ||
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    undefined
  );
}

/** Strip accidental quotes from env values and ensure Resend-friendly format. */
export function normalizeFromEmail(from: string): string {
  const trimmed = from.trim().replace(/^["']|["']$/g, "");
  if (trimmed.includes("<") && trimmed.includes(">")) return trimmed;
  return `Phaarvai <${trimmed}>`;
}

export function isDevelopment(): boolean {
  return process.env.NODE_ENV === "development";
}

export function getClientSafeEmailError(
  error: ResendErrorShape,
  fallback = GENERIC_EMAIL_ERROR
): string {
  const message = error.message?.trim();
  if (isDevelopment() && message) return message;
  return fallback;
}

export function logResendError(
  tag: string,
  error: ResendErrorShape,
  meta: Record<string, unknown>
): void {
  console.error(`[${tag}] Resend API error`, {
    ...meta,
    statusCode: error.statusCode ?? null,
    name: error.name ?? "unknown",
    message: error.message ?? "Unknown Resend error",
  });
}

export type SendResendEmailInput = {
  from: string;
  to: string | string[];
  replyTo?: string;
  subject: string;
  text: string;
};

export type SendResendEmailResult =
  | { success: true }
  | { success: false; error: ResendErrorShape };

export async function sendResendEmail(
  input: SendResendEmailInput
): Promise<SendResendEmailResult> {
  const apiKey = getResendApiKey();
  if (!apiKey) {
    return {
      success: false,
      error: {
        statusCode: 503,
        message: "RESEND_API_KEY is not configured",
        name: "configuration_error",
      },
    };
  }

  const resend = new Resend(apiKey);
  const result = await resend.emails.send({
    from: normalizeFromEmail(input.from),
    to: Array.isArray(input.to) ? input.to : [input.to],
    replyTo: input.replyTo,
    subject: input.subject,
    text: input.text,
  });

  if (result.error) {
    return { success: false, error: result.error };
  }

  return { success: true };
}
