import Image from "next/image";
import ScrollReveal from "../../../../thermal-processing/_sections/ScrollReveal";

interface ModelRow {
  serial: string;
  code: string;
  name: string;
  descriptor: string;
  image: string;
  imageAlt: string;
  stats: { label: string; value: string }[];
  bestFit: string;
}

const MODELS: ModelRow[] = [
  {
    serial: "No. 01",
    code: "F79/010",
    name: "WasteStation",
    descriptor:
      "The full-throughput model — for sites with peak service volumes and three-phase supply.",
    image: "/images/imc/front-left.jpg",
    imageAlt:
      "IMC WasteStation F79/010 — three-quarter front-left product view",
    stats: [
      { label: "Throughput", value: "700 kg / hr" },
      { label: "Power", value: "4.1 kW · 380–415 V three-phase" },
      { label: "Footprint", value: "900 × 700 × 1000 mm" },
      { label: "Mass", value: "192 kg" },
    ],
    bestFit:
      "Large hotels, stadiums, hospitals — approx. 1,450 covers per sitting.",
  },
  {
    serial: "No. 02",
    code: "F79/703",
    name: "WasteStation Compact",
    descriptor:
      "The 600 mm-wide variant — fits scullery rows that cannot host a full pulper line.",
    image: "/images/imc/front-right.jpg",
    imageAlt:
      "IMC WasteStation Compact F79/703 — three-quarter front-right product view",
    stats: [
      { label: "Throughput", value: "400 kg / hr" },
      { label: "Power", value: "2.95 kW · 400 V three-phase" },
      { label: "Footprint", value: "600 × 700 × 1044 mm" },
      { label: "Mass", value: "165 kg" },
    ],
    bestFit:
      "Mid-size restaurants, schools, mid-tier hotels — approx. 850 covers per sitting.",
  },
];

