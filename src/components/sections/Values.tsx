import { Users, Globe, Award, type LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "./SectionHeading";
import { ABOUT } from "@/lib/content";

const ICONS: Record<string, LucideIcon> = {
  community: Users,
  culture: Globe,
  quality: Award,
};

export default function Values() {
  const { title, cards } = ABOUT.values;

  return (
    <section className="grain relative overflow-hidden bg-espresso py-24 text-cream sm:py-28">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Our Pillars" title={title} tone="light" />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = ICONS[card.icon] ?? Award;
            return (
              <Reveal
                key={card.title}
                delay={i * 120}
                className="group rounded-[1.25rem] border border-cream/10 bg-espresso-deep/50 p-9 transition-colors duration-500 hover:border-bronze/40"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-bronze/30 text-bronze transition-colors duration-500 group-hover:bg-bronze group-hover:text-espresso-deep">
                  <Icon size={24} strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-display text-2xl text-cream">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream-dim">
                  {card.body}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
