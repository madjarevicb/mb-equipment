import ScrollReveal from "../../../thermal-processing/_sections/ScrollReveal";

interface Capability {
  serial: string;
  name: string;
  italic: string;
  spec: string;
}

const CAPABILITIES: Capability[] = [
  {
    serial: "No. 01",
    name: "Work tables & prep stations",
    italic: "the spine of every kitchen.",
    spec: "Reinforced AISI 304, optional undershelves, pot racks, splashbacks.",
  },
  {
    serial: "No. 02",
    name: "Sinks & wash stations",
    italic: "single, double, triple compartment.",
    spec: "Pre-rinse stations, hand-wash basins, integrated drain boards.",
  },
  {
    serial: "No. 03",
    name: "Ventilation hoods & canopies",
    italic: "wall-mount, island, exhaust.",
    spec: "Grease filters, integrated lighting, sized to extraction load.",
  },
  {
    serial: "No. 04",
    name: "Shelving & storage racks",
    italic: "wall, mobile, dunnage.",
    spec: "Walk-in cooler shelving, dry-store racks, modular wire & solid.",
  },
  {
    serial: "No. 05",
    name: "Custom counters & service stations",
    italic: "the front of house, finished.",
    spec: "Pass-through windows, plating stations, beverage and barista counters.",
  },
  {
    serial: "No. 06",
    name: "Splashbacks & wall cladding",
    italic: "full-height to half, with coving.",
    spec: "Hygienic finishes, integrated coving, custom cut-outs and outlets.",
  },
];

export default function Capabilities() {
  return (
    <section
      aria-labelledby="custom-fab-capabilities"
      className="relative bg-white"
      style={{
        paddingTop: "clamp(2rem, 3.5vw, 3.25rem)",
        paddingBottom: "clamp(3rem, 5.5vw, 5.5rem)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 relative">
        {/* Section head */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-end">
          <div className="col-span-12 lg:col-span-7">
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
                The Fabrication Ledger
              </span>
            </div>
            <ScrollReveal>
              <h2
                id="custom-fab-capabilities"
                className="font-display font-bold text-navy"
                style={{
                  fontSize: "clamp(1.75rem, 3.8vw, 3rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.02em",
                }}
              >
                What we
                <br />
                <span
                  className="italic font-normal"
                  style={{ color: "var(--color-gold-text)" }}
                >
                  fabricate.
                </span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 lg:pb-3">
            <p
              className="text-navy/70 font-light"
              style={{
                fontSize: "14px",
                lineHeight: 1.65,
                maxWidth: "32ch",
              }}
            >
              Six disciplines drawn, cut, welded, and finished in the Belgrade
              workshop — each entry made to your floor plan, not a catalog.
            </p>
            <div
              style={{
                borderTop: "1px solid rgba(10,22,40,0.15)",
                marginTop: "1.5rem",
                paddingTop: "0.75rem",
              }}
              className="flex items-center gap-3"
            >
              <span
                className="font-display italic"
                style={{
                  color: "var(--color-gold-text)",
                  fontSize: "13px",
                }}
              >
                vi entries
              </span>
              <span
                aria-hidden="true"
                style={{ color: "var(--color-gold)", opacity: 0.6 }}
              >
                ·
              </span>
              <span
                className="uppercase text-navy/60"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.3em",
                }}
              >
                Folio 02 / 06
              </span>
            </div>
          </div>
        </div>

        {/* Rule */}
        <div
          style={{
            borderTop: "1px solid rgba(10,22,40,0.16)",
            marginTop: "clamp(1.75rem, 3vw, 2.5rem)",
          }}
        />

        {/* Editorial typographic ledger */}
        <ol className="relative">
          {CAPABILITIES.map((cap) => (
            <li
              key={cap.name}
              style={{
                borderBottom: "1px solid rgba(10,22,40,0.12)",
              }}
            >
              <CapabilityRow cap={cap} />
            </li>
          ))}
        </ol>

        {/* Footer mark */}
        <div className="mt-8 lg:mt-10 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-7 flex items-center gap-4">
            <span
              aria-hidden="true"
              className="font-display italic"
              style={{
                color: "var(--color-gold-text)",
                fontSize: "14px",
              }}
            >
              ☞
            </span>
            <span
              className="text-navy/60 font-light"
              style={{ fontSize: "13px" }}
            >
              Drawings, materials, and finishes are confirmed before any cut is
              made.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function CapabilityRow({ cap }: { cap: Capability }) {
  return (
    <div
      className="grid grid-cols-12 gap-4 items-baseline"
      style={{
        paddingTop: "clamp(0.9rem, 1.4vw, 1.35rem)",
        paddingBottom: "clamp(0.9rem, 1.4vw, 1.35rem)",
      }}
    >
      {/* Serial */}
      <div className="col-span-3 md:col-span-2 lg:col-span-1">
        <span
          className="font-display italic"
          style={{
            color: "var(--color-gold-text)",
            fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
            letterSpacing: "0.04em",
          }}
        >
          {cap.serial}
        </span>
      </div>

      {/* Name + italic crash */}
      <div className="col-span-9 md:col-span-10 lg:col-span-7">
        <h3
          className="font-display text-navy"
          style={{
            fontSize: "clamp(1.25rem, 2.2vw, 1.85rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            fontWeight: 500,
          }}
        >
          {cap.name}
          <span
            className="italic font-normal"
            style={{
              color: "var(--color-gold-text)",
              display: "inline",
              marginLeft: "0.5em",
              fontWeight: 400,
            }}
          >
            — {cap.italic}
          </span>
        </h3>
      </div>

      {/* Spec hint */}
      <div className="col-span-12 md:col-start-3 md:col-span-10 lg:col-span-4 lg:col-start-9">
        <p
          className="text-navy/65 font-light"
          style={{
            fontSize: "13px",
            lineHeight: 1.55,
            maxWidth: "38ch",
          }}
        >
          {cap.spec}
        </p>
      </div>
    </div>
  );
}
