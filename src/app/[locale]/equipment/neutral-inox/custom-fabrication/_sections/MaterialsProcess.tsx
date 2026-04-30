import type { Locale } from "@/i18n/config";
import ScrollReveal from "../../../thermal-processing/_sections/ScrollReveal";

interface MaterialsProcessProps {
  locale?: Locale;
}

const MATERIAL_ROWS_EN: { label: string; value: string }[] = [
  { label: "Standard grade", value: "AISI 304 — food-grade stainless" },
  {
    label: "Marine / chemical",
    value: "AISI 316 — for chlorinated and corrosive environments",
  },
  { label: "Gauges", value: "1.0 / 1.2 / 1.5 / 2.0 mm — chosen by load and span" },
  { label: "Finish", value: "Brushed, satin, or scotch-brite — to specification" },
  { label: "Edges", value: "Rolled, hemmed, or marine-edge profiles" },
  { label: "Compliance", value: "CE-marked sheet stock from EU mills" },
];

const MATERIAL_ROWS_SR: { label: string; value: string }[] = [
  { label: "Standardni kvalitet", value: "AISI 304 — inox za hranu" },
  {
    label: "Marine / hemija",
    value: "AISI 316 — za hlorisana i korozivna okruženja",
  },
  { label: "Debljine", value: "1,0 / 1,2 / 1,5 / 2,0 mm — bira se prema opterećenju i rasponu" },
  { label: "Obrada", value: "Brušeno, satinirano ili scotch-brite — prema specifikaciji" },
  { label: "Ivice", value: "Zarolane, opšivene ili marine profili" },
  { label: "Usaglašenost", value: "CE-označen lim iz EU livnica" },
];

const PROCESS_STEPS_EN: { numeral: string; name: string; body: string }[] = [
  {
    numeral: "i",
    name: "Consult",
    body: "Brief, menu, workflow. We map the kitchen to the operation, not the other way around.",
  },
  {
    numeral: "ii",
    name: "Measure on site",
    body: "Our team takes the room — walls, services, clearances, drains — in person.",
  },
  {
    numeral: "iii",
    name: "CAD layout",
    body: "Drawings issued for sign-off: dimensions, gauges, finishes, services.",
  },
  {
    numeral: "iv",
    name: "Fabricate",
    body: "Cut, formed, welded, polished — in our Belgrade workshop, by our hands.",
  },
  {
    numeral: "v",
    name: "Install & commission",
    body: "Delivered, set, levelled, and signed off on site by the same team that built it.",
  },
];

const PROCESS_STEPS_SR: { numeral: string; name: string; body: string }[] = [
  {
    numeral: "i",
    name: "Konsultacija",
    body: "Brif, meni, tok rada. Mapiramo kuhinju prema operaciji, a ne obrnuto.",
  },
  {
    numeral: "ii",
    name: "Merenje na licu mesta",
    body: "Naš tim uzima prostoriju — zidove, instalacije, zazore, odvode — lično.",
  },
  {
    numeral: "iii",
    name: "CAD raspored",
    body: "Crteži za odobrenje: dimenzije, debljine, obrade, instalacije.",
  },
  {
    numeral: "iv",
    name: "Izrada",
    body: "Sečeno, formirano, zavarivano, polirano — u našoj beogradskoj radionici, našim rukama.",
  },
  {
    numeral: "v",
    name: "Instalacija i puštanje u rad",
    body: "Isporučeno, postavljeno, nivelisano i potpisano na licu mesta od strane istog tima koji je izgradio.",
  },
];

