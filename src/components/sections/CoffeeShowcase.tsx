import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "./SectionHeading";
import { HOME } from "@/lib/content";

// Literal class strings — Tailwind can't see interpolated ones. Keyed by how many
// beans are visible so unhiding a bean in content.ts doesn't leave a ragged row.
const GRID_COLS: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-3",
  4: "grid-cols-2 lg:grid-cols-4",
  5: "grid-cols-2 lg:grid-cols-5",
};

export default function CoffeeShowcase() {
  const { eyebrow, title, subtext, beans } = HOME.coffee;
  const visible = beans.filter((bean) => !bean.hidden);
  const cols = GRID_COLS[visible.length] ?? "grid-cols-2 lg:grid-cols-5";

  if (visible.length === 0) return null;

  return (
    <section className="bg-cream/40 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} subtext={subtext} />

        <div className={`mt-16 grid gap-x-6 gap-y-12 ${cols}`}>
          {visible.map((bean, i) => (
            <Reveal key={bean.name} delay={i * 90} className="group text-center">
              <div className="relative mx-auto aspect-square w-full max-w-[15rem] overflow-hidden rounded-[1.25rem] bg-white ring-1 ring-line">
                <Image
                  src={bean.image}
                  alt={`Isaiah Café ${bean.name} coffee bag`}
                  fill
                  sizes="(max-width: 640px) 60vw, (max-width: 1024px) 30vw, 18vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
              </div>
              <h3 className="mt-6 font-display text-2xl text-walnut">{bean.name}</h3>
              <p className="mt-1 text-sm tracking-wide text-walnut-soft">{bean.origin}</p>
              <p className="mt-1 min-h-[2.25rem] text-xs uppercase tracking-[0.14em] text-bronze-deep">
                {bean.notes}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center">
          <p className="text-sm tracking-wide text-walnut-soft">
            Roasted by{" "}
            <span className="font-semibold text-bronze-deep">Aggüdo Coffee</span> in
            Calgary · available in-store
          </p>
        </Reveal>
      </div>
    </section>
  );
}
