/**
 * All page copy, lifted verbatim from the client's existing Isaiah Café theme
 * (theme/templates/*.json). No copy is fabricated. Coffee line-up reflects the
 * five Isaiah Café-labelled beans from the client's product photos (Guji,
 * Yirgacheffe, Sidamo, Limu, Lekemte — only those with final bag artwork are
 * shown, see `hidden` below); each bean's region and tasting notes are
 * transcribed from the printed bag label. Roast level is deliberately omitted —
 * it is hand-ticked per bag, not printed. Presented informationally, no CTAs.
 */

import homeHero from "@/content/home-hero.json";
import eventsFile from "@/content/events.json";
import homePhotos from "@/content/home-photos.json";
import menuFile from "@/content/menu.json";
import teamFile from "@/content/team.json";

export type CafeEvent = (typeof eventsFile.events)[number];
export const EVENTS: CafeEvent[] = eventsFile.events;

/** A person on the About-page roster. `title` and `funFact` are optional. */
export type TeamMember = {
  name: string;
  title?: string;
  image: string;
  alt: string;
  /** full CSS object-position (x y) for the 4:5 portrait frame */
  focal: string;
  bio: string;
  /** *asterisks* mark italics (titles of works) */
  funFact?: string;
  /** favourite menu item; hidden when blank */
  favorite?: string;
};

// Crew name, photo, bio and favourite are client-editable (src/content/team.json).
// Titles and photo framing stay locked here: titles follow the name, so a new hire
// doesn't inherit someone else's; framing follows the photo, so a new upload is centred.
const CREW_TITLES: Record<string, string> = {
  Bini: "The Coffee Master",
  Jayme: "Barista & Baker",
  Paige: "Barista",
};
const CREW_FOCAL: Record<string, string> = {
  "/assets/uploads/team-bini.jpg": "55% 50%",
  "/assets/uploads/team-jayme.jpg": "64% 50%",
  "/assets/uploads/team-paige.jpg": "30% 40%",
};

export const HOME = {
  hero: {
    // Client-editable via Pages CMS (.pages.yml).
    ...homeHero,
    // Locked: brand pieces the client shouldn't change from the admin.
    eyebrow: "community · culture · quality",
    video: "/assets/hero-home.mp4",
    videoPoster: "/assets/hero-home-poster.jpg",
  },
  intro: {
    heading: "Breakfast & Bakery, Rooted in Community",
    body: "Isaiah Café is Calgary's newest breakfast and bakery destination — a place where every morning starts with a warm welcome, exceptional coffee and great food.",
  },
  coffee: {
    eyebrow: "Take Home",
    title: "Our Coffee",
    subtext:
      "Single-origin Ethiopian beans under our own label — small-batch roasted in Calgary, poured in-house and available to take home.",
    // `hidden: true` keeps the bean on file but drops it from the grid — used for
    // beans we have no final bag artwork for yet. Remove the flag (and point
    // `image` at the new render) once the client sends that bag's mockup.
    beans: [
      { name: "Guji", origin: "South Central Ethiopia", notes: "Citrus · Lemon · Chocolate", image: "/assets/coffee-guji.jpg", hidden: true },
      { name: "Yirgacheffe", origin: "South Central Ethiopia", notes: "Floral · Sweet · Lemon", image: "/assets/coffee-yirgacheffe-bag.jpg" },
      // Final artwork for Sidamo is the seasonal "Sidamo Christmas Blend" bag;
      // region and tasting notes on the label are unchanged from the standard bag.
      { name: "Sidamo", origin: "South Central Ethiopia", notes: "Citrus · Berries · Orange", image: "/assets/coffee-sidamo-bag.jpg" },
      { name: "Limu", origin: "South Central Ethiopia", notes: "Floral · Sweet · Chocolate", image: "/assets/coffee-limu.jpg", hidden: true },
      { name: "Lekemte", origin: "Central Northwest Ethiopia", notes: "Chocolate · Caramel · Almond", image: "/assets/coffee-lekemte-bag.jpg" },
    ] as ReadonlyArray<{
      name: string;
      origin: string;
      notes: string;
      image: string;
      hidden?: boolean;
    }>,
    // Must match the Square Online fulfillment settings (delivery radius/minimum, shipping rate profile).
    ordering: [
      { title: "Pickup", body: "Free, in store at 101 19 St NW." },
      { title: "Local delivery", body: "Always free within 10 km. Up to 30 km: $10, or free on orders of $100 or more." },
      { title: "Shipping", body: "Anywhere in Canada and the US, from $25 depending on order total." },
    ],
  },
  features: [
    {
      eyebrow: "Events & Gatherings",
      heading: "Catering by Isaiah Café",
      body: "From intimate brunches to large corporate events — we bring the Isaiah Café experience to you. Fresh food, specialty coffee, and flawless service.",
      ...homePhotos.catering, // client-editable via Pages CMS
      imagePosition: "left" as const,
      cta: { label: "Learn More", href: "/catering" },
    },
    {
      eyebrow: "Take Home",
      heading: "Aggüdo Coffee Beans",
      body: "We proudly serve and pour Aggüdo Coffee — locally roasted in Calgary, with blends ranging from light cold brew to dark espresso roasts.",
      ...homePhotos.coffee, // client-editable via Pages CMS
      imagePosition: "right" as const,
      cta: { label: "Our Story", href: "/about" },
    },
  ],
  story: {
    eyebrow: "Our Story",
    heading: "Born from a dream",
    body: "Isaiah Café was born from a dream — a legacy of compassion, community, and genuine care for people. Every cup we serve carries that story forward.",
    cta: { label: "Read Our Story", href: "/about" },
    ...homePhotos.story, // client-editable via Pages CMS
  },
  newsletter: {
    heading: "Stay in the Loop",
    body: "Be the first to know about our opening, menu launches, and events.",
  },
};

