import Image from "next/image";
import ScrollReveal from "../../_sections/ScrollReveal";

export interface InvoqRow {
  series: string;
  brand: string;
  steam: string;
  sizes: string;
  positioning: string;
}

export const INVOQ_SERIES: InvoqRow[] = [
  {
    series: "Invoq Combi",
    brand: "Houno",
    steam: "Injection steam",
    sizes: "6 · 10 · 20 trays — 1/1 + 2/1 GN",
    positioning: "The flagship — every cooking method, every kitchen scale.",
  },
  {
    series: "Invoq Hybrid",
    brand: "Houno",
    steam: "Boiler-driven + injection",
    sizes: "6 · 10 · 20 trays — 1/1 + 2/1 GN",
    positioning: "High-end gastronomy — saturated steam at low temperatures.",
  },
  {
    series: "Invoq Bake",
    brand: "Houno",
    steam: "Patisserie format",
    sizes: "6 · 9 trays — EN 400 × 600",
    positioning: "Bakery & pâtisserie — viennoiserie, sourdough, pastry.",
  },
  {
    series: "Invoq miniCombi",
    brand: "Houno",
    steam: "51.3 cm wide",
    sizes: "5 · 6 · 10 trays — 1/1 GN",
    positioning: "QSR, cafés, ghost kitchens — counter-top footprint.",
  },
  {
    series: "Invoq PassThrough",
    brand: "Houno",
    steam: "Dual glass doors",
    sizes: "6-1/1 · 10-1/1",
    positioning: "Cook-chill workflows — clean kitchen separation.",
  },
  {
    series: "Lincat CombiSlim",
    brand: "Lincat",
    steam: "513 mm narrow · stackable",
    sizes: "6 · 10 trays — 1/1 GN",
    positioning: "Tight kitchens — optional Hoodini ventless hood.",
  },
];

const LEDGER_IMAGES = [
  {
    src: "/images/houno-lincat/invoq-10-1gn-main.png",
    caption: "Invoq Combi 10-1/1 GN",
    note: "19.3 kW · 45 kg food load",
  },
  {
    src: "/images/houno-lincat/invoq-10-1gn-angle2.png",
    caption: "Invoq — chamber view",
    note: "Ventilated double-glass door",
  },
  {
    src: "/images/houno-lincat/invoq-10-1gn-angle3.png",
    caption: "Invoq — control side",
    note: "SmartTouch® · Open Kitchen cloud",
  },
];

