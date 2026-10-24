import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { HOME } from "@/lib/content";

export default function StorySnippet() {
  const { eyebrow, heading, body, cta, image, imageAlt } = HOME.story;

  return (
    <section className="grain relative isolate overflow-hidden bg-espresso-deep py-28 text-cream sm:py-36">
      {/* Dimmed atmospheric background */}
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="100vw"
        className="-z-10 object-cover opacity-25"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-espresso-deep/85 via-espresso-deep/75 to-espresso-deep/90" />

      <Reveal className="mx-auto max-w-2xl px-6 text-center">
        <p className="eyebrow mb-5 text-bronze">{eyebrow}</p>
        <h2 className="text-balance font-display text-4xl leading-tight text-cream sm:text-5xl">
          {heading}
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-pretty text-lg leading-relaxed text-cream/85">
          {body}
        </p>
        <div className="mt-10 flex justify-center">
          <Button href={cta.href} variant="solid" tone="light">
            {cta.label}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
