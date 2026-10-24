import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/sections/SectionHeading";
import Offerings from "@/components/sections/Offerings";
import FeatureSplit from "@/components/sections/FeatureSplit";
import { CATERING } from "@/lib/content";

export const metadata: Metadata = {
  title: "Catering — Breakfast, Bakery & Specialty Coffee",
  description:
    "Full-service catering from Isaiah Café in Calgary — fresh breakfast, house-made bakery, and a specialty Aggüdo espresso bar brought to your corporate or private event.",
  alternates: { canonical: "/catering" },
};

export default function CateringPage() {
  return (
    <>
      <Hero
        heading={CATERING.hero.heading}
        body={CATERING.hero.body}
        image={CATERING.hero.image}
        imageAlt={CATERING.hero.imageAlt}
        size="medium"
      />

      {/* Intro */}
      <section className="py-24 sm:py-28">
        <SectionHeading
          eyebrow="Catering"
          title={CATERING.intro.heading}
          className="mb-8"
        />
        <div className="prose-cafe mx-auto max-w-2xl px-6 text-center text-base leading-relaxed text-walnut-soft">
          {CATERING.intro.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <Offerings />

      <FeatureSplit
        eyebrow="Let's Plan It"
        heading={CATERING.cta.heading}
        body={CATERING.cta.body}
        image={CATERING.cta.image}
        imageAlt={CATERING.cta.imageAlt}
        imagePosition="left"
        cta={CATERING.cta.button}
        tone="dark"
      />
    </>
  );
}
