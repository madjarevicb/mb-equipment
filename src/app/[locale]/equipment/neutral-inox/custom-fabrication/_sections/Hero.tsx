import Image from "next/image";
import Breadcrumb from "@/components/ui/Breadcrumb";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import RunningMeta from "../../../thermal-processing/_sections/RunningMeta";
import ScrollReveal from "../../../thermal-processing/_sections/ScrollReveal";

interface HeroProps {
  locale: Locale;
  dict: Dictionary;
}

const HERO_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwYTE2MjgiLz48L3N2Zz4=";

export default function Hero({ locale, dict }: HeroProps) {
  const isSr = locale === "sr";
  return (
    <section
      aria-labelledby="custom-fab-hero"
      className="relative bg-navy text-white overflow-hidden"
    >
      {/* Folio top-right */}
      <div
        aria-hidden="true"
        className="hidden lg:flex absolute top-6 right-8 z-20 items-center gap-3"
      >
        <span
          className="font-display italic"
          style={{
            color: "var(--color-gold)",
            fontSize: "13px",
            letterSpacing: "0.18em",
          }}
        >
          {isSr ? "tabak 01 / 06" : "folio 01 / 06"}
        </span>
        <span
          aria-hidden="true"
          style={{
            width: "6px",
            height: "6px",
            backgroundColor: "var(--color-gold)",
            borderRadius: "50%",
            display: "inline-block",
          }}
        />
      </div>

      <Breadcrumb
        locale={locale}
        homeLabel={dict.breadcrumb.home}
        items={[
          { label: dict.nav.equipment, href: `/${locale}/equipment` },
          {
            label: dict.nav.neutralAndInox,
            href: `/${locale}/equipment/neutral-inox`,
          },
          { label: dict.nav.customFabrication },
        ]}
      />

      {/* Running metadata */}
      <RunningMeta
        variant="dark"
        folio={isSr ? "Izd. 2026" : "Ed. 2026"}
        items={[
          isSr ? "Tom II" : "Vol. II",
          isSr ? "Pogl. 01 — Izrada po meri" : "Ch. 01 — Custom Fabrication",
          isSr ? "Beogradska radionica" : "Belgrade workshop",
          "AISI 304 / 316",
          isSr ? "CE-označeni materijali" : "CE-marked materials",
        ]}
      />

      {/* Vertical column rules */}
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

      <div
        className="relative mx-auto max-w-7xl px-6"
        style={{
          paddingTop: "clamp(1.75rem, 3vw, 2.75rem)",
          paddingBottom: "clamp(2rem, 3.5vw, 3.25rem)",
        }}
      >
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* Left — headline */}
          <div className="col-span-12 lg:col-span-8 relative z-10">
            <div className="flex items-center gap-4 mb-5 lg:mb-6">
              <span
                aria-hidden="true"
                style={{
                  color: "var(--color-gold)",
                  fontFamily: "var(--font-display), serif",
                  fontStyle: "italic",
                  fontSize: "14px",
                }}
              >
                No.
              </span>
              <span
                style={{ color: "var(--color-gold)", letterSpacing: "0.32em" }}
                className="text-xs font-medium uppercase"
              >
                {dict.common.authorizedMiddleby}
              </span>
              <span
                aria-hidden="true"
                style={{ backgroundColor: "var(--color-gold)" }}
                className="block h-px flex-1 max-w-24 opacity-50"
              />
            </div>

            <div className="relative">
              {/* Overlapping "01" numeral */}
              <span
                aria-hidden="true"
                className="hidden lg:block font-display italic leading-none pointer-events-none select-none"
                style={{
                  position: "absolute",
                  top: "-0.18em",
                  right: "-0.35em",
                  color: "var(--color-gold)",
                  fontSize: "clamp(6rem, 11vw, 11rem)",
                  opacity: 0.12,
                  letterSpacing: "-0.05em",
                  zIndex: 0,
                }}
              >
                01
              </span>

              <h1
                id="custom-fab-hero"
                className="font-display text-white relative"
                style={{
                  fontSize: "clamp(2.5rem, 6.5vw, 5.25rem)",
                  lineHeight: 0.88,
                  letterSpacing: "-0.025em",
                  fontWeight: 700,
                  zIndex: 1,
                }}
              >
                <ScrollReveal
                  as="span"
                  staggerLines
                  delay={40}
                  style={{ display: "block" }}
                >
                  <span style={{ display: "block" }}>{isSr ? "Inox," : "Stainless steel,"}</span>
                  <span
                    style={{
                      display: "block",
                      fontStyle: "italic",
                      fontWeight: 400,
                      color: "var(--color-gold)",
                      paddingLeft: "0.6em",
                    }}
                  >
                    {isSr ? "izrađen" : "made"}
                  </span>
                  <span style={{ display: "block" }}>
                    {isSr ? "po Vašoj liniji" : "to your line"}
                    <span
                      aria-hidden="true"
                      style={{
                        color: "var(--color-gold)",
                        fontStyle: "italic",
                        fontWeight: 400,
                      }}
                    >
                      .
                    </span>
                  </span>
                </ScrollReveal>
              </h1>
            </div>
          </div>

          {/* Right — plate tag */}
          <aside className="col-span-12 lg:col-span-4 relative lg:pt-12">
            <div
              style={{
                borderTop: "1px solid rgba(201,168,76,0.35)",
                paddingTop: "1rem",
              }}
            >
              <p
                className="font-display italic"
                style={{
                  color: "var(--color-gold)",
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                }}
              >
                {isSr ? "Tabla br. 01 —" : "Plate No. 01 —"}{" "}
                <span style={{ color: "rgba(255,255,255,0.7)" }}>
                  {isSr ? "Radionica, Beograd." : "The Workshop, Belgrade."}
                </span>
              </p>
            </div>
          </aside>
        </div>

        {/* Lower band — lede + image */}
        <div className="grid grid-cols-12 gap-6 lg:gap-10 mt-6 lg:mt-8 items-start">
          <div className="col-span-12 lg:col-span-5 lg:pt-2 relative">
            <span
              aria-hidden="true"
              style={{
                color: "var(--color-gold)",
                letterSpacing: "0.32em",
                fontSize: "10px",
              }}
              className="block uppercase font-medium mb-4"
            >
              {isSr ? "§ Beleška urednika" : <>§ Editor&rsquo;s Note</>}
            </span>
            <p
              className="text-white/80 font-light"
              style={{
                fontSize: "clamp(1rem, 1.15vw, 1.125rem)",
                lineHeight: 1.6,
                maxWidth: "42ch",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  fontFamily: "var(--font-display), serif",
                  fontStyle: "italic",
                  color: "var(--color-gold)",
                  fontSize: "3.6em",
                  lineHeight: 0.85,
                  float: "left",
                  paddingRight: "0.12em",
                  paddingTop: "0.06em",
                  marginTop: "-0.05em",
                  fontWeight: 400,
                }}
              >
                {isSr ? "M" : "M"}
              </span>
              {isSr ? (
                <>B Equipment proizvodi inox elemente za kuhinju u Beogradu —
                prema vašim tačnim dimenzijama, materijalima i obradi.
                Radionica i instalacioni tim u jednom.</>
              ) : (
                <>B Equipment fabricates stainless steel kitchen elements in
              Belgrade — to your exact dimensions, materials, and finish.
              Workshop and installation team in one.</>
              )}
            </p>
          </div>

          {/* Image */}
          <div className="col-span-12 lg:col-span-7 relative">
            <figure className="relative">
              <div
                className="relative overflow-hidden"
                style={{
                  aspectRatio: "16 / 9",
                  marginRight:
                    "calc(-1 * max((100vw - 80rem) / 2, 0px) - 1.5rem)",
                }}
              >
                <Image
                  src="/images/whatwedo/elements.jpg"
                  alt="Stainless steel commercial kitchen elements fabricated in the MB Equipment workshop"
                  fill
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  placeholder="blur"
                  blurDataURL={HERO_BLUR}
                  className="object-cover"
                  style={{
                    filter: "grayscale(0.35) contrast(1.05) brightness(0.95)",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 mix-blend-multiply"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10,22,40,0.35) 0%, rgba(10,22,40,0.75) 100%)",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 mix-blend-overlay"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(201,168,76,0.18) 0%, transparent 60%)",
                  }}
                />

                <figcaption
                  className="absolute bottom-4 left-5 right-5 flex items-center justify-between"
                  style={{ zIndex: 2 }}
                >
                  <span
                    className="font-display italic"
                    style={{
                      color: "var(--color-gold)",
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                    }}
                  >
                    {isSr ? "Iz radionice, Beograd" : "From the workshop, Belgrade"}
                  </span>
                  <span
                    className="font-display italic"
                    style={{
                      color: "var(--color-gold)",
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                    }}
                  >
                    — MB Eq.
                  </span>
                </figcaption>
              </div>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
