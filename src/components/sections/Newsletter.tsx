"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { HOME } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";

export default function Newsletter() {
  const { heading, body } = HOME.newsletter;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Something went wrong.");
      setStatus("success");
      setMessage("You're on the list — thanks for joining us.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Please try again.");
    }
  }

  return (
    <section className="grain relative overflow-hidden bg-espresso py-20 text-cream sm:py-24">
      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-display text-4xl text-cream sm:text-5xl">{heading}</h2>
        <p className="mx-auto mt-5 max-w-md text-cream-dim">{body}</p>

        {status === "success" ? (
          <p className="mx-auto mt-9 inline-flex items-center gap-2 rounded-full bg-bronze/15 px-6 py-3 text-bronze">
            <Check size={18} /> {message}
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-9 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full rounded-full border border-cream/20 bg-espresso-deep/60 px-6 py-3.5 text-cream placeholder:text-cream-dim/60 focus:border-bronze focus:outline-none"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-bronze px-7 py-3.5 font-semibold text-espresso-deep transition-all duration-300 hover:bg-cream disabled:opacity-70"
            >
              {status === "loading" ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <>
                  Subscribe
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </>
              )}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-4 text-sm text-bronze">{message}</p>
        )}
      </div>
    </section>
  );
}
