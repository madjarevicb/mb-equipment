import type { Locale } from "@/i18n/config";
import ScrollReveal from "../../../thermal-processing/_sections/ScrollReveal";

interface FamilyRow {
  name: string;
  spec: string;
  note: string;
}

interface BrandSpotlightProps {
  locale?: Locale;
}

const FAMILIES_EN: FamilyRow[] = [
  {
    name: "MAXI",
    spec: "Panels 400/600/800/1000/1200 mm wide × 60/80/100 mm thick",
    note: "20 cm modular grid — the workhorse range for HoReCa.",
  },
  {
    name: "SUPEREKO",
    spec: "Panels 400–1200 mm × 70/100/130 mm — floor or floorless, ramp option",
    note: "Heavier insulation tier — freezers and warm-climate duty.",
  },
  {
    name: "SUPER10",
    spec: "Entry-level cold-room kit",
    note: "Smaller chillers where the budget rules.",
  },
  {
    name: "Tecnodom Minicella",
    spec: "Pre-assembled 1×1 m, 60 mm insulation, +0/+8 °C, 1315 L, 230 V",
    note: "Plug-in mini cold room — no installation crew required.",
  },
];

const FAMILIES_SR: FamilyRow[] = [
  {
    name: "MAXI",
    spec: "Paneli 400/600/800/1000/1200 mm širine × 60/80/100 mm debljine",
    note: "20 cm modularna mreža — radni konj za HoReCa.",
  },
  {
    name: "SUPEREKO",
    spec: "Paneli 400–1200 mm × 70/100/130 mm — sa podom ili bez, opcija sa rampom",
    note: "Tariji nivo izolacije — zamrzivači i topla klima.",
  },
  {
    name: "SUPER10",
    spec: "Kit za rashladnu komoru ulaznog nivoa",
    note: "Manji rashladnici gde diktira budžet.",
  },
  {
    name: "Tecnodom Minicella",
    spec: "Predmontirana 1×1 m, 60 mm izolacija, +0/+8 °C, 1315 L, 230 V",
    note: "Plug-in mini komora — ne zahteva instalacioni tim.",
  },
];

