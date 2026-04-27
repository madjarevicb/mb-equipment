"use client";

import React, { useMemo, useState } from "react";

export interface ROIExample {
  label: string;
  inputs: { label: string; value: string }[];
  output: { label: string; value: string }[];
  math: string;
}

export interface ROIInteractiveInput {
  key: string;
  label: string;
  defaultValue: number;
  unit: string;
  min: number;
  max: number;
  step: number;
}

export interface ROIInteractive {
  inputs: ROIInteractiveInput[];
  formula: (values: Record<string, number>) => { label: string; value: string }[];
  disclaimer: string;
}

export interface ROICalculatorProps {
  variant?: "light" | "dark";
  eyebrow?: string;
  heading: React.ReactNode;
  intro?: React.ReactNode;
  example: ROIExample;
  interactive?: ROIInteractive;
}

/**
 * Editorial ROI calculator with transparent math.
 * Either static example mode or interactive sliders + live formula.
 * Honest framing: estimate, typical, up-to.
 */
export default function ROICalculator({
  variant = "light",
  eyebrow,
  heading,
  intro,
  example,
  interactive,
}: ROICalculatorProps) {
  const isDark = variant === "dark";
  const bg = isDark ? "var(--color-navy)" : "var(--color-offwhite)";
  const goldColor = isDark ? "var(--color-gold)" : "var(--color-gold-text)";
  const headingColor = isDark ? "#FFFFFF" : "var(--color-navy)";
  const bodyColor = isDark ? "rgba(255,255,255,0.78)" : "rgba(10,22,40,0.78)";
  const mutedColor = isDark ? "rgba(255,255,255,0.55)" : "rgba(10,22,40,0.55)";
  const ruleColor = isDark
    ? "rgba(201, 168, 76, 0.4)"
    : "rgba(10, 22, 40, 0.14)";
  const trackColor = isDark ? "rgba(255,255,255,0.18)" : "rgba(10,22,40,0.18)";

  const initial = useMemo(() => {
    const r: Record<string, number> = {};
    interactive?.inputs.forEach((inp) => {
      r[inp.key] = inp.defaultValue;
    });
    return r;
  }, [interactive]);

  const [values, setValues] = useState<Record<string, number>>(initial);

  const liveOutputs = useMemo(() => {
    if (!interactive) return null;
    try {
      return interactive.formula(values);
    } catch {
      return null;
    }
  }, [interactive, values]);

  const outputs = liveOutputs ?? example.output;
  const inputsToShow = interactive ? null : example.inputs;
  const showMath = !interactive;

  return (
    <section
      aria-label="Savings estimate"
      style={{
        backgroundColor: bg,
        paddingTop: "clamp(2.5rem, 5vw, 5rem)",
        paddingBottom: "clamp(2.5rem, 5vw, 5rem)",
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
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
            {intro && (
              <p
                className="font-sans mt-4 max-w-2xl"
                style={{
                  color: bodyColor,
                  fontSize: "15px",
                  lineHeight: 1.65,
                }}
              >
                {intro}
              </p>
            )}
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-6">
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
              {interactive ? "Adjust inputs" : example.label}
            </span>

            {inputsToShow && (
              <ul className="mt-5">
                {inputsToShow.map((inp, i) => (
                  <li
                    key={i}
                    className="flex items-baseline justify-between gap-4 py-3"
                    style={{ borderTop: `1px solid ${ruleColor}` }}
                  >
                    <span
                      className="font-sans"
                      style={{
                        color: bodyColor,
                        fontSize: "13px",
                        lineHeight: 1.4,
                      }}
                    >
                      {inp.label}
                    </span>
                    <span
                      className="font-display italic"
                      style={{
                        color: headingColor,
                        fontSize: "clamp(1rem, 1.4vw, 1.25rem)",
                      }}
                    >
                      {inp.value}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {interactive && (
              <div className="mt-5 flex flex-col gap-6">
                {interactive.inputs.map((inp) => {
                  const v = values[inp.key] ?? inp.defaultValue;
                  return (
                    <div key={inp.key} style={{ borderTop: `1px solid ${ruleColor}`, paddingTop: "1rem" }}>
                      <div className="flex items-baseline justify-between gap-4">
                        <label
                          htmlFor={`roi-${inp.key}`}
                          className="font-sans"
                          style={{
                            color: bodyColor,
                            fontSize: "13px",
                            lineHeight: 1.4,
                          }}
                        >
                          {inp.label}
                        </label>
                        <span
                          className="font-display italic"
                          style={{
                            color: headingColor,
                            fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)",
                          }}
                        >
                          {v.toLocaleString()} {inp.unit}
                        </span>
                      </div>
                      <input
                        id={`roi-${inp.key}`}
                        type="range"
                        min={inp.min}
                        max={inp.max}
                        step={inp.step}
                        value={v}
                        onChange={(e) =>
                          setValues((prev) => ({
                            ...prev,
                            [inp.key]: Number(e.target.value),
                          }))
                        }
                        className="roi-range"
                        style={{
                          width: "100%",
                          marginTop: "0.75rem",
                          accentColor: goldColor,
                          background: trackColor,
                        }}
                        aria-valuemin={inp.min}
                        aria-valuemax={inp.max}
                        aria-valuenow={v}
                      />
                      <div
                        className="flex items-center justify-between mt-1 font-sans"
                        style={{
                          color: mutedColor,
                          fontSize: "10px",
                          letterSpacing: "0.18em",
                          textTransform: "uppercase",
                        }}
                      >
                        <span>
                          {inp.min} {inp.unit}
                        </span>
                        <span>
                          {inp.max} {inp.unit}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="lg:col-span-6">
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
              Estimate
            </span>

            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {outputs.map((o, i) => (
                <li
                  key={i}
                  style={{
                    borderTop: `1px solid ${ruleColor}`,
                    paddingTop: "1rem",
                  }}
                >
                  <span
                    className="font-display italic block"
                    style={{
                      color: goldColor,
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      lineHeight: 1.05,
                      fontWeight: 500,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {o.value}
                  </span>
                  <span
                    className="font-sans block mt-2"
                    style={{
                      color: mutedColor,
                      fontSize: "11px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      fontWeight: 500,
                    }}
                  >
                    {o.label}
                  </span>
                </li>
              ))}
            </ul>

            {showMath && (
              <p
                className="font-display italic mt-6"
                style={{
                  color: mutedColor,
                  fontSize: "13px",
                  lineHeight: 1.55,
                }}
              >
                {example.math}
              </p>
            )}

            {interactive && (
              <p
                className="font-display italic mt-6"
                style={{
                  color: mutedColor,
                  fontSize: "12px",
                  lineHeight: 1.55,
                }}
              >
                {interactive.disclaimer}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
