import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function BrandsSection() {
  return (
    <section
      className="relative py-28 lg:py-36 bg-navy overflow-hidden"
      aria-labelledby="brands-heading"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/food-processing/meal.png"
          alt=""
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover opacity-10"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwQTE2MjgiLz48L3N2Zz4="
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left — heading + text */}
            <div className="lg:col-span-7">
              <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-6">
                Our Expertise
              </p>
              <h2
                id="brands-heading"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-8"
              >
                Food Processing<br />
                <span className="italic font-normal">Brands</span>
              </h2>
              <div className="w-12 h-px bg-gold/30 mb-8" />
              <p className="text-white/60 leading-relaxed mb-4">
                Middleby Food Processing Group manufactures equipment for every
                stage of protein and bakery production — from defrosting and
                marinating to cooking, baking, slicing, and packaging.
              </p>
              <p className="text-white/40 leading-relaxed text-sm">
                We cover processes from raw material preparation and production
                to product packaging for retail and food service applications.
              </p>
            </div>

            {/* Right — capability blocks */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:justify-center">
              <div className="border-l-2 border-gold/40 pl-6 py-2">
                <p className="text-white font-medium text-sm">
                  Raw Material Preparation
                </p>
                <p className="text-white/40 text-xs mt-1">
                  Intake to processing
                </p>
              </div>
              <div className="border-l-2 border-red/50 pl-6 py-2">
                <p className="text-white font-medium text-sm">
                  Production &amp; Processing
                </p>
                <p className="text-white/40 text-xs mt-1">
                  Thermal, baking, forming
                </p>
              </div>
              <div className="border-l-2 border-white/20 pl-6 py-2">
                <p className="text-white font-medium text-sm">
                  Packaging &amp; Distribution
                </p>
                <p className="text-white/40 text-xs mt-1">
                  Retail and food service
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
