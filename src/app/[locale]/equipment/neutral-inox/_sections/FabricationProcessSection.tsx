import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Dictionary } from "@/i18n/types";

interface Props {
  dict: Dictionary["neutralInoxPage"]["fabrication"];
  data: Dictionary["data"]["fabricationSteps"];
}

export default function FabricationProcessSection({ dict, data }: Props) {
  return (
    <section
      className="py-28 lg:py-36 bg-navy"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-6">
                {dict.eyebrow}
              </p>
              <h2
                id="process-heading"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-8"
              >
                {dict.heading1}<br />
                <span className="italic font-normal">{dict.heading2}</span>
              </h2>
              <div className="w-12 h-px bg-gold/30 mb-8" />
              <p className="text-white/60 leading-relaxed">
                {dict.body}
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-0 lg:justify-center">
              {data.map((step, i) => (
                <div
                  key={step.title}
                  className="group py-6 border-b border-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <span className="font-display text-xl font-bold text-gold/40 w-10 flex-shrink-0 italic">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <p className="text-white font-medium group-hover:text-gold transition-colors duration-300 mb-2">
                        {step.title}
                      </p>
                      <p className="text-white/40 text-sm leading-relaxed max-w-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
