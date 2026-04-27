"use client";

import ROICalculator, { type ROIExample } from "./ROICalculator";

interface Props {
  variant?: "light" | "dark";
  eyebrow?: string;
  heading: string;
  example: ROIExample;
}

/**
 * Client wrapper for the IMC WasteStation ROI calculator.
 * Encapsulates the formula function so server components can render
 * this without violating the server→client function-prop boundary.
 */
export default function WasteROIWrapper({
  variant,
  eyebrow,
  heading,
  example,
}: Props) {
  return (
    <ROICalculator
      variant={variant}
      eyebrow={eyebrow}
      heading={heading}
      example={example}
      interactive={{
        inputs: [
          { key: "covers", label: "Covers per day", defaultValue: 300, unit: "covers", min: 50, max: 2000, step: 50 },
          { key: "wasteKg", label: "Daily food waste", defaultValue: 120, unit: "kg", min: 20, max: 1000, step: 10 },
          { key: "pickupCost", label: "Cost per pickup", defaultValue: 80, unit: "EUR", min: 20, max: 300, step: 10 },
        ],
        formula: (v) => {
          const reducedKg = Math.round(v.wasteKg * 0.2);
          const oldPickupsYear = 52 * 4;
          const newPickupsYear = 52 * 1.5;
          const annualSavings = (oldPickupsYear - newPickupsYear) * v.pickupCost;
          return [
            { label: "Volume after dewatering", value: reducedKg + " kg/day" },
            { label: "Pickup reduction", value: Math.round(((oldPickupsYear - newPickupsYear) / oldPickupsYear) * 100) + "%" },
            { label: "Annual collection savings", value: "≈ €" + annualSavings.toLocaleString() },
          ];
        },
        disclaimer:
          "Estimate only. Actual savings depend on local waste-collection contracts, kitchen volume, and operational practices. MB Equipment provides site-specific quotes after a kitchen audit.",
      }}
    />
  );
}
