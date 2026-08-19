import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, subject, message } = body as {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    };

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      return Response.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Read Resend API key from environment
    const apiKey = process.env.RESEND_API_KEY;

    // Safe diagnostic — never expose the actual key
    console.log(
      "RESEND_API_KEY configured:",
      Boolean(apiKey)
    );

    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");

      return Response.json(
        { error: "Mail service is not configured." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const senderEmail = email.trim();

    const subjectLine =
      typeof subject === "string" && subject.trim()
        ? subject.trim()
        : "General Inquiry";

    const senderName = name.trim();

    const emailResult = await resend.emails.send({
      from: "OntoPhi Portal <system@ontophi.com>",
      to: ["hello@ontophi.com"],
      replyTo: senderEmail,

      subject: `[${subjectLine.toUpperCase()}] New Contact Submission from ${senderName}`,

      html: `
        <div
          style="
            font-family: Arial, sans-serif;
            padding: 24px;
            color: #111827;
            max-width: 600px;
            margin: 0 auto;
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            background: #ffffff;
          "
        >
          <h2
            style="
              font-size: 20px;
              border-bottom: 1px solid #e5e7eb;
              padding-bottom: 12px;
              margin-top: 0;
            "
          >
            New Portal Inquiry
          </h2>

          <p>
            <strong>Sender Name:</strong>
            ${escapeHtml(senderName)}
          </p>

          <p>
            <strong>Sender Email:</strong>
            <a href="mailto:${escapeHtml(senderEmail)}">
              ${escapeHtml(senderEmail)}
            </a>
          </p>

          <p>
            <strong>Target Department:</strong>
            ${escapeHtml(subjectLine.toUpperCase())}
          </p>

          <div style="margin-top: 20px;">
            <strong
              style="
                display: block;
                margin-bottom: 8px;
              "
            >
              Message Content:
            </strong>

            <div
              style="
                background: #f9fafb;
                padding: 15px;
                border-radius: 8px;
                border: 1px solid #f3f4f6;
                white-space: pre-wrap;
                font-size: 14px;
                line-height: 1.6;
              "
            >
              ${escapeHtml(message.trim())}
            </div>
          </div>
        </div>
      `,
    });

    // Resend returned an error
    if (emailResult.error) {
      console.error("Resend error:", emailResult.error);

      return Response.json(
        {
          error: "Failed to send email.",
        },
        { status: 500 }
      );
    }

    console.log("Contact email sent successfully.");

    return Response.json(
      {
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return Response.json(
      {
        error: "Internal server processing error.",
      },
      { status: 500 }
    );
  }
}

/**
 * Escape user-provided content before inserting it into HTML.
 */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
