import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Validation failed", issues: result.error.flatten().fieldErrors },
        { status: 400 },
      );
    }

    // Honeypot check — bots fill the hidden "website" field
    if (result.data.website) {
      // Silently accept but don't process
      return NextResponse.json({ success: true });
    }

    // Send email via Resend (requires RESEND_API_KEY env var)
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured");
      return NextResponse.json(
        { error: "Email service is not configured. Please contact us directly." },
        { status: 503 },
      );
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "MB Equipment <noreply@mbequipmentsolutions.com>",
      to: ["info@mbequipmentsolutions.com"],
      replyTo: result.data.email,
      subject: `New inquiry from ${result.data.name}${result.data.interest ? ` — ${result.data.interest}` : ""}`,
      text: [
        `Name: ${result.data.name}`,
        `Email: ${result.data.email}`,
        result.data.phone ? `Phone: ${result.data.phone}` : null,
        result.data.company ? `Company: ${result.data.company}` : null,
        result.data.interest ? `Interest: ${result.data.interest}` : null,
        "",
        "Message:",
        result.data.message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or contact us directly." },
      { status: 500 },
    );
  }
}
