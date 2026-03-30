import AnimatedSection from "@/components/ui/AnimatedSection";
import { equipmentSolutions } from "@/data/food-processing";

export default function EquipmentSection() {
  return (
    <section className="py-20 bg-offwhite" aria-labelledby="equipment-heading">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <span className="text-gold-text text-sm font-semibold uppercase tracking-[0.2em]">
                Capabilities
              </span>
              <h2
                id="equipment-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-navy mt-2"
              >
                Equipment Solutions
              </h2>
            </div>
            <p className="text-text-secondary leading-relaxed max-w-md text-sm lg:text-right">
              Maximize performance and output with advice and support from our
              experts around the world.
            </p>
          </div>
          <div className="w-full h-[1px] bg-navy/10 mb-0" />
        </AnimatedSection>

        <AnimatedSection stagger>
          {equipmentSolutions.map((item, i) => (
            <div
              key={item.name}
              className="group flex items-center gap-5 py-5 border-b border-[#E5E7EB] transition-all duration-300 hover:pl-2"
            >
              <span className="text-gold/50 font-display text-xl font-bold w-10 flex-shrink-0 group-hover:text-red transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-navy font-semibold group-hover:text-red transition-colors flex-1">
                {item.name}
              </span>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
