import Reveal from "@/components/ui/Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  subtext?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtext,
  align = "center",
  tone = "dark",
  className = "",
}: Props) {
  const isCenter = align === "center";
  const titleColor = tone === "dark" ? "text-walnut" : "text-cream";
  const subColor = tone === "dark" ? "text-walnut-soft" : "text-cream-dim";

  return (
    <Reveal
      className={`${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && <p className="eyebrow mb-4 text-bronze-deep">{eyebrow}</p>}
      <h2 className={`text-4xl leading-tight sm:text-5xl ${titleColor}`}>{title}</h2>
      {/* Bronze hairline accent */}
      <div
        className={`mt-6 h-px w-16 bg-bronze ${isCenter ? "mx-auto" : ""}`}
        aria-hidden
      />
      {subtext && (
        <p className={`mt-6 text-base leading-relaxed ${subColor}`}>{subtext}</p>
      )}
    </Reveal>
  );
}
