import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps } from "react";

type Variant = "solid" | "outline" | "ghost";
type Tone = "dark" | "light";

const base =
  "group inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]";

const styles: Record<Tone, Record<Variant, string>> = {
  // On light backgrounds
  dark: {
    solid:
      "bg-walnut text-cream hover:bg-espresso shadow-card hover:-translate-y-0.5",
    outline:
      "border border-walnut/25 text-walnut hover:border-walnut hover:bg-walnut hover:text-cream",
    ghost: "text-walnut hover:text-bronze-deep",
  },
  // On dark backgrounds
  light: {
    solid:
      "bg-bronze text-espresso-deep hover:bg-cream shadow-float hover:-translate-y-0.5",
    outline:
      "border border-cream/30 text-cream hover:border-bronze hover:bg-bronze hover:text-espresso-deep",
    ghost: "text-cream hover:text-bronze",
  },
};

type Props = {
  href: string;
  variant?: Variant;
  tone?: Tone;
  withArrow?: boolean;
  className?: string;
  children: React.ReactNode;
} & Omit<ComponentProps<typeof Link>, "href" | "className">;

export default function Button({
  href,
  variant = "solid",
  tone = "dark",
  withArrow = true,
  className = "",
  children,
  ...rest
}: Props) {
  return (
    <Link href={href} className={`${base} ${styles[tone][variant]} ${className}`} {...rest}>
      {children}
      {withArrow && (
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}
