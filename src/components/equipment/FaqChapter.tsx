import React from "react";
import ScrollReveal from "@/app/[locale]/equipment/thermal-processing/_sections/ScrollReveal";

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqChapterProps {
  variant?: "light" | "dark";
  eyebrow?: string;
  heading: React.ReactNode;
  items: FaqItem[];
  pageUrl: string;
}

/**
 * Editorial FAQ chapter — two-column Q&A on lg+, single column on mobile.
 * Emits FAQPage JSON-LD for Google rich results. Italic Cormorant questions,
 * DM Sans answers, gold hairlines between rows.
 */
export default function FaqChapter({
  variant = "light",
  eyebrow,
  heading,
  items,
  pageUrl,
}: FaqChapterProps) {
  const isDark = variant === "dark";
  const bg = isDark ? "var(--color-navy)" : "var(--color-offwhite)";
  const goldColor = isDark ? "var(--color-gold)" : "var(--color-gold-text)";
  const headingColor = isDark ? "#FFFFFF" : "var(--color-navy)";
  const bodyColor = isDark ? "rgba(255,255,255,0.75)" : "rgba(10,22,40,0.75)";
  const ruleColor = isDark
    ? "rgba(201, 168, 76, 0.4)"
    : "rgba(10, 22, 40, 0.14)";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  };

  return (
    <section
      aria-labelledby="faq-chapter-heading"
      style={{
        backgroundColor: bg,
        paddingTop: "clamp(2.5rem, 5vw, 5rem)",
        paddingBottom: "clamp(2.5rem, 5vw, 5rem)",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 lg:col-span-3">
              {eyebrow && (
                <span
                  style={{
                    color: goldColor,
                    fontSize: "11px",
                    letterSpacing: "0.32em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                  className="font-sans"
                >
                  {eyebrow}
                </span>
              )}
            </div>
            <div className="col-span-12 lg:col-span-9">
              <h2
                id="faq-chapter-heading"
                className="font-display"
                style={{
                  color: headingColor,
                  fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "-0.01em",
                }}
              >
                {heading}
              </h2>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="w-full"
            style={{
              borderBottom: `1px solid ${ruleColor}`,
              marginTop: "clamp(1.5rem, 3vw, 2.5rem)",
              marginBottom: "clamp(1rem, 2vw, 1.5rem)",
            }}
          />
        </ScrollReveal>

        <dl className="grid grid-cols-1 lg:grid-cols-2 gap-x-12">
          {items.map((it, i) => (
            <div
              key={i}
              style={{
                borderTop: `1px solid ${ruleColor}`,
                paddingTop: "clamp(1.25rem, 2vw, 1.75rem)",
                paddingBottom: "clamp(1.25rem, 2vw, 1.75rem)",
              }}
            >
              <div className="flex items-baseline gap-3">
                <span
                  aria-hidden="true"
                  className="font-display italic"
                  style={{
                    color: goldColor,
                    fontSize: "13px",
                    letterSpacing: "0.1em",
                    minWidth: "2.25rem",
                  }}
                >
                  {`No. ${String(i + 1).padStart(2, "0")}`}
                </span>
                <dt
                  className="font-display italic"
                  style={{
                    color: headingColor,
                    fontSize: "clamp(1.125rem, 1.6vw, 1.5rem)",
                    lineHeight: 1.2,
                    fontWeight: 500,
                  }}
                >
                  {it.q}
                </dt>
              </div>
              <dd
                className="font-sans"
                style={{
                  marginTop: "0.75rem",
                  marginLeft: "calc(2.25rem + 0.75rem)",
                  color: bodyColor,
                  fontSize: "15px",
                  lineHeight: 1.65,
                }}
              >
                {it.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
