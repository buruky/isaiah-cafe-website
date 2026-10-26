/**
 * Single source of truth for site-wide facts.
 * Every value here is confirmed against the client's existing theme config
 * (theme/sections/footer-group.json) — NOT the AI-drafted spec, which had
 * an incorrect Instagram handle and no real Facebook page.
 */

export const SITE = {
  name: "Isaiah Café",
  legalName: "Isaiah Café",
  tagline: "community · culture · quality",
  // Domain is planned but not yet live; used for metadata canonical + JSON-LD.
  url: "https://isaiahcafe.com",
  description:
    "Calgary's newest breakfast & bakery café — specialty Aggüdo coffee, fresh daily baking, and full-service catering, rooted in community.",
  email: "hello@isaiahcafe.com",
  phone: "403.816.8159",
  phoneE164: "+14038168159",
  // Square Online pickup ordering page. Order buttons stay hidden while blank.
  orderUrl: "",
  address: {
    street: "101 19th Street NW",
    locality: "Calgary",
    region: "AB",
    postalCode: "T2N 2H8",
    country: "CA",
    countryName: "Canada",
  },
  // Approximate coordinates (NW Calgary). The map embed is driven by the
  // address query string so the pin resolves correctly regardless.
  geo: { lat: 51.0532, lng: -114.1045 },
  hours: [
    { days: "Mon – Fri", time: "7AM – 6PM" },
    { days: "Sat – Sun", time: "8AM – 6PM" },
  ],
  social: {
    // Confirmed handle from theme settings_data.json
    instagram: "https://www.instagram.com/isaiah_cafee/",
    instagramHandle: "@isaiah_cafee",
    // Vanity URL reads oddly but the client confirmed the page is theirs (2026-07-23);
    // resolved from their share link, tracking params stripped.
    facebook: "https://www.facebook.com/unhackabledestiny.ca",
    facebookLabel: "Isaiah Café on Facebook",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Catering", href: "/catering" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

/** Schema.org structured data for local map / SEO visibility. */
export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: SITE.name,
  image: [`${SITE.url}/assets/hero-home.jpg`],
  logo: `${SITE.url}/assets/Isaiah_Cafe_Logo_Circle.png`,
  url: SITE.url,
  telephone: SITE.phoneE164,
  email: SITE.email,
  priceRange: "$$",
  servesCuisine: ["Coffee", "Breakfast", "Bakery"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "101 19 St NW",
    addressLocality: SITE.address.locality,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: SITE.geo.lat,
    longitude: SITE.geo.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  hasMenu: `${SITE.url}/menu`,
  sameAs: [SITE.social.instagram, SITE.social.facebook],
};
