import AnimatedSection from "@/components/ui/AnimatedSection";
import { equipmentSolutions } from "@/data/food-processing";

export default function EquipmentSection() {
  return (
    <section className="py-24 lg:py-32 bg-offwhite" aria-labelledby="equipment-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-12">
            <div className="lg:col-span-5">
              <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-6">
                Capabilities
              </p>
              <h2
                id="equipment-heading"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1]"
              >
                Equipment<br />
                <span className="italic font-normal">Solutions</span>
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-text-secondary leading-relaxed text-sm max-w-lg">
                Maximize performance and output with advice and support from our
                experts around the world.
              </p>
            </div>
          </div>
          <div className="w-full h-px bg-gray-200 mb-0" />
        </AnimatedSection>

        <AnimatedSection stagger>
          {equipmentSolutions.map((item, i) => (
            <div
              key={item.name}
              className="group flex items-center gap-6 py-6 border-b border-gray-200 transition-all duration-300"
            >
              <span className="font-display text-xl font-bold text-text-secondary/30 w-10 flex-shrink-0 italic">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-text-primary font-medium group-hover:text-red transition-colors duration-300 flex-1">
                {item.name}
              </span>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
