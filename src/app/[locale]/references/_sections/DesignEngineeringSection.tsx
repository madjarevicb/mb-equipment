import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { serviceCards, equipmentShowcase } from "@/data/references";
import type { Dictionary } from "@/i18n/types";

interface Props {
  dict: Dictionary["references"]["designEngineering"];
}

export default function DesignEngineeringSection({ dict }: Props) {
  return (
    <section
      className="py-16 lg:py-20 bg-navy"
      aria-labelledby="design-engineering-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-6">
            {dict.eyebrow}
          </p>
          <h2
            id="design-engineering-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-white leading-[1.1] mb-14"
          >
            {dict.heading1}<br />
            <span className="italic font-normal">{dict.heading2}</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection stagger>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {serviceCards.map((item) => (
              <div key={item.label}>
                <p className="text-white/40 text-xs uppercase tracking-[0.2em] mb-2">
                  {item.label}
                </p>
                <div className="relative aspect-[16/10] overflow-hidden group">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    loading="lazy"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwQTE2MjgiLz48L3N2Zz4="
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
              <div className="relative aspect-[2/1] overflow-hidden group">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 620px"
                  loading="lazy"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwQTE2MjgiLz48L3N2Zz4="
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
