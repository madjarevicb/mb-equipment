import Image from "next/image";
import ScrollReveal from "../../_sections/ScrollReveal";

/**
 * Chapter II — Origin + Technology (one combined editorial section).
 * 1969 Pineda de Mar narrative on the left, tech ledger on the right.
 * Certifications + safety as a lower ledger band.
 */
export default function OriginTech() {
  return (
    <section
      aria-labelledby="josper-origin"
      className="relative bg-offwhite text-navy overflow-hidden"
      style={{
        paddingTop: "clamp(2.5rem, 4vw, 4rem)",
        paddingBottom: "clamp(3rem, 5vw, 5rem)",
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
                &sect; Origin &amp; Mechanism
              </span>
            </div>
            <ScrollReveal>
              <h2
                id="josper-origin"
                className="font-display font-bold text-navy"
                style={{
                  fontSize: "clamp(1.75rem, 3.8vw, 3rem)",
                  lineHeight: 0.94,
                  letterSpacing: "-0.02em",
                }}
              >
                A closed oven,
                <br />
                <span
                  className="italic font-normal"
                  style={{ color: "var(--color-gold-text)" }}
                >
                  a living fire.
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
              Patented 1969 in Pineda de Mar by Pere Juli and Josep Armangu&eacute;
              &mdash; restaurateurs of Mas Pi. The name fuses theirs:{" "}
              <span
                className="font-display italic"
                style={{ color: "var(--color-gold-text)" }}
              >
                Jos(ep) &middot; Per(e).
              </span>
            </p>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(10,22,40,0.14)",
            marginTop: "clamp(1.5rem, 2.5vw, 2.25rem)",
          }}
        />

        {/* Body — left narrative, right tech ledger */}
        <div
          className="grid grid-cols-12 gap-6 lg:gap-10 items-start"
          style={{ marginTop: "clamp(1.75rem, 3vw, 2.75rem)" }}
        >
          {/* Left narrative */}
          <div className="col-span-12 lg:col-span-6">
            <span
              aria-hidden="true"
              style={{
                color: "var(--color-gold-text)",
                letterSpacing: "0.32em",
                fontSize: "10px",
              }}
              className="block uppercase font-medium mb-3"
            >
              Timeline &mdash; No. 01
            </span>
            <p
              className="text-navy/85 font-light"
              style={{
                fontSize: "clamp(1rem, 1.15vw, 1.0625rem)",
                lineHeight: 1.65,
                maxWidth: "52ch",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontStyle: "italic",
                  color: "var(--color-gold-text)",
                  fontSize: "3.2em",
                  lineHeight: 0.85,
                  float: "left",
                  paddingRight: "0.1em",
                  paddingTop: "0.05em",
                  marginTop: "-0.02em",
                  fontWeight: 400,
                }}
              >
                J
              </span>
              osper builds the world&rsquo;s first{" "}
              <span className="font-display italic">patented</span> charcoal
              oven &mdash; a hybrid of the enclosed hearth and the live
              open-fire grill. The combustion chamber is sealed; the airflow
              regulated by damper; the flue cooled and shielded. Charcoal burns
              inside, not beneath, the food.
            </p>

            <p
              className="text-navy/80 font-light mt-5"
              style={{
                fontSize: "clamp(0.95rem, 1.05vw, 1rem)",
                lineHeight: 1.65,
                maxWidth: "52ch",
              }}
            >
              Half a century later, on{" "}
              <span
                className="font-display italic"
                style={{ color: "var(--color-gold-text)" }}
              >
                20 April 2018
              </span>
              , Josper joins{" "}
              <span className="font-display italic">
                The Middleby Corporation
              </span>{" "}
              &mdash; the American foodservice house. Headquarters remain in
              Pineda de Mar; ovens remain Spanish-manufactured. Engineering
              continuity, global support.
            </p>

            <div
              className="mt-6 flex items-center gap-3"
              style={{
                borderTop: "1px solid rgba(10,22,40,0.15)",
                paddingTop: "0.75rem",
              }}
            >
              <span
                className="font-display italic"
                style={{
                  color: "var(--color-gold-text)",
                  fontSize: "14px",
                }}
              >
                &#9758;
              </span>
              <span
                className="text-navy/65 font-light italic font-display"
                style={{ fontSize: "13px" }}
              >
                &ldquo;Grilling over charcoal as a way of life.&rdquo; &mdash;
                Josper house motto.
              </span>
            </div>
          </div>

          {/* Right — tech ledger */}
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 relative">
            <div
              style={{
                border: "1px solid rgba(10,22,40,0.14)",
                padding: "clamp(1.25rem, 1.8vw, 1.6rem)",
                backgroundColor: "rgba(255,255,255,0.6)",
              }}
              className="relative"
            >
              <span
                aria-hidden="true"
                className="absolute font-display italic"
                style={{
                  top: "-0.7em",
                  left: "1rem",
                  backgroundColor: "var(--color-offwhite)",
                  padding: "0 0.5rem",
                  color: "var(--color-gold-text)",
                  fontSize: "11px",
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                Tech Ledger
              </span>

              <TechRow
                index="i"
                label="Mechanism"
                value={
                  <>
                    Closed oven{" "}
                    <span className="font-display italic">&times;</span> live
                    charcoal fire
                  </>
                }
              />
              <TechRow
                index="ii"
                label="Operating range"
                value={
                  <span className="font-display italic">250 &ndash; 350 &deg;C</span>
                }
              />
              <TechRow
                index="iii"
                label="Fuel savings"
                value={
                  <>
                    Up to <span className="font-display italic">~40%</span>{" "}
                    less charcoal*
                  </>
                }
              />
              <TechRow
                index="iv"
                label="Regulation"
                value="Single damper, chef-controlled airflow"
              />
              <TechRow
                index="v"
                label="Construction"
                value="Cast iron chamber, stainless steel body"
              />
              <TechRow
                index="vi"
                label="Safety"
                value="Antispark, combustion shield, cooled flue, firebreak"
                last
              />

              <p
                className="mt-4 font-light italic"
                style={{
                  color: "rgba(10,22,40,0.55)",
                  fontSize: "11px",
                  lineHeight: 1.55,
                }}
              >
                * Josper&rsquo;s own claim vs. open-grill cooking &mdash; not
                independently audited.
              </p>
            </div>
          </div>
        </div>

        {/* Lifestyle image — oven in kitchen context */}
        <ScrollReveal>
          <figure
            className="relative overflow-hidden"
            style={{
              marginTop: "clamp(2rem, 3.5vw, 3rem)",
              aspectRatio: "16 / 7",
            }}
          >
            <Image
              src="/images/josper/lifestyle.jpg"
              alt="Josper charcoal oven installed in a professional restaurant kitchen"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-cover"
              style={{ filter: "contrast(1.05) brightness(0.96)" }}
            />
            <figcaption
              className="absolute bottom-4 left-4 right-4 flex items-end justify-between"
              style={{ zIndex: 2 }}
            >
              <span
                className="font-display italic"
                style={{
                  color: "var(--color-gold)",
                  fontSize: "12px",
                  letterSpacing: "0.18em",
                  textShadow: "0 1px 4px rgba(0,0,0,0.6)",
                }}
              >
                Plate 02 / In the kitchen
              </span>
              <span
                className="uppercase text-white/80"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.3em",
                  textShadow: "0 1px 4px rgba(0,0,0,0.6)",
                }}
              >
                Photo: Josper
              </span>
            </figcaption>
          </figure>
        </ScrollReveal>

        {/* Lower ledger — certifications + warranty */}
        <div
          className="grid grid-cols-12 gap-6 lg:gap-10"
          style={{
            marginTop: "clamp(2rem, 3.5vw, 3rem)",
            paddingTop: "clamp(1.25rem, 2vw, 1.75rem)",
            borderTop: "1px solid rgba(10,22,40,0.14)",
          }}
        >
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <span
              aria-hidden="true"
              style={{
                color: "var(--color-gold-text)",
                letterSpacing: "0.32em",
                fontSize: "10px",
              }}
              className="block uppercase font-medium mb-3"
            >
              Certifications
            </span>
            <p
              className="font-display italic"
              style={{
                color: "var(--color-navy)",
                fontSize: "clamp(1.125rem, 1.6vw, 1.5rem)",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              CE &middot; NSF &middot; UL &middot; GOST &middot; TR
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <span
              aria-hidden="true"
              style={{
                color: "var(--color-gold-text)",
                letterSpacing: "0.32em",
                fontSize: "10px",
              }}
              className="block uppercase font-medium mb-3"
            >
              Warranty
            </span>
            <p
              className="font-display italic text-navy"
              style={{
                fontSize: "clamp(1.125rem, 1.6vw, 1.5rem)",
                lineHeight: 1.2,
              }}
            >
              4 years, materials &amp; components
            </p>
            <p
              className="text-navy/65 font-light mt-1"
              style={{ fontSize: "12px", lineHeight: 1.55 }}
            >
              1-year coverage on internal chamber parts.
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
              Origin
            </span>
            <p
              className="font-display italic text-navy"
              style={{
                fontSize: "clamp(1.125rem, 1.6vw, 1.5rem)",
                lineHeight: 1.2,
              }}
            >
              Pineda de Mar, Spain
            </p>
            <p
              className="text-navy/65 font-light mt-1"
              style={{ fontSize: "12px", lineHeight: 1.55 }}
            >
              Manufactured in Catalonia &mdash; a Middleby company since 2018.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechRow({
  index,
  label,
  value,
  last = false,
}: {
  index: string;
  label: string;
  value: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div
      className="grid grid-cols-12 gap-3 items-baseline"
      style={{
        borderBottom: last ? "none" : "1px solid rgba(10,22,40,0.08)",
        paddingTop: "0.6rem",
        paddingBottom: "0.6rem",
      }}
    >
      <span
        className="col-span-1 font-display italic"
        style={{
          color: "var(--color-gold-text)",
          fontSize: "13px",
        }}
      >
        {index}
      </span>
      <span
        className="col-span-5 uppercase text-navy/60"
        style={{
          fontSize: "10px",
          letterSpacing: "0.24em",
          fontWeight: 500,
        }}
      >
        {label}
      </span>
      <span
        className="col-span-6 text-navy/85 font-light"
        style={{ fontSize: "13.5px", lineHeight: 1.5 }}
      >
        {value}
      </span>
    </div>
  );
}
