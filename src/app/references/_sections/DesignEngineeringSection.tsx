import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { serviceCards, equipmentShowcase } from "@/data/references";

export default function DesignEngineeringSection() {
  return (
    <section
      className="py-14 bg-navy"
      aria-labelledby="design-engineering-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Our Services
          </p>
          <h2
            id="design-engineering-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-white mb-14"
          >
            Kitchen Design, Engineering & Planning
          </h2>
        </AnimatedSection>

        <AnimatedSection stagger>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {serviceCards.map((item) => (
              <div key={item.label}>
                <p className="text-white/80 text-xs uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <div className="relative aspect-[16/10] rounded-sm overflow-hidden group">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 370px"
                    loading="lazy"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Equipment showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
          {equipmentShowcase.map((item) => (
            <AnimatedSection key={item.src}>
              <div className="relative aspect-[2/1] rounded-sm overflow-hidden group">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 570px"
                  loading="lazy"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
