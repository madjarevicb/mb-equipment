import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations/contact";
import { getClientIp, rateLimit } from "@/lib/rate-limit";

const RATE_LIMIT_PER_HOUR = 5;
const HOUR_MS = 60 * 60 * 1000;

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const limit = rateLimit(`contact:${ip}`, {
      limit: RATE_LIMIT_PER_HOUR,
      windowMs: HOUR_MS,
    });

    if (!limit.ok) {
      const retryAfterSec = Math.max(1, Math.ceil((limit.resetAt - Date.now()) / 1000));
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: {
            "Retry-After": String(retryAfterSec),
            "X-RateLimit-Limit": String(RATE_LIMIT_PER_HOUR),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": String(Math.floor(limit.resetAt / 1000)),
          },
        },
      );
    }

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
