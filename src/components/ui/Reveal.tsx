"use client";

import { useEffect, useRef, useState, type ElementType } from "react";

type Props = {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: React.ReactNode;
};

/**
 * Wraps content in a scroll-triggered fade/rise. Content stays fully visible
 * if JS or IntersectionObserver is unavailable (progressive enhancement).
 */
export default function Reveal({
  as: Tag = "div",
  delay = 0,
  className = "",
  children,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
