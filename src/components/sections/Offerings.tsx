import { Sunrise, Coffee, CalendarCheck, type LucideIcon } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "./SectionHeading";
import { CATERING } from "@/lib/content";

const ICONS: Record<string, LucideIcon> = {
  sunrise: Sunrise,
  coffee: Coffee,
  calendar: CalendarCheck,
};

export default function Offerings() {
  const { title, columns } = CATERING.offerings;

  return (
    <section className="bg-cream/40 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="Services" title={title} />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {columns.map((col, i) => {
            const Icon = ICONS[col.icon] ?? Coffee;
            return (
              <Reveal
                key={col.title}
                delay={i * 120}
                className="group flex flex-col rounded-[1.25rem] border border-line bg-alabaster p-9 shadow-card transition-transform duration-500 hover:-translate-y-1"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-espresso text-bronze transition-colors duration-500 group-hover:bg-bronze group-hover:text-espresso-deep">
                  <Icon size={24} strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-display text-2xl text-walnut">{col.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-walnut-soft">
                  {col.body}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
