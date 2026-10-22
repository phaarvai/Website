import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { deliverContactSubmission, getContactDeliveryConfig } from "@/lib/contact";
import { checkRateLimit } from "@/lib/rate-limit";

const optionalText = z
  .string()
  .optional()
  .transform((value) => {
    const trimmed = value?.trim();
    return trimmed ? trimmed : undefined;
  });

const ContactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.string().trim().email("Invalid email address"),
  organization: optionalText,
  role: optionalText,
  country: optionalText,
  orgType: optionalText,
  partnerType: optionalText,
  themeInterest: optionalText,
  areaOfInterest: optionalText,
  message: z.string().trim().min(10, "Message must be at least 10 characters"),
  source: optionalText,
  website: z.string().optional(),
});

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const rate = checkRateLimit(`contact:${ip}`, 30, 15 * 60 * 1000);

    if (!rate.allowed) {
      return NextResponse.json(
        {
          success: false,
          errors: [
            "Too many submissions. Please try again later or email partnerships@phaarvai.com directly.",
          ],
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
        { success: false, errors: ["Invalid request body"] },
        { status: 400 }
      );
    }

    if (
      body &&
      typeof body === "object" &&
      "website" in body &&
      typeof (body as { website?: unknown }).website === "string" &&
      (body as { website: string }).website.trim().length > 0
    ) {
      return NextResponse.json({
        success: true,
        emailed: false,
        message: "Thank you for your inquiry.",
      });
    }

    const result = ContactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.issues.map((i) => i.message),
        },
        { status: 400 }
      );
    }

    const data = result.data;

    const delivery = await deliverContactSubmission({
      name: data.name,
      email: data.email,
      organization: data.organization,
      role: data.role,
      country: data.country,
      orgType: data.orgType,
      partnerType: data.partnerType,
      themeInterest: data.themeInterest,
      areaOfInterest: data.areaOfInterest,
      message: data.message,
      source: data.source || "website",
    });

    if (!delivery.emailed) {
      console.error("[contact] Delivery failed:", delivery.error);

      return NextResponse.json(
        {
          success: false,
          emailed: false,
          deliveryStatus: delivery.deliveryStatus,
          persisted: delivery.persisted,
          errors: [delivery.error],
          message: delivery.error,
        },
        { status: delivery.status }
      );
    }

    return NextResponse.json({
      success: true,
      emailed: true,
      deliveryStatus: delivery.deliveryStatus,
      persisted: delivery.persisted,
      message:
        "Thank you for your inquiry. Our team reviews all submissions and will connect where there is strategic alignment.",
    });
  } catch (error) {
    console.error("[contact] Unexpected submission error:", error);
    return NextResponse.json(
      {
        success: false,
        errors: [
          "We could not process your inquiry right now. Please email partnerships@phaarvai.com directly.",
        ],
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  const config = getContactDeliveryConfig();
  return NextResponse.json({
    status: "ok",
    contact: {
      ...config,
      rateLimitWindowMinutes: 15,
      rateLimitMaxRequests: 30,
    },
  });
}