export const ABOUT = {
  hero: {
    heading: "About Isaiah Café",
    body: "Bringing vision, leadership, and community to every cup",
    image: "/assets/hero-about.jpg",
    imageAlt: "Guests sharing coffee together in the Isaiah Café lounge",
  },
  story: [
    {
      caption: "Who He Was",
      heading: "A Man Who Noticed People",
      body: "Isaiah Café began with the dream of a man who believed deeply in people. Isaiah had a gift for noticing others — their needs, their struggles, their hopes — and he could never walk past someone without offering help. Serving others wasn't something he did; it was who he was.",
      image: "/assets/story-1.jpg",
      /** vertical object-position in the 4:3 frame — keeps heads/faces in shot */
      focal: "0%",
    },
    {
      caption: "The Vision",
      heading: "A Place Called Isaiah's",
      body: "For years, Isaiah planned to open a restaurant — a warm, welcoming place where food, community, and compassion came together. He imagined a space where people felt cared for the moment they walked in, where a meal could bring strangers together, and where fellowship was as natural as breathing. He used to picture people saying, \"Let's go to Isaiah's,\" not just for food, but for friendship, connection, and a sense of belonging.",
      image: "/assets/story-2.jpg",
      /** vertical object-position in the 4:3 frame — keeps heads/faces in shot */
      focal: "15%",
    },
    {
      caption: "The Legacy",
      heading: "His Dream Didn't End With Him",
      body: "Isaiah passed before he could open the doors himself. But his vision didn't end with him. Those who loved him knew that his dream deserved to live — not as a memorial, but as a continuation of the way he lived: open-hearted, attentive, and full of compassion.",
      image: "/assets/story-3.jpg",
      /** vertical object-position in the 4:3 frame — keeps heads/faces in shot */
      focal: "15%",
    },
    {
      caption: "The Beginning",
      heading: "Starting With a Café",
      body: "We are beginning that journey the way Isaiah would have wanted — with a café. It's a smaller start, but it carries the same heart. Every cup we serve, every conversation shared, every person welcomed is part of building the legacy he imagined. This café is the first step toward the restaurant he dreamed of, a foundation laid with love and intention.",
      image: "/assets/story-4.jpg",
      /** vertical object-position in the 4:3 frame — keeps heads/faces in shot */
      focal: "30%",
    },
    {
      caption: "Looking Forward",
      heading: "Let's Go to Isaiah's",
      body: "Isaiah Café is where his legacy begins. And who knows — one day, the restaurant he envisioned may grow from here. For now, we honor him by starting small, serving well, and creating the kind of place he dreamed of — a place where people naturally say, \"Let's go to Isaiah's.\"",
      image: "/assets/story-5.jpg",
      /** vertical object-position in the 4:3 frame — keeps heads/faces in shot */
      focal: "15%",
    },
  ],
  /**
   * HIDDEN (2026-09-14): the original three formal bios were retired at the
   * client's request in favour of the roster below. Kept — not deleted — so the
   * copy and the old `team-*-1.jpg` headshots can be restored if they change
   * their mind. Nothing renders `teamArchived`.
   */
  teamArchived: {
    title: "Meet the Team",
    members: [
      {
        name: "Simret Ghebremariam",
        title: "Owner, Co-Founder & Advisory Board Chair",
        brands: "Isaiah Café · Adola Coffee · Aggüdo Coffee",
        image: "/assets/team-simret-ghebremariam-1.jpg",
        bio: [
          "Simret is the owner of Isaiah Café, a seasoned senior business consultant and co-founder of Adola Coffee, bringing over 20 years of experience in project management and organizational change management.",
          "As Advisory Board Chair of Aggüdo Coffee, she provides strategic direction and draws on a deep track record of guiding organizations through complex transformations, driving operational efficiency, and delivering sustainable results.",
          "Known for aligning people, processes, and strategy, Simret is a trusted advisor to leaders and teams alike — channeling the same dedication and vision into building brands rooted in quality, connection, and purpose.",
        ],
      },
      {
        name: "Biniam Keleta",
        title: "Founder & Owner",
        brands: "Aggüdo Coffee",
        image: "/assets/team-biniam-keleta-2.jpg",
        bio: [
          "Biniam is the founder and owner of Aggüdo Coffee. Over the past six years, he has built the brand around community, culture, and quality — with one mission: to bring people together over an exceptional cup of coffee.",
          "A sought-after professional photographer, Biniam's creative eye shapes Aggüdo's identity. From the warm, inviting atmosphere to the visual storytelling behind the brand, his attention to detail shows up in every corner.",
          "He runs Aggüdo with the same precision, patience, and passion he brings to photography — leading with bold vision, genuine heart, and a commitment to excellence.",
        ],
      },
      {
        name: "Semhar Keleta",
        title: "Co-Founder & General Manager",
        brands: "Aggüdo Coffee",
        image: "/assets/team-semhar-keleta-1.jpg",
        bio: [
          "Semhar brings strong leadership, operational expertise, and a genuine love for people to her role as General Manager. A key part of Aggüdo's growth and day-to-day success for six years, she runs operations with a hands-on approach.",
          "She ensures customer experiences are seamless, team members feel supported, and quality standards are consistently met. Semhar believes great coffee starts with a motivated, well-trained team that takes pride in what they serve.",
          "Her leadership has cultivated both a loyal customer base and a thriving workplace culture. A driving force behind Aggüdo's reputation, she ensures the brand's founding vision comes to life every single day.",
        ],
      },
    ],
  },
  team: {
    title: "Meet the Team",
    /**
     * Two tiers. `leadership` renders in large 2-up frames, `crew` in a 3-up.
     * `title` and `funFact` are optional — cards collapse cleanly without them.
     * `focal` is a full CSS object-position (x y) for the 4:5 frame; the photos
     * are candid, so each one needs its own. In `funFact`, *asterisks* mark
     * italics (titles of works) — see Emphasis in components/sections/Team.tsx.
     */
    leadership: [
      {
        name: "Simret",
        title: "Co-Owner & Our Energetic Octopus",
        image: "/assets/team-simret.jpg",
        alt: "Simret holding a mug of coffee beside a window",
        focal: "50% 20%",
        bio: "Simret is the powerhouse behind Isaiah Café — an energetic \u201Coctopus\u201D who can juggle a dozen tasks at once and still bring joy, clarity, and momentum to the team. Her creativity, resilience, and ability to keep the café moving forward make her an essential part of our heartbeat and growth.",
        funFact:
          "Simret is the author of *Beyond Grief*, a book that reflects her strength, compassion, and ability to turn life's hardest moments into purpose.",
        favorite: "Gluten-free chicken sandwich",
      },
      {
        name: "Semhar",
        title: "Co-Owner & Heart of Our Team",
        image: "/assets/team-semhar.jpg",
        alt: "Semhar with a cappuccino on the patio outside Isaiah Café",
        focal: "50% 30%",
        bio: "Semhar is the steady, joyful force behind Isaiah Café's daily rhythm. As co-owner, she brings exceptional management skills, calm leadership, and a gift for keeping the team organized, supported, and thriving. Her ability to balance structure with warmth makes the café feel both professional and deeply welcoming.",
        funFact:
          "Semhar is a huge *Top Gun* fan — her love for the movie matches her leadership style: focused, fearless, and always ready to lift the team higher.",
        favorite: "London fog",
      },
    ] as TeamMember[],
    crewTitle: "Behind the Bar",
    crew: teamFile.crew.map(
      (m): TeamMember => ({
        ...m,
        title: CREW_TITLES[m.name],
        focal: CREW_FOCAL[m.image] ?? "50% 35%",
      }),
    ),
  },
  values: {
    title: "What We Stand For",
    cards: [
      {
        icon: "community",
        title: "Community",
        body: "Coffee brings people together. Isaiah Café is a space where everyone feels welcome — a gathering place rooted in belonging.",
      },
      {
        icon: "culture",
        title: "Culture",
        body: "We celebrate the rich traditions behind great coffee and food, honouring the cultures that inspire everything on our menu.",
      },
      {
        icon: "quality",
        title: "Quality",
        body: "From sourcing to service, we hold ourselves to the highest standard — because every detail matters when you care about the experience.",
      },
    ],
  },
};

