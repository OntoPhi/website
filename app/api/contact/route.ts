import { NextResponse } from "next/server";
import { Resend } from "resend";
import fs from "fs";
import path from "path";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, honeypot } = body;

    if (honeypot && honeypot.trim() !== "") {
      return NextResponse.json({ success: true, message: "Filtered." }, { status: 200 });
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    // 3. ENHANCED HOSTINGER DESKTOP ENVIRONMENT LOADER
    let apiKey = process.env.RESEND_API_KEY;

    // Fallback: If Hostinger environment variables are empty, read the key from our local text asset
    if (!apiKey) {
      try {
        const credentialsPath = path.join(process.cwd(), "public", "resend-credentials.txt");
        if (fs.existsSync(credentialsPath)) {
          apiKey = fs.readFileSync(credentialsPath, "utf8").trim();
        }
      } catch (fsError) {
        console.error("Local file system reader exception:", fsError);
      }
    }

    if (!apiKey) {
      return NextResponse.json({ error: "Mailing service credentials not found." }, { status: 500 });
    }
    
    const resend = new Resend(apiKey);
    let targetDestination = "hello@ontophi.com"; 

    const emailResult = await resend.emails.send({
      from: "OntoPhi Portal <system@://ontophi.com>", 
      to: [targetDestination],
      replyTo: email && email.includes("@") ? email.trim() : "hello@ontophi.com", 
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
      return NextResponse.json({ error: "Failed to transmit message securely." }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Internal server processing error." }, { status: 500 });
  }
}

