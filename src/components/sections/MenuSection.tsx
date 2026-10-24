import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

type Item = {
  /** a sub-heading row inside the list, e.g. "Croissant sandwiches" */
  group?: string;
  name?: string;
  /** flavours / variants chalked under the item */
  options?: string;
};

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  image: string;
  imageAlt: string;
  items: readonly Item[];
  /** note chalked on this board, e.g. alt-milk availability */
  footnote?: string;
  /** flips the photo to the other side so sections alternate down the page */
  flip?: boolean;
};

export default function MenuSection({
  id,
  eyebrow,
  title,
  image,
  imageAlt,
  items,
  footnote,
  flip = false,
}: Props) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Photo — larger now that the list carries no price column */}
        <Reveal
          className={`lg:col-span-6 ${flip ? "lg:order-2" : "lg:order-1"}`}
        >
          <div className="relative aspect-[3/2] overflow-hidden rounded-[1.5rem] shadow-card lg:aspect-[4/5]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
            />
          </div>
        </Reveal>

        {/* List */}
        <Reveal
          delay={120}
          className={`lg:col-span-6 ${flip ? "lg:order-1" : "lg:order-2"}`}
        >
          <p className="eyebrow text-bronze-deep">{eyebrow}</p>
          <h2 className="mt-3 font-display text-4xl text-walnut sm:text-5xl">
            {title}
          </h2>
          <div className="mt-6 h-px w-16 bg-bronze" aria-hidden />

          <ul className="mt-8 divide-y divide-line">
            {items.map((item, i) =>
              item.group ? (
                <li key={`g-${i}`} className="pt-7 pb-2 first:pt-0">
                  <h3 className="eyebrow text-bronze">{item.group}</h3>
                </li>
              ) : (
                <li key={item.name} className="py-4">
                  <span className="text-lg text-walnut">{item.name}</span>
                  {item.options && (
                    <span className="mt-1 block text-sm leading-relaxed text-walnut-soft/80">
                      {item.options}
                    </span>
                  )}
                </li>
              ),
            )}
          </ul>

          {footnote && (
            <p className="mt-5 text-sm text-walnut-soft/80">{footnote}</p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
