import AnimatedSection from "@/components/ui/AnimatedSection";
import { processSteps } from "@/data/our-brands";

export default function ProcessSection() {
  return (
    <section className="py-24 bg-navy" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left column — sticky heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <AnimatedSection>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-gold" />
                <span className="text-gold text-xs font-semibold uppercase tracking-widest">
                  Process
                </span>
              </div>
              <h2
                id="process-heading"
                className="font-display text-3xl lg:text-4xl font-bold text-white leading-tight"
              >
                From First Call
                <br />
                to First Service
              </h2>
              <p className="text-white/80 mt-4 leading-relaxed text-sm">
                Every project follows the same discipline. No shortcuts, no gaps
                between what&apos;s specified and what&apos;s delivered.
              </p>
            </AnimatedSection>
          </div>

          {/* Right column — single stagger wrapper instead of 7 individual ones */}
          <div className="lg:col-span-8">
            <AnimatedSection stagger>
              {processSteps.map((item, i) => (
                <div
                  key={item.step}
                  className={`flex gap-6 py-7 ${
                    i < processSteps.length - 1 ? "border-b border-white/10" : ""
                  }`}
                >
                  <span className="font-display text-2xl font-bold text-gold/50 w-8 shrink-0 text-right">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-white font-semibold text-lg">
                      {item.step}
                    </h3>
                    <p className="text-white/80 text-sm mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
