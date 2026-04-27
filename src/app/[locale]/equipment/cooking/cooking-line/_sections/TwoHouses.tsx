import Image from "next/image";
import ScrollReveal from "../../../thermal-processing/_sections/ScrollReveal";

interface House {
  brand: string;
  founded: string;
  origin: string;
  positioning: string;
  facts: string[];
  logo: string;
  logoInvert: boolean;
  url: string;
  parentLine: string;
}

const HOUSES: House[] = [
  {
    brand: "Silko",
    founded: "Founded 1980",
    origin: "Vittorio Veneto, Italy",
    positioning:
      "Italian design heritage and modular block architecture — engineered for the chef who wants the line built around the menu.",
    facts: [
      "Vittorio Veneto (Treviso), Italy — manufacturing since 1980",
      "Part of Ali Group — one of the two largest foodservice groups worldwide",
      "Essence series 650 / 700 / 900 / 1100 — modular widths 400–1600 mm",
      "Essence 900: 460+ module combinations · 20/10 AISI 304 worktop · open burners up to 10 kW",
      "Ikonico custom one-piece worktop blocks · Format Design Lab service",
    ],
    logo: "/images/brands/silko-logo.png",
    logoInvert: false,
    url: "https://www.silko.it/",
    parentLine: "Ali Group · Italy",
  },
  {
    brand: "Lincat",
    founded: "Founded 1971",
    origin: "Lincoln, United Kingdom",
    positioning:
      "British engineering, the broadest counter-top to free-standing range in the cooking ledger — and direct synergy with our Middleby partnership.",
    facts: [
      "Lincoln, UK — 12,000 m² factory on Whisby Road since 1997",
      "Middleby Corporation brand since 31 May 2011",
      "ISO 9001 + ISO 14001 + UKAS-accredited · ~450 SKUs · exports to 85+ countries",
      "Opus 800 (heavy-duty) · Silverlink 600 · Phoenix dual-fuel · Lynx 400 counter-top",
      "Opus 800 ships with a 2-year parts & labour warranty",
    ],
    logo: "/images/brands/lincat-logo.svg",
    logoInvert: true,
    url: "https://www.lincat.co.uk/",
    parentLine: "Middleby Corporation · UK",
  },
];

export default function TwoHouses() {
  return (
    <section
      aria-labelledby="cooking-line-houses"
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
                id="cooking-line-houses"
                className="font-display font-bold text-navy"
                style={{
                  fontSize: "clamp(1.75rem, 3.8vw, 3rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.02em",
                }}
              >
                Italy &amp; England,
                <br />
                <span
                  className="italic font-normal"
                  style={{ color: "var(--color-gold-text)" }}
                >
                  on the same line.
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
              Two manufacturers chosen for what each does best — modular Italian
              suites and British heavy-duty engineering — supplied, installed,
              and serviced under one authorized partnership.
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
                  ...(idx === 0 ? { paddingRight: "0" } : { paddingLeft: "0" }),
                }}
              >
                {/* Top serial + logo row */}
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
                  <div className="shrink-0">
                    <Image
                      src={house.logo}
                      alt={`${house.brand} logo`}
                      width={120}
                      height={36}
                      loading="lazy"
                      style={{
                        width: "auto",
                        height: "26px",
                        objectFit: "contain",
                        opacity: 0.85,
                        filter: house.logoInvert ? "none" : "none",
                      }}
                    />
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
                      →
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
              Both supplied, installed, and serviced under MB Equipment&rsquo;s
              authorized partnership — single point of accountability,
              factory-trained engineers, genuine parts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
