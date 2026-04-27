import ScrollReveal from "../../../thermal-processing/_sections/ScrollReveal";

export default function EngineeringQuote() {
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
        {/* Column rules */}
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
                fontSize: "clamp(1.6rem, 3.2vw, 2.95rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.015em",
                fontWeight: 400,
              }}
            >
              Italian design and English engineering —
            </span>
            <span
              className="font-display italic block"
              style={{
                fontSize: "clamp(1.6rem, 3.2vw, 2.95rem)",
                lineHeight: 1.04,
                letterSpacing: "-0.015em",
                fontWeight: 400,
                color: "var(--color-gold-text)",
              }}
            >
              specified to your menu, not the other way around.
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
              MB Equipment — Engineering Note
            </span>
            <span
              aria-hidden="true"
              style={{ backgroundColor: "var(--color-gold)" }}
              className="block h-px flex-1 opacity-30"
            />
            <span
              className="uppercase text-navy/55"
              style={{ fontSize: "10px", letterSpacing: "0.32em" }}
            >
              Folio 04 / 05
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
