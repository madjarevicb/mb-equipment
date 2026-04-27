import ScrollReveal from "../../../../thermal-processing/_sections/ScrollReveal";

export default function HouseQuote() {
  return (
    <section
      aria-hidden="true"
      className="relative bg-offwhite"
      style={{
        paddingTop: "clamp(3rem, 5.5vw, 5.25rem)",
        paddingBottom: "clamp(3rem, 5.5vw, 5.25rem)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 relative">
        <div
          aria-hidden="true"
          className="hidden lg:block absolute inset-y-0 left-6 right-6 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(10,22,40,0.08) 1px, transparent 1px)",
            backgroundSize: "calc(100% / 12) 100%",
          }}
        />
        <div className="grid grid-cols-12 gap-6 relative">
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
              Engineering catering solutions
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
              for more than 110 years.
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
              IMC, Lincoln — a Middleby brand since 2018
            </span>
          </div>
        </div>

        {/* Reference notes */}
        <div className="grid grid-cols-12 gap-6 mt-10 lg:mt-14">
          <div className="col-span-12 lg:col-span-8 lg:col-start-2">
            <span
              className="uppercase block mb-3"
              style={{
                color: "var(--color-gold-text)",
                fontSize: "10px",
                letterSpacing: "0.32em",
                fontWeight: 500,
              }}
            >
              § Verified References
            </span>
            <ul className="space-y-3">
              <li
                className="grid grid-cols-12 gap-3"
                style={{
                  borderTop: "1px solid rgba(10,22,40,0.12)",
                  paddingTop: "0.75rem",
                }}
              >
                <span
                  className="col-span-12 md:col-span-4 font-display italic text-navy"
                  style={{ fontSize: "14px" }}
                >
                  Ramada Hotel &amp; Suites, Ajman
                </span>
                <span
                  className="col-span-12 md:col-span-8 text-navy/70 font-light"
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.55,
                    fontStyle: "italic",
                    fontFamily: "var(--font-display), serif",
                  }}
                >
                  UAE&rsquo;s first hotel Zero-Landfill project — 90% landfill
                  diversion sustained over five years.
                </span>
              </li>
              <li
                className="grid grid-cols-12 gap-3"
                style={{
                  borderTop: "1px solid rgba(10,22,40,0.12)",
                  paddingTop: "0.75rem",
                }}
              >
                <span
                  className="col-span-12 md:col-span-4 font-display italic text-navy"
                  style={{ fontSize: "14px" }}
                >
                  intu Metrocentre, Gateshead
                </span>
                <span
                  className="col-span-12 md:col-span-8 text-navy/70 font-light"
                  style={{
                    fontSize: "13px",
                    lineHeight: 1.55,
                    fontStyle: "italic",
                    fontFamily: "var(--font-display), serif",
                  }}
                >
                  WasteStation case study published by IMC for one of the UK&rsquo;s
                  largest shopping centres.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
