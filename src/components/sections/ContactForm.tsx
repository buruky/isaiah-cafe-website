"use client";

import { useState } from "react";
import { Check, Loader2, Send } from "lucide-react";
import { SITE } from "@/lib/site";

type Status = "idle" | "loading" | "success" | "error";

const FIELD =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-walnut placeholder:text-walnut-soft/50 transition-colors focus:border-bronze focus:outline-none";
const LABEL = "mb-2 block text-sm font-medium text-walnut";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json?.error || "Something went wrong.");
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-xl rounded-2xl border border-line bg-cream/50 p-12 text-center">
        <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-bronze text-espresso-deep">
          <Check size={26} />
        </span>
        <h3 className="mt-6 font-display text-3xl text-walnut">Message sent</h3>
        <p className="mt-3 text-walnut-soft">
          Thank you for reaching out — we&apos;ll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-xl">
      {/* Honeypot (hidden from humans) */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={LABEL}>
            Name
          </label>
          <input id="name" name="name" type="text" autoComplete="name" className={FIELD} />
        </div>
        <div>
          <label htmlFor="email" className={LABEL}>
            Email <span className="text-bronze-deep">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={FIELD}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="phone" className={LABEL}>
          Phone number
        </label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" className={FIELD} />
      </div>

      <div className="mt-5">
        <label htmlFor="comment" className={LABEL}>
          Comment
        </label>
        <textarea id="comment" name="comment" rows={5} required className={FIELD} />
      </div>

      {status === "error" && (
        <p className="mt-4 text-sm text-bronze-deep">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group mt-7 inline-flex items-center gap-2 rounded-full bg-walnut px-8 py-3.5 font-semibold text-cream shadow-card transition-all duration-300 hover:bg-espresso hover:-translate-y-0.5 disabled:opacity-70"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" /> Sending…
          </>
        ) : (
          <>
            Send
            <Send size={16} className="transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>

      <p className="mt-4 text-xs text-walnut-soft/70">
        Prefer email? Reach us at{" "}
        <a href={`mailto:${SITE.email}`} className="text-bronze-deep underline">
          {SITE.email}
        </a>
        .
      </p>
    </form>
  );
}
