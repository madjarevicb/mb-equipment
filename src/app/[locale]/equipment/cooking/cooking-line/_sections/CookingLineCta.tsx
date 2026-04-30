import Button from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import RunningMeta from "../../../thermal-processing/_sections/RunningMeta";
import ScrollReveal from "../../../thermal-processing/_sections/ScrollReveal";

interface Props {
  locale: Locale;
  dict: Dictionary;
}

export default function CookingLineCta({ locale, dict }: Props) {
  const isSr = locale === "sr";
  return (
    <>
      <section
        aria-labelledby="cooking-line-cta"
        className="relative bg-navy text-white overflow-hidden"
        style={{
          paddingTop: "clamp(3.5rem, 7vw, 7rem)",
          paddingBottom: "clamp(3.5rem, 7vw, 7rem)",
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
                "linear-gradient(to right, rgba(201,168,76,0.12) 1px, transparent 1px)",
              backgroundSize: "calc(100% / 12) 100%",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 relative">
          {/* Chapter V numeral — margin */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute"
            style={{
              top: "-0.35em",
              right: "1.5rem",
              fontFamily: "var(--font-display), serif",
              fontStyle: "italic",
              fontSize: "clamp(4rem, 8vw, 7rem)",
              color: "var(--color-gold)",
              opacity: 0.22,
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
                    color: "var(--color-gold)",
                    letterSpacing: "0.32em",
                  }}
                  className="text-xs font-medium uppercase"
                >
                  {isSr ? "§ Specifikujte Vašu liniju" : "§ Specify Your Line"}
                </span>
              </div>

              <h2
                id="cooking-line-cta"
                className="font-display font-bold text-white"
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
                  <span style={{ display: "block" }}>{isSr ? "Specifikujte" : "Specify"}</span>
                  <span
                    style={{
                      display: "block",
                      fontStyle: "italic",
                      fontWeight: 400,
                      color: "var(--color-gold)",
                      paddingLeft: "0.4em",
                    }}
                  >
                    {isSr ? "Vašu liniju." : "your line."}
                  </span>
                </ScrollReveal>
              </h2>

              <p
                className="text-white/75 font-light mt-6 lg:mt-8"
                style={{
                  fontSize: "clamp(1rem, 1.2vw, 1.125rem)",
                  lineHeight: 1.65,
                  maxWidth: "52ch",
                }}
              >
                {isSr ? <>Pošaljite plan ili koncept menija. Vraćamo CAD raspored,
                preporuke brendova i opsege budžeta —
                <span
                  className="font-display italic"
                  style={{ color: "var(--color-gold)" }}
                >
                  {" "}bez obaveze</span>.</> : <>Send a floor plan or menu concept. We return a CAD layout, brand
                recommendations, and budget ranges —
                <span
                  className="font-display italic"
                  style={{ color: "var(--color-gold)" }}
                >
                  {" "}
                  no obligation
                </span>
                .</>}
              </p>

              <div className="flex flex-wrap gap-4 mt-6 lg:mt-8">
                <Button variant="primary" href={`/${locale}/contact`}>
                  {dict.common.requestConsultation}
                </Button>
                <Button
                  variant="ghost-dark"
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
                  borderTop: "1px solid rgba(201,168,76,0.35)",
                  paddingTop: "1.25rem",
                  marginTop: "1.5rem",
                }}
              >
                <div className="mb-5">
                  <span
                    className="block uppercase mb-2"
                    style={{
                      color: "var(--color-gold)",
                      fontSize: "10px",
                      letterSpacing: "0.34em",
                      fontWeight: 500,
                    }}
                  >
                    {isSr ? "Kolofon" : "Colophon"}
                  </span>
                  <p
                    className="font-display italic text-white"
                    style={{
                      fontSize: "clamp(1.5rem, 2.3vw, 2rem)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {isSr ? "Ugnežden u Beogradu." : "Set in Belgrade."}
                  </p>
                </div>

                <Entry
                  label={isSr ? "Salon" : "Showroom"}
                  value={
                    <>
                      {COMPANY.address.street}
                      <br />
                      {COMPANY.address.zip} {COMPANY.address.city}
                    </>
                  }
                />
                <Entry label={isSr ? "Pokriće" : "Coverage"} value={isSr ? "Jugoistočna Evropa i šire." : "Southeast Europe & beyond."} />
                <Entry
                  label={isSr ? "Rok isporuke" : "Lead times"}
                  value={isSr ? "Specifikacija u roku od 1 radnog dana." : "Specification within 1 business day."}
                />
                <Entry label={isSr ? "Partner" : "Partner"} value={isSr ? "Ovlašćeni Middleby Corp." : "Authorized Middleby Corp."} />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Closing running-meta */}
      <RunningMeta
        variant="light"
        folio={isSr ? "tabak 07 / 07" : "folio 07 / 07"}
        items={[
          isSr ? "Tom II" : "Vol. II",
          isSr ? "Kraj pogl. 02" : "End of Ch. 02",
          isSr ? "Kuhinjska linija" : "Cooking Line",
          "Silko · Lincat",
          isSr ? "Osn. MB Equipment" : "Est. MB Equipment",
        ]}
      />
    </>
  );
}

function Entry({
  label,
  value,
}: {
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(201,168,76,0.18)",
        paddingTop: "0.625rem",
        paddingBottom: "0.625rem",
      }}
    >
      <div className="grid grid-cols-12 gap-3 items-baseline">
        <span
          className="col-span-4 uppercase"
          style={{
            color: "var(--color-gold)",
            fontSize: "10px",
            letterSpacing: "0.3em",
            fontWeight: 500,
          }}
        >
          {label}
        </span>
        <p
          className="col-span-8 text-white/80 font-light"
          style={{ fontSize: "13px", lineHeight: 1.55 }}
        >
          {value}
        </p>
      </div>
    </div>
  );
}
