import Image from "next/image";
import ScrollReveal from "../../_sections/ScrollReveal";

const PRODUCT_STRIP = [
  {
    model: "HJX Pro S80",
    caption: "Small — up to ~80 covers",
    src: "/images/josper/hjx-pro-S80.jpg",
  },
  {
    model: "HJX Pro M120",
    caption: "Medium — up to ~120 covers",
    src: "/images/josper/hjx-pro-M120.jpg",
  },
  {
    model: "HJX Pro L175",
    caption: "Large — up to ~175 covers",
    src: "/images/josper/hjx-pro-L175.jpg",
  },
];

export interface HjxRow {
  model: string;
  diners: string;
  fireUp: string;
  fuel: string;
  autonomy: string;
}

export const HJX_MODELS: HjxRow[] = [
  {
    model: "HJX-15",
    diners: "~30",
    fireUp: "~25 min",
    fuel: "1.5 – 2.5 kg",
    autonomy: "6 h",
  },
  {
    model: "HJX-20 Mini",
    diners: "~40",
    fireUp: "~25 min",
    fuel: "6 – 8 kg",
    autonomy: "7 h",
  },
  {
    model: "HJX-25 Small",
    diners: "~80",
    fireUp: "~30 min",
    fuel: "10 – 12 kg",
    autonomy: "9 h",
  },
  {
    model: "HJX-45 Medium",
    diners: "~120",
    fireUp: "~35 min",
    fuel: "12 – 16 kg",
    autonomy: "9 h",
  },
  {
    model: "HJX-50 Large",
    diners: "~175",
    fireUp: "~40 min",
    fuel: "16 – 20 kg",
    autonomy: "9 h",
  },
];

const OTHER_FAMILIES = [
  { name: "HJX-PRO", note: "Upgraded tier" },
  { name: "HJA Class A", note: "Premium line" },
  { name: "CVJ Combos", note: "Oven + Basque grill" },
  { name: "PVJ", note: "Basque grills" },
  { name: "ASJ", note: "Rotisseries" },
  { name: "MGJ", note: "Mangal" },
];

