"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/ui/Logo";
import { NAV_LINKS } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setOpen(false), [pathname]);

  // Lock scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Split evenly around the centred logo, whatever the link count happens to be
  const split = Math.ceil(NAV_LINKS.length / 2);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-line/70 bg-alabaster/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Left — desktop nav (split around centered logo) */}
        <div className="hidden flex-1 items-center gap-8 md:flex">
          {NAV_LINKS.slice(0, split).map((link) => (
            <NavLink key={link.href} {...link} active={isActive(link.href)} />
          ))}
        </div>

        {/* Center — logo */}
        <div className="flex flex-1 justify-start md:justify-center">
          <Logo size={scrolled ? 48 : 56} className="transition-all duration-500" />
        </div>

        {/* Right — desktop nav */}
        <div className="hidden flex-1 items-center justify-end gap-8 md:flex">
          {NAV_LINKS.slice(split).map((link) => (
            <NavLink key={link.href} {...link} active={isActive(link.href)} />
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-walnut md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile drawer — anchored to the header itself, not the viewport, so it
          never rides up over the logo while the announcement bar is on screen */}
      <div
        className={`absolute inset-x-0 top-full z-40 origin-top overflow-y-auto bg-alabaster/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
        style={{ height: open ? "calc(100dvh - 5rem)" : 0 }}
      >
        <ul className="flex flex-col gap-1 px-6 py-6">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block border-b border-line py-5 font-display text-3xl transition-colors ${
                  isActive(link.href) ? "text-bronze-deep" : "text-walnut"
                }`}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group relative text-sm font-medium tracking-wide transition-colors ${
        active ? "text-bronze-deep" : "text-walnut/80 hover:text-walnut"
      }`}
    >
      {label}
      <span
        className={`absolute -bottom-1.5 left-0 h-px bg-bronze transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}
