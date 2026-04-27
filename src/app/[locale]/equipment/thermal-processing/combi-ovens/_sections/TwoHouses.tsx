import ScrollReveal from "../../_sections/ScrollReveal";

interface House {
  brand: string;
  founded: string;
  origin: string;
  joined: string;
  positioning: string;
  facts: string[];
  url: string;
  parentLine: string;
}

const HOUSES: House[] = [
  {
    brand: "Houno",
    founded: "Founded 1977",
    origin: "Randers, Denmark",
    joined: "Middleby brand since 31 August 2006",
    positioning:
      "Premium Scandinavian combi specialist — precision-engineered ovens with a sustainability and craftsmanship voice.",
    facts: [
      "Founded 1977 by brothers Svend & Hans Jørgen Houmøller — first prototype built in their garage",
      "HQ at Alsvej 1, 8940 Randers — ~3,200 m² manufacturing facility",
      "ISO 9001:2015 + ISO 14001:2015 — Kiwa-tested per DIN 18873-1",
      "Full Invoq family: Combi · Hybrid · Bake · miniCombi · PassThrough",
      "Tagline: making service simple, smart and efficient",
    ],
    url: "https://www.houno.com/",
    parentLine: "Middleby Corporation · Denmark",
  },
  {
    brand: "Lincat",
    founded: "Founded 1971",
    origin: "Lincoln, United Kingdom",
    joined: "Middleby brand since 31 May 2011",
    positioning:
      "British engineering breadth — and the narrow 513 mm CombiSlim that no other Middleby plant builds.",
    facts: [
      "Lincoln, UK — 12,000 m² ISO 9001 + ISO 14001 + UKAS-accredited factory",
      "~450 SKUs across the British counter-top to free-standing range",
      "CombiSlim 1.06 + 1.10 — 513 mm wide, optional Hoodini ventless hood",
      "Lincat Invoq UK range carries the full Houno platform under British branding",
      "ENERGY STAR certified models · CE · IPX4",
    ],
    url: "https://www.lincat.co.uk/",
    parentLine: "Middleby Corporation · UK",
  },
];

