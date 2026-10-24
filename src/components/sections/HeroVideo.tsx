"use client";

import { useEffect, useRef } from "react";

/**
 * Muted, looping background video for the home hero.
 *
 * `poster` is the clip's own first frame, so the still the visitor sees before
 * playback IS frame 0 — playback starts with no visible switch. The <Image> in
 * <Hero> sits underneath purely as a fallback if the video never loads.
 *
 * The file is a palindrome (forward + reversed), so `loop` runs it back and
 * forth with no jump cut at the seam.
 *
 * Honours prefers-reduced-motion: the video is never started for those users,
 * leaving the poster frame in place.
 */
export default function HeroVideo({ src, poster }: { src: string; poster: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    // play() rejects when the browser blocks autoplay — the poster frame stays.
    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="auto"
      aria-hidden="true"
      tabIndex={-1}
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}