export const CATERING = {
  hero: {
    heading: "Catering by Isaiah Café",
    body: "Breakfast, bakery & specialty coffee — brought to your event",
    image: "/assets/hero-catering.jpg",
    imageAlt: "A board of breakfast bagel sandwiches prepared for catering",
  },
  intro: {
    heading: "We Come to You",
    body: [
      "From intimate morning meetings to large-scale corporate gatherings and special events — Isaiah Café offers full-service catering with the same quality and care we bring to our café every day.",
      "Our catering menu features fresh breakfast items, house-made baked goods, and specialty coffee service. Whether you need a simple coffee setup or a complete brunch spread, we'll work with you to make it exceptional.",
    ],
  },
  offerings: {
    title: "What We Offer",
    columns: [
      {
        icon: "sunrise",
        title: "Breakfast & Brunch",
        body: "Fresh, made-to-order breakfast items and pastries tailored to your group size and preferences.",
      },
      {
        icon: "coffee",
        title: "Specialty Coffee",
        body: "Full espresso bar setup with our signature Aggüdo coffee blends — light, medium, dark, and cold brew options.",
      },
      {
        icon: "calendar",
        title: "Events & Coordination",
        body: "We help coordinate your event from setup to service, so you can focus on your guests. Available for corporate and private bookings.",
      },
    ],
  },
  cta: {
    heading: "Get in Touch",
    body: "Ready to book or want to learn more? Send us a message and we'll get back to you with details, menu options, and availability.",
    image: "/assets/contact-cta.jpg",
    imageAlt: "A sandwich and latte beside a laptop at Isaiah Café",
    button: { label: "Contact Us", href: "/contact" },
  },
};

