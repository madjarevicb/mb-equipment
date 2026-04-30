import type { Locale } from "@/i18n/config";
import ScrollReveal from "../../../../thermal-processing/_sections/ScrollReveal";

interface Stat {
  figure: string;
  unit?: string;
  label: string;
  caveat?: string;
}

interface NumbersProps {
  locale?: Locale;
}

const STATS_EN: Stat[] = [
  {
    figure: "80",
    unit: "%",
    label: "Volume reduction",
    caveat: "IMC stated figure vs uncompacted waste.",
  },
  {
    figure: "60",
    unit: "%",
    label: "Mass reduction",
    caveat: "Centrifuge dewatering output.",
  },
  {
    figure: "10",
    unit: "L / min",
    label: "Water during processing",
    caveat: "0.18 bar minimum inlet pressure.",
  },
  {
    figure: "83",
    unit: "dB",
    label: "Operating noise",
    caveat: "Manufacturer specification.",
  },
];

const STATS_SR: Stat[] = [
  {
    figure: "80",
    unit: "%",
    label: "Smanjenje zapremine",
    caveat: "IMC navod u odnosu na nesabijani otpad.",
  },
  {
    figure: "60",
    unit: "%",
    label: "Smanjenje mase",
    caveat: "Izlaz nakon ceđenja na centrifugi.",
  },
  {
    figure: "10",
    unit: "l / min",
    label: "Voda tokom obrade",
    caveat: "Minimalni ulazni pritisak 0,18 bar.",
  },
  {
    figure: "83",
    unit: "dB",
    label: "Buka u radu",
    caveat: "Specifikacija proizvođača.",
  },
];

export default function Numbers({ locale }: NumbersProps = {}) {
  const isSr = locale === "sr";
  const STATS = isSr ? STATS_SR : STATS_EN;
  return (
    <section
      aria-labelledby="imc-numbers"
      className="relative bg-offwhite text-navy overflow-hidden"
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
                {isSr ? "Pregled — četiri brojke" : "The Scoreboard — Four Numbers"}
              </span>
            </div>
            <ScrollReveal>
              <h2
                id="imc-numbers"
                className="font-display font-bold text-navy"
                style={{
                  fontSize: "clamp(1.75rem, 3.8vw, 3rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.02em",
                }}
              >
                {isSr ? "Brojevi koji" : "Numbers that"}
                <br />
                <span
                  className="italic font-normal"
                  style={{ color: "var(--color-gold-text)" }}
                >
                  {isSr ? "zaslužuju prostor." : "earn the floor space."}
                </span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pb-3">
            <p
              className="text-navy/65 font-light"
              style={{
                fontSize: "14px",
                lineHeight: 1.65,
                maxWidth: "32ch",
              }}
            >
              {isSr ? <>Operativne cifre iz IMC-ove WasteStation specifikacije.
              Rezultati na lokaciji zavise od menija i strukture otpada.</> : <>Operational figures from IMC&rsquo;s WasteStation specification.
              Site outcomes vary with menu and waste mix.</>}
            </p>
          </div>
        </div>

        {/* Scoreboard */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{
            borderTop: "1px solid rgba(10,22,40,0.18)",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="relative"
              style={{
                borderRight:
                  i < STATS.length - 1
                    ? "1px solid rgba(10,22,40,0.1)"
                    : "none",
                borderBottom: "1px solid rgba(10,22,40,0.1)",
                paddingTop: "clamp(1.5rem, 2.5vw, 2.25rem)",
                paddingBottom: "clamp(1.5rem, 2.5vw, 2.25rem)",
                paddingLeft: i === 0 ? "0" : "clamp(1rem, 1.5vw, 1.5rem)",
                paddingRight: "clamp(1rem, 1.5vw, 1.5rem)",
              }}
            >
              <span
                className="uppercase block mb-3"
                style={{
                  color: "var(--color-gold-text)",
                  fontSize: "10px",
                  letterSpacing: "0.3em",
                  fontWeight: 500,
                }}
              >
                {isSr ? "Sl." : "Fig."} {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex items-baseline gap-1">
                <span
                  className="font-display text-navy"
                  style={{
                    fontSize: "clamp(3rem, 6vw, 5.25rem)",
                    lineHeight: 0.85,
                    letterSpacing: "-0.04em",
                    fontWeight: 700,
                  }}
                >
                  {s.figure}
                </span>
                {s.unit && (
                  <span
                    className="font-display italic"
                    style={{
                      color: "var(--color-gold-text)",
                      fontSize: "clamp(1rem, 1.6vw, 1.5rem)",
                      lineHeight: 1,
                      fontWeight: 400,
                    }}
                  >
                    {s.unit}
                  </span>
                )}
              </div>
              <p
                className="font-display italic text-navy mt-3"
                style={{
                  fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
                  lineHeight: 1.25,
                  fontWeight: 400,
                }}
              >
                {s.label}
              </p>
              {s.caveat && (
                <p
                  className="text-navy/55 font-light mt-2"
                  style={{
                    fontSize: "11.5px",
                    lineHeight: 1.55,
                    maxWidth: "26ch",
                  }}
                >
                  {s.caveat}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Honest framing */}
        <div className="mt-8 grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-9 flex items-start gap-4">
            <span
              aria-hidden="true"
              className="font-display italic"
              style={{
                color: "var(--color-gold-text)",
                fontSize: "14px",
                lineHeight: 1,
                paddingTop: "0.1em",
              }}
            >
              ☞
            </span>
            <span
              className="text-navy/65 font-light"
              style={{
                fontSize: "13px",
                lineHeight: 1.65,
                fontStyle: "italic",
                fontFamily: "var(--font-display), serif",
              }}
            >
              {isSr ? "Smanjenja učestalosti preuzimanja od 50–75% su tipična, u zavisnosti od obima; period otplate zavisi od lokacije. Model dimenzionišemo prema izmerenim gostima, a ne prema ambicijama." : "Pickup-frequency reductions of 50–75% are typical, depending on volume; payback periods are site-specific. We size the model to measured covers, not aspiration."}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