export default function ModelLedger() {
  return (
    <section
      aria-labelledby="imc-models"
      className="relative bg-navy text-white"
      style={{
        paddingTop: "clamp(2.5rem, 4.5vw, 4.5rem)",
        paddingBottom: "clamp(3rem, 5.5vw, 5.5rem)",
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
              "linear-gradient(to right, rgba(201,168,76,0.1) 1px, transparent 1px)",
            backgroundSize: "calc(100% / 12) 100%",
          }}
        />
      </div>

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
                  color: "var(--color-gold)",
                  letterSpacing: "0.32em",
                }}
                className="text-xs font-medium uppercase"
              >
                Two Sizes — One Engineering
              </span>
            </div>
            <ScrollReveal>
              <h2
                id="imc-models"
                className="font-display font-bold text-white"
                style={{
                  fontSize: "clamp(1.75rem, 3.8vw, 3rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.02em",
                }}
              >
                The model ledger,
                <br />
                <span
                  className="italic font-normal"
                  style={{ color: "var(--color-gold)" }}
                >
                  sized to the room.
                </span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pb-3">
            <p
              className="text-white/70 font-light"
              style={{
                fontSize: "14px",
                lineHeight: 1.65,
                maxWidth: "32ch",
              }}
            >
              Two main families. Both stainless, both UKCA-marked, both built
              in Lincoln. Specification follows volume and power supply.
            </p>
          </div>
        </div>

        {/* Models */}
        <div className="space-y-12 lg:space-y-16">
          {MODELS.map((model) => (
            <article
              key={model.code}
              className="grid grid-cols-12 gap-6 lg:gap-10 items-start"
              style={{
                borderTop: "1px solid rgba(201,168,76,0.35)",
                paddingTop: "clamp(1.5rem, 3vw, 2.5rem)",
              }}
            >
              {/* Serial / image */}
              <div className="col-span-12 md:col-span-5 lg:col-span-4">
                <div className="flex items-baseline gap-3 mb-4">
                  <span
                    className="font-display italic"
                    style={{
                      color: "var(--color-gold)",
                      fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {model.serial}
                  </span>
                  <span
                    aria-hidden="true"
                    style={{ backgroundColor: "var(--color-gold)" }}
                    className="block h-px w-8 opacity-60"
                  />
                  <span
                    className="uppercase text-white/55 font-medium"
                    style={{ fontSize: "10.5px", letterSpacing: "0.28em" }}
                  >
                    {model.code}
                  </span>
                </div>

                <figure className="relative">
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: "4 / 5" }}
                  >
                    <Image
                      src={model.image}
                      alt={model.imageAlt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 50vw, 30vw"
                      className="object-cover"
                      style={{
                        filter: "grayscale(0.2) contrast(1.05) brightness(0.95)",
                      }}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 mix-blend-multiply"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(10,22,40,0.15) 0%, rgba(10,22,40,0.55) 100%)",
                      }}
                    />
                  </div>
                </figure>
              </div>

              {/* Name + stats */}
              <div className="col-span-12 md:col-span-7 lg:col-span-8">
                <h3
                  className="font-display text-white"
                  style={{
                    fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.015em",
                    fontWeight: 400,
                    fontStyle: "italic",
                  }}
                >
                  {model.name}
                </h3>
                <p
                  className="text-white/70 font-light mt-3"
                  style={{
                    fontSize: "15px",
                    lineHeight: 1.6,
                    maxWidth: "56ch",
                    fontStyle: "italic",
                    fontFamily: "var(--font-display), serif",
                  }}
                >
                  {model.descriptor}
                </p>

                {/* Stats grid */}
                <dl
                  className="mt-7 grid grid-cols-2 gap-x-8 gap-y-4"
                  style={{
                    borderTop: "1px solid rgba(201,168,76,0.18)",
                    paddingTop: "clamp(1rem, 1.5vw, 1.25rem)",
                  }}
                >
                  {model.stats.map((s) => (
                    <div key={s.label}>
                      <dt
                        className="uppercase font-medium"
                        style={{
                          color: "var(--color-gold)",
                          fontSize: "10px",
                          letterSpacing: "0.3em",
                        }}
                      >
                        {s.label}
                      </dt>
                      <dd
                        className="text-white/85 font-light mt-1"
                        style={{
                          fontSize: "15px",
                          lineHeight: 1.4,
                        }}
                      >
                        {s.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                {/* Best fit */}
                <div
                  className="mt-6 flex items-start gap-3"
                  style={{
                    borderTop: "1px solid rgba(201,168,76,0.18)",
                    paddingTop: "1rem",
                  }}
                >
                  <span
                    className="uppercase font-medium shrink-0"
                    style={{
                      color: "var(--color-gold)",
                      fontSize: "10px",
                      letterSpacing: "0.3em",
                      paddingTop: "0.2em",
                    }}
                  >
                    Best fit
                  </span>
                  <p
                    className="text-white/75 font-light"
                    style={{
                      fontSize: "13.5px",
                      lineHeight: 1.55,
                      fontStyle: "italic",
                      fontFamily: "var(--font-display), serif",
                    }}
                  >
                    {model.bestFit}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Variant note */}
        <div className="mt-10 lg:mt-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-9 flex items-start gap-4">
            <span
              aria-hidden="true"
              className="font-display italic"
              style={{
                color: "var(--color-gold)",
                fontSize: "16px",
                lineHeight: 1,
                paddingTop: "0.1em",
              }}
            >
              §
            </span>
            <span
              className="text-white/60 font-light"
              style={{
                fontSize: "12.5px",
                lineHeight: 1.65,
                fontStyle: "italic",
                fontFamily: "var(--font-display), serif",
              }}
            >
              Single-phase Compact (
              <span style={{ fontStyle: "normal" }}>F79/701</span>) and
              no-airbreak full-size (
              <span style={{ fontStyle: "normal" }}>F79/100</span>) variants
              available on request — specify supply and plumbing at enquiry.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
