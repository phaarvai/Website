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
  try {
    const { website, ...fields } = payload;
    const body = website ? { ...fields, website } : fields;

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    let json: ContactSubmitResult;
    try {
      json = (await res.json()) as ContactSubmitResult;
    } catch {
      return {
        success: false,
        errors: ["Could not read the server response. Please try again."],
        message: "Could not read the server response. Please try again.",
      };
    }

    if (!res.ok || !json.success || json.emailed !== true) {
      return {
        success: false,
        emailed: false,
        errors: json.errors ?? ["Submission failed"],
        message: json.errors?.[0] ?? json.message ?? "Submission failed",
      };
    }

    return {
      success: true,
      message: json.message,
      emailed: json.emailed,
    };
  } catch {
    return {
      success: false,
      errors: ["Network error. Please check your connection and try again."],
      message: "Network error. Please check your connection and try again.",
    };
  }
}
