const ITEMS = [
  "Breakfast & Bakery",
  "Calgary, AB",
  "Catering Available",
  "Specialty Aggüdo Coffee",
];

function Strip() {
  return (
    <div className="marquee__track flex shrink-0 items-center" aria-hidden="true">
      {ITEMS.map((item, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          <span className="px-6 text-[0.7rem] font-medium tracking-[0.22em] uppercase">
            {item}
          </span>
          <span className="text-bronze">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function AnnouncementBar() {
  return (
    <div className="marquee relative overflow-hidden bg-espresso-deep text-cream-dim">
      <div className="flex w-max">
        {/* Duplicated track for a seamless -50% loop */}
        <Strip />
        <Strip />
      </div>
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-espresso-deep to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-espresso-deep to-transparent" />
    </div>
  );
}
