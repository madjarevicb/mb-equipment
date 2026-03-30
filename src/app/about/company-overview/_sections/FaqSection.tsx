import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { sanitizeHTML } from "@/lib/constants";
import { faqItems } from "@/data/company-overview";

export default function FaqSection() {
  return (
    <section className="py-28 bg-offwhite" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="mb-20">
            <SectionHeading id="faq-heading" heading="Frequently Asked Questions" italic={false} />
          </div>
        </AnimatedSection>

        <AnimatedSection stagger className="max-w-3xl mx-auto space-y-6">
          {faqItems.map((item) => (
            <details key={item.question} className="group bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-300" name="faq">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-text-primary text-lg hover:text-navy focus-visible:outline-gold transition-colors">
                {item.question}
                <svg className="w-5 h-5 text-gold shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </summary>
              <p className="mt-4 text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: sanitizeHTML(item.answer) }} />
            </details>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