export const CONTACT = {
  hero: {
    heading: "Visit Us",
    body: "101 19th Street NW, Calgary AB",
    image: "/assets/hero-contact.jpg",
    imageAlt: "A guest with coffee at the window table of Isaiah Café, 101 19th Street NW",
  },
  form: {
    heading: "Send Us a Message",
    body: "Questions about catering, hours, or just want to say hello? We'd love to hear from you.",
  },
};

/**
 * Menu — what the café offers, transcribed from its chalkboards (client photos,
 * 2026-07-23). Prices are intentionally omitted: they change seasonally, so the
 * boards in the café are the source of truth. Nothing here is invented — no item
 * descriptions, because the boards carry none.
 */
export const MENU = {
  hero: {
    heading: "Menu",
    body: "Espresso, tea & food made fresh in house",
    image: "/assets/hero-menu.jpg",
    imageAlt: "The pastry display case at Isaiah Café",
  },
  // Client-editable via Pages CMS (.pages.yml).
  note: menuFile.note,
  sections: menuFile.sections.map((section) => ({
    ...section,
    // Anchor id from the title, so renaming a section in the admin can't leave a stale one.
    id: section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
    items: section.items.map((item: { name: string; options?: string; heading?: boolean }) =>
      item.heading ? { group: item.name } : { name: item.name, options: item.options },
    ),
  })),
};
