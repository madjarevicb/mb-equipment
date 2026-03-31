import AnimatedSection from "@/components/ui/AnimatedSection";
import { companyValues } from "@/data/company-overview";

export default function ValuesSection() {
  return (
    <section className="py-24 lg:py-32 bg-offwhite" aria-labelledby="values-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left — heading */}
          <AnimatedSection className="lg:col-span-4" animation="fade-right">
            <h2 id="values-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1] mb-5">
              What We Will<br />
              <span className="italic font-normal">Not Compromise On</span>
            </h2>
            <div className="w-12 h-px bg-gold/50 mt-8" />
          </AnimatedSection>

          {/* Right — values with gold left border accent */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            {companyValues.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.06}>
                <div className="border-l-2 border-gold/30 pl-5">
                  <h3 className="text-sm font-medium text-text-primary mb-2">{value.title}</h3>
                  <p className="text-text-secondary text-sm leading-[1.8]">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
