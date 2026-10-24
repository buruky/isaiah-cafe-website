import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { ABOUT } from "@/lib/content";

export default function StorySections() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-20 px-5 sm:gap-28 sm:px-8">
        {ABOUT.story.map((row, i) => {
          const imageFirst = i % 2 === 0;
          return (
            <div
              key={row.heading}
              className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14"
            >
              {/* Image */}
              <Reveal
                className={`lg:col-span-6 ${
                  imageFirst ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] shadow-card">
                  <Image
                    src={row.image}
                    alt={row.heading}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    style={{ objectPosition: `50% ${row.focal ?? "50%"}` }}
                    className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
                  />
                </div>
              </Reveal>

              {/* Text */}
              <Reveal
                delay={120}
                className={`lg:col-span-6 ${
                  imageFirst ? "lg:order-2 lg:pl-4" : "lg:order-1 lg:pr-4"
                }`}
              >
                <p className="eyebrow mb-4 flex items-center gap-3 text-bronze-deep">
                  <span className="font-display text-2xl tabular-nums text-bronze/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {row.caption}
                </p>
                <h2 className="text-3xl leading-tight text-walnut sm:text-4xl">
                  {row.heading}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-walnut-soft">
                  {row.body}
                </p>
              </Reveal>
            </div>
          );
        })}
      </div>
    </section>
  );
}
