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

  const email = String(body.email ?? "").trim();
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  // Log-only mode (no SMTP configured): record and acknowledge without sending.
  if (!MAIL_ENABLED) {
    console.log(`[newsletter] signup (mail disabled) | ${email}`);
    return NextResponse.json({ ok: true });
  }

  try {
    await getTransport().sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: email,
      subject: `New newsletter signup — ${SITE.name}`,
      text: `New subscriber: ${email}`,
      html: `<p>New newsletter subscriber:</p><p><strong>${escapeHtml(email)}</strong></p>`,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[newsletter] mail send failed:", err);
    return NextResponse.json(
      { error: "Couldn't subscribe right now. Please try again later." },
      { status: 502 },
    );
  }
}
