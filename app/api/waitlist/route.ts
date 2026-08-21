import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const organization = String(body.organization || "").trim();
    const role = String(body.role || "").trim();

    const interests = Array.isArray(body.interests)
      ? body.interests.map(String)
      : [];

    if (!name || !email) {
      return NextResponse.json(
        {
          error: "Name and email are required.",
        },
        { status: 400 }
      );
    }

    const emailResult = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.WAITLIST_TO_EMAIL!,
      subject: `New OntoPhi Waitlist Signup — ${name}`,
      replyTo: email,
      text: `
New OntoPhi Waitlist Signup

Name: ${name}
Email: ${email}
Organization: ${organization || "Not provided"}
Role: ${role || "Not provided"}

Areas of Interest:
${interests.length > 0 ? interests.join(", ") : "Not specified"}
      `.trim(),
    });

    if (emailResult.error) {
      console.error("Resend error:", emailResult.error);

      return NextResponse.json(
        {
          error: "Unable to process waitlist signup.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist API error:", error);

    return NextResponse.json(
      {
        error: "Unable to process waitlist signup.",
      },
      { status: 500 }
    );
  }
}
