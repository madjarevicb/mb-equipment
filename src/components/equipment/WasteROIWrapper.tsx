"use client";

import ROICalculator, { type ROIExample } from "./ROICalculator";

interface Props {
  variant?: "light" | "dark";
  eyebrow?: string;
  heading: string;
  example: ROIExample;
  locale?: "en" | "sr";
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
  locale = "en",
}: Props) {
  const isSr = locale === "sr";

  const inputLabels = {
    covers: isSr ? "Gostiju dnevno" : "Covers per day",
    coversUnit: isSr ? "gostiju" : "covers",
    wasteKg: isSr ? "Dnevni otpad od hrane" : "Daily food waste",
    pickupCost: isSr ? "Cena po odvozu" : "Cost per pickup",
  };

  const outputLabels = {
    volumeAfterDewatering: isSr ? "Zapremina nakon ceđenja" : "Volume after dewatering",
    perDayUnit: isSr ? "kg/dan" : "kg/day",
    pickupReduction: isSr ? "Smanjenje broja odvoza" : "Pickup reduction",
    annualSavings: isSr ? "Godišnja ušteda na odvozu" : "Annual collection savings",
  };

  const disclaimerText = isSr
    ? "Samo procena. Stvarna ušteda zavisi od ugovora sa lokalnim komunalnim službama, obima kuhinje i radnih praksi. MB Equipment dostavlja specifičan upit za vaš objekat nakon obilaska kuhinje."
    : "Estimate only. Actual savings depend on local waste-collection contracts, kitchen volume, and operational practices. MB Equipment provides site-specific quotes after a kitchen audit.";

  return (
    <ROICalculator
      variant={variant}
      eyebrow={eyebrow}
      heading={heading}
      example={example}
      locale={locale}
      interactive={{
        inputs: [
          { key: "covers", label: inputLabels.covers, defaultValue: 300, unit: inputLabels.coversUnit, min: 50, max: 2000, step: 50 },
          { key: "wasteKg", label: inputLabels.wasteKg, defaultValue: 120, unit: "kg", min: 20, max: 1000, step: 10 },
          { key: "pickupCost", label: inputLabels.pickupCost, defaultValue: 80, unit: "EUR", min: 20, max: 300, step: 10 },
        ],
        formula: (v) => {
          const reducedKg = Math.round(v.wasteKg * 0.2);
          const oldPickupsYear = 52 * 4;
          const newPickupsYear = 52 * 1.5;
          const annualSavings = (oldPickupsYear - newPickupsYear) * v.pickupCost;
          return [
            { label: outputLabels.volumeAfterDewatering, value: reducedKg + " " + outputLabels.perDayUnit },
            { label: outputLabels.pickupReduction, value: Math.round(((oldPickupsYear - newPickupsYear) / oldPickupsYear) * 100) + "%" },
            { label: outputLabels.annualSavings, value: "≈ €" + annualSavings.toLocaleString() },
          ];
        },
        disclaimer: disclaimerText,
      }}
    />
  );
}
