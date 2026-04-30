import Image from "next/image";
import type { Locale } from "@/i18n/config";
import ScrollReveal from "../../../../thermal-processing/_sections/ScrollReveal";

interface Step {
  numeral: string;
  name: string;
  body: string;
}

interface MechanismProps {
  locale?: Locale;
}

const STEPS_EN: Step[] = [
  {
    numeral: "No. 01",
    name: "Scrape",
    body: "Operator drops plate waste, prep trim, bones, and peelings into the feed hopper at the dish-return point.",
  },
  {
    numeral: "No. 02",
    name: "Macerate",
    body: "An internal grinder breaks the waste stream into fine particles — red-meat bones, cauliflower stalks, fish skins included.",
  },
  {
    numeral: "No. 03",
    name: "Dewater",
    body: "A centrifuge spins the slurry, forcing grey water out to drain — leaving a near-dry solid behind.",
  },
  {
    numeral: "No. 04",
    name: "Compact",
    body: "The solid auger-feeds into small lidded bins, ready for collection, anaerobic digestion, or composting.",
  },
];

const STEPS_SR: Step[] = [
  {
    numeral: "Br. 01",
    name: "Struganje",
    body: "Operater ubacuje ostatke sa tanjira, otpatke od pripreme, kosti i ljušture u ulazni levak na tački povratka tanjira.",
  },
  {
    numeral: "Br. 02",
    name: "Usitnjavanje",
    body: "Unutrašnji usitnjavač razlaže tok otpada u sitne čestice — kosti crvenog mesa, drške karfiola i kožu ribe uključujući.",
  },
  {
    numeral: "Br. 03",
    name: "Ceđenje",
    body: "Centrifuga vrti masu, terajući sivu vodu u odvod — ostavljajući gotovo suvu čvrstu materiju.",
  },
  {
    numeral: "Br. 04",
    name: "Sabijanje",
    body: "Čvrsta materija puž-uvodno ulazi u male kante sa poklopcem, spremne za odnošenje, anaerobnu digestiju ili kompostiranje.",
  },
];

export default function Mechanism({ locale }: MechanismProps = {}) {
  const isSr = locale === "sr";
  const STEPS = isSr ? STEPS_SR : STEPS_EN;
  return (
    <section
      aria-labelledby="imc-mechanism"
      className="relative bg-offwhite text-navy"
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
              "linear-gradient(to right, rgba(10,22,40,0.06) 1px, transparent 1px)",
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
                  color: "var(--color-gold-text)",
                  letterSpacing: "0.32em",
                }}
                className="text-xs font-medium uppercase"
              >
                {isSr ? "Mehanizam — četiri pokreta" : "The Mechanism — Four Movements"}
              </span>
            </div>
            <ScrollReveal>
              <h2
                id="imc-mechanism"
                className="font-display font-bold text-navy"
                style={{
                  fontSize: "clamp(1.75rem, 3.8vw, 3rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.02em",
                }}
              >
                {isSr ? "Od tanjira do kante," : "From plate to bin,"}
                <br />
                <span
                  className="italic font-normal"
                  style={{ color: "var(--color-gold-text)" }}
                >
                  {isSr ? "u četiri pokreta." : "in four motions."}
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
              {isSr ? "WasteStation se nalazi u liniji povratka tanjira — potpuno zatvoren, sa automatskim ispiranjem, pametnim senzorom za napunjenost." : "The WasteStation sits inline with dish return — fully enclosed, auto-rinsing, intelligent bin-fill sensing."}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Steps ledger */}
          <ol className="col-span-12 lg:col-span-7">
            {STEPS.map((step, i) => (
              <li
                key={step.numeral}
                style={{
                  borderTop:
                    i === 0 ? "1px solid rgba(10,22,40,0.18)" : "none",
                  borderBottom: "1px solid rgba(10,22,40,0.12)",
                }}
              >
                <div
                  className="grid grid-cols-12 gap-4 items-baseline"
                  style={{
                    paddingTop: "clamp(1rem, 1.6vw, 1.5rem)",
                    paddingBottom: "clamp(1rem, 1.6vw, 1.5rem)",
                  }}
                >
                  <div className="col-span-3 md:col-span-2">
                    <span
                      className="font-display italic"
                      style={{
                        color: "var(--color-gold-text)",
                        fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {step.numeral}
                    </span>
                  </div>
                  <div className="col-span-9 md:col-span-10">
                    <span
                      className="font-display italic block text-navy"
                      style={{
                        fontSize: "clamp(1.4rem, 2.4vw, 1.95rem)",
                        lineHeight: 1,
                        letterSpacing: "-0.01em",
                        fontWeight: 400,
                      }}
                    >
                      {step.name}
                    </span>
                    <span
                      className="block text-navy/70 font-light mt-2"
                      style={{
                        fontSize: "14px",
                        lineHeight: 1.6,
                        maxWidth: "62ch",
                      }}
                    >
                      {step.body}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          {/* Detail image */}
          <div className="col-span-12 lg:col-span-5 lg:pt-2">
            <figure className="relative">
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4 / 5" }}
              >
                <Image
                  src="/images/imc/detail-1.jpg"
                  alt="IMC WasteStation grinder mechanism close-up — internal macerator detail"
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  style={{
                    filter: "grayscale(0.15) contrast(1.05)",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 mix-blend-overlay"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 60%, rgba(10,22,40,0.35) 100%)",
                  }}
                />
              </div>
              <figcaption
                className="mt-3 flex items-center justify-between"
                style={{
                  color: "var(--color-gold-text)",
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                }}
              >
                <span className="font-display italic uppercase">
                  {isSr ? "Tabla II — Unutrašnji usitnjavač" : "Plate II — Internal grinder"}
                </span>
                <span className="font-display italic">{isSr ? "— Detalj." : "— Detail."}</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
