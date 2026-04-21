import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/config";

interface Props {
  dict: Dictionary["companyOverview"]["partnership"];
  data: Dictionary["data"]["partnershipBlocks"];
  locale: Locale;
}

export default function PartnershipSection({ dict, data }: Props) {
  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="partnership-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left — heading */}
          <AnimatedSection className="lg:col-span-4" animation="fade-right">
            <p className="text-gold/80 text-xs font-medium uppercase tracking-[0.2em] mb-4">{dict.eyebrow}</p>
            <h2 id="partnership-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1] mb-5">
              {dict.heading1}<br />
              <span className="italic font-normal">{dict.heading2}</span>
            </h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              {dict.body}
            </p>
            <div className="w-12 h-px bg-gold/50 mt-8" />
          </AnimatedSection>

          {/* Right — partnership blocks */}
          <div className="lg:col-span-8">
            {data.map((block, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className={`grid grid-cols-[auto_1fr] gap-6 lg:gap-10 py-8 ${i < data.length - 1 ? "border-b border-gray-200" : ""}`}>
                  <span className="font-display text-3xl font-bold text-text-primary/10 italic leading-none w-10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-sm font-medium text-text-primary mb-2">{block.title}</h3>
                    <p className="text-text-secondary text-sm leading-[1.8] max-w-xl">{block.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
