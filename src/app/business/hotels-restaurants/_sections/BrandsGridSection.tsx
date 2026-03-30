import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { brands } from "@/data/our-brands";

export default function BrandsGridSection() {
  return (
    <section
      className="py-24 bg-offwhite"
      aria-labelledby="brands-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[2px] bg-gold" />
                  <span className="text-gold-text text-xs font-semibold uppercase tracking-widest">
                    Brand Portfolio
                  </span>
                </div>
                <h2
                  id="brands-heading"
                  className="font-display text-3xl lg:text-5xl font-bold text-navy leading-[1.1]"
                >
                  The Names Behind
                  <br className="hidden lg:block" /> the Kitchens
                </h2>
                <p className="text-text-secondary text-sm mt-4">
                  {brands.length} brands in our portfolio
                </p>
              </div>
              <div className="lg:col-span-5">
                <p className="text-text-secondary leading-relaxed lg:border-l-2 lg:border-gold/50 lg:pl-6">
                  We represent {brands.length} brands from the Middleby
                  Corporation portfolio. Each one selected for build quality,
                  factory-direct service network, and proven performance under
                  pressure.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <article
              key={brand.name}
              className="group bg-white border border-gray-100 hover:border-navy/20 h-full transition-all duration-300 hover:shadow-lg overflow-hidden rounded-sm"
            >
              {/* Logo area */}
              <div className="h-32 bg-offwhite border-b border-gray-100 flex items-center justify-center p-6 group-hover:bg-navy transition-colors duration-500">
                {brand.logo ? (
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={180}
                    height={64}
                    sizes="180px"
                    loading="lazy"
                    className="max-h-16 max-w-[180px] w-auto object-contain group-hover:brightness-0 group-hover:invert transition-all duration-500"
                  />
                ) : (
                  <span className="font-display text-2xl font-bold text-navy group-hover:text-white transition-colors duration-500">
                    {brand.name}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-lg font-bold text-navy">
                    {brand.name}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold-text">
                    {brand.category}
                  </span>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {brand.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
