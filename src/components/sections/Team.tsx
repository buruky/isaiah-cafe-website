import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "./SectionHeading";
import { ABOUT, type TeamMember } from "@/lib/content";

/**
 * Renders *asterisk* spans as italics. Used only for titles of works inside the
 * fun facts (Top Gun, Beyond Grief) — the surrounding text stays upright so the
 * italic actually reads as emphasis.
 */
function Emphasis({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*([^*]+)\*/g).map((part, i) =>
        i % 2 === 1 ? <em key={i}>{part}</em> : part,
      )}
    </>
  );
}

function Portrait({ member, sizes }: { member: TeamMember; sizes: string }) {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.25rem] shadow-card ring-1 ring-line">
      <Image
        src={member.image}
        alt={member.alt}
        fill
        sizes={sizes}
        style={{ objectPosition: member.focal }}
        className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
      />
    </div>
  );
}

function FunFact({ text }: { text: string }) {
  return (
    <div className="mt-6 rounded-[0.875rem] bg-bronze/10 px-5 py-4 ring-1 ring-bronze/25">
      <p className="eyebrow text-bronze-deep">Fun fact</p>
      <p className="mt-2.5 text-sm leading-relaxed text-walnut-soft">
        <Emphasis text={text} />
      </p>
    </div>
  );
}

export default function Team() {
  const { title, leadership, crewTitle, crew } = ABOUT.team;

  return (
    <section className="bg-cream/40 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="The People" title={title} />

        {/* Co-owners lead, in larger frames */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-12 sm:grid-cols-2 sm:gap-10">
          {leadership.map((m, i) => (
            <Reveal key={m.name} delay={i * 120} className="flex flex-col">
              <Portrait member={m} sizes="(max-width: 640px) 100vw, 448px" />
              <div className="mt-7">
                <h3 className="font-display text-3xl text-walnut">{m.name}</h3>
                {m.title && (
                  <p className="mt-1.5 text-sm font-semibold tracking-wide text-bronze-deep">
                    {m.title}
                  </p>
                )}
                <p className="mt-5 text-sm leading-relaxed text-walnut-soft">
                  {m.bio}
                </p>
                {m.funFact && <FunFact text={m.funFact} />}
              </div>
            </Reveal>
          ))}
        </div>

        {/* Group break. Echoes SectionHeading's centred title + bronze hairline
            at a smaller scale, so it reads as subordinate to "Meet the Team"
            rather than as a second section start. */}
        <div className="mt-24 sm:mt-28">
          <Reveal className="text-center">
            <h3 className="font-display text-2xl text-walnut sm:text-3xl">
              {crewTitle}
            </h3>
            <div className="mx-auto mt-4 h-px w-10 bg-bronze" aria-hidden />
          </Reveal>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {crew.map((m, i) => (
              <Reveal key={m.name} delay={i * 120} className="flex flex-col">
                <Portrait
                  member={m}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="mt-6">
                  <h3 className="font-display text-2xl text-walnut">{m.name}</h3>
                  {m.title && (
                    <p className="mt-1.5 text-sm font-semibold tracking-wide text-bronze-deep">
                      {m.title}
                    </p>
                  )}
                  <p className="mt-4 text-sm leading-relaxed text-walnut-soft">
                    {m.bio}
                  </p>
                  {m.funFact && <FunFact text={m.funFact} />}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
