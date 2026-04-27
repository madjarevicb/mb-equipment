import Link from "next/link";
import type { Locale } from "@/i18n/config";
import ScrollReveal from "../../../thermal-processing/_sections/ScrollReveal";

interface Props {
  locale: Locale;
}

export interface Instrument {
  serial: string;
  name: string;
  descriptor: string;
  brands: string;
  href: (locale: string) => string;
  caveat?: boolean;
}

export const INSTRUMENTS: Instrument[] = [
  {
    serial: "No. 01",
    name: "Ranges & Cooking Suites",
    descriptor:
      "Gas, induction, solid-top — modular blocks 400–1600 mm wide, configured to your line.",
    brands: "Silko Essence 700/900 · Lincat Opus 800",
    href: (l) => `/${l}/equipment/thermal-processing/ranges`,
  },
  {
    serial: "No. 02",
    name: "Heavy-Duty Ranges",
    descriptor:
      "20/10 AISI 304 worktops, open burners up to 10 kW (Silko Essence 900) — built for sustained high volume.",
    brands: "Silko Essence 900 · Lincat Opus 800",
    href: (l) => `/${l}/equipment/thermal-processing/ranges`,
    caveat: true,
  },
  {
    serial: "No. 03",
    name: "Fryers",
    descriptor:
      "Single and twin-tank, gas and electric — Lincat Opus 800 supports optional pumped filtration.",
    brands: "Silko · Lincat Opus 800 · FriFri",
    href: (l) => `/${l}/equipment/thermal-processing/fryers`,
  },
  {
    serial: "No. 04",
    name: "Boiling Pans",
    descriptor:
      "Direct or indirect heat, gas and electric — kettles for stocks, sauces, pasta water at scale.",
    brands: "Silko · Lincat Opus 800",
    href: (l) => `/${l}/equipment/thermal-processing/bain-marie`,
    caveat: true,
  },
  {
    serial: "No. 05",
    name: "Tilting Pans / Bratt Pans",
    descriptor:
      "Lincat Opus 800 bratt pan: 70–300 °C with simmer mode at –50% power. Sauté, braise, sear in one pan.",
    brands: "Silko · Lincat Opus 800",
    href: (l) => `/${l}/equipment/thermal-processing/bain-marie`,
    caveat: true,
  },
  {
    serial: "No. 06",
    name: "Pasta Cookers",
    descriptor:
      "Mid-volume Silverlink 600 to high-volume Opus 800 — dedicated baskets, automated drainage.",
    brands: "Silko · Lincat Silverlink 600 / Opus 800",
    href: (l) => `/${l}/equipment/thermal-processing/pasta-cookers`,
  },
  {
    serial: "No. 07",
    name: "Bain Marie / Holding",
    descriptor:
      "Wet and dry holding modules — keep service plates and components at temperature on the pass.",
    brands: "Silko · Lincat Silverlink 600",
    href: (l) => `/${l}/equipment/thermal-processing/bain-marie`,
  },
];

