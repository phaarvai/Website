import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { deliverContactSubmission } from "@/lib/contact";

const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  organization: z.string().min(2, "Organization is required").optional(),
  country: z.string().optional(),
  orgType: z.string().optional(),
  partnerType: z.string().optional(),
  themeInterest: z.string().optional(),
  areaOfInterest: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
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
      const { emailed } = await deliverContactSubmission({
        name: data.name,
        email: data.email,
        organization: data.organization,
        country: data.country,
        orgType: data.orgType,
        partnerType: data.partnerType,
        themeInterest: data.themeInterest,
        areaOfInterest: data.areaOfInterest,
        message: data.message,
      });

      return NextResponse.json({
        success: true,
        emailed,
        message:
          "Thank you for reaching out. A member of our team will follow up on your inquiry.",
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
