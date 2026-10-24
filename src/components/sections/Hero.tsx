import Image from "next/image";
import HeroVideo from "./HeroVideo";

type Props = {
  eyebrow?: string;
  heading: string;
  body?: string;
  image: string;
  imageAlt: string;
  /** muted looping background clip (home only) */
  video?: string;
  /** the clip's own first frame — shown until playback starts, so there is no visible switch */
  videoPoster?: string;
  /** visual height */
  size?: "full" | "tall" | "medium" | "short";
  /** ken-burns drift (home only) */
  zoom?: boolean;
  children?: React.ReactNode;
};

const HEIGHTS: Record<NonNullable<Props["size"]>, string> = {
  full: "min-h-[92vh]",
  tall: "min-h-[78vh]",
  medium: "min-h-[58vh]",
  short: "min-h-[44vh]",
};

export default function Hero({
  eyebrow,
  heading,
  body,
  image,
  imageAlt,
  video,
  videoPoster,
  size = "tall",
  zoom = false,
  children,
}: Props) {
  return (
    <section className={`relative flex ${HEIGHTS[size]} items-center justify-center overflow-hidden`}>
      {/* Background image — also the video poster when `video` is set */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className={`object-cover ${zoom && !video ? "slow-zoom" : ""}`}
        />
        {video && <HeroVideo src={video} poster={videoPoster ?? image} />}
        {/* Warm cinematic gradient for legible overlay text */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-deep/55 via-espresso-deep/45 to-espresso-deep/80" />
        <div className="absolute inset-0 bg-espresso-deep/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center text-cream">
        {eyebrow && (
          <p className="eyebrow mb-6 text-bronze [animation:fade-in_1s_both]">
            {eyebrow}
          </p>
        )}
        <h1 className="text-balance font-display text-5xl leading-[1.05] sm:text-6xl md:text-7xl">
          {heading}
        </h1>
        {body && (
          <p className="mx-auto mt-7 max-w-xl text-pretty text-base leading-relaxed text-cream/90 sm:text-lg">
            {body}
          </p>
        )}
        {children && (
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
