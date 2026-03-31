import AnimatedSection from "@/components/ui/AnimatedSection";
import { processSteps } from "@/data/company-overview";

export default function ProcessSection() {
  return (
    <section className="relative py-28 lg:py-36 bg-white overflow-hidden" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left — heading */}
          <AnimatedSection className="lg:col-span-4" animation="fade-right">
            <p className="text-gold/80 text-xs font-medium uppercase tracking-[0.2em] mb-4">The Process</p>
            <h2 id="process-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1] mb-5">
              The Full<br />
              <span className="italic font-normal">Cycle</span>
            </h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              Most equipment companies stop at delivery. We do not.
            </p>
            <div className="w-12 h-px bg-gold/50 mt-8" />
          </AnimatedSection>

          {/* Right — steps as numbered list */}
          <div className="lg:col-span-8">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.06}>
                <div className={`grid grid-cols-[auto_1fr] gap-6 lg:gap-10 py-8 ${i < processSteps.length - 1 ? "border-b border-gray-200" : ""}`}>
                  <span className="font-display text-3xl font-bold text-text-primary/10 italic leading-none w-10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-sm font-medium text-text-primary mb-2">{step.title}</h3>
                    <p className="text-text-secondary text-sm leading-[1.8] max-w-xl">{step.description}</p>
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
