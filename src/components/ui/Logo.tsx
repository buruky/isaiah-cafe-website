import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Logo({
  size = 56,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label={`${SITE.name} — home`}
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/assets/Isaiah_Cafe_Logo_Circle.png"
        alt={`${SITE.name} logo`}
        width={size}
        height={size}
        priority
        className="rounded-full"
      />
    </Link>
  );
}