export default function BrandSpotlight({ locale }: BrandSpotlightProps = {}) {
  const isSr = locale === "sr";
  const FAMILIES = isSr ? FAMILIES_SR : FAMILIES_EN;
  return (
    <section
      aria-labelledby="brand-spotlight"
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
                {isSr ? <>§ Tecnodom &mdash; JKS Refrigeration</> : <>&sect; Tecnodom &mdash; JKS Refrigeration</>}
              </span>
            </div>
            <ScrollReveal>
              <h2
                id="brand-spotlight"
                className="font-display font-bold text-navy"
                style={{
                  fontSize: "clamp(1.75rem, 3.8vw, 3rem)",
                  lineHeight: 0.94,
                  letterSpacing: "-0.02em",
                }}
              >
                {isSr ? "100% italijansko," : "100% Italian,"}
                <br />
                <span
                  className="italic font-normal"
                  style={{ color: "var(--color-gold-text)" }}
                >
                  {isSr ? "modularno u 20 cm." : "modular in 20 cm."}
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
              {isSr ? <>Tecnodom S.p.A. &mdash; osnovan{" "}
              <span
                className="font-display italic"
                style={{ color: "var(--color-gold-text)" }}
              >
                2000., Vigodarzere (Padova).
              </span>{" "}
              JKS Refrigeration, podbrend za montažne komore, osnovan je
              23. maja 2006. u Cadoneghe.</> : <>Tecnodom S.p.A. &mdash; founded{" "}
              <span
                className="font-display italic"
                style={{ color: "var(--color-gold-text)" }}
              >
                2000, Vigodarzere (Padova).
              </span>{" "}
              JKS Refrigeration, the modular cold-room sub-brand, was founded
              23 May 2006 in Cadoneghe.</>}
            </p>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(10,22,40,0.14)",
            marginTop: "clamp(1.5rem, 2.5vw, 2.25rem)",
          }}
        />

        {/* Body — left narrative, right product families ledger */}
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
              {isSr ? <>Profil kuće &mdash; br. 02</> : <>House profile &mdash; No. 02</>}
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
                T
              </span>
              {isSr ? (
                <>ecnodom gradi profesionalno hladno skladištenje u Veneto industrijskom
                koridoru &mdash;{" "}
                <span className="font-display italic">pet</span> proizvodnih
                pogona, 200+ zaposlenih, izvoz u 40+ zemalja. Proizvodnja
                je integrisana i italijanska; ništa se ne podizvodi u inostranstvu.</>
              ) : (
                <>ecnodom builds professional cold storage in the Veneto industrial
              corridor &mdash;{" "}
              <span className="font-display italic">five</span> production
              facilities, 200+ employees, exports to 40+ countries. Production
              is integrated and Italian; nothing is sub-let abroad.</>
              )}
            </p>

            <p
              className="text-navy/80 font-light mt-5"
              style={{
                fontSize: "clamp(0.95rem, 1.05vw, 1rem)",
                lineHeight: 1.65,
                maxWidth: "52ch",
              }}
            >
              {isSr ? (
                <><span className="font-display italic">JKS Refrigeration</span>{" "}
                &mdash; podbrend za montažne komore &mdash; ime nosi po tri sina
                osnivača Domiziana Giacon-a:{" "}
                <span
                  className="font-display italic"
                  style={{ color: "var(--color-gold-text)" }}
                >
                  Jonathan &middot; Kevin &middot; Steven.
                </span>{" "}
                Paneli su PUR injektirani pod visokim pritiskom, gustina 40&ndash;42
                kg/m&sup3;, udeo zatvorenih ćelija &ge; 95%. Predfarbano food-safe
                limeno oblaganje; cam-hook brave; bez CFC.</>
              ) : (
                <><span className="font-display italic">JKS Refrigeration</span>{" "}
              &mdash; the modular cold-room sub-brand &mdash; takes its name
              from founder Domiziano Giacon&rsquo;s three sons:{" "}
              <span
                className="font-display italic"
                style={{ color: "var(--color-gold-text)" }}
              >
                Jonathan &middot; Kevin &middot; Steven.
              </span>{" "}
              Panels are PUR-injected at high pressure, density 40&ndash;42
              kg/m&sup3;, closed-cell ratio &ge; 95%. Pre-painted food-safe
              sheet metal cladding; cam-hook locks; CFC-free.</>
              )}
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
                {isSr ? <>Jedan izvor servisa širom Italije &mdash; monoblock ili split, klapna ili klizna vrata, sa podom ili bez.</> : <>Single-source service across Italy &mdash; monoblock or split,
                hinged or sliding, floor or floorless.</>}
              </span>
            </div>
          </div>

          {/* Right — product families ledger */}
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
                {isSr ? "Familije proizvoda" : "Product Families"}
              </span>

              {FAMILIES.map((row, i) => (
                <FamilyEntry
                  key={row.name}
                  index={String(i + 1).padStart(2, "0")}
                  name={row.name}
                  spec={row.spec}
                  note={row.note}
                  last={i === FAMILIES.length - 1}
                />
              ))}

              <p
                className="mt-4 font-light italic"
                style={{
                  color: "rgba(10,22,40,0.55)",
                  fontSize: "11px",
                  lineHeight: 1.55,
                }}
              >
                {isSr ? <>Specifikacije se potvrđuju po projektu. Tecnodom katalog &mdash;
                pun matrica panela/vrata/podova na zahtev.</> : <>Specifications confirmed per project. Tecnodom catalog &mdash;
                full panel/door/floor matrix on request.</>}
              </p>
            </div>
          </div>
        </div>

        {/* Lower ledger — origin / production / standards */}
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
              {isSr ? "Poreklo" : "Origin"}
            </span>
            <p
              className="font-display italic text-navy"
              style={{
                fontSize: "clamp(1.125rem, 1.6vw, 1.5rem)",
                lineHeight: 1.2,
              }}
            >
              Vigodarzere, Padova
            </p>
            <p
              className="text-navy/65 font-light mt-1"
              style={{ fontSize: "12px", lineHeight: 1.55 }}
            >
              {isSr ? <>Tecnodom osn. 2000. &middot; JKS osn. 2006., Cadoneghe.</> : <>Tecnodom est. 2000 &middot; JKS est. 2006, Cadoneghe.</>}
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
              {isSr ? "Izolacija" : "Insulation"}
            </span>
            <p
              className="font-display italic text-navy"
              style={{
                fontSize: "clamp(1.125rem, 1.6vw, 1.5rem)",
                lineHeight: 1.2,
              }}
            >
              PUR 40&ndash;42 kg/m&sup3;
            </p>
            <p
              className="text-navy/65 font-light mt-1"
              style={{ fontSize: "12px", lineHeight: 1.55 }}
            >
              {isSr ? <>Zatvorene ćelije &ge; 95% &middot; bez CFC &middot; PIR opcija za panele sa protivpožarnim rangom (B-s2,d0).</> : <>Closed-cell &ge; 95% &middot; CFC-free &middot; PIR option for
              fire-rated panels (B-s2,d0).</>}
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
              {isSr ? "Konfiguracija" : "Configuration"}
            </span>
            <p
              className="font-display italic text-navy"
              style={{
                fontSize: "clamp(1.125rem, 1.6vw, 1.5rem)",
                lineHeight: 1.2,
              }}
            >
              {isSr ? <>Monoblock &middot; Split &middot; Remote</> : <>Monoblock &middot; Split &middot; Remote</>}
            </p>
            <p
              className="text-navy/65 font-light mt-1"
              style={{ fontSize: "12px", lineHeight: 1.55 }}
            >
              {isSr ? <>Klap ili klizna vrata &middot; sa podom, bez poda ili sa rampom.</> : <>Hinged or sliding doors &middot; floor, floorless or ramp.</>}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function FamilyEntry({
  index,
  name,
  spec,
  note,
  last = false,
}: {
  index: string;
  name: string;
  spec: string;
  note: string;
  last?: boolean;
}) {
  return (
    <div
      style={{
        borderBottom: last ? "none" : "1px solid rgba(10,22,40,0.08)",
        paddingTop: "0.7rem",
        paddingBottom: "0.7rem",
      }}
    >
      <div className="flex items-baseline gap-3">
        <span
          className="font-display italic"
          style={{
            color: "var(--color-gold-text)",
            fontSize: "12px",
            letterSpacing: "0.04em",
          }}
        >
          {index}
        </span>
        <span
          className="font-display italic text-navy"
          style={{
            fontSize: "clamp(1.05rem, 1.4vw, 1.25rem)",
            lineHeight: 1.15,
            letterSpacing: "-0.005em",
          }}
        >
          {name}
        </span>
      </div>
      <p
        className="text-navy/80 font-light mt-1"
        style={{ fontSize: "13px", lineHeight: 1.5 }}
      >
        {spec}
      </p>
      <p
        className="text-navy/55 font-light mt-1 italic font-display"
        style={{ fontSize: "12px", lineHeight: 1.55 }}
      >
        {note}
      </p>
    </div>
  );
}
