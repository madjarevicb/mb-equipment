import React from "react";
import Link from "next/link";

export interface CtaTriadProps {
  locale: "en" | "sr";
  productSlug?: string;
  catalogHref?: string;
  variant?: "light" | "dark";
}

interface Ticket {
  label: string;
  title: React.ReactNode;
  body: string;
  href: string;
  cta: string;
}

const COPY = {
  en: {
    quoteLabel: "I — Pricing",
    quoteTitle: (
      <>
        Request <em className="font-display italic">a quote</em>
      </>
    ),
    quoteBody:
      "Tailored pricing based on your kitchen brief, delivered within two working days.",
    quoteCta: "Send the brief",
    demoLabel: "II — Showroom",
    demoTitle: (
      <>
        Book <em className="font-display italic">a visit</em>
      </>
    ),
    demoBody:
      "See the equipment in operation at our partner demo centers across Europe.",
    demoCta: "Plan a session",
    catalogLabel: "III — Documents",
    catalogTitle: (
      <>
        Download <em className="font-display italic">the spec</em>
      </>
    ),
    catalogBody:
      "Full technical drawings, electrical and gas connections, install clearances.",
    catalogCta: "Open spec sheet",
  },
  sr: {
    quoteLabel: "I — Cena",
    quoteTitle: (
      <>
        Zatražite <em className="font-display italic">ponudu</em>
      </>
    ),
    quoteBody:
      "Ponuda po meri vašeg projekta, isporučena u roku od dva radna dana.",
    quoteCta: "Pošaljite upit",
    demoLabel: "II — Showroom",
    demoTitle: (
      <>
        Zakažite <em className="font-display italic">posetu</em>
      </>
    ),
    demoBody:
      "Pogledajte opremu u radu kod naših partnerskih demo centara širom Evrope.",
    demoCta: "Zakažite termin",
    catalogLabel: "III — Dokumenti",
    catalogTitle: (
      <>
        Preuzmite <em className="font-display italic">specifikaciju</em>
      </>
    ),
    catalogBody:
      "Tehnički crteži, priključci za struju i gas, prostor potreban za instalaciju.",
    catalogCta: "Otvorite spec list",
  },
};

/**
 * Three-ticket CTA conversion block — Quote / Demo / Catalog.
 * Hairline borders between tickets, animated arrow on hover.
 */
export default function CtaTriad({
  locale,
  productSlug,
  catalogHref,
  variant = "light",
}: CtaTriadProps) {
  const isDark = variant === "dark";
  const bg = isDark ? "var(--color-navy)" : "var(--color-offwhite)";
  const goldColor = isDark ? "var(--color-gold)" : "var(--color-gold-text)";
  const headingColor = isDark ? "#FFFFFF" : "var(--color-navy)";
  const bodyColor = isDark ? "rgba(255,255,255,0.75)" : "rgba(10,22,40,0.75)";
  const ruleColor = isDark
    ? "rgba(201, 168, 76, 0.4)"
    : "rgba(10, 22, 40, 0.14)";

  const c = COPY[locale];
  const productQuery = productSlug ? `?product=${encodeURIComponent(productSlug)}` : "";

  const tickets: Ticket[] = [
    {
      label: c.quoteLabel,
      title: c.quoteTitle,
      body: c.quoteBody,
      href: `/${locale}/contact${productQuery}`,
      cta: c.quoteCta,
    },
    {
      label: c.demoLabel,
      title: c.demoTitle,
      body: c.demoBody,
      href: `/${locale}/demo-centers`,
      cta: c.demoCta,
    },
    {
      label: c.catalogLabel,
      title: c.catalogTitle,
      body: c.catalogBody,
      href: catalogHref || "#",
      cta: c.catalogCta,
    },
  ];

  return (
    <section
      aria-label="Calls to action"
      style={{
        backgroundColor: bg,
        paddingTop: "clamp(2.5rem, 5vw, 5rem)",
        paddingBottom: "clamp(2.5rem, 5vw, 5rem)",
        borderTop: `1px solid ${ruleColor}`,
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {tickets.map((t, i) => {
            const isExternal = t.href === "#" || t.href.startsWith("http");
            const innerStyle: React.CSSProperties = {
              paddingTop: "clamp(1.5rem, 2.5vw, 2rem)",
              paddingBottom: "clamp(1.5rem, 2.5vw, 2rem)",
              paddingLeft: "clamp(0rem, 2vw, 1.5rem)",
              paddingRight: "clamp(0rem, 2vw, 1.5rem)",
              borderTop: i === 0 ? "none" : `1px solid ${ruleColor}`,
            };
            const lgStyle: React.CSSProperties = {
              borderLeft: i === 0 ? "none" : `1px solid ${ruleColor}`,
              borderTop: "none",
            };
            return (
              <div
                key={i}
                className="lg:col-span-4 group"
                style={innerStyle}
              >
                <div className="hidden lg:block" style={lgStyle} />
                <div className="flex flex-col h-full" style={{ minHeight: "180px" }}>
                  <span
                    className="font-sans"
                    style={{
                      color: goldColor,
                      fontSize: "11px",
                      letterSpacing: "0.32em",
                      textTransform: "uppercase",
                      fontWeight: 500,
                    }}
                  >
                    {t.label}
                  </span>
                  <h3
                    className="font-display mt-3"
                    style={{
                      color: headingColor,
                      fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
                      lineHeight: 1.1,
                      fontWeight: 600,
                      letterSpacing: "-0.005em",
                    }}
                  >
                    {t.title}
                  </h3>
                  <p
                    className="font-sans mt-3"
                    style={{
                      color: bodyColor,
                      fontSize: "14px",
                      lineHeight: 1.6,
                    }}
                  >
                    {t.body}
                  </p>
                  <div className="mt-auto pt-6">
                    {isExternal ? (
                      <a
                        href={t.href}
                        className="inline-flex items-center gap-3 cta-link"
                        style={{
                          color: headingColor,
                          fontSize: "13px",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          fontWeight: 600,
                          borderBottom: `1px solid ${goldColor}`,
                          paddingBottom: "4px",
                        }}
                      >
                        <span>{t.cta}</span>
                        <span
                          aria-hidden="true"
                          className="cta-arrow"
                          style={{
                            color: goldColor,
                            display: "inline-block",
                            transition: "transform 0.3s ease",
                          }}
                        >
                          →
                        </span>
                      </a>
                    ) : (
                      <Link
                        href={t.href}
                        className="inline-flex items-center gap-3 cta-link"
                        style={{
                          color: headingColor,
                          fontSize: "13px",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                          fontWeight: 600,
                          borderBottom: `1px solid ${goldColor}`,
                          paddingBottom: "4px",
                        }}
                      >
                        <span>{t.cta}</span>
                        <span
                          aria-hidden="true"
                          className="cta-arrow"
                          style={{
                            color: goldColor,
                            display: "inline-block",
                            transition: "transform 0.3s ease",
                          }}
                        >
                          →
                        </span>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        .cta-link:hover .cta-arrow,
        .cta-link:focus-visible .cta-arrow {
          transform: translateX(4px);
        }
        @media (prefers-reduced-motion: reduce) {
          .cta-arrow { transition: none !important; }
        }
      `}</style>
    </section>
  );
}
