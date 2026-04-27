import ScrollReveal from "../../../thermal-processing/_sections/ScrollReveal";

export interface PanelRow {
  thickness: string;
  temp: string;
  application: string;
}

export const PANEL_ROWS: PanelRow[] = [
  {
    thickness: "60 mm",
    temp: "0 to +8 °C",
    application: "Light chillers, beverage rooms",
  },
  {
    thickness: "70–80 mm",
    temp: "0 to +8 °C",
    application: "Standard walk-in coolers — HoReCa default",
  },
  {
    thickness: "100 mm",
    temp: "−18 to −22 °C",
    application: "Standard walk-in freezers",
  },
  {
    thickness: "120–130 mm",
    temp: "−22 to −25 °C",
    application: "Freezers in warm climates / high duty",
  },
  {
    thickness: "150 mm",
    temp: "−30 to −35 °C",
    application: "Blast freezers — industrial",
  },
  {
    thickness: "200 mm",
    temp: "Below −30 °C",
    application: "Ultra-low / blast / industrial chains",
  },
];

export default function PanelLedger() {
  return (
    <section
      aria-labelledby="panel-ledger"
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
                The Panel Ledger &mdash; Six Form Factors
              </span>
            </div>
            <ScrollReveal>
              <h2
                id="panel-ledger"
                className="font-display font-bold text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.8vw, 3rem)",
                  lineHeight: 0.94,
                  letterSpacing: "-0.02em",
                }}
              >
                Panel thickness
                <br />
                <span
                  className="italic font-normal"
                  style={{ color: "var(--color-gold)" }}
                >
                  decides the duty.
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
              Insulation thickness is the first specification &mdash; it sets
              the achievable temperature, the energy footprint, and the panel
              cost. Six form factors cover the range from beverage chiller to
              industrial blast freezer.
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
          <ColHead cols="col-span-3" label="Thickness" />
          <ColHead cols="col-span-3" label="Temperature" />
          <ColHead cols="col-span-5" label="Application" />
        </div>

        {/* Rows */}
        <ol className="relative">
          {PANEL_ROWS.map((row, i) => (
            <li
              key={row.thickness + row.application}
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

                {/* Thickness */}
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
                    {row.thickness}
                  </span>
                </div>

                {/* Temperature */}
                <div className="col-span-12 lg:col-span-3">
                  <Stat mobileLabel="Temperature" value={row.temp} />
                </div>

                {/* Application */}
                <div className="col-span-12 lg:col-span-5">
                  <Stat mobileLabel="Application" value={row.application} />
                </div>
              </div>
            </li>
          ))}
        </ol>

        {/* Footer mark */}
        <div className="mt-8 lg:mt-10 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8 flex items-center gap-4">
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
              JKS modular grid &mdash;{" "}
              <span className="text-white/85">20 cm</span> increments. Panel
              widths 400/600/800/1000/1200 mm; freely combinable.
            </span>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:text-right">
            <span
              className="uppercase text-white/50"
              style={{ fontSize: "10px", letterSpacing: "0.32em" }}
            >
              Folio 04 / 08
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
          minWidth: "10ch",
        }}
      >
        {mobileLabel}
      </span>
      <span
        className="text-white font-light"
        style={{
          fontSize: "clamp(0.95rem, 1.1vw, 1.0625rem)",
          lineHeight: 1.4,
          letterSpacing: "0.01em",
        }}
      >
        {value}
      </span>
    </div>
  );
}
