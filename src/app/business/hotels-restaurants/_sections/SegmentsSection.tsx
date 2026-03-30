import AnimatedSection from "@/components/ui/AnimatedSection";
import { segments } from "@/data/our-brands";

export default function SegmentsSection() {
  return (
    <section
      className="py-10 bg-white border-b border-gray-100"
      aria-label="Industry segments we serve"
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row md:items-center gap-5">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-8 h-[2px] bg-gold" />
              <span className="text-navy text-sm font-semibold uppercase tracking-widest">
                We equip
              </span>
            </div>
            <div className="hidden md:block w-[1px] h-6 bg-gray-200" />
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {segments.map((s, i) => (
                <span key={s.title} className="flex items-center gap-x-6">
                  <span className="text-[15px] text-text-secondary">
                    {s.title}
                  </span>
                  {i < segments.length - 1 && (
                    <span className="hidden sm:inline text-gold/50 text-xs">
                      ●
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
