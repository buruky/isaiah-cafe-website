import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE.name} handles information submitted through this website.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-28 sm:py-32">
      <p className="eyebrow mb-4 text-bronze-deep">Legal</p>
      <h1 className="text-4xl text-walnut sm:text-5xl">Privacy Policy</h1>
      <div className="mt-6 h-px w-16 bg-bronze" aria-hidden />

      <div className="prose-cafe mt-10 text-walnut-soft">
        <p>
          {SITE.name} respects your privacy. This page explains what information we
          collect through this website and how we use it.
        </p>

        <h2 className="mt-10 font-display text-2xl text-walnut">Information we collect</h2>
        <p>
          When you submit our contact form or newsletter sign-up, we receive the
          details you provide — such as your name, email address, phone number, and
          message. We use this solely to respond to your enquiry or to keep you
          informed about the café.
        </p>

        <h2 className="mt-10 font-display text-2xl text-walnut">How we use it</h2>
        <p>
          Submissions are delivered to our team by email. We do not sell or share your
          information with third parties, and we do not use it for advertising.
        </p>

        <h2 className="mt-10 font-display text-2xl text-walnut">Contact</h2>
        <p>
          Questions about your information? Email us at{" "}
          <a href={`mailto:${SITE.email}`} className="text-bronze-deep underline">
            {SITE.email}
          </a>{" "}
          or call {SITE.phone}.
        </p>
      </div>
    </article>
  );
}
