import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/sections/SectionHeading";
import CoffeeShowcase from "@/components/sections/CoffeeShowcase";
import FeatureSplit from "@/components/sections/FeatureSplit";
import StorySnippet from "@/components/sections/StorySnippet";
import Newsletter from "@/components/sections/Newsletter";
import Button from "@/components/ui/Button";
import { HOME } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow={HOME.hero.eyebrow}
        heading={HOME.hero.heading}
        body={HOME.hero.body}
        image={HOME.hero.image}
        imageAlt={HOME.hero.imageAlt}
        video={HOME.hero.video}
        videoPoster={HOME.hero.videoPoster}
        size="full"
        zoom
      >
        <Button href="/catering" variant="solid" tone="light">
          Catering
        </Button>
        <Button href="/about" variant="outline" tone="light">
          Our Story
        </Button>
      </Hero>

      {/* Intro */}
      <section className="py-24 sm:py-28">
        <SectionHeading
          eyebrow="Welcome"
          title={HOME.intro.heading}
          subtext={HOME.intro.body}
        />
      </section>

      <CoffeeShowcase />

      {HOME.features.map((f) => (
        <FeatureSplit key={f.heading} {...f} />
      ))}

      <StorySnippet />

      <Newsletter />
    </>
  );
}
