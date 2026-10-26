import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import MenuSection from "@/components/sections/MenuSection";
import Button from "@/components/ui/Button";
import { MENU } from "@/lib/content";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Menu — Espresso, Tea & Fresh Food",
  description:
    "The Isaiah Café menu in Calgary — espresso and specialty coffee, matcha, chai and loose-leaf tea, plus croissant sandwiches, bagels and bakery made fresh in house.",
  alternates: { canonical: "/menu" },
};

export default function MenuPage() {
  return (
    <>
      <Hero
        heading={MENU.hero.heading}
        body={MENU.hero.body}
        image={MENU.hero.image}
        imageAlt={MENU.hero.imageAlt}
        size="medium"
      />

      <div className="mx-auto max-w-6xl space-y-24 px-5 py-24 sm:space-y-28 sm:px-8 sm:py-28">
        {SITE.orderUrl && (
          <div className="flex justify-center">
            <Button href={SITE.orderUrl} target="_blank" rel="noopener noreferrer">
              Order Pickup
            </Button>
          </div>
        )}

        {MENU.sections.map((section, i) => (
          <MenuSection
            key={section.id}
            id={section.id}
            eyebrow={section.eyebrow}
            title={section.title}
            image={section.image}
            imageAlt={section.imageAlt}
            items={section.items}
            footnote={"footnote" in section ? section.footnote : undefined}
            flip={i % 2 === 1}
          />
        ))}

        <p className="border-t border-line pt-8 text-center text-sm text-walnut-soft/80">
          {MENU.note}
        </p>
      </div>

      {/* Catering cross-link */}
      <section className="bg-cream/40 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="eyebrow text-bronze-deep">Events &amp; Gatherings</p>
          <h2 className="mt-4 font-display text-3xl text-walnut sm:text-4xl">
            Want all of this at your event?
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-walnut-soft">
            We cater breakfast, bakery and a full espresso bar for corporate and
            private bookings.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/catering" variant="solid">
              Catering
            </Button>
            <Button href="/contact" variant="outline">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
