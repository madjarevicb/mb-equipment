import React from "react";

export interface AwardItem {
  type: "heritage" | "award" | "certification";
  label: string;
  detail?: string;
}

export interface AwardStripProps {
  variant?: "light" | "dark";
  items: AwardItem[];
  eyebrow?: string;
  locale?: "en" | "sr";
}

/**
 * Brand heritage / certifications strip — small label + italic Cormorant value.
 * Gold dot dividers between items, hairline rules above and below.
 */
export default function AwardStrip({
  variant = "light",
  items,
  eyebrow,
  locale = "en",
}: AwardStripProps) {
  const isSr = locale === "sr";
  const sectionAriaLabel = isSr
    ? "Nasleđe i sertifikati"
    : "Heritage and certifications";
  const isDark = variant === "dark";
  const goldColor = isDark ? "var(--color-gold)" : "var(--color-gold-text)";
  const headingColor = isDark ? "#FFFFFF" : "var(--color-navy)";
  const mutedColor = isDark ? "rgba(255,255,255,0.6)" : "rgba(10,22,40,0.6)";
  const ruleColor = isDark
    ? "rgba(201, 168, 76, 0.4)"
    : "rgba(10, 22, 40, 0.14)";

  const typeLabel = (t: AwardItem["type"]): string => {
    switch (t) {
      case "heritage":
        return isSr ? "Nasleđe" : "Heritage";
      case "award":
        return isSr ? "Priznanje" : "Award";
      case "certification":
        return isSr ? "Sertifikat" : "Certified";
    }
  };

  return (
    <section
      aria-label={sectionAriaLabel}
      style={{
        paddingTop: "clamp(1.5rem, 3vw, 2.25rem)",
        paddingBottom: "clamp(1.5rem, 3vw, 2.25rem)",
        borderTop: `1px solid ${ruleColor}`,
        borderBottom: `1px solid ${ruleColor}`,
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        {eyebrow && (
          <div className="mb-4">
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
          </div>
        )}
        <ul
          className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row lg:items-stretch"
          style={{ gap: 0 }}
        >
          {items.map((it, i) => (
            <li
              key={`${it.label}-${i}`}
              className="flex items-center"
              style={{
                flex: "1 1 0%",
                paddingTop: "clamp(0.75rem, 1.5vw, 1rem)",
                paddingBottom: "clamp(0.75rem, 1.5vw, 1rem)",
                paddingLeft: "clamp(0rem, 2vw, 1.25rem)",
                paddingRight: "clamp(0rem, 2vw, 1.25rem)",
                borderTop:
                  i === 0 ? "none" : `1px solid ${ruleColor}`,
              }}
            >
              <div
                className="hidden lg:block"
                aria-hidden="true"
                style={{
                  borderLeft: i === 0 ? "none" : `1px solid ${ruleColor}`,
                  alignSelf: "stretch",
                  marginRight: "1rem",
                }}
              />
              <div className="flex-1 min-w-0">
                <span
                  className="font-sans block"
                  style={{
                    color: mutedColor,
                    fontSize: "10px",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  {typeLabel(it.type)}
                </span>
                <span
                  className="font-display italic block"
                  style={{
                    color: headingColor,
                    fontSize: "clamp(1.125rem, 1.6vw, 1.5rem)",
                    lineHeight: 1.15,
                    fontWeight: 500,
                    marginTop: "2px",
                  }}
                >
                  {it.label}
                </span>
                {it.detail && (
                  <span
                    className="font-sans block"
                    style={{
                      color: mutedColor,
                      fontSize: "12px",
                      lineHeight: 1.4,
                      marginTop: "4px",
                    }}
                  >
                    {it.detail}
                  </span>
                )}
              </div>
              {i < items.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden lg:inline-block font-display italic"
                  style={{
                    color: goldColor,
                    fontSize: "14px",
                    marginLeft: "1rem",
                    opacity: 0.8,
                  }}
                >
                  ·
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
