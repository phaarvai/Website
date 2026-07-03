import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { deliverContactSubmission, getContactDeliveryConfig } from "@/lib/contact";
import { checkRateLimit } from "@/lib/rate-limit";

const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  organization: z.string().min(2, "Organization is required").optional(),
  role: z.string().optional(),
  country: z.string().optional(),
  orgType: z.string().optional(),
  partnerType: z.string().optional(),
  themeInterest: z.string().optional(),
  areaOfInterest: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  source: z.string().min(1).default("website"),
  website: z.string().max(0).optional(),
});

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request);
    const rate = checkRateLimit(`contact:${ip}`);

    if (!rate.allowed) {
      return NextResponse.json(
        {
          success: false,
          errors: ["Too many submissions. Please try again later or email partnerships@phaarvai.com directly."],
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil((rate.resetAt - Date.now()) / 1000)),
          },
        }
      );
    }

    const body = await request.json();

    if (body.website) {
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

    try {
      const { emailed, deliveryStatus } = await deliverContactSubmission({
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
        source: data.source,
      });

      return NextResponse.json({
        success: true,
        emailed,
        deliveryStatus,
        message:
          "Thank you for your inquiry. Our team reviews all submissions and will connect where there is strategic alignment.",
      });
    } catch {
      return NextResponse.json(
        {
          success: false,
          errors: [
            "We received your message but could not complete delivery. Please email partnerships@phaarvai.com directly.",
          ],
        },
        { status: 503 }
      );
    }
  } catch {
    return NextResponse.json(
      { success: false, errors: ["Invalid request body"] },
      { status: 400 }
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
      rateLimitMaxRequests: 8,
    },
  });
}
