"use client";

import AnimatedSection from "@/components/ui/AnimatedSection";
import FaqAccordion from "@/components/ui/FaqAccordion";
import { faqItems } from "@/data/company-overview";

export default function FaqSection() {
  return (
    <section className="py-24 lg:py-32 bg-offwhite" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left — heading */}
          <AnimatedSection className="lg:col-span-4">
            <h2 id="faq-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1] mb-5">
              Questions<br />
              <span className="italic font-normal">We Hear Often</span>
            </h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              From equipment selection to installation timelines and ongoing maintenance.
            </p>
            <div className="w-12 h-px bg-gold/50 mt-8" />
          </AnimatedSection>

          {/* Right — accordion */}
          <div className="lg:col-span-8">
            <FaqAccordion items={faqItems} idPrefix="co-faq" renderHTML />
          </div>
        </div>
      </div>
    </section>
  );
}
