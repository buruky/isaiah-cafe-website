import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/sections/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { EVENTS } from "@/lib/content";

export const metadata: Metadata = {
  title: "Events",
  description: "Upcoming events at Isaiah Café in Calgary.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  // shortcut: past events drop off at build time, so one lingers until the next edit/deploy; add revalidate if that matters.
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = EVENTS.filter((e) => e.date >= today).sort((a, b) =>
    a.date.localeCompare(b.date),
  );

  return (
    <>
      <Hero
        heading="Events"
        body="Gatherings, tastings and community happenings at Isaiah Café."
        image="/assets/hero-about.jpg"
        imageAlt="Inside Isaiah Café"
        size="medium"
      />

      <section className="py-24 sm:py-28">
        <SectionHeading eyebrow="What's On" title="Upcoming Events" className="mb-14" />

        {upcoming.length === 0 ? (
          <p className="text-center text-walnut-soft">
            No upcoming events right now — check back soon.
          </p>
        ) : (
          <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-2">
            {upcoming.map((e) => (
              <Reveal key={`${e.date}-${e.title}`} className="overflow-hidden rounded-[1.5rem] shadow-card">
                <div className="relative aspect-[5/4]">
                  <Image src={e.image} alt={e.imageAlt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <p className="eyebrow mb-2 text-bronze-deep">
                    {new Date(`${e.date}T00:00`).toLocaleDateString("en-CA", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                    })}
                    {e.time && ` · ${e.time}`}
                  </p>
                  <h3 className="text-2xl text-walnut">{e.title}</h3>
                  <p className="mt-3 leading-relaxed text-walnut-soft">{e.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
