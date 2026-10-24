import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/ui/icons";
import { SITE, NAV_LINKS } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="grain relative overflow-hidden bg-espresso-deep text-cream-dim">
      <div className="relative mx-auto max-w-7xl px-5 pt-20 pb-10 sm:px-8">
        <div className="grid gap-14 md:grid-cols-3">
          {/* Column 1 — Brand */}
          <div>
            <h3 className="eyebrow text-bronze">{SITE.name}</h3>
            <p className="mt-5 max-w-xs leading-relaxed text-cream-dim/90">
              A café born from love and legacy — where breakfast, bakery, and
              specialty coffee bring people together.
            </p>
            <Image
              src="/assets/Isaiah_Cafe_Logo_Circle.png"
              alt={`${SITE.name} logo`}
              width={56}
              height={56}
              className="mt-7 rounded-full"
            />
            <p className="mt-4 font-display text-lg text-bronze">{SITE.tagline}</p>
          </div>

          {/* Column 2 — Contact */}
          <div>
            <h3 className="eyebrow text-bronze">Contact</h3>
            <p className="mt-5 text-cream-dim/90">We would love to hear from you.</p>
            <ul className="mt-6 space-y-4 text-cream">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="group inline-flex items-center gap-3 transition-colors hover:text-bronze"
                >
                  <Mail size={17} className="text-bronze" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phoneE164}`}
                  className="group inline-flex items-center gap-3 transition-colors hover:text-bronze"
                >
                  <Phone size={17} className="text-bronze" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Isaiah Café on Instagram (${SITE.social.instagramHandle})`}
                  className="group inline-flex items-center gap-3 transition-colors hover:text-bronze"
                >
                  <InstagramIcon size={17} className="text-bronze" />
                  {/* site.ts keeps the canonical "@handle"; the footer shows it bare */}
                  {SITE.social.instagramHandle.replace("@", "")}
                </a>
              </li>
              <li>
                <a
                  href={SITE.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={SITE.social.facebookLabel}
                  className="group inline-flex items-center gap-3 transition-colors hover:text-bronze"
                >
                  <FacebookIcon size={17} className="text-bronze" />
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 — Location & Hours */}
          <div>
            <h3 className="eyebrow text-bronze">Location</h3>
            <p className="mt-5 inline-flex items-start gap-3 text-cream">
              <MapPin size={17} className="mt-1 shrink-0 text-bronze" />
              <span>
                {SITE.address.street}
                <br />
                {SITE.address.locality}, {SITE.address.region}{" "}
                {SITE.address.postalCode}
              </span>
            </p>
            <h3 className="eyebrow mt-8 text-bronze">Hours</h3>
            <dl className="mt-5 space-y-2">
              {SITE.hours.map((h) => (
                <div key={h.days} className="flex justify-between gap-6 border-b border-cream/10 pb-2">
                  <dt className="font-medium text-cream">{h.days}</dt>
                  <dd className="text-cream-dim/90">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream-dim/70 sm:flex-row">
          <p>
            © {year} {SITE.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:justify-end">
            {/* Page links live here so every link in the footer sits in one row */}
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-bronze"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/privacy" className="transition-colors hover:text-bronze">
              Privacy Policy
            </Link>
            <span className="inline-flex items-center gap-2">
              <span aria-hidden>🇨🇦</span> {SITE.address.countryName} (EN)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
