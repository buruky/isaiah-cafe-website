import "server-only";
import nodemailer, { type Transporter } from "nodemailer";
import { SITE } from "./site";

/**
 * Mail transport configured for a VPS-local SMTP server by default
 * (e.g. Postfix on localhost:25, no auth). Every value is overridable
 * via environment variables — see .env.example.
 */
const host = process.env.SMTP_HOST || "localhost";
const port = Number(process.env.SMTP_PORT || 25);
const secure = process.env.SMTP_SECURE === "true";
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASS;

export const MAIL_TO = process.env.MAIL_TO || SITE.email;
export const MAIL_FROM =
  process.env.MAIL_FROM || `"${SITE.name}" <no-reply@isaiahcafe.com>`;

/**
 * Email delivery is only attempted when an SMTP host is configured. With it
 * blank (the current launch state), the form routes run in "log-only" mode:
 * submissions are recorded to the server journal and the visitor still gets a
 * success response. Set SMTP_HOST (+ friends) to enable real delivery.
 */
export const MAIL_ENABLED = Boolean(process.env.SMTP_HOST?.trim());

let cached: Transporter | null = null;

export function getTransport(): Transporter {
  if (cached) return cached;
  cached = nodemailer.createTransport({
    host,
    port,
    secure,
    // Local relays usually require no authentication.
    ...(user && pass ? { auth: { user, pass } } : {}),
    // Allow self-signed certs on a private VPS relay.
    tls: { rejectUnauthorized: false },
  });
  return cached;
}

/** Escape user input before placing it in an HTML email body. */
export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
