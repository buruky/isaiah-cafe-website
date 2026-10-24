import { SITE } from "@/lib/site";

export default function MapEmbed() {
  // Address-query embed: Google geocodes server-side, so the pin is accurate
  // regardless of the approximate coordinates stored in JSON-LD.
  const query = encodeURIComponent(
    `${SITE.address.street}, ${SITE.address.locality}, ${SITE.address.region} ${SITE.address.postalCode}`,
  );
  const src = `https://www.google.com/maps?q=${query}&output=embed`;

  return (
    <section className="relative">
      <iframe
        title={`Map to ${SITE.name}, ${SITE.address.street}`}
        src={src}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[420px] w-full border-0 grayscale-[0.15] sm:h-[480px]"
        allowFullScreen
      />
    </section>
  );
}
