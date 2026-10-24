import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Hero from "@/components/sections/Hero";
import SectionHeading from "@/components/sections/SectionHeading";
import ContactForm from "@/components/sections/ContactForm";
import MapEmbed from "@/components/sections/MapEmbed";
import Reveal from "@/components/ui/Reveal";
import { CONTACT } from "@/lib/content";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Visit Us",
  description:
    "Visit Isaiah Café at 101 19th Street NW, Calgary AB. Send us a message about catering, hours, or anything else — we'd love to hear from you.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Hero
        heading={CONTACT.hero.heading}
        body={CONTACT.hero.body}
        image={CONTACT.hero.image}
        imageAlt={CONTACT.hero.imageAlt}
        size="short"
      />

      <section className="py-24 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-[1fr_1.3fr]">
          {/* Details */}
          <Reveal>
            <p className="eyebrow mb-4 text-bronze-deep">Get in Touch</p>
            <h2 className="text-4xl leading-tight text-walnut sm:text-5xl">
              We&apos;d love to hear from you
            </h2>
            <div className="mt-6 h-px w-16 bg-bronze" aria-hidden />

            <ul className="mt-10 space-y-7">
              <Detail icon={<MapPin size={20} />} label="Find us">
                {SITE.address.street}
                <br />
                {SITE.address.locality}, {SITE.address.region} {SITE.address.postalCode}
              </Detail>
              <Detail icon={<Mail size={20} />} label="Email">
                <a href={`mailto:${SITE.email}`} className="hover:text-bronze-deep">
                  {SITE.email}
                </a>
              </Detail>
              <Detail icon={<Phone size={20} />} label="Call">
                <a href={`tel:${SITE.phoneE164}`} className="hover:text-bronze-deep">
                  {SITE.phone}
                </a>
              </Detail>
              <Detail icon={<Clock size={20} />} label="Hours">
                {SITE.hours.map((h) => (
                  <span key={h.days} className="block">
                    {h.days}: {h.time}
                  </span>
                ))}
              </Detail>
            </ul>
          </Reveal>

          {/* Form */}
          <Reveal delay={120}>
            <div className="rounded-[1.5rem] border border-line bg-cream/30 p-7 shadow-card sm:p-10">
              <SectionHeading
                title={CONTACT.form.heading}
                subtext={CONTACT.form.body}
                align="left"
                className="mb-8"
              />
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <MapEmbed />
    </>
  );
}

function Detail({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-espresso text-bronze">
        {icon}
      </span>
      <div>
        <p className="eyebrow text-walnut-soft/70">{label}</p>
        <p className="mt-1 leading-relaxed text-walnut">{children}</p>
      </div>
    </li>
  );
}
