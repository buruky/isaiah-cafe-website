import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import StorySections from "@/components/sections/StorySections";
import Team from "@/components/sections/Team";
import Values from "@/components/sections/Values";
import { ABOUT } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us — Our Story & Team",
  description:
    "The story behind Isaiah Café — a legacy of compassion and community in NW Calgary. Meet the team behind the café and Aggüdo Coffee.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Hero
        heading={ABOUT.hero.heading}
        body={ABOUT.hero.body}
        image={ABOUT.hero.image}
        imageAlt={ABOUT.hero.imageAlt}
        size="medium"
      />
      <StorySections />
      <Team />
      <Values />
    </>
  );
}
