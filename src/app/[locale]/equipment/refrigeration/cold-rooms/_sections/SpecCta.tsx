import React from "react";
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

export default function SpecCta({ locale, dict }: Props) {
  const isSr = locale === "sr";
  return (
    <>
      <section
        aria-labelledby="cold-rooms-cta"
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
                  {isSr ? "§ Pošaljite plan" : <>&sect; Send the Floor Plan</>}
                </span>
              </div>

              <h2
                id="cold-rooms-cta"
                className="font-display font-bold text-white"
                style={{
                  fontSize: "clamp(2rem, 4.6vw, 3.75rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.025em",
                }}
              >
                <ScrollReveal as="span" staggerLines style={{ display: "block" }}>
                  <span style={{ display: "block" }}>{isSr ? "Specifikujte Vašu" : "Specify your"}</span>
                  <span
                    style={{
                      display: "block",
                      fontStyle: "italic",
                      fontWeight: 400,
                      color: "var(--color-gold)",
                      paddingLeft: "0.4em",
                    }}
                  >
                    {isSr ? "rashladnu komoru." : "cold room."}
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
                {isSr ? <>Pošaljite plan, ciljnu temperaturu i ambijentalne uslove
                &mdash; vraćamo raspored panela, specifikaciju rashlađivanja i
                raspored instalacije od 2&ndash;5 dana. Jedan izvor iz
                Beograda za Jugoistočnu Evropu.</> : <>Send your floor plan, target temperature, and ambient
                conditions &mdash; we return a panel layout, refrigeration
                spec, and a 2&ndash;5 day install schedule. Single-source from
                Belgrade for Southeast Europe.</>}
              </p>

              {/* Use cases ledger */}
              <ul className="mt-7 lg:mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                <UseCase
                  index="01"
                  label={isSr ? "Restorani i hoteli" : "Restaurants &amp; hotels"}
                  detail={isSr ? "4–15 m³ plusna + 4–8 m³ minusna komora." : "4–15 m³ chiller + 4–8 m³ freezer."}
                />
                <UseCase
                  index="02"
                  label={isSr ? "Mesare" : "Butchers"}
                  detail={isSr ? "8–20 m³ na +2 °C; 8–12 m³ na −22 °C; tračnice za vešanje." : "8–20 m³ at +2 °C; 8–12 m³ at −22 °C; hanging rails."}
                />
                <UseCase
                  index="03"
                  label={isSr ? "Ribarnice" : "Fishmongers"}
                  detail={isSr ? "6–15 m³ na 0 °C; odvod za topljenje leda; inox pod." : "6–15 m³ at 0 °C; ice-melt drainage; stainless floor."}
                />
                <UseCase
                  index="04"
                  label={isSr ? "Sladoled i gelato" : "Ice cream &amp; gelato"}
                  detail={isSr ? "6–10 m³ na −22 °C — specifikacija za skladištenje gelata." : "6–10 m³ at −22 °C — gelato storage spec."}
                />
                <UseCase
                  index="05"
                  label={isSr ? "Centralne kuhinje" : "Central kitchens"}
                  detail={isSr ? "Više komora na zajedničkom remote rack-u." : "Multiple rooms on a remote condensing rack."}
                />
                <UseCase
                  index="06"
                  label={isSr ? "Prerada hrane" : "Food processing"}
                  detail={isSr ? "Šok zamrzivač −35 °C + skladište; paneli 150–200 mm." : "Blast freezer −35 °C + storage; 150–200 mm panels."}
                />
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
                    {isSr ? "Kolofon" : "Colophon"}
                  </span>
                  <p
                    className="font-display italic text-white"
                    style={{
                      fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
                      lineHeight: 1.1,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {isSr ? "Padova," : "Padova,"}
                    <br />
                    {isSr ? "ugnežden u Beogradu." : "set in Belgrade."}
                  </p>
                </div>

                <ColophonEntry
                  label={isSr ? "Salon" : "Showroom"}
                  value={
                    <>
                      {COMPANY.address.street}
                      <br />
                      {COMPANY.address.zip} {COMPANY.address.city}
                    </>
                  }
                />
                <ColophonEntry label={isSr ? "Pokriće" : "Coverage"} value={isSr ? "Jugoistočna Evropa" : "Southeast Europe"} />
                <ColophonEntry
                  label={isSr ? "Brend" : "Brand"}
                  value={
                    <>
                      Tecnodom &middot;{" "}
                      <span
                        className="font-display italic"
                        style={{ color: "var(--color-gold)" }}
                      >
                        JKS Refrigeration.
                      </span>
                    </>
                  }
                />
                <ColophonEntry
                  label={isSr ? "Rok isporuke" : "Lead time"}
                  value={isSr ? "Instalacija 2–5 dana ≤ 200 m³" : "2–5 days install ≤ 200 m³"}
                />
                <ColophonEntry
                  label={isSr ? "Rashladna sredstva" : "Refrigerants"}
                  value={isSr ? "R290 spreman za budućnost" : "R290 future-proof"}
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
                {isSr ? <>&ldquo;Suva montaža, bez vremena sušenja.&rdquo;</> : <>&ldquo;Dry assembly, no curing time.&rdquo;</>}
              </span>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:text-right">
              <span
                className="uppercase text-white/50"
                style={{ fontSize: "10px", letterSpacing: "0.32em" }}
              >
                {isSr ? <>Tabak 08 / 08 &middot; Kraj pogl. 03</> : <>Folio 08 / 08 &middot; End of Ch. 03</>}
              </span>
            </div>
          </div>
        </div>
      </section>

      <RunningMeta
        variant="dark"
        folio={isSr ? "Kraj pogl. 03" : "End of Ch. 03"}
        items={[
          isSr ? "Tom IV" : "Vol. IV",
          isSr ? "Montažne rashladne komore" : "Modular Cold Rooms",
          "Tecnodom / JKS",
          isSr ? "Ovlašćeni partner" : "Authorized Partner",
          isSr ? "Osn. MB Equipment" : "Est. MB Equipment",
        ]}
      />
    </>
  );
}

function UseCase({
  index,
  label,
  detail,
}: {
  index: string;
  label: string;
  detail: string;
}) {
  return (
    <li
      style={{
        borderTop: "1px solid rgba(201,168,76,0.25)",
        paddingTop: "0.75rem",
      }}
    >
      <div className="flex items-baseline gap-3">
        <span
          className="font-display italic"
          style={{ color: "var(--color-gold)", fontSize: "12px" }}
        >
          {index}
        </span>
        <span
          className="uppercase text-white/60"
          style={{
            fontSize: "10px",
            letterSpacing: "0.28em",
            fontWeight: 500,
          }}
          dangerouslySetInnerHTML={{ __html: label }}
        />
      </div>
      <p
        className="font-display italic text-white mt-1"
        style={{
          fontSize: "clamp(1rem, 1.3vw, 1.25rem)",
          lineHeight: 1.2,
        }}
      >
        {detail}
      </p>
    </li>
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
