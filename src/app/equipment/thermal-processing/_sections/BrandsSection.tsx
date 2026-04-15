import AnimatedSection from "@/components/ui/AnimatedSection";
import { thermalBrands } from "@/data/thermal-processing";

export default function BrandsSection() {
  return (
    <section
      className="py-28 lg:py-36 bg-navy"
      aria-labelledby="brands-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-6">
                Our Brands
              </p>
              <h2
                id="brands-heading"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-8"
              >
                Thermal Processing<br />
                <span className="italic font-normal">Brands</span>
              </h2>
              <div className="w-12 h-px bg-gold/30 mb-8" />
              <p className="text-white/60 leading-relaxed">
                Every brand in our thermal portfolio is factory-authorized.
                That means direct engineering access, priority parts supply,
                and equipment configured to your specification — not a catalog default.
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col gap-6 lg:justify-center">
              {thermalBrands.map((brand, i) => (
                <div
                  key={brand.name}
                  className="border-l-2 border-gold/40 pl-6 py-2"
                >
                  <p className="text-white font-medium text-sm">
                    {brand.name}
                  </p>
                  <p className="text-white/40 text-xs mt-1">
                    {brand.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
