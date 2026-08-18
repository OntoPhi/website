import { NextResponse } from "next/server";
import { Resend } from "resend";

// Ensure your private environment API key is mapped correctly
const resend = new Resend(process.env.RESEND_API_KEY);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, honeypot } = body;

    // 1. SILENT SPAM FILTER (Honeypot method)
    // If a hidden bot input contains text data, reject it immediately
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

    // 3. DEPARTMENT-SPECIFIC EMAIL ROUTING MATRIX
    let targetDestination = "hello@ontophi.com";
    if (subject === "research") targetDestination = "research@ontophi.com";
    if (subject === "engineering") targetDestination = "engineering@ontophi.com";
    if (subject === "careers") targetDestination = "careers@ontophi.com";

    // 4. DESPATCH DISPATCH DISPATCH VIA SECURE LAYER
    // CHANGE THIS LINE IN YOUR CODE:
    const emailResult = await resend.emails.send({
      // FIX: Change 'system@ontophi.com' to 'system@://ontophi.com'
      // MUST use your verified 'send' subdomain structure
      from: "OntoPhi Portal <system@://ontophi.com>",

      to: [targetDestination],
      replyTo: email,
      subject: `[${subject.toUpperCase()}] New Contact Submission from ${name}`,
      html: `...`,
    });


    if (emailResult.error) {
      console.error("Mailing Engine Execution Crash:", emailResult.error);
      return NextResponse.json({ error: "Failed to transmit message securely." }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Global API Exception Event:", error);
    return NextResponse.json({ error: "Internal server compilation processing error." }, { status: 500 });
  }
}

