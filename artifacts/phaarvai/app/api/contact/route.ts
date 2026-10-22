import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  organization: z.string().optional(),
  country: z.string().optional(),
  orgType: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  areaOfInterest: z.string().optional(),
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
        { status: 400 },
      );
    }

    console.info("Contact form submission received", {
      name: result.data.name,
      email: result.data.email,
      organization: result.data.organization,
      areaOfInterest: result.data.areaOfInterest,
    });

    return NextResponse.json({
      success: true,
      message:
        "Thank you for reaching out. A member of our team will be in contact shortly.",
    });
  } catch {
    return NextResponse.json(
      { success: false, errors: ["Invalid request body"] },
      { status: 400 },
    );
  }
}
