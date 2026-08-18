import { NextResponse } from "next/server";
import { Resend } from "resend";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, honeypot } = body;

    // 1. SILENT SPAM FILTER (Honeypot method)
    if (honeypot && honeypot.trim() !== "") {
      return NextResponse.json({ success: true, message: "Filtered." }, { status: 200 });
    }

    // 2. BACK-END PAYLOAD SECURITY VALIDATION
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required form fields." }, { status: 400 });
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email format." }, { status: 400 });
    }

    if (message.trim().length < 10) {
      return NextResponse.json({ error: "Inquiry body must be at least 10 characters." }, { status: 400 });
    }

    // 3. PRODUCTION FIX: Defer client initialization to runtime only
    // This stops Next.js from looking for the API key during the 'next build' phase
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Critical System Configuration Error: RESEND_API_KEY environment variable is missing.");
      return NextResponse.json({ error: "Mailing service configuration mismatch." }, { status: 500 });
    }
    const resend = new Resend(apiKey);

    // 4. DEPARTMENT-SPECIFIC EMAIL ROUTING MATRIX
    let targetDestination = "hello@ontophi.com";
    if (subject === "research") targetDestination = "research@ontophi.com";
    if (subject === "engineering") targetDestination = "engineering@ontophi.com";
    if (subject === "careers") targetDestination = "careers@ontophi.com";

    // 5. DISPATCH VIA SECURE LAYER
    const emailResult = await resend.emails.send({
      from: "OntoPhi Portal <system@://ontophi.com>", 
      to: [targetDestination],
      replyTo: email, 
      subject: `[${subject.toUpperCase()}] New Contact Submission from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #111827; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px;">
          <h2 style="font-size: 20px; border-bottom: 1px solid #e5e7eb; padding-bottom: 10px; margin-top: 0;">New Portal Inquiry</h2>
          <p style="margin: 10px 0;"><strong>Sender Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin: 10px 0;"><strong>Target Department:</strong> ${subject.toUpperCase()}</p>
          <div style="margin-top: 20px;">
            <strong style="display: block; margin-bottom: 8px;">Message Content:</strong>
            <div style="background: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #f3f4f6; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${message}</div>
          </div>
        </div>
      `,
    });

    if (emailResult.error) {
      console.error("Mailing Engine Execution Crash:", emailResult.error);
      return NextResponse.json({ error: "Failed to transmit message securely." }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Global API Exception Event:", error);
    return NextResponse.json({ error: "Internal server processing error." }, { status: 500 });
  }
}

