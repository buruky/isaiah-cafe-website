import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

type Props = {
  eyebrow?: string;
  heading: string;
  body: string;
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  cta?: { label: string; href: string };
  tone?: "light" | "dark";
};

export default function FeatureSplit({
  eyebrow,
  heading,
  body,
  image,
  imageAlt,
  imagePosition = "left",
  cta,
  tone = "light",
}: Props) {
  const dark = tone === "dark";
  const imageFirst = imagePosition === "left";

  return (
    <section
      className={`grain relative overflow-hidden ${dark ? "bg-espresso text-cream" : "bg-alabaster text-walnut"}`}
    >
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-28">
        {/* Image */}
        <Reveal
          className={`relative aspect-[5/4] overflow-hidden rounded-[1.5rem] shadow-card ${
            imageFirst ? "lg:order-1" : "lg:order-2"
          }`}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
          />
        </Reveal>

        {/* Text */}
        <Reveal
          delay={120}
          className={imageFirst ? "lg:order-2 lg:pl-4" : "lg:order-1 lg:pr-4"}
        >
          {eyebrow && (
            <p className="eyebrow mb-4 text-bronze-deep">{eyebrow}</p>
          )}
          <h2 className={`text-4xl leading-tight sm:text-5xl ${dark ? "text-cream" : "text-walnut"}`}>
            {heading}
          </h2>
          <div className="mt-6 h-px w-16 bg-bronze" aria-hidden />
          <p
            className={`mt-7 max-w-md text-base leading-relaxed ${dark ? "text-cream-dim" : "text-walnut-soft"}`}
          >
            {body}
          </p>
          {cta && (
            <div className="mt-9">
              <Button
                href={cta.href}
                variant="outline"
                tone={dark ? "light" : "dark"}
              >
                {cta.label}
              </Button>
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
