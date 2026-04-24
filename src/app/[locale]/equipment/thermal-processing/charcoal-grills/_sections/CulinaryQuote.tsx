import Image from "next/image";
import ScrollReveal from "../../_sections/ScrollReveal";

/**
 * Chapter IV — Culinary positioning + Berasategui pull quote spread.
 */
export default function CulinaryQuote() {
  return (
    <section
      aria-labelledby="josper-culinary"
      className="relative bg-offwhite text-navy overflow-hidden"
      style={{
        paddingTop: "clamp(2.5rem, 4vw, 4rem)",
        paddingBottom: "clamp(3rem, 5.5vw, 5rem)",
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
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Left — positioning body */}
          <div className="col-span-12 lg:col-span-5">
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
                &sect; The Plate
              </span>
            </div>
            <ScrollReveal>
              <h2
                id="josper-culinary"
                className="font-display font-bold text-navy"
                style={{
                  fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)",
                  lineHeight: 0.96,
                  letterSpacing: "-0.02em",
                }}
              >
                What the
                <br />
                <span
                  className="italic font-normal"
                  style={{ color: "var(--color-gold-text)" }}
                >
                  sealed chamber
                </span>
                <br />
                does best.
              </h2>
            </ScrollReveal>

            <p
              className="text-navy/80 font-light mt-6"
              style={{
                fontSize: "clamp(0.95rem, 1.1vw, 1.0625rem)",
                lineHeight: 1.65,
                maxWidth: "44ch",
              }}
            >
              Sealed chamber, 250&ndash;350&nbsp;&deg;C, charcoal at the floor.
              The result is a Maillard crust and charcoal aroma that gas and
              electric lines cannot produce.
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-x-5 gap-y-2">
              {[
                "Steaks",
                "Whole fish",
                "Shellfish",
                "Seafood",
                "Vegetables",
                "Roasts",
                "Whole poultry",
                "Pizza & bread",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-baseline gap-2"
                  style={{
                    borderTop: "1px solid rgba(10,22,40,0.1)",
                    paddingTop: "0.55rem",
                  }}
                >
                  <span
                    aria-hidden="true"
                    className="font-display italic"
                    style={{
                      color: "var(--color-gold-text)",
                      fontSize: "12px",
                      lineHeight: 1,
                    }}
                  >
                    —
                  </span>
                  <span
                    className="text-navy/80 font-display italic"
                    style={{
                      fontSize: "clamp(0.95rem, 1.15vw, 1.0625rem)",
                      lineHeight: 1.3,
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Berasategui pull quote */}
          <div className="col-span-12 lg:col-span-7 lg:pl-4 relative">
            <div
              className="relative"
              style={{
                borderTop: "1px solid rgba(10,22,40,0.18)",
                paddingTop: "clamp(1.25rem, 2vw, 1.75rem)",
              }}
            >
              <span
                aria-hidden="true"
                className="absolute font-display italic pointer-events-none select-none"
                style={{
                  top: "-0.35em",
                  left: "-0.1em",
                  color: "var(--color-gold-text)",
                  opacity: 0.18,
                  fontSize: "clamp(6rem, 14vw, 13rem)",
                  lineHeight: 1,
                  letterSpacing: "-0.05em",
                }}
              >
                &ldquo;
              </span>

              <ScrollReveal as="blockquote" staggerLines>
                <span
                  className="font-display italic text-navy block"
                  style={{
                    fontSize: "clamp(1.5rem, 3.2vw, 2.75rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.015em",
                    fontWeight: 400,
                  }}
                >
                  I owe part of Berasategui&rsquo;s
                </span>
                <span
                  className="font-display italic block"
                  style={{
                    fontSize: "clamp(1.5rem, 3.2vw, 2.75rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.015em",
                    fontWeight: 400,
                    color: "var(--color-gold-text)",
                  }}
                >
                  Michelin stars to Josper.
                </span>
              </ScrollReveal>

              {/* Attribution */}
              <div
                className="mt-6 lg:mt-8 flex items-center gap-4"
                style={{
                  borderTop: "1px solid rgba(10,22,40,0.14)",
                  paddingTop: "1rem",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{ backgroundColor: "var(--color-gold)" }}
                  className="block h-px w-10"
                />
                <div>
                  <span
                    className="block font-display italic"
                    style={{
                      color: "var(--color-navy)",
                      fontSize: "clamp(0.95rem, 1.2vw, 1.125rem)",
                      lineHeight: 1.2,
                    }}
                  >
                    Mart&iacute;n Berasategui
                  </span>
                  <span
                    className="block uppercase text-navy/55 mt-1"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.28em",
                      fontWeight: 500,
                    }}
                  >
                    Restaurant Mart&iacute;n Berasategui &middot; 3 Michelin stars
                    &middot; Lasarte-Oria
                  </span>
                </div>
              </div>

              {/* Chef portrait */}
              <figure
                className="relative overflow-hidden mt-6 lg:mt-8"
                style={{ aspectRatio: "16 / 9" }}
              >
                <Image
                  src="/images/josper/chef-berasategui.jpg"
                  alt="Martín Berasategui with a Josper charcoal oven in his professional kitchen"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                <figcaption
                  className="absolute bottom-3 right-3 uppercase"
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontSize: "10px",
                    letterSpacing: "0.3em",
                    textShadow: "0 1px 4px rgba(0,0,0,0.7)",
                  }}
                >
                  Photo: Josper
                </figcaption>
              </figure>

              {/* Secondary note — Etxebarri */}
              <p
                className="mt-6 text-navy/65 font-light italic font-display"
                style={{
                  fontSize: "13px",
                  lineHeight: 1.6,
                  maxWidth: "52ch",
                }}
              >
                Further collaboration: V&iacute;ctor Arguinzoniz of{" "}
                <span style={{ color: "var(--color-gold-text)" }}>
                  Asador Etxebarri
                </span>{" "}
                (Atxondo, Vizcaya) co-developed the Josper Basque Grill. Josper
                equipment is specified in Michelin-starred kitchens across
                Europe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
