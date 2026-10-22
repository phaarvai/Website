import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  deliverPartnershipSubmission,
  getPartnershipDeliveryConfig,
  sanitizeField,
} from "@/lib/partnership";
import { checkRateLimit } from "@/lib/rate-limit";

const PartnershipSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .max(200, "Name must be at most 200 characters"),
    organization: z
      .string()
      .trim()
      .min(2, "Organization must be at least 2 characters")
      .max(200, "Organization must be at most 200 characters"),
    role: z
      .string()
      .trim()
      .min(2, "Role must be at least 2 characters")
      .max(200, "Role must be at most 200 characters"),
    email: z
      .string()
      .trim()
      .email("Invalid email address")
      .max(320, "Email must be at most 320 characters"),
    partnershipInterest: z.string().trim().max(200).optional(),
    partnershipType: z.string().trim().max(200).optional(),
    message: z
      .string()
      .trim()
      .min(10, "Message must be at least 10 characters")
      .max(5000, "Message must be at most 5000 characters"),
    website: z.string().max(500).optional(),
  })
  .superRefine((data, ctx) => {
    const interest = data.partnershipInterest?.trim() || data.partnershipType?.trim();
    if (!interest) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Partnership type is required",
        path: ["partnershipInterest"],
      });
    }
  });

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const rate = checkRateLimit(`partnership:${ip}`, 8, 15 * 60 * 1000);

    if (!rate.allowed) {
      return NextResponse.json(
        {
          success: false,
          emailed: false,
          errors: [
            "Too many submissions. Please try again later.",
          ],
          message: "Something went wrong. Please try again later.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil((rate.resetAt - Date.now()) / 1000)),
          },
        }
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          emailed: false,
          errors: ["Invalid request body"],
          message: "Something went wrong. Please try again later.",
        },
        { status: 400 }
      );
    }

    // Honeypot: pretend success without sending email
    if (
      body &&
      typeof body === "object" &&
      "website" in body &&
      typeof (body as { website?: unknown }).website === "string" &&
      (body as { website: string }).website.trim().length > 0
    ) {
      return NextResponse.json({
        success: true,
        emailed: true,
        message: "Thank you! Your partnership inquiry has been submitted successfully.",
      });
    }

    const result = PartnershipSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          emailed: false,
          errors: result.error.issues.map((i) => i.message),
          message: result.error.issues[0]?.message ?? "Invalid form data",
        },
        { status: 400 }
      );
    }

    const data = result.data;
    const partnershipType = sanitizeField(
      data.partnershipInterest?.trim() || data.partnershipType?.trim() || "",
      200
    );

    const delivery = await deliverPartnershipSubmission({
      name: data.name,
      email: data.email,
      organization: data.organization,
      role: data.role,
      partnershipType,
      message: data.message,
    });

    if (!delivery.emailed) {
      console.error("[partnership] Delivery failed:", delivery.error);

      return NextResponse.json(
        {
          success: false,
          emailed: false,
          errors: [delivery.error],
          message: delivery.error,
        },
        { status: delivery.status }
      );
    }

    return NextResponse.json({
      success: true,
      emailed: true,
      message: "Thank you! Your partnership inquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error("[partnership] Unexpected submission error:", error);
    return NextResponse.json(
      {
        success: false,
        emailed: false,
        errors: ["Something went wrong. Please try again later."],
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  const config = getPartnershipDeliveryConfig();
  return NextResponse.json({
    status: "ok",
    partnership: {
      ...config,
      rateLimitWindowMinutes: 15,
      rateLimitMaxRequests: 8,
    },
  });
}
