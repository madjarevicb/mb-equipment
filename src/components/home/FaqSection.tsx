"use client";

import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ChevronIcon from "@/components/ui/ChevronIcon";
import { faqs } from "@/lib/faq";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section aria-label="Frequently asked questions" className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left column — heading + trust copy */}
          <AnimatedSection className="lg:col-span-4">
            <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-3">FAQ</p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Common Questions About Working With Us
            </h2>
            <p className="text-text-secondary leading-relaxed">
              From equipment selection and project scoping to installation timelines and ongoing maintenance — here are the questions our clients ask most often before starting a project.
            </p>
            <div className="w-10 h-[2px] bg-gold mt-6" />
          </AnimatedSection>

          {/* Right column — accordion */}
          <div className="lg:col-span-8 divide-y divide-gray-200">
            {faqs.map((faq, i) => {
              const panelId = `faq-panel-${i}`;
              const buttonId = `faq-button-${i}`;
              return (
                <AnimatedSection key={i} delay={i * 0.05}>
                  <div>
                    <button
                      id={buttonId}
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      aria-expanded={openIndex === i}
                      aria-controls={panelId}
                      className="w-full flex items-center justify-between py-5 text-left"
                    >
                      <span className="text-text-primary font-medium pr-4">{faq.question}</span>
                      <ChevronIcon
                        className={`w-5 h-5 flex-shrink-0 text-text-secondary transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`grid transition-[grid-template-rows] duration-300 ${openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                    >
                      <div className="overflow-hidden">
                        <p className="pb-5 text-text-secondary leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
