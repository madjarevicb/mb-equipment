import React from "react";

interface RunningMetaProps {
  items: string[];
  variant?: "light" | "dark";
  folio?: string;
}

/**
 * Editorial running-metadata strip.
 * Ultra-condensed, all-caps, wide tracking — used as chapter mark / running head.
 * NOT a marquee: static, legible, deliberate. The ornament is the grid.
 */
export default function RunningMeta({
  items,
  variant = "dark",
  folio,
}: RunningMetaProps) {
  const isDark = variant === "dark";
  const ruleColor = isDark
    ? "rgba(201, 168, 76, 0.4)"
    : "rgba(10, 22, 40, 0.18)";
  const textColor = isDark ? "rgba(255,255,255,0.55)" : "rgba(10,22,40,0.55)";
  const goldColor = isDark ? "var(--color-gold)" : "var(--color-gold-text)";

  return (
    <div
      aria-hidden="true"
      className="w-full"
      style={{
        borderTop: `1px solid ${ruleColor}`,
        borderBottom: `1px solid ${ruleColor}`,
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between gap-6 py-3 overflow-hidden">
          <ul className="flex items-center gap-0 flex-1 min-w-0 overflow-hidden">
            {items.map((item, i) => (
              <li
                key={item}
                className="flex items-center shrink-0"
                style={{ color: textColor }}
              >
                <span
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                  className="font-sans"
                >
                  {item}
                </span>
                {i < items.length - 1 && (
                  <span
                    style={{ color: goldColor, opacity: 0.8 }}
                    className="mx-4 font-display italic"
                  >
                    ·
                  </span>
                )}
              </li>
            ))}
          </ul>
          {folio && (
            <span
              style={{
                color: goldColor,
                fontSize: "11px",
                letterSpacing: "0.2em",
              }}
              className="font-display italic shrink-0 hidden md:inline"
            >
              {folio}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
