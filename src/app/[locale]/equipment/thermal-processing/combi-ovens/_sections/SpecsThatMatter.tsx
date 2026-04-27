import ScrollReveal from "../../_sections/ScrollReveal";

interface SpecRow {
  index: string;
  value: string;
  unit?: string;
  label: string;
  note: string;
}

const SPECS: SpecRow[] = [
  {
    index: "i",
    value: "300",
    unit: "°C",
    label: "Max convection",
    note: "30–300 °C hot air range; 30–130 °C steam.",
  },
  {
    index: "ii",
    value: "45",
    unit: "kg",
    label: "Food load",
    note: "Typical Invoq Combi 10 × 1/1 GN, 19.3 kW.",
  },
  {
    index: "iii",
    value: "62.2",
    unit: "kW",
    label: "Top of range",
    note: "Invoq Combi 20-2/1 GN — ENERGY STAR certified.",
  },
  {
    index: "iv",
    value: "5 + 7",
    unit: "modes / cycles",
    label: "Cooking & wash",
    note: "Five cooking modes; seven CombiWash cycles, Light to Turbo.",
  },
];

const MODES = [
  "Hot Air (convection)",
  "Steam",
  "Combi (steam + convection)",
  "CombiSmart®",
  "Cook & Regen",
];

const FEATURES = [
  "SmartTouch® Android touch display",
  "SmartChef® guided 15-step recipes",
  "RackTimer® per-shelf timing",
  "ClimaOptima® 10-level humidity",
  "CombiWash® 7-cycle automatic clean",
  "HACCP logging · USB export",
  "Open Kitchen cloud connectivity",
  "Integrated hand shower · core probe",
];