export default function TwoHouses() {
  return (
    <section
      aria-labelledby="combi-houses"
      className="relative bg-offwhite text-navy"
      style={{
        paddingTop: "clamp(2rem, 4vw, 3.75rem)",
        paddingBottom: "clamp(3rem, 5vw, 5rem)",
      }}
    >
      {/* Column rule ornament */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(10,22,40,0.05) 1px, transparent 1px)",
          backgroundSize: "calc(100% / 12) 100%",
          backgroundPosition: "0.75rem 0",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span
                aria-hidden="true"
                style={{ backgroundColor: "var(--color-gold)" }}
                className="block h-px w-12"
              />
              <span
                style={{
                  color: "var(--color-gold-text)",
                  letterSpacing: "0.32em",
                }}
                className="text-xs font-medium uppercase"
              >
                The Two Houses
              </span>
            </div>
            <ScrollReveal>
              <h2
                id="combi-houses"
                className="font-display font-bold text-navy"
                style={{
                  fontSize: "clamp(1.75rem, 3.8vw, 3rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.02em",
                }}
              >
                Denmark &amp; England,
                <br />
                <span
                  className="italic font-normal"
                  style={{ color: "var(--color-gold-text)" }}
                >
                  one Invoq platform.
                </span>
              </h2>
            </ScrollReveal>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pb-3">
            <p
              className="text-navy/70 font-light"
              style={{
                fontSize: "14px",
                lineHeight: 1.65,
                maxWidth: "32ch",
              }}
            >
              Both brands share the Invoq platform &mdash; same controls, same
              cloud, same training. Two manufacturing footprints, one chef
              experience across multi-site fleets.
            </p>
          </div>
        </div>

        {/* Two-column ledger */}
        <div
          className="relative grid grid-cols-12 gap-6 lg:gap-12"
          style={{ marginTop: "clamp(2rem, 3.5vw, 3rem)" }}
        >
          {/* Center hairline (lg+) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute pointer-events-none"
            style={{
              top: "0.5rem",
              bottom: "0.5rem",
              left: "50%",
              width: "1px",
              backgroundColor: "rgba(201,168,76,0.45)",
            }}
          />

          {HOUSES.map((house, idx) => (
            <ScrollReveal
              key={house.brand}
              className="col-span-12 lg:col-span-6 relative"
              delay={idx * 80}
            >
              <article
                className="relative h-full"
                style={{
                  paddingTop: "0.25rem",
                  paddingBottom: "0.25rem",
                  ...(idx === 0
                    ? { paddingRight: "0" }
                    : { paddingLeft: "0" }),
                }}
              >
                {/* Top serial + meta row */}
                <div className="flex items-center justify-between gap-6 mb-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="font-display italic"
                      style={{
                        color: "var(--color-gold-text)",
                        fontSize: "clamp(1.25rem, 1.8vw, 1.5rem)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      No. 0{idx + 1}
                    </span>
                    <span
                      aria-hidden="true"
                      style={{ backgroundColor: "var(--color-gold)" }}
                      className="block h-px w-10 opacity-60"
                    />
                    <span
                      className="uppercase text-navy/60"
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.32em",
                        fontWeight: 500,
                      }}
                    >
                      {house.founded}
                    </span>
                  </div>
                </div>

                {/* Brand name — monumental */}
                <h3
                  className="font-display font-bold text-navy"
                  style={{
                    fontSize: "clamp(2.25rem, 4.5vw, 3.75rem)",
                    lineHeight: 0.9,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {house.brand}
                  <span
                    aria-hidden="true"
                    style={{
                      color: "var(--color-gold-text)",
                      fontStyle: "italic",
                      fontWeight: 400,
                    }}
                  >
                    .
                  </span>
                </h3>

                <p
                  className="font-display italic"
                  style={{
                    color: "var(--color-gold-text)",
                    fontSize: "13px",
                    letterSpacing: "0.1em",
                    marginTop: "0.5rem",
                  }}
                >
                  {house.origin} · {house.parentLine}
                </p>

                <p
                  className="uppercase text-navy/55 mt-1"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.28em",
                    fontWeight: 500,
                  }}
                >
                  {house.joined}
                </p>

                {/* Italic positioning */}
                <p
                  className="font-display italic text-navy/85 mt-6"
                  style={{
                    fontSize: "clamp(1.125rem, 1.6vw, 1.375rem)",
                    lineHeight: 1.32,
                    fontWeight: 400,
                    maxWidth: "38ch",
                  }}
                >
                  {house.positioning}
                </p>

                {/* Facts list */}
                <ul
                  className="mt-7"
                  style={{
                    borderTop: "1px solid rgba(10,22,40,0.14)",
                  }}
                >
                  {house.facts.map((fact, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-12 gap-3 items-baseline"
                      style={{
                        borderBottom: "1px solid rgba(10,22,40,0.08)",
                        paddingTop: "0.65rem",
                        paddingBottom: "0.65rem",
                      }}
                    >
                      <span
                        className="col-span-2 font-display italic"
                        style={{
                          color: "var(--color-gold-text)",
                          fontSize: "11px",
                          letterSpacing: "0.04em",
                        }}
                      >
                        — 0{i + 1}
                      </span>
                      <span
                        className="col-span-10 text-navy/80 font-light"
                        style={{
                          fontSize: "13.5px",
                          lineHeight: 1.55,
                        }}
                      >
                        {fact}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={house.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${house.brand} — manufacturer website`}
                    className="group inline-flex items-center gap-3"
                  >
                    <span
                      style={{
                        color: "var(--color-gold-text)",
                        fontSize: "11px",
                        letterSpacing: "0.32em",
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}
                    >
                      Manufacturer
                    </span>
                    <span
                      aria-hidden="true"
                      style={{ backgroundColor: "var(--color-gold)" }}
                      className="block h-px w-8 transition-all duration-500 group-hover:w-16"
                    />
                    <span
                      aria-hidden="true"
                      className="font-display italic"
                      style={{
                        color: "var(--color-gold-text)",
                        fontSize: "16px",
                      }}
                    >
                      &rarr;
                    </span>
                  </a>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* Footnote */}
        <div className="relative mt-10 lg:mt-14 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-start-2 lg:col-span-10 flex items-center gap-4">
            <span
              aria-hidden="true"
              style={{ backgroundColor: "var(--color-gold)", opacity: 0.7 }}
              className="block h-px w-10"
            />
            <p
              className="font-display italic text-navy/70"
              style={{
                fontSize: "13.5px",
                lineHeight: 1.55,
                maxWidth: "62ch",
              }}
            >
              Both brands share the Invoq platform &mdash; same SmartTouch
              controls, same Open Kitchen cloud, same chef training across
              multi-site operations. A 6-year R&amp;D collaboration with five
              Middleby houses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