export default function Lineup() {
  return (
    <section
      aria-labelledby="josper-lineup"
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
                HJX Ledger &mdash; Charcoal Ovens
              </span>
            </div>
            <ScrollReveal>
              <h2
                id="josper-lineup"
                className="font-display font-bold text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.8vw, 3rem)",
                  lineHeight: 0.94,
                  letterSpacing: "-0.02em",
                }}
              >
                Five sizes,
                <br />
                <span
                  className="italic font-normal"
                  style={{ color: "var(--color-gold)" }}
                >
                  one mechanism.
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
              From café service to 175-cover steakhouses &mdash; each HJX unit
              shares the same sealed combustion chamber. Sized to your daily
              cover count and charcoal budget.
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
          <ColHead cols="col-span-3" label="Model" />
          <ColHead cols="col-span-2" label="Diners / day" />
          <ColHead cols="col-span-2" label="Fire-up" />
          <ColHead cols="col-span-2" label="Daily charcoal" />
          <ColHead cols="col-span-2" label="Autonomy" />
        </div>

        {/* Rows */}
        <ol className="relative">
          {HJX_MODELS.map((row, i) => (
            <li
              key={row.model}
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

                {/* Model */}
                <div className="col-span-9 lg:col-span-3">
                  <span
                    className="font-display text-white block"
                    style={{
                      fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)",
                      lineHeight: 1,
                      letterSpacing: "-0.01em",
                      fontWeight: 400,
                      fontStyle: "italic",
                    }}
                  >
                    {row.model}
                  </span>
                </div>

                {/* Stats — stack on mobile, grid on lg */}
                <div className="col-span-12 lg:col-span-2">
                  <Stat
                    mobileLabel="Diners"
                    value={row.diners}
                  />
                </div>
                <div className="col-span-12 lg:col-span-2">
                  <Stat
                    mobileLabel="Fire-up"
                    value={row.fireUp}
                  />
                </div>
                <div className="col-span-12 lg:col-span-2">
                  <Stat
                    mobileLabel="Charcoal / day"
                    value={row.fuel}
                  />
                </div>
                <div className="col-span-12 lg:col-span-2">
                  <Stat
                    mobileLabel="Autonomy"
                    value={row.autonomy}
                  />
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* Product strip — S / M / L silhouettes */}
        <ScrollReveal>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10"
            style={{ marginTop: "clamp(2.5rem, 4.5vw, 4rem)" }}
          >
            {PRODUCT_STRIP.map((p) => (
              <figure
                key={p.model}
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
                    backgroundColor: "rgba(255,255,255,0.02)",
                  }}
                >
                  <Image
                    src={p.src}
                    alt={`Josper ${p.model} charcoal oven — product photograph`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain"
                    style={{ padding: "8%" }}
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
                    {p.model}
                  </p>
                  <p
                    className="text-white/70 mt-1 font-light"
                    style={{ fontSize: "13px" }}
                  >
                    {p.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </ScrollReveal>

        {/* Other families */}
        <div
          className="grid grid-cols-12 gap-6 lg:gap-10 items-start"
          style={{ marginTop: "clamp(2.5rem, 4vw, 3.5rem)" }}
        >
          <div className="col-span-12 lg:col-span-5">
            <span
              aria-hidden="true"
              style={{
                color: "var(--color-gold)",
                letterSpacing: "0.32em",
                fontSize: "10px",
              }}
              className="block uppercase font-medium mb-3"
            >
              Also in the catalog
            </span>
            <p
              className="font-display italic text-white/80 mb-5"
              style={{
                fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
                lineHeight: 1.3,
              }}
            >
              Beyond the HJX &mdash; six further families.
            </p>
            <figure
              className="relative overflow-hidden"
              style={{ aspectRatio: "4 / 5" }}
            >
              <Image
                src="/images/josper/pvj-basque-grill.jpg"
                alt="Josper PVJ Basque Grill in operation at Basuki restaurant in Bilbao"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <figcaption
                className="absolute bottom-3 left-3 right-3 flex items-end justify-between"
                style={{ zIndex: 2 }}
              >
                <span
                  className="font-display italic"
                  style={{
                    color: "var(--color-gold)",
                    fontSize: "11px",
                    letterSpacing: "0.18em",
                    textShadow: "0 1px 4px rgba(0,0,0,0.7)",
                  }}
                >
                  PVJ Basque Grill — Basuki, Bilbao
                </span>
                <span
                  className="uppercase"
                  style={{
                    color: "rgba(255,255,255,0.75)",
                    fontSize: "10px",
                    letterSpacing: "0.3em",
                    textShadow: "0 1px 4px rgba(0,0,0,0.7)",
                  }}
                >
                  Photo: Josper
                </span>
              </figcaption>
            </figure>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3">
              {OTHER_FAMILIES.map((f, i) => (
                <li
                  key={f.name}
                  className="flex items-baseline gap-3"
                  style={{
                    borderTop: "1px solid rgba(201,168,76,0.2)",
                    paddingTop: "0.6rem",
                  }}
                >
                  <span
                    className="font-display italic"
                    style={{
                      color: "var(--color-gold)",
                      fontSize: "11px",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span
                      className="block text-white font-display italic"
                      style={{
                        fontSize: "clamp(0.95rem, 1.2vw, 1.125rem)",
                        lineHeight: 1.1,
                      }}
                    >
                      {f.name}
                    </span>
                    <span
                      className="block text-white/55 uppercase"
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.22em",
                        marginTop: "0.2rem",
                      }}
                    >
                      {f.note}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer mark */}
        <div className="mt-8 lg:mt-10 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6 flex items-center gap-4">
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
              Specifications published by Josper &mdash; confirmed per unit at
              quotation.
            </span>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:text-right">
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
          fontSize: "clamp(0.95rem, 1.1vw, 1.0625rem)",
          lineHeight: 1.3,
          letterSpacing: "0.01em",
        }}
      >
        {value}
      </span>
    </div>
  );
}
