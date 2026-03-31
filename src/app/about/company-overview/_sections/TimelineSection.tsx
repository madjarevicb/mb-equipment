import AnimatedSection from "@/components/ui/AnimatedSection";
import { milestones } from "@/data/company-overview";

export default function TimelineSection() {
  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="timeline-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left — heading */}
          <AnimatedSection className="lg:col-span-4" animation="fade-right">
            <h2 id="timeline-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1] mb-5">
              Twenty Years<br />
              <span className="italic font-normal">of Building</span>
            </h2>
            <p className="text-text-secondary leading-relaxed text-sm">
              From a three-person team in Belgrade to 40+ countries. The premise has not changed — only the scale.
            </p>
            <div className="w-12 h-px bg-gold/50 mt-8" />
          </AnimatedSection>

          {/* Right — milestones as stacked blocks */}
          <div className="lg:col-span-8">
            <ol role="list" aria-label="Company timeline" className="list-none space-y-0">
              {milestones.map((m, i) => (
                <AnimatedSection key={m.number} delay={i * 0.06}>
                  <li className={`grid grid-cols-[auto_1fr] gap-6 lg:gap-10 py-8 ${i < milestones.length - 1 ? "border-b border-gray-200" : ""}`}>
                    <div className="w-16 lg:w-20 flex-shrink-0">
                      <span className="font-display text-3xl lg:text-4xl font-bold text-text-primary/10 italic leading-none">{m.number}</span>
                      <span className="block text-gold/80 text-[11px] font-medium uppercase tracking-[0.2em] mt-1">{m.year}</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-text-primary mb-2">{m.title}</h3>
                      <p className="text-text-secondary text-sm leading-[1.8]">{m.description}</p>
                    </div>
                  </li>
                </AnimatedSection>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
