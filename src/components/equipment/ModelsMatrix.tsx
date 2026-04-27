import React from "react";
import Image from "next/image";
import ScrollReveal from "@/app/[locale]/equipment/thermal-processing/_sections/ScrollReveal";

export interface SpecRow {
  label: string;
  values: (string | number)[];
}

export interface Model {
  serial: string;
  name: string;
  brand: string;
  imageSrc?: string;
  specSheetHref?: string;
}

export interface ModelsMatrixProps {
  variant?: "light" | "dark";
  eyebrow?: string;
  heading: React.ReactNode;
  models: Model[];
  specs: SpecRow[];
  footnote?: string;
}

/**
 * Side-by-side product spec comparison matrix. Up to 6 models visible.
 * Desktop: horizontal grid of product columns. Mobile: vertical stack.
 */
export default function ModelsMatrix({
  variant = "light",
  eyebrow,
  heading,
  models,
  specs,
  footnote,
}: ModelsMatrixProps) {
  const isDark = variant === "dark";
  const bg = isDark ? "var(--color-navy)" : "var(--color-offwhite)";
  const goldColor = isDark ? "var(--color-gold)" : "var(--color-gold-text)";
  const headingColor = isDark ? "#FFFFFF" : "var(--color-navy)";
  const bodyColor = isDark ? "rgba(255,255,255,0.78)" : "rgba(10,22,40,0.78)";
  const mutedColor = isDark ? "rgba(255,255,255,0.55)" : "rgba(10,22,40,0.55)";
  const ruleColor = isDark
    ? "rgba(201, 168, 76, 0.4)"
    : "rgba(10, 22, 40, 0.14)";
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.45)";

  const colCount = Math.min(models.length, 6);
  const gridColsClass = (() => {
    switch (colCount) {
      case 1:
        return "lg:grid-cols-1";
      case 2:
        return "lg:grid-cols-2";
      case 3:
        return "lg:grid-cols-3";
      case 4:
        return "lg:grid-cols-4";
      case 5:
        return "lg:grid-cols-5";
      default:
        return "lg:grid-cols-6";
    }
  })();

  return (
    <section
      aria-label="Models comparison"
      style={{
        backgroundColor: bg,
        paddingTop: "clamp(2.5rem, 5vw, 5rem)",
        paddingBottom: "clamp(2.5rem, 5vw, 5rem)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="grid grid-cols-12 gap-6 items-end">
            <div className="col-span-12 lg:col-span-3">
              {eyebrow && (
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
                  {eyebrow}
                </span>
              )}
            </div>
            <div className="col-span-12 lg:col-span-9">
              <h2
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
              marginBottom: "clamp(1.5rem, 3vw, 2.5rem)",
            }}
          />
        </ScrollReveal>

        <div
          className={`grid grid-cols-1 ${gridColsClass} gap-6 lg:gap-4`}
        >
          {models.slice(0, 6).map((m, i) => (
            <article
              key={`${m.serial}-${i}`}
              style={{
                backgroundColor: cardBg,
                border: `1px solid ${ruleColor}`,
              }}
              className="flex flex-col"
            >
              <div
                className="relative w-full"
                style={{
                  aspectRatio: "4 / 5",
                  backgroundColor: isDark
                    ? "rgba(255,255,255,0.04)"
                    : "rgba(10,22,40,0.04)",
                }}
              >
                {m.imageSrc ? (
                  <Image
                    src={m.imageSrc}
                    alt={`${m.brand} ${m.name}`}
                    fill
                    sizes="(min-width: 1024px) 16vw, 100vw"
                    style={{ objectFit: "contain", padding: "1rem" }}
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center font-display italic"
                    style={{ color: goldColor, fontSize: "2rem" }}
                  >
                    —
                  </div>
                )}
              </div>

              <div className="p-4 flex flex-col gap-1" style={{ borderTop: `1px solid ${ruleColor}` }}>
                <span
                  className="font-display italic"
                  style={{ color: goldColor, fontSize: "12px", letterSpacing: "0.1em" }}
                >
                  {m.serial}
                </span>
                <h3
                  className="font-display"
                  style={{
                    color: headingColor,
                    fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)",
                    fontWeight: 600,
                    lineHeight: 1.15,
                  }}
                >
                  {m.name}
                </h3>
                <span
                  className="font-sans"
                  style={{
                    color: mutedColor,
                    fontSize: "10px",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  {m.brand}
                </span>
              </div>

              <dl className="px-4 pb-4 mt-2 flex-1">
                {specs.map((row, ri) => (
                  <div
                    key={ri}
                    className="flex items-baseline justify-between gap-3 py-2"
                    style={{ borderTop: `1px solid ${ruleColor}` }}
                  >
                    <dt
                      className="font-sans"
                      style={{
                        color: mutedColor,
                        fontSize: "10px",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}
                    >
                      {row.label}
                    </dt>
                    <dd
                      className="font-display italic text-right"
                      style={{
                        color: bodyColor,
                        fontSize: "14px",
                        lineHeight: 1.3,
                      }}
                    >
                      {String(row.values[i] ?? "—")}
                    </dd>
                  </div>
                ))}
              </dl>

              {m.specSheetHref && (
                <a
                  href={m.specSheetHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 inline-flex items-center justify-between gap-2 spec-link"
                  style={{
                    color: headingColor,
                    fontSize: "11px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    borderTop: `1px solid ${ruleColor}`,
                  }}
                >
                  <span>PDF spec sheet</span>
                  <span
                    aria-hidden="true"
                    className="spec-arrow"
                    style={{
                      color: goldColor,
                      transition: "transform 0.3s ease",
                      display: "inline-block",
                    }}
                  >
                    →
                  </span>
                </a>
              )}
            </article>
          ))}
        </div>

        {footnote && (
          <p
            className="font-display italic mt-6"
            style={{
              color: mutedColor,
              fontSize: "13px",
              lineHeight: 1.55,
              maxWidth: "48rem",
            }}
          >
            {footnote}
          </p>
        )}
      </div>
      <style>{`
        .spec-link:hover .spec-arrow,
        .spec-link:focus-visible .spec-arrow {
          transform: translateX(4px);
        }
        @media (prefers-reduced-motion: reduce) {
          .spec-arrow { transition: none !important; }
        }
      `}</style>
    </section>
  );
}
