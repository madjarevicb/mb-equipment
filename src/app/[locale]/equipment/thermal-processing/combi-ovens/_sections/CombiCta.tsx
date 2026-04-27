import React from "react";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import RunningMeta from "../../_sections/RunningMeta";
import ScrollReveal from "../../_sections/ScrollReveal";

interface CombiCtaProps {
  locale: Locale;
  dict: Dictionary;
}

const VALUE_PROPS = [
  {
    label: "Specification",
    value: "Menu × volume × voltage",
    note: "Right Invoq or CombiSlim configuration to your kitchen.",
  },
  {
    label: "Service",
    value: "Middleby-trained engineers",
    note: "Resident technicians, in-country response.",
  },
  {
    label: "Parts",
    value: "Genuine OEM — Houno / Lincat",
    note: "Authorized Middleby supply chain, no substitutions.",
  },
  {
    label: "Commissioning",
    value: "Installed & tuned to spec",
    note: "Water hardness, voltage, ventless or Hoodini hood.",
  },
];

export default function CombiCta({ locale, dict }: CombiCtaProps) {
  return (
    <>
      <section
        aria-labelledby="combi-cta"
        className="relative bg-navy text-white overflow-hidden"
        style={{
          paddingTop: "clamp(3rem, 5vw, 5.5rem)",
          paddingBottom: "clamp(3rem, 5vw, 5.5rem)",
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

        {/* Giant V numeral — margin */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute"
          style={{
            top: "1rem",
            right: "2rem",
            fontFamily: "var(--font-display), serif",
            fontStyle: "italic",
            fontSize: "clamp(4rem, 8vw, 7rem)",
            color: "var(--color-gold)",
            opacity: 0.18,
            lineHeight: 1,
            letterSpacing: "-0.03em",
          }}
        >
          V
        </div>

        <div className="mx-auto max-w-7xl px-6 relative">
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
                  &sect; The Next Step
                </span>
              </div>

              <h2
                id="combi-cta"
                className="font-display font-bold text-white"
                style={{
                  fontSize: "clamp(2rem, 4.6vw, 3.75rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.025em",
                }}
              >
                <ScrollReveal
                  as="span"
                  staggerLines
                  style={{ display: "block" }}
                >
                  <span style={{ display: "block" }}>Specify</span>
                  <span
                    style={{
                      display: "block",
                      fontStyle: "italic",
                      fontWeight: 400,
                      color: "var(--color-gold)",
                      paddingLeft: "0.4em",
                    }}
                  >
                    your combi.
                  </span>
                </ScrollReveal>
              </h2>

              <p
                className="text-white/75 font-light mt-6 lg:mt-7"
                style={{
                  fontSize: "clamp(1rem, 1.15vw, 1.0625rem)",
                  lineHeight: 1.65,
                  maxWidth: "54ch",
                }}
              >
                Send your menu volume, kitchen voltage, and water hardness
                &mdash; we&rsquo;ll spec the right Invoq or CombiSlim
                configuration. As an authorized Middleby Corporation partner,
                MB Equipment supplies, installs, and services Houno and Lincat
                across Southeast Europe.
              </p>

              {/* Value props ledger */}
              <ul className="mt-7 lg:mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                {VALUE_PROPS.map((vp, i) => (
                  <li
                    key={vp.label}
                    style={{
                      borderTop: "1px solid rgba(201,168,76,0.25)",
                      paddingTop: "0.75rem",
                    }}
                  >
                    <div className="flex items-baseline gap-3">
                      <span
                        className="font-display italic"
                        style={{
                          color: "var(--color-gold)",
                          fontSize: "12px",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="uppercase text-white/60"
                        style={{
                          fontSize: "10px",
                          letterSpacing: "0.28em",
                          fontWeight: 500,
                        }}
                      >
                        {vp.label}
                      </span>
                    </div>
                    <p
                      className="font-display italic text-white mt-1"
                      style={{
                        fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
                        lineHeight: 1.2,
                      }}
                    >
                      {vp.value}
                    </p>
                    <p
                      className="text-white/55 font-light mt-1"
                      style={{ fontSize: "12px", lineHeight: 1.5 }}
                    >
                      {vp.note}
                    </p>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 mt-8 lg:mt-10">
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

            {/* Colophon */}
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
                    Colophon
                  </span>
                  <p
                    className="font-display italic text-white"
                    style={{
                      fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Randers &amp; Lincoln,
                    <br />
                    set in Belgrade.
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
                  label="Coverage"
                  value="Southeast Europe — Balkans · Central Europe"
                />
                <ColophonEntry
                  label="Brands"
                  value={
                    <>
                      Houno + Lincat &mdash;{" "}
                      <span
                        className="font-display italic"
                        style={{ color: "var(--color-gold)" }}
                      >
                        by Middleby.
                      </span>
                    </>
                  }
                />
                <ColophonEntry
                  label="Cloud"
                  value={
                    <span
                      className="font-display italic"
                      style={{ color: "var(--color-gold)" }}
                    >
                      Open Kitchen
                    </span>
                  }
                />
                <ColophonEntry
                  label="Response"
                  value="Within one business day."
                />
              </div>
            </aside>
          </div>

          {/* Footer mark */}
          <div
            className="mt-10 lg:mt-14 grid grid-cols-12 gap-6 items-center"
            style={{
              borderTop: "1px solid rgba(201,168,76,0.25)",
              paddingTop: "1.25rem",
            }}
          >
            <div className="col-span-12 lg:col-span-6 flex items-center gap-4">
              <span
                aria-hidden="true"
                className="font-display italic"
                style={{ color: "var(--color-gold)", fontSize: "16px" }}
              >
                &#10047;
              </span>
              <span
                className="text-white/60 font-light italic font-display"
                style={{ fontSize: "13px" }}
              >
                &ldquo;Making service simple, smart and efficient.&rdquo;
              </span>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:text-right">
              <span
                className="uppercase text-white/50"
                style={{ fontSize: "10px", letterSpacing: "0.32em" }}
              >
                Folio 05 / 05 &middot; End of Ch. 03
              </span>
            </div>
          </div>
        </div>
      </section>

      <RunningMeta
        variant="dark"
        folio="End of Ch. 03"
        items={[
          "Vol. I",
          "Combi Ovens",
          "Houno + Lincat",
          "Invoq Platform",
          "Authorized Middleby Partner",
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
