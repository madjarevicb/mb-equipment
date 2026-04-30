import React from "react";

interface ChapterMarkProps {
  numeral: string; // "I" | "II" | "III" | "IV"
  label: string; // "Opening" | "Index of Categories" etc.
  caption?: string;
  variant?: "light" | "dark";
  locale?: string;
}

/**
 * Chapter mark — giant Roman numeral in the margin, set
 * in italic Cormorant. Sits like a medieval illumination,
 * not in the content flow. Visible on >= lg screens.
 */
export default function ChapterMark({
  numeral,
  label,
  caption,
  variant = "light",
  locale,
}: ChapterMarkProps) {
  const isDark = variant === "dark";
  const isSr = locale === "sr";
  const chapterWord = isSr ? "Poglavlje" : "Chapter";
  const goldColor = isDark ? "var(--color-gold)" : "var(--color-gold-text)";
  const bodyColor = isDark ? "rgba(255,255,255,0.7)" : "var(--color-navy)";
  const ruleColor = isDark
    ? "rgba(201, 168, 76, 0.4)"
    : "rgba(10, 22, 40, 0.14)";
  const bg = isDark ? "transparent" : "transparent";

  return (
    <div
      className="relative w-full"
      style={{ backgroundColor: bg }}
      aria-hidden="true"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="grid grid-cols-12 gap-6 items-end"
          style={{
            paddingTop: "clamp(1.75rem, 4vw, 4rem)",
            paddingBottom: "clamp(0.75rem, 1.5vw, 1.25rem)",
          }}
        >
          <div className="col-span-12 lg:col-span-3 flex items-end">
            <span
              className="font-display italic leading-none"
              style={{
                color: goldColor,
                fontSize: "clamp(2.75rem, 5vw, 4.5rem)",
                letterSpacing: "-0.02em",
                display: "inline-block",
              }}
            >
              {numeral}
            </span>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <div
              className="flex items-baseline gap-4 lg:gap-6"
              style={{ color: bodyColor }}
            >
              <span
                aria-hidden="true"
                style={{ backgroundColor: goldColor }}
                className="hidden lg:block"
              >
                <span
                  className="block"
                  style={{ width: "56px", height: "1px" }}
                />
              </span>
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  color: bodyColor,
                  opacity: 0.8,
                }}
              >
                {chapterWord} {numeral}
              </span>
              <span style={{ color: goldColor, opacity: 0.7 }}>—</span>
              <span
                className="font-display italic"
                style={{
                  color: bodyColor,
                  fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                  lineHeight: 1.1,
                }}
              >
                {label}
              </span>
            </div>
            {caption && (
              <p
                className="mt-3 max-w-md"
                style={{
                  color: isDark ? "rgba(255,255,255,0.55)" : "rgba(10,22,40,0.6)",
                  fontSize: "13px",
                  lineHeight: 1.55,
                  fontStyle: "italic",
                  fontFamily: "var(--font-display), serif",
                }}
              >
                {caption}
              </p>
            )}
          </div>
        </div>
        <div
          style={{
            borderBottom: `1px solid ${ruleColor}`,
          }}
          className="w-full"
        />
      </div>
    </div>
  );
}
