"use client";

import { useState } from "react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { sanitizeHTML } from "@/lib/constants";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  renderHTML?: boolean;
  /** ID prefix to avoid duplicate DOM ids when multiple accordions exist on one page */
  idPrefix?: string;
}

export default function FaqAccordion({
  items,
  renderHTML = false,
  idPrefix = "faq",
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {items.map((item, i) => {
        const panelId = `${idPrefix}-panel-${i}`;
        const buttonId = `${idPrefix}-button-${i}`;
        const isOpen = openIndex === i;
        return (
          <AnimatedSection key={item.question} delay={i * 0.04}>
            <div className={`border-b border-gray-200 ${i === 0 ? "border-t" : ""}`}>
              <button
                id={buttonId}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className={`text-sm font-medium pr-6 transition-colors duration-300 ${isOpen ? "text-text-primary" : "text-text-secondary group-hover:text-text-primary"}`}>
                  {item.question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center transition-all duration-300 ${isOpen ? "rotate-45" : ""}`}>
                  <svg className="w-3.5 h-3.5 text-text-secondary" fill="none" viewBox="0 0 14 14" stroke="currentColor" strokeWidth={1.5}>
                    <path d="M7 0v14M0 7h14" />
                  </svg>
                </span>
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  {renderHTML ? (
                    <p
                      className="pb-6 text-text-secondary text-sm leading-[1.8] max-w-2xl"
                      dangerouslySetInnerHTML={{ __html: sanitizeHTML(item.answer) }}
                    />
                  ) : (
                    <p className="pb-6 text-text-secondary text-sm leading-[1.8] max-w-2xl">
                      {item.answer}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        );
      })}
    </>
  );
}