export default function InstrumentLedger({ locale }: Props) {
  const hasCaveat = INSTRUMENTS.some((i) => i.caveat);

  return (
    <section
      aria-labelledby="cooking-line-instruments"
      className="relative bg-navy text-white"
      style={{
        paddingTop: "clamp(2.5rem, 4vw, 4rem)",
        paddingBottom: "clamp(3rem, 5.5vw, 5.5rem)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 relative">
        {/* Section head */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-4 mb-6">
              <span
                aria-hidden="true"
                style={{ backgroundColor: "var(--color-gold)" }}
                className="block h-px w-12"
              />
              <span
                style={{
                  color: "var(--color-gold)",
                  letterSpacing: "0.32em",
                }}
                className="text-xs font-medium uppercase"
              >
                The Equipment Ledger — Seven Instruments
              </span>
            </div>
            <ScrollReveal>
              <h2
                id="cooking-line-instruments"
                className="font-display font-bold text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.8vw, 3rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.02em",
                }}
              >
                Seven disciplines,
                <br />
                <span
                  className="italic font-normal"
                  style={{ color: "var(--color-gold)" }}
                >
                  one composed line.
                </span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pb-3">
            <p
              className="text-white/70 font-light"
              style={{
                fontSize: "14px",
                lineHeight: 1.65,
                maxWidth: "30ch",
              }}
            >
              Each entry below opens to a per-equipment page — specifications,
              brand options, configuration notes.
            </p>
          </div>
        </div>

        {/* Rule */}
        <div
          style={{
            borderTop: "1px solid rgba(201,168,76,0.35)",
            marginTop: "clamp(1.75rem, 3vw, 2.5rem)",
          }}
        />

        {/* Instrument ledger */}
        <ol className="relative">
          {INSTRUMENTS.map((item) => (
            <li
              key={item.serial + item.name}
              style={{
                borderBottom: "1px solid rgba(201,168,76,0.2)",
              }}
            >
              <Link
                href={item.href(locale)}
                aria-label={`${item.name} — ${item.descriptor}`}
                className="group block transition-colors duration-500 hover:bg-white/[0.02]"
              >
                <div
                  className="grid grid-cols-12 gap-4 items-center"
                  style={{
                    paddingTop: "clamp(0.95rem, 1.5vw, 1.4rem)",
                    paddingBottom: "clamp(0.95rem, 1.5vw, 1.4rem)",
                  }}
                >
                  {/* Serial */}
                  <div className="col-span-3 md:col-span-2 lg:col-span-1">
                    <span
                      className="font-display italic"
                      style={{
                        color: "var(--color-gold)",
                        fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {item.serial}
                    </span>
                  </div>

                  {/* Name + descriptor */}
                  <div className="col-span-9 md:col-span-7 lg:col-span-6">
                    <span
                      className="font-display text-white block"
                      style={{
                        fontSize: "clamp(1.4rem, 2.6vw, 2.1rem)",
                        lineHeight: 0.98,
                        letterSpacing: "-0.01em",
                        fontWeight: 400,
                        fontStyle: "italic",
                      }}
                    >
                      {item.name}
                      {item.caveat && (
                        <sup
                          aria-hidden="true"
                          style={{
                            color: "var(--color-gold)",
                            fontSize: "0.45em",
                            paddingLeft: "0.25em",
                            verticalAlign: "super",
                            fontStyle: "normal",
                          }}
                        >
                          †
                        </sup>
                      )}
                    </span>
                    <span
                      className="block text-white/65 font-light mt-2"
                      style={{
                        fontSize: "13px",
                        lineHeight: 1.55,
                        maxWidth: "62ch",
                        fontStyle: "italic",
                        fontFamily: "var(--font-display), serif",
                      }}
                    >
                      {item.descriptor}
                    </span>
                  </div>

                  {/* Brand badges */}
                  <div className="col-span-9 md:col-span-2 lg:col-span-3 col-start-4 md:col-start-auto">
                    <span
                      className="block text-white/55 font-light uppercase"
                      style={{
                        fontSize: "10.5px",
                        letterSpacing: "0.22em",
                      }}
                    >
                      {item.brands}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="col-span-3 md:col-span-1 lg:col-span-2 flex justify-end items-center gap-3">
                    <span
                      aria-hidden="true"
                      style={{ backgroundColor: "var(--color-gold)" }}
                      className="hidden md:block h-px w-8 transition-all duration-500 group-hover:w-16"
                    />
                    <span
                      aria-hidden="true"
                      className="font-display italic inline-block"
                      style={{
                        color: "var(--color-gold)",
                        fontSize: "22px",
                        transition:
                          "transform 400ms cubic-bezier(0.2,0.7,0.2,1)",
                      }}
                    >
                      →
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ol>

        {/* Footnote */}
        {hasCaveat && (
          <div className="mt-7 lg:mt-9 grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-9 flex items-start gap-4">
              <span
                aria-hidden="true"
                className="font-display italic"
                style={{
                  color: "var(--color-gold)",
                  fontSize: "16px",
                  lineHeight: 1,
                  paddingTop: "0.1em",
                }}
              >
                †
              </span>
              <span
                className="text-white/55 font-light"
                style={{
                  fontSize: "12.5px",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                  fontFamily: "var(--font-display), serif",
                }}
              >
                Sub-categories under construction — full per-equipment pages
                launching soon. Heavy-Duty Ranges currently link to the Ranges
                page; Boiling Pans and Tilting Pans link to the closest existing
                route in the cooking ledger.
              </span>
            </div>
            <div className="col-span-12 lg:col-span-3 lg:text-right flex lg:justify-end items-center">
              <span
                className="uppercase text-white/45"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.32em",
                }}
              >
                Folio 03 / 05
              </span>
            </div>
          </div>
        )}

        {/* Brand-claim disclosure */}
        <div className="mt-5 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-9 flex items-start gap-4">
            <span
              aria-hidden="true"
              className="font-display italic"
              style={{
                color: "var(--color-gold)",
                fontSize: "14px",
                lineHeight: 1,
                paddingTop: "0.1em",
              }}
            >
              ☞
            </span>
            <span
              className="text-white/55 font-light"
              style={{
                fontSize: "12.5px",
                lineHeight: 1.6,
              }}
            >
              Lincat states up to <span className="text-white/80">90%</span>{" "}
              efficiency on the Opus 800 induction range (4 × 5 kW). Bratt-pan
              simmer mode reduces draw to roughly half power for low-temperature
              service.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
