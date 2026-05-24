import { mkdir, appendFile } from "fs/promises";
import path from "path";

export interface ContactSubmission {
  name: string;
  email: string;
  organization?: string;
  country?: string;
  orgType?: string;
  partnerType?: string;
  themeInterest?: string;
  areaOfInterest?: string;
  message: string;
  submittedAt: string;
}

async function persistSubmission(data: ContactSubmission): Promise<void> {
  if (process.env.CONTACT_PERSIST !== "true") return;

  const dir = process.env.CONTACT_DATA_DIR || path.join(process.cwd(), ".data");
  await mkdir(dir, { recursive: true });
  const file = path.join(dir, "contact-submissions.jsonl");
  await appendFile(file, `${JSON.stringify(data)}\n`, "utf8");
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
      subject: `Phaarvai inquiry — ${data.organization || data.name}`,
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
      Subject: `Phaarvai inquiry — ${data.organization || data.name}`,
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
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Organization: ${data.organization || "—"}`,
    `Partner type: ${data.partnerType || data.orgType || "—"}`,
    `Domain interest: ${data.themeInterest || data.areaOfInterest || "—"}`,
    `Country: ${data.country || "—"}`,
    "",
    "Message:",
    data.message,
    "",
    `Submitted: ${data.submittedAt}`,
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

export async function deliverContactSubmission(
  data: Omit<ContactSubmission, "submittedAt">
): Promise<{ emailed: boolean; persisted: boolean }> {
  const submission: ContactSubmission = {
    ...data,
    submittedAt: new Date().toISOString(),
  };

  await persistSubmission(submission);

  let emailed = false;
  const provider = process.env.CONTACT_EMAIL_PROVIDER?.toLowerCase();
  const hasResend = Boolean(process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL);
  const hasPostmark = Boolean(
    process.env.POSTMARK_SERVER_TOKEN && process.env.CONTACT_TO_EMAIL && process.env.CONTACT_FROM_EMAIL
  );

  if (hasResend || hasPostmark || provider) {
    try {
      if (provider === "postmark" || (hasPostmark && provider !== "resend")) {
        await sendViaPostmark(submission);
        emailed = true;
      } else if (provider === "resend" || hasResend) {
        await sendViaResend(submission);
        emailed = true;
      }
    } catch (error) {
      console.error("[contact] Email delivery failed:", error);
      await notifyWebhook(submission);
      throw error;
    }
  }

  await notifyWebhook(submission);

  console.info("[contact] Submission received", {
    name: submission.name,
    email: submission.email,
    organization: submission.organization,
    emailed,
  });

  return { emailed, persisted: process.env.CONTACT_PERSIST === "true" };
}
