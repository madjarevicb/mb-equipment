import Button from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import RunningMeta from "../../../thermal-processing/_sections/RunningMeta";
import ScrollReveal from "../../../thermal-processing/_sections/ScrollReveal";

interface CtaProps {
  locale: Locale;
  dict: Dictionary;
}

export default function Cta({ locale, dict }: CtaProps) {
  const isSr = locale === "sr";
  return (
    <>
      <section
        aria-labelledby="custom-fab-cta"
        className="relative bg-offwhite text-navy overflow-hidden"
        style={{
          paddingTop: "clamp(3.5rem, 7vw, 7.5rem)",
          paddingBottom: "clamp(3.5rem, 7vw, 7.5rem)",
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
          {/* Margin numeral */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute"
            style={{
              top: "-0.35em",
              right: "1.5rem",
              fontFamily: "var(--font-display), serif",
              fontStyle: "italic",
              fontSize: "clamp(4rem, 8vw, 7rem)",
              color: "var(--color-gold-text)",
              opacity: 0.35,
              lineHeight: 1,
              letterSpacing: "-0.03em",
            }}
          >
            V
          </div>

          <div className="grid grid-cols-12 gap-6 lg:gap-10">
            <div className="col-span-12 lg:col-span-8 relative z-10">
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
                  {isSr ? "§ Sledeći korak" : "§ The Next Step"}
                </span>
              </div>

              <h2
                id="custom-fab-cta"
                className="font-display font-bold text-navy"
                style={{
                  fontSize: "clamp(2rem, 4.8vw, 4rem)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.025em",
                }}
              >
                <ScrollReveal
                  as="span"
                  staggerLines
                  style={{ display: "block" }}
                >
                  <span style={{ display: "block" }}>{isSr ? "Pošaljite" : "Send a"}</span>
                  <span
                    style={{
                      display: "block",
                      fontStyle: "italic",
                      fontWeight: 400,
                      color: "var(--color-gold-text)",
                      paddingLeft: "0.4em",
                    }}
                  >
                    {isSr ? "plan prostora." : "floor plan."}
                  </span>
                </ScrollReveal>
              </h2>

              <p
                className="text-navy/75 font-light mt-6 lg:mt-8"
                style={{
                  fontSize: "clamp(1rem, 1.2vw, 1.125rem)",
                  lineHeight: 1.65,
                  maxWidth: "52ch",
                }}
              >
                {isSr ? <>Merimo, crtamo, izrađujemo i instaliramo.
                <span
                  className="font-display italic"
                  style={{ color: "var(--color-gold-text)" }}
                >
                  {" "}Jedan tim, jedna vremenska linija.</span></> : <>We measure, draw, fabricate, and install.
                <span
                  className="font-display italic"
                  style={{ color: "var(--color-gold-text)" }}
                >
                  {" "}
                  One team, one timeline.
                </span></>}
              </p>

              <div className="flex flex-wrap gap-4 mt-6 lg:mt-8">
                <Button variant="primary" href={`/${locale}/contact`}>
                  {dict.common.requestConsultation}
                </Button>
                <Button
                  variant="ghost-light"
                  href={`/${locale}/demo-centers`}
                  arrow={false}
                >
                  {dict.common.bookDemo}
                </Button>
              </div>
            </div>

            {/* Colophon panel */}
            <aside className="col-span-12 lg:col-span-4 relative">
              <div
                className="lg:pl-8 lg:pt-4"
                style={{
                  borderTop: "1px solid rgba(10,22,40,0.18)",
                  paddingTop: "1.25rem",
                  marginTop: "1.5rem",
                }}
              >
                <div className="mb-5">
                  <span
                    className="block uppercase mb-2"
                    style={{
                      color: "var(--color-gold-text)",
                      fontSize: "10px",
                      letterSpacing: "0.34em",
                      fontWeight: 500,
                    }}
                  >
                    {isSr ? "Kolofon" : "Colophon"}
                  </span>
                  <p
                    className="font-display italic text-navy"
                    style={{
                      fontSize: "clamp(1.5rem, 2.3vw, 2rem)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {isSr ? "Napravljeno u Beogradu." : "Built in Belgrade."}
                  </p>
                </div>

                <ColophonEntry
                  label={isSr ? "Radionica" : "Workshop"}
                  value={
                    <>
                      {COMPANY.address.street}
                      <br />
                      {COMPANY.address.zip} {COMPANY.address.city}
                    </>
                  }
                />
                <ColophonEntry
                  label={isSr ? "Rok isporuke" : "Lead times"}
                  value={isSr ? "Tipično 2–4 nedelje, od odobrenih crteža." : "2–4 weeks typical, from approved drawings."}
                />
                <ColophonEntry
                  label={isSr ? "Pokriće" : "Coverage"}
                  value={isSr ? "Jugoistočna Evropa." : "Southeast Europe."}
                />
                <ColophonEntry
                  label={isSr ? "Materijali" : "Materials"}
                  value={isSr ? "AISI 304 / 316 — CE-označena zaliha." : "AISI 304 / 316 — CE-marked stock."}
                />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Closing running meta */}
      <RunningMeta
        variant="light"
        folio={isSr ? "tabak 06 / 06" : "folio 06 / 06"}
        items={[
          isSr ? "Tom II" : "Vol. II",
          isSr ? "Kraj pogl. 01" : "End of Ch. 01",
          isSr ? "Izrada po meri" : "Custom Fabrication",
          isSr ? "Beogradska radionica" : "Belgrade workshop",
          isSr ? "Osn. MB Equipment" : "Est. MB Equipment",
        ]}
      />
    </>
  );
}

function ColophonEntry({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(10,22,40,0.1)",
        paddingTop: "0.625rem",
        paddingBottom: "0.625rem",
      }}
    >
      <div className="grid grid-cols-12 gap-3 items-baseline">
        <span
          className="col-span-4 uppercase"
          style={{
            color: "var(--color-gold-text)",
            fontSize: "10px",
            letterSpacing: "0.3em",
            fontWeight: 500,
          }}
        >
          {label}
        </span>
        <p
          className="col-span-8 text-navy/80 font-light"
          style={{ fontSize: "13px", lineHeight: 1.55 }}
        >
          {value}
        </p>
      </div>
    </div>
  );
}