export default function InvoqLedger() {
  return (
    <section
      aria-labelledby="combi-ledger"
      className="relative bg-navy text-white overflow-hidden"
      style={{
        paddingTop: "clamp(2.5rem, 4vw, 4rem)",
        paddingBottom: "clamp(3rem, 5.5vw, 5rem)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 relative">
        {/* Head */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
          <div className="col-span-12 lg:col-span-8">
            <div className="flex items-center gap-4 mb-5">
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
                The Invoq Family Ledger
              </span>
            </div>
            <ScrollReveal>
              <h2
                id="combi-ledger"
                className="font-display font-bold text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.8vw, 3rem)",
                  lineHeight: 0.94,
                  letterSpacing: "-0.02em",
                }}
              >
                Six families,
                <br />
                <span
                  className="italic font-normal"
                  style={{ color: "var(--color-gold)" }}
                >
                  one platform.
                </span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pb-3">
            <p
              className="text-white/65 font-light"
              style={{
                fontSize: "14px",
                lineHeight: 1.65,
                maxWidth: "32ch",
              }}
            >
              Five Houno series and the Lincat CombiSlim — all driven by the
              same Invoq engine, controls and cloud. From 5-tray countertop to
              20 × 2/1 GN roll-in.
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

        {/* Column header */}
        <div
          className="hidden lg:grid grid-cols-12 gap-4"
          style={{
            paddingTop: "1rem",
            paddingBottom: "0.6rem",
            borderBottom: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          <ColHead cols="col-span-1" label="No." />
          <ColHead cols="col-span-3" label="Series" />
          <ColHead cols="col-span-2" label="Brand" />
          <ColHead cols="col-span-3" label="Format" />
          <ColHead cols="col-span-3" label="Sizes" />
        </div>

        {/* Rows */}
        <ol className="relative">
          {INVOQ_SERIES.map((row, i) => (
            <li
              key={row.series}
              style={{
                borderBottom: "1px solid rgba(201,168,76,0.18)",
              }}
            >
              <div
                className="grid grid-cols-12 gap-3 lg:gap-4 items-baseline"
                style={{
                  paddingTop: "clamp(0.9rem, 1.3vw, 1.25rem)",
                  paddingBottom: "clamp(0.9rem, 1.3vw, 1.25rem)",
                }}
              >
                {/* Serial */}
                <div className="col-span-3 lg:col-span-1">
                  <span
                    className="font-display italic"
                    style={{
                      color: "var(--color-gold)",
                      fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    No. {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Series */}
                <div className="col-span-9 lg:col-span-3">
                  <span
                    className="font-display text-white block"
                    style={{
                      fontSize: "clamp(1.125rem, 2vw, 1.625rem)",
                      lineHeight: 1.05,
                      letterSpacing: "-0.01em",
                      fontWeight: 400,
                      fontStyle: "italic",
                    }}
                  >
                    {row.series}
                  </span>
                  <span
                    className="block text-white/55 font-display italic mt-1 lg:hidden"
                    style={{ fontSize: "12px", lineHeight: 1.5 }}
                  >
                    {row.positioning}
                  </span>
                </div>

                <div className="col-span-12 lg:col-span-2">
                  <Stat mobileLabel="Brand" value={row.brand} />
                </div>
                <div className="col-span-12 lg:col-span-3">
                  <Stat mobileLabel="Format" value={row.steam} />
                </div>
                <div className="col-span-12 lg:col-span-3">
                  <Stat mobileLabel="Sizes" value={row.sizes} />
                </div>

                {/* Desktop positioning row */}
                <div className="hidden lg:block col-start-2 col-span-11 mt-1">
                  <span
                    className="text-white/55 font-display italic"
                    style={{ fontSize: "12px", lineHeight: 1.5 }}
                  >
                    {row.positioning}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* Product strip — Houno Invoq angles, on subtle navy panels */}
        <ScrollReveal>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10"
            style={{ marginTop: "clamp(2.5rem, 4.5vw, 4rem)" }}
          >
            {LEDGER_IMAGES.map((p) => (
              <figure
                key={p.caption}
                className="relative"
                style={{
                  borderTop: "1px solid rgba(201,168,76,0.3)",
                  paddingTop: "1.25rem",
                }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{
                    aspectRatio: "4 / 5",
                    background:
                      "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(201,168,76,0.06) 100%)",
                    border: "1px solid rgba(201,168,76,0.18)",
                  }}
                >
                  <Image
                    src={p.src}
                    alt={`${p.caption} — Houno Invoq combi oven product render`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain"
                    style={{ padding: "10%" }}
                  />
                </div>
                <figcaption className="mt-4">
                  <p
                    className="font-display italic"
                    style={{
                      color: "var(--color-gold)",
                      fontSize: "13px",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {p.caption}
                  </p>
                  <p
                    className="text-white/70 mt-1 font-light"
                    style={{ fontSize: "12.5px" }}
                  >
                    {p.note}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </ScrollReveal>

        {/* Footer mark */}
        <div className="mt-8 lg:mt-10 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-7 flex items-center gap-4">
            <span
              aria-hidden="true"
              className="font-display italic"
              style={{ color: "var(--color-gold)", fontSize: "14px" }}
            >
              &#9758;
            </span>
            <span
              className="text-white/60 font-light"
              style={{ fontSize: "13px" }}
            >
              Invoq is a 6-year R&amp;D collaboration across five Middleby
              houses &mdash; Blodgett, BKI, Dieta, Leventi and Lincat.
              Specifications confirmed per unit at quotation.
            </span>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:text-right">
            <span
              className="uppercase text-white/50"
              style={{ fontSize: "10px", letterSpacing: "0.32em" }}
            >
              Folio 03 / 05
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ColHead({ cols, label }: { cols: string; label: string }) {
  return (
    <span
      className={`${cols} uppercase text-white/55`}
      style={{
        fontSize: "10px",
        letterSpacing: "0.28em",
        fontWeight: 500,
      }}
    >
      {label}
    </span>
  );
}

function Stat({
  mobileLabel,
  value,
}: {
  mobileLabel: string;
  value: string;
}) {
  return (
    <div className="flex lg:block items-baseline gap-3">
      <span
        className="lg:hidden uppercase text-white/45"
        style={{
          fontSize: "10px",
          letterSpacing: "0.22em",
          fontWeight: 500,
          minWidth: "9ch",
        }}
      >
        {mobileLabel}
      </span>
      <span
        className="text-white font-light"
        style={{
          fontSize: "clamp(0.95rem, 1.05vw, 1.0625rem)",
          lineHeight: 1.4,
          letterSpacing: "0.01em",
        }}
      >
        {value}
      </span>
    </div>
  );
}