export default function MaterialsProcess({ locale }: MaterialsProcessProps = {}) {
  const isSr = locale === "sr";
  const MATERIAL_ROWS = isSr ? MATERIAL_ROWS_SR : MATERIAL_ROWS_EN;
  const PROCESS_STEPS = isSr ? PROCESS_STEPS_SR : PROCESS_STEPS_EN;
  return (
    <section
      aria-labelledby="custom-fab-process"
      className="relative bg-offwhite"
      style={{
        paddingTop: "clamp(2.5rem, 4.5vw, 4.5rem)",
        paddingBottom: "clamp(3rem, 5.5vw, 5.5rem)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 relative">
        {/* Section head */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end mb-10 lg:mb-14">
          <div className="col-span-12 lg:col-span-8">
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
                {isSr ? "Materijali i proces" : "Materials & Process"}
              </span>
            </div>
            <ScrollReveal>
              <h2
                id="custom-fab-process"
                className="font-display font-bold text-navy"
                style={{
                  fontSize: "clamp(1.75rem, 3.8vw, 3rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.02em",
                }}
              >
                {isSr ? "Nacrtano, sečeno," : "Drawn, cut,"}
                <br />
                <span
                  className="italic font-normal"
                  style={{ color: "var(--color-gold-text)" }}
                >
                  {isSr ? "zavarivano, završeno." : "welded, finished."}
                </span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pb-3">
            <span
              className="uppercase text-navy/60 block"
              style={{
                fontSize: "10px",
                letterSpacing: "0.3em",
              }}
            >
              {isSr ? "Tabak 03 / 06" : "Folio 03 / 06"}
            </span>
          </div>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">
          {/* Materials */}
          <div className="col-span-12 lg:col-span-6">
            <div
              style={{
                borderTop: "1px solid rgba(10,22,40,0.18)",
                paddingTop: "1.25rem",
              }}
            >
              <div className="flex items-baseline gap-3 mb-6">
                <span
                  className="font-display italic"
                  style={{
                    color: "var(--color-gold-text)",
                    fontSize: "20px",
                  }}
                >
                  §
                </span>
                <h3
                  className="font-display text-navy"
                  style={{
                    fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {isSr ? "Materijali" : "Materials"}
                </h3>
              </div>
              <dl>
                {MATERIAL_ROWS.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-12 gap-3 items-baseline"
                    style={{
                      borderTop: "1px solid rgba(10,22,40,0.1)",
                      paddingTop: "0.7rem",
                      paddingBottom: "0.7rem",
                    }}
                  >
                    <dt
                      className="col-span-4 uppercase text-navy/70 font-medium"
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.28em",
                      }}
                    >
                      {row.label}
                    </dt>
                    <dd
                      className="col-span-8 text-navy/85 font-light"
                      style={{
                        fontSize: "14px",
                        lineHeight: 1.55,
                      }}
                    >
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Process */}
          <div className="col-span-12 lg:col-span-6">
            <div
              style={{
                borderTop: "1px solid rgba(10,22,40,0.18)",
                paddingTop: "1.25rem",
              }}
            >
              <div className="flex items-baseline gap-3 mb-6">
                <span
                  className="font-display italic"
                  style={{
                    color: "var(--color-gold-text)",
                    fontSize: "20px",
                  }}
                >
                  §
                </span>
                <h3
                  className="font-display text-navy"
                  style={{
                    fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {isSr ? "Proces" : "Process"}
                </h3>
              </div>
              <ol>
                {PROCESS_STEPS.map((step) => (
                  <li
                    key={step.name}
                    className="grid grid-cols-12 gap-3 items-baseline"
                    style={{
                      borderTop: "1px solid rgba(10,22,40,0.1)",
                      paddingTop: "0.85rem",
                      paddingBottom: "0.85rem",
                    }}
                  >
                    <span
                      className="col-span-2 font-display italic"
                      style={{
                        color: "var(--color-gold-text)",
                        fontSize: "16px",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {step.numeral}.
                    </span>
                    <div className="col-span-10">
                      <h4
                        className="font-display text-navy"
                        style={{
                          fontSize: "16px",
                          fontWeight: 600,
                          letterSpacing: "-0.005em",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {step.name}
                      </h4>
                      <p
                        className="text-navy/70 font-light"
                        style={{
                          fontSize: "13.5px",
                          lineHeight: 1.55,
                          maxWidth: "44ch",
                        }}
                      >
                        {step.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Lead time note */}
        <div className="grid grid-cols-12 gap-6 mt-10 lg:mt-14">
          <div
            className="col-span-12 lg:col-span-10 lg:col-start-2 flex items-center gap-4"
            style={{
              borderTop: "1px solid rgba(10,22,40,0.15)",
              paddingTop: "1rem",
            }}
          >
            <span
              aria-hidden="true"
              style={{ backgroundColor: "var(--color-gold)" }}
              className="block h-px w-10 opacity-70"
            />
            <span
              className="font-display italic text-navy/75"
              style={{
                fontSize: "14px",
                lineHeight: 1.55,
              }}
            >
              {isSr ? "Rokovi isporuke variraju prema složenosti — tipično 2–4 nedelje od odobrenih crteža." : "Lead times vary by complexity — typically 2–4 weeks from approved drawings."}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
