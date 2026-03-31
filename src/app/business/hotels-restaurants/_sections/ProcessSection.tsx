import AnimatedSection from "@/components/ui/AnimatedSection";
import { processSteps } from "@/data/our-brands";

export default function ProcessSection() {
  return (
    <section className="py-28 lg:py-36 bg-navy" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left column — sticky heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <AnimatedSection>
              <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-6">
                The Process
              </p>
              <h2
                id="process-heading"
                className="font-display text-3xl lg:text-4xl font-bold text-white leading-[1.1]"
              >
                From First Call<br />
                <span className="italic font-normal">to First Service</span>
              </h2>
              <p className="text-white/60 mt-4 leading-relaxed text-sm">
                Every project follows the same discipline. No shortcuts, no gaps
                between what&apos;s specified and what&apos;s delivered.
              </p>
              <div className="w-12 h-px bg-gold/30 mt-8" />
            </AnimatedSection>
          </div>

          {/* Right column — steps */}
          <div className="lg:col-span-8">
            <AnimatedSection stagger>
              {processSteps.map((item, i) => (
                <div
                  key={item.step}
                  className={`flex gap-6 py-8 ${
                    i < processSteps.length - 1 ? "border-b border-white/10" : ""
                  }`}
                >
                  <span className="font-display text-2xl font-bold text-white/15 w-8 shrink-0 text-right italic">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-white font-medium text-sm mb-2">
                      {item.step}
                    </h3>
                    <p className="text-white/60 text-sm leading-[1.8]">
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
