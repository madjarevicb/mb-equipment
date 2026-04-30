import type { Locale } from "@/i18n/config";
import ScrollReveal from "../../../thermal-processing/_sections/ScrollReveal";

interface Scoreline {
  metric: string;
  label: string;
  note: string;
}

interface ComplianceQuoteProps {
  locale?: Locale;
}

const SCORELINES_EN: Scoreline[] = [
  {
    metric: "CE",
    label: "Marking",
    note: "Machinery 2006/42/EC · LVD 2014/35/EU · EMC 2014/30/EU · PED 2014/68/EU.",
  },
  {
    metric: "F-Gas 2024/573",
    label: "In force 11 March 2024",
    note: "GWP 150 limit on new self-contained equipment from 2025; HFC service phase-down.",
  },
  {
    metric: "GWP 3",
    label: "R290 — propane",
    note: "Natural refrigerant. Future-proof against the 2032 service ban (GWP > 750).",
  },
  {
    metric: "2–5 days",
    label: "Typical install",
    note: "For cold rooms ≤ 200 m³ — plus 1–2 days commissioning.",
  },
  {
    metric: "20 cm",
    label: "JKS modular grid",
    note: "Panel widths 400/600/800/1000/1200 mm — freely combinable on site.",
  },
];

const SCORELINES_SR: Scoreline[] = [
  {
    metric: "CE",
    label: "Označavanje",
    note: "Machinery 2006/42/EC · LVD 2014/35/EU · EMC 2014/30/EU · PED 2014/68/EU.",
  },
  {
    metric: "F-Gas 2024/573",
    label: "Na snazi od 11. marta 2024.",
    note: "GWP 150 ograničenje za novu samostalnu opremu od 2025; postepeno ukidanje HFC servisa.",
  },
  {
    metric: "GWP 3",
    label: "R290 — propan",
    note: "Prirodno rashladno sredstvo. Budućnost-spreman uprkos zabrani servisa od 2032 (GWP > 750).",
  },
  {
    metric: "2–5 dana",
    label: "Tipična instalacija",
    note: "Za komore ≤ 200 m³ — plus 1–2 dana puštanja u rad.",
  },
  {
    metric: "20 cm",
    label: "JKS modularna mreža",
    note: "Širine panela 400/600/800/1000/1200 mm — slobodno kombinabilni na licu mesta.",
  },
];

export default function ComplianceQuote({ locale }: ComplianceQuoteProps = {}) {
  const isSr = locale === "sr";
  const SCORELINES = isSr ? SCORELINES_SR : SCORELINES_EN;
  return (
    <section
      aria-labelledby="cold-rooms-compliance"
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
          {/* Left — head + scoreboard */}
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
                {isSr ? <>§ Usaglašenost i održivost</> : <>&sect; Compliance &amp; Sustainability</>}
              </span>
            </div>
            <ScrollReveal>
              <h2
                id="cold-rooms-compliance"
                className="font-display font-bold text-navy"
                style={{
                  fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)",
                  lineHeight: 0.96,
                  letterSpacing: "-0.02em",
                }}
              >
                {isSr ? "Specifikovano za" : "Specified for"}
                <br />
                <span
                  className="italic font-normal"
                  style={{ color: "var(--color-gold-text)" }}
                >
                  {isSr ? "sledeću uredbu," : "the next regulation,"}
                </span>
                <br />
                {isSr ? "ne za poslednju." : "not the last."}
              </h2>
            </ScrollReveal>

            <p
              className="text-navy/80 font-light mt-6"
              style={{
                fontSize: "clamp(0.95rem, 1.1vw, 1.0625rem)",
                lineHeight: 1.65,
                maxWidth: "48ch",
              }}
            >
              {isSr ? <>EU F-Gas Uredba je 11. marta 2024. ponovo napisala pravilnik.
              Nove rashladne komore koje se danas specifikuju radiće petnaest godina &mdash;
              inženjeriramo za rashladna sredstva koja preživljavaju postepeno ukidanje.</> : <>The EU F-Gas Regulation rewrote the rulebook on 11 March 2024.
              New cold rooms specified today will run for fifteen years &mdash;
              we engineer for refrigerants that survive the phase-down.</>}
            </p>

            {/* Scoreboard */}
            <ul className="mt-8 grid grid-cols-1 gap-y-3">
              {SCORELINES.map((s, i) => (
                <li
                  key={s.metric}
                  className="grid grid-cols-12 gap-3 items-baseline"
                  style={{
                    borderTop: "1px solid rgba(10,22,40,0.12)",
                    paddingTop: "0.7rem",
                    paddingBottom: "0.2rem",
                  }}
                >
                  <span
                    className="col-span-1 font-display italic"
                    style={{
                      color: "var(--color-gold-text)",
                      fontSize: "12px",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-11 md:col-span-5">
                    <span
                      className="font-display italic block text-navy"
                      style={{
                        fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)",
                        lineHeight: 1.15,
                        letterSpacing: "-0.005em",
                      }}
                    >
                      {s.metric}
                    </span>
                    <span
                      className="block uppercase text-navy/55 mt-1"
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.26em",
                        fontWeight: 500,
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                  <p
                    className="col-span-12 md:col-span-6 text-navy/75 font-light"
                    style={{ fontSize: "13px", lineHeight: 1.6 }}
                  >
                    {s.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Pull quote spread */}
          <div className="col-span-12 lg:col-span-5 lg:pl-4 relative">
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
                    fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.015em",
                    fontWeight: 400,
                  }}
                >
                  {isSr ? "Hladno skladište koje" : "Cold storage that"}
                </span>
                <span
                  className="font-display italic block"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.015em",
                    fontWeight: 400,
                    color: "var(--color-gold-text)",
                  }}
                >
                  {isSr ? "se ulazi," : "walks in,"}
                </span>
                <span
                  className="font-display italic text-navy block"
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                    lineHeight: 1.05,
                    letterSpacing: "-0.015em",
                    fontWeight: 400,
                  }}
                >
                  {isSr ? "i izlazi." : "and walks out."}
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
                    {isSr ? <>MB Equipment &middot; Reč kuće</> : <>MB Equipment &middot; House Note</>}
                  </span>
                  <span
                    className="block uppercase text-navy/55 mt-1"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.28em",
                      fontWeight: 500,
                    }}
                  >
                    {isSr ? "O Tecnodom / JKS montažnom slučaju" : "On the Tecnodom / JKS modular case"}
                  </span>
                </div>
              </div>

              {/* Secondary note — refrigerants */}
              <p
                className="mt-6 text-navy/70 font-light italic font-display"
                style={{
                  fontSize: "13px",
                  lineHeight: 1.65,
                  maxWidth: "44ch",
                }}
              >
                {isSr ? <>Tri rashladna sredstva preživljavaju dugo postepeno ukidanje:{" "}
                <span style={{ color: "var(--color-gold-text)" }}>
                  R290 (propan, GWP 3)
                </span>
                , R744 (CO&sub2;, GWP 1) i R717 (amonijak). Za nove
                komercijalne rashladne komore, R290 monoblok-ovi su dominantna
                specifikacija u EU.</> : <>Three refrigerants survive the long phase-down:{" "}
                <span style={{ color: "var(--color-gold-text)" }}>
                  R290 (propane, GWP 3)
                </span>
                , R744 (CO&sub2;, GWP 1), and R717 (ammonia). For new
                commercial cold rooms, R290 monoblocks are the dominant
                specification across the EU.</>}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
