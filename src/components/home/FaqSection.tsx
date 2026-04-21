"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { faqs } from "@/lib/faq";

export default function FaqSection({
  dict,
}: {
  dict: { heading1: string; heading2: string; body: string };
}) {
  return (
    <section aria-label="Frequently asked questions" className="py-24 lg:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left column — heading */}
          <AnimatedSection className="lg:col-span-4">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1] mb-5">
              {dict.heading1}<br />
              <span className="italic font-normal">{dict.heading2}</span>
            </h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              {dict.body}
            </p>
            <div className="w-12 h-px bg-gold/50 mt-8" />
          </AnimatedSection>

          {/* Right column — accordion */}
          <div className="lg:col-span-8">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
}
