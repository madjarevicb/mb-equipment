import Button from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import RunningMeta from "./RunningMeta";
import ScrollReveal from "./ScrollReveal";

interface CtaSectionProps {
  locale: Locale;
  dict: Dictionary;
}

export default function CtaSection({ locale, dict }: CtaSectionProps) {
  return (
    <>
      <section
        aria-labelledby="cooking-cta"
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
          {/* Chapter IV numeral — margin */}
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
            IV
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
                  § The Next Step
                </span>
              </div>

              <h2
                id="cooking-cta"
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
                  <span style={{ display: "block" }}>Request a quote</span>
                  <span
                    style={{
                      display: "block",
                      fontStyle: "italic",
                      fontWeight: 400,
                      color: "var(--color-gold-text)",
                      paddingLeft: "0.4em",
                    }}
                  >
                    for your cooking line.
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
                Send a floor plan or menu concept. We return a specification
                with brand recommendations, CAD layout, and budget ranges —
                <span
                  className="font-display italic"
                  style={{ color: "var(--color-gold-text)" }}
                >
                  {" "}
                  no obligation
                </span>
                .
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
                    Colophon
                  </span>
                  <p
                    className="font-display italic text-navy"
                    style={{
                      fontSize: "clamp(1.5rem, 2.3vw, 2rem)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Set in Belgrade.
                  </p>
                </div>

                <ColophonEntry
                  label="Showroom"
                  value={
                    <>
                      {COMPANY.address.street}
                      <br />
                      {COMPANY.address.zip} {COMPANY.address.city}
                    </>
                  }
                />
                <ColophonEntry
                  label="Response"
                  value="Within one business day."
                />
                <ColophonEntry
                  label="Coverage"
                  value="Southeast Europe & beyond."
                />
                <ColophonEntry
                  label="Partner"
                  value="Authorized Middleby Corp."
                />
              </div>
            </aside>
          </div>

        </div>
      </section>

      {/* Closing running-meta — matches opener */}
      <RunningMeta
        variant="light"
        folio="folio 04 / 04"
        items={[
          "Vol. I",
          "End of Ch. 01",
          "Cooking",
          "Belgrade",
          "Est. MB Equipment",
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
