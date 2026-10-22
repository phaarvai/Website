export interface PartnershipInquiryPayload {
  name: string;
  organization: string;
  role: string;
  email: string;
  partnershipInterest: string;
  message: string;
  /** Honeypot — leave empty for real submissions */
  website?: string;
}

export interface PartnershipSubmitResult {
  success: boolean;
  message?: string;
  errors?: string[];
  emailed?: boolean;
}

const SUCCESS_MESSAGE =
  "Thank you! Your partnership inquiry has been submitted successfully.";

const FAILURE_MESSAGE = "Something went wrong. Please try again later.";

export async function submitPartnershipInquiry(
  payload: PartnershipInquiryPayload
): Promise<PartnershipSubmitResult> {
  try {
    const { website, ...fields } = payload;
    const body = website ? { ...fields, website } : fields;

    const res = await fetch("/api/partnership", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    let json: PartnershipSubmitResult;
    try {
      json = (await res.json()) as PartnershipSubmitResult;
    } catch {
      return {
        success: false,
        emailed: false,
        errors: [FAILURE_MESSAGE],
        message: FAILURE_MESSAGE,
      };
    }

    if (!res.ok || !json.success || json.emailed !== true) {
      return {
        success: false,
        emailed: false,
        errors: json.errors ?? [FAILURE_MESSAGE],
        message: json.message ?? json.errors?.[0] ?? FAILURE_MESSAGE,
      };
    }

    return {
      success: true,
      message: json.message ?? SUCCESS_MESSAGE,
      emailed: true,
    };
  } catch {
    return {
      success: false,
      emailed: false,
      errors: [FAILURE_MESSAGE],
      message: FAILURE_MESSAGE,
    };
  }
}