export default function SpecsThatMatter() {
  return (
    <section
      aria-labelledby="combi-specs"
      className="relative bg-offwhite text-navy overflow-hidden"
      style={{
        paddingTop: "clamp(2.5rem, 4vw, 4rem)",
        paddingBottom: "clamp(3rem, 5.5vw, 5.25rem)",
      }}
    >
      {/* Column rules */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute inset-y-0 left-0 right-0 mx-auto max-w-7xl px-6 pointer-events-none"
      >
        <div
          className="relative w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(10,22,40,0.06) 1px, transparent 1px)",
            backgroundSize: "calc(100% / 12) 100%",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Head */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="flex items-center gap-4 mb-5">
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
                &sect; Specs That Matter
              </span>
            </div>
            <ScrollReveal>
              <h2
                id="combi-specs"
                className="font-display font-bold text-navy"
                style={{
                  fontSize: "clamp(1.75rem, 3.8vw, 3rem)",
                  lineHeight: 0.94,
                  letterSpacing: "-0.02em",
                }}
              >
                The numbers
                <br />
                <span
                  className="italic font-normal"
                  style={{ color: "var(--color-gold-text)" }}
                >
                  on the plate.
                </span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pb-3">
            <p
              className="font-light text-navy/70"
              style={{
                fontSize: "14px",
                lineHeight: 1.65,
                maxWidth: "32ch",
              }}
            >
              Verified Invoq published specifications &mdash; from countertop
              5-tray to roll-in 20 &times; 2/1 GN, with the platform&rsquo;s
              shared software stack.
            </p>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(10,22,40,0.14)",
            marginTop: "clamp(1.5rem, 2.5vw, 2.25rem)",
          }}
        />

        {/* Scoreboard — 4 monumental specs */}
        <ScrollReveal>
          <div
            className="grid grid-cols-12 gap-6 lg:gap-8"
            style={{ marginTop: "clamp(1.75rem, 3vw, 2.5rem)" }}
          >
            {SPECS.map((s) => (
              <div
                key={s.index}
                className="col-span-6 lg:col-span-3"
                style={{
                  borderTop: "1px solid rgba(10,22,40,0.14)",
                  paddingTop: "0.85rem",
                }}
              >
                <span
                  className="font-display italic block"
                  style={{
                    color: "var(--color-gold-text)",
                    fontSize: "11px",
                    letterSpacing: "0.04em",
                    marginBottom: "0.4rem",
                  }}
                >
                  — {s.index}
                </span>
                <div className="flex items-baseline gap-2">
                  <span
                    className="font-display font-bold text-navy"
                    style={{
                      fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)",
                      lineHeight: 0.9,
                      letterSpacing: "-0.025em",
                    }}
                  >
                    {s.value}
                  </span>
                  {s.unit && (
                    <span
                      className="font-display italic"
                      style={{
                        color: "var(--color-gold-text)",
                        fontSize: "clamp(0.95rem, 1.4vw, 1.25rem)",
                        lineHeight: 1,
                      }}
                    >
                      {s.unit}
                    </span>
                  )}
                </div>
                <p
                  className="uppercase text-navy/65 mt-3"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.28em",
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </p>
                <p
                  className="text-navy/70 font-light mt-2"
                  style={{
                    fontSize: "12.5px",
                    lineHeight: 1.55,
                  }}
                >
                  {s.note}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Cooking modes + smart features ledger */}
        <div
          className="grid grid-cols-12 gap-6 lg:gap-10 items-start"
          style={{ marginTop: "clamp(2.5rem, 4vw, 3.5rem)" }}
        >
          {/* Modes */}
          <div className="col-span-12 lg:col-span-5">
            <span
              aria-hidden="true"
              style={{
                color: "var(--color-gold-text)",
                letterSpacing: "0.32em",
                fontSize: "10px",
              }}
              className="block uppercase font-medium mb-4"
            >
              Cooking Modes — five
            </span>
            <ul
              style={{
                borderTop: "1px solid rgba(10,22,40,0.14)",
              }}
            >
              {MODES.map((mode, i) => (
                <li
                  key={mode}
                  className="grid grid-cols-12 gap-3 items-baseline"
                  style={{
                    borderBottom: "1px solid rgba(10,22,40,0.08)",
                    paddingTop: "0.7rem",
                    paddingBottom: "0.7rem",
                  }}
                >
                  <span
                    className="col-span-2 font-display italic"
                    style={{
                      color: "var(--color-gold-text)",
                      fontSize: "12px",
                    }}
                  >
                    0{i + 1}
                  </span>
                  <span
                    className="col-span-10 font-display italic text-navy/85"
                    style={{
                      fontSize: "clamp(1rem, 1.3vw, 1.1875rem)",
                      lineHeight: 1.3,
                    }}
                  >
                    {mode}
                  </span>
                </li>
              ))}
            </ul>
            <p
              className="text-navy/55 font-light italic mt-3"
              style={{
                fontSize: "12px",
                lineHeight: 1.55,
              }}
            >
              ClimaOptima® auto-humidity layered across all modes — up to ten
              humidity levels.
            </p>
          </div>

          {/* Smart features */}
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <span
              aria-hidden="true"
              style={{
                color: "var(--color-gold-text)",
                letterSpacing: "0.32em",
                fontSize: "10px",
              }}
              className="block uppercase font-medium mb-4"
            >
              Smart features &amp; certifications
            </span>
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-6"
              style={{
                borderTop: "1px solid rgba(10,22,40,0.14)",
              }}
            >
              {FEATURES.map((f) => (
                <li
                  key={f}
                  className="flex items-baseline gap-3"
                  style={{
                    borderBottom: "1px solid rgba(10,22,40,0.08)",
                    paddingTop: "0.65rem",
                    paddingBottom: "0.65rem",
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="font-display italic shrink-0"
                    style={{
                      color: "var(--color-gold-text)",
                      fontSize: "12px",
                    }}
                  >
                    —
                  </span>
                  <span
                    className="text-navy/80 font-light"
                    style={{
                      fontSize: "13px",
                      lineHeight: 1.5,
                    }}
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>

            {/* Cert row */}
            <div
              className="mt-5 grid grid-cols-12 gap-3"
              style={{
                paddingTop: "0.85rem",
                borderTop: "1px solid rgba(10,22,40,0.14)",
              }}
            >
              <div className="col-span-12">
                <span
                  className="block uppercase mb-2"
                  style={{
                    color: "var(--color-gold-text)",
                    fontSize: "10px",
                    letterSpacing: "0.32em",
                    fontWeight: 500,
                  }}
                >
                  Certifications
                </span>
                <p
                  className="font-display italic text-navy"
                  style={{
                    fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
                    lineHeight: 1.25,
                  }}
                >
                  ISO 9001 &middot; ISO 14001 &middot; CE &middot; Kiwa /
                  DIN&nbsp;18873-1 &middot; ENERGY&nbsp;STAR (sel.) &middot;
                  WaterMark &middot; BRL
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Brand-claim disclosure ledger */}
        <div
          className="grid grid-cols-12 gap-6 lg:gap-10"
          style={{
            marginTop: "clamp(2rem, 3.5vw, 3rem)",
            paddingTop: "clamp(1.25rem, 2vw, 1.75rem)",
            borderTop: "1px solid rgba(10,22,40,0.14)",
          }}
        >
          <div className="col-span-12 lg:col-span-4">
            <span
              aria-hidden="true"
              style={{
                color: "var(--color-gold-text)",
                letterSpacing: "0.32em",
                fontSize: "10px",
              }}
              className="block uppercase font-medium mb-3"
            >
              Houno states
            </span>
            <p
              className="font-display italic text-navy"
              style={{
                fontSize: "clamp(1rem, 1.3vw, 1.1875rem)",
                lineHeight: 1.3,
              }}
            >
              Up to 70% less energy in steam mode &middot; 19% less convection
              energy*
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <span
              aria-hidden="true"
              style={{
                color: "var(--color-gold-text)",
                letterSpacing: "0.32em",
                fontSize: "10px",
              }}
              className="block uppercase font-medium mb-3"
            >
              Houno states
            </span>
            <p
              className="font-display italic text-navy"
              style={{
                fontSize: "clamp(1rem, 1.3vw, 1.1875rem)",
                lineHeight: 1.3,
              }}
            >
              70.7% lower cleaning costs &middot; 27% less water*
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <span
              aria-hidden="true"
              style={{
                color: "var(--color-gold-text)",
                letterSpacing: "0.32em",
                fontSize: "10px",
              }}
              className="block uppercase font-medium mb-3"
            >
              Houno states
            </span>
            <p
              className="font-display italic text-navy"
              style={{
                fontSize: "clamp(1rem, 1.3vw, 1.1875rem)",
                lineHeight: 1.3,
              }}
            >
              17% more capacity vs. previous generation*
            </p>
          </div>
          <div className="col-span-12">
            <p
              className="text-navy/55 font-light italic"
              style={{
                fontSize: "11.5px",
                lineHeight: 1.55,
              }}
            >
              * Manufacturer&rsquo;s published claims (Houno) &mdash; not
              independently audited. ENERGY STAR efficiency on Invoq Combi
              20&times;2/1 GN: 81% convection, 78% steam, 0.05 gal water/pan.
            </p>
          </div>
        </div>

        {/* Pull quote — house note */}
        <div
          className="grid grid-cols-12 gap-6 relative"
          style={{
            marginTop: "clamp(3rem, 5vw, 4.5rem)",
          }}
        >
          <div className="col-span-12 lg:col-span-1 flex lg:items-start">
            <span
              className="font-display italic"
              style={{
                color: "var(--color-gold-text)",
                fontSize: "clamp(1.75rem, 2.8vw, 2.5rem)",
                lineHeight: 0.85,
                display: "inline-block",
                transform: "translateY(-0.2em)",
              }}
            >
              &ldquo;
            </span>
          </div>

          <ScrollReveal
            as="blockquote"
            className="col-span-12 lg:col-span-10"
            staggerLines
          >
            <span
              className="font-display italic text-navy block"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 3.25rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.015em",
                fontWeight: 400,
              }}
            >
              Five cooking modes,
            </span>
            <span
              className="font-display italic text-navy block"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 3.25rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.015em",
                fontWeight: 400,
              }}
            >
              seven wash cycles,
            </span>
            <span
              className="font-display italic block"
              style={{
                fontSize: "clamp(1.75rem, 3.5vw, 3.25rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.015em",
                fontWeight: 400,
                color: "var(--color-gold-text)",
              }}
            >
              one cloud.
            </span>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-12 gap-6 mt-6 lg:mt-8">
          <div className="col-span-12 lg:col-start-2 lg:col-span-10 flex items-center gap-4">
            <span
              aria-hidden="true"
              style={{ backgroundColor: "var(--color-gold)" }}
              className="block h-px w-10 opacity-70"
            />
            <span
              className="font-sans text-navy/70"
              style={{
                fontSize: "10px",
                letterSpacing: "0.32em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Houno &middot; Lincat &middot; Invoq Platform
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
