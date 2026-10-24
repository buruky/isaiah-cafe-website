import { NextResponse } from "next/server";
import {
  getTransport,
  escapeHtml,
  MAIL_TO,
  MAIL_FROM,
  MAIL_ENABLED,
} from "@/lib/mailer";
import { SITE } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const message = String(body.comment ?? body.message ?? "").trim();
  // Honeypot — bots fill hidden fields; humans don't.
  const honeypot = String(body.company ?? "").trim();

  if (honeypot) return NextResponse.json({ ok: true }); // silently drop spam
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  if (!message) {
    return NextResponse.json({ error: "Please include a message." }, { status: 400 });
  }

  // Log-only mode (no SMTP configured): record and acknowledge without sending.
  if (!MAIL_ENABLED) {
    console.log(
      `[contact] submission (mail disabled) | name=${name || "—"} email=${email} phone=${phone || "—"} | ${message.replace(/\s+/g, " ").slice(0, 500)}`,
    );
    return NextResponse.json({ ok: true });
  }

  try {
    await getTransport().sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: email,
      subject: `New message from ${name || "website visitor"} — ${SITE.name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\n\n${message}`,
      html: `
        <h2 style="font-family:Georgia,serif;color:#23140e">New website enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name) || "—"}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone) || "—"}</p>
        <hr style="border:none;border-top:1px solid #e7ded3" />
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      `,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] mail send failed:", err);
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please email us directly." },
      { status: 502 },
    );
  }
}
