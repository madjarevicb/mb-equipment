import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Milestone } from "@/data/company-overview";
import { milestones } from "@/data/company-overview";

const colorMap: Record<Milestone["color"], { dot: string; number: string }> = {
  gold: { dot: "bg-gold", number: "text-gold/20" },
  red: { dot: "bg-red", number: "text-red/20" },
};

export default function TimelineSection() {
  return (
    <section className="py-28 bg-white" aria-labelledby="timeline-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="mb-20">
            <SectionHeading id="timeline-heading" heading="20 Years of Building Kitchens That Work" divider />
          </div>
        </AnimatedSection>

        <AnimatedSection stagger>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-[0.9375rem] lg:left-1/2 top-0 bottom-0 w-[2px] bg-gold/20 lg:-translate-x-px" />
            <ol role="list" aria-label="Company timeline" className="list-none">
              {milestones.map((m, i) => (
                <li key={m.number} className={`relative flex flex-col lg:flex-row gap-8 lg:gap-16 pl-10 lg:pl-0 ${i < milestones.length - 1 ? "mb-20" : ""}`}>
                  <div className={`absolute left-[0.4375rem] lg:left-1/2 top-2 w-4 h-4 rounded-full ${colorMap[m.color].dot} border-4 border-white lg:-translate-x-1/2 z-10`} />
                  <div className="lg:w-1/2 lg:text-right lg:pr-16">
                    <span className={`font-display text-5xl lg:text-7xl font-bold ${colorMap[m.color].number} italic leading-none`} aria-hidden="true">{m.number}</span>
                    <span className="block text-gold text-sm font-semibold uppercase tracking-[0.2em] mt-2">{m.year}</span>
                    <h3 className="font-display text-xl font-bold text-text-primary mt-2">{m.title}</h3>
                  </div>
                  <div className="lg:w-1/2 lg:pl-16">
                    <p className="text-text-secondary leading-relaxed">{m.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
