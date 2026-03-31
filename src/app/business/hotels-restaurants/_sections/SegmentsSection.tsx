import AnimatedSection from "@/components/ui/AnimatedSection";
import { segments } from "@/data/our-brands";

export default function SegmentsSection() {
  return (
    <section
      className="py-16 lg:py-20 bg-white border-b border-gray-100"
      aria-label="Industry segments we serve"
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left — label */}
            <div className="lg:col-span-3">
              <p className="text-text-secondary text-[11px] font-medium uppercase tracking-[0.2em] mb-3">
                We equip
              </p>
              <div className="w-10 h-px bg-gray-200" />
            </div>

            {/* Right — segment list */}
            <div className="lg:col-span-9">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-10">
                {segments.map((s) => (
                  <div key={s.title}>
                    <h3 className="text-[13px] font-medium text-text-primary mb-1">
                      {s.title}
                    </h3>
                    <p className="text-[12px] text-text-secondary/60 leading-relaxed">
                      {s.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
