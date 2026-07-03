export interface ContactInquiryPayload {
  name: string;
  email: string;
  message: string;
  source: string;
  organization?: string;
  role?: string;
  country?: string;
  orgType?: string;
  partnerType?: string;
  themeInterest?: string;
  areaOfInterest?: string;
  website?: string;
}

export interface ContactSubmitResult {
  success: boolean;
  message?: string;
  errors?: string[];
  emailed?: boolean;
}

export async function submitContactInquiry(
  payload: ContactInquiryPayload
): Promise<ContactSubmitResult> {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const json = (await res.json()) as ContactSubmitResult & { errors?: string[] };

  if (!res.ok || !json.success) {
    return {
      success: false,
      errors: json.errors ?? ["Submission failed"],
      message: json.errors?.[0],
    };
  }

  return {
    success: true,
    message: json.message,
    emailed: json.emailed,
  };
}
