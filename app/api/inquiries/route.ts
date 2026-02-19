import { NextResponse } from "next/server";

type InquiryPayload = {
  source?: string;
  name?: string;
  email?: string;
  region?: string;
  message?: string;
};

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as InquiryPayload;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const message = body.message?.trim() ?? "";
    const region = body.region?.trim() ?? "";
    const source = body.source?.trim() ?? "Website inquiry";

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required." },
        { status: 400 },
      );
    }

    const toEmail = process.env.INQUIRY_TO_EMAIL;
    const fromEmail = process.env.INQUIRY_FROM_EMAIL;
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!toEmail || !fromEmail || !resendApiKey) {
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Set INQUIRY_TO_EMAIL, INQUIRY_FROM_EMAIL, and RESEND_API_KEY.",
        },
        { status: 500 },
      );
    }

    const html = `
      <h2>New Inquiry</h2>
      <p><strong>Source:</strong> ${escapeHtml(source)}</p>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${region ? `<p><strong>Preferred Region:</strong> ${escapeHtml(region)}</p>` : ""}
      ${message ? `<p><strong>Message:</strong><br/>${escapeHtml(message).replaceAll("\n", "<br/>")}</p>` : ""}
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        subject: `New inquiry from ${name}`,
        reply_to: email,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const detail = await resendResponse.text();
      return NextResponse.json(
        { error: "Failed to send email.", detail },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Unable to process inquiry." },
      { status: 500 },
    );
  }
}
