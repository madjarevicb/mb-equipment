import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function BrandsSection() {
  return (
    <section
      className="relative py-28 bg-navy overflow-hidden"
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
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <AnimatedSection>
          <div className="max-w-3xl">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">
              Our Expertise
            </span>
            <h2
              id="brands-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 leading-tight"
            >
              Food Processing Brands
            </h2>
            <div className="w-16 h-[2px] bg-gold mt-6 mb-10" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-white/80 text-lg leading-relaxed">
                Middleby Food Processing Group manufactures equipment for every
                stage of protein and bakery production — from defrosting and
                marinating to cooking, baking, slicing, and packaging.
              </p>
              <p className="text-white/80 leading-relaxed">
                We cover processes from raw material preparation and production
                to product packaging for retail and food service applications.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="border-l-2 border-gold pl-6 py-2">
                <p className="text-white font-semibold">
                  Raw Material Preparation
                </p>
                <p className="text-white/80 text-sm mt-1">
                  Intake to processing
                </p>
              </div>
              <div className="border-l-2 border-red pl-6 py-2">
                <p className="text-white font-semibold">
                  Production & Processing
                </p>
                <p className="text-white/80 text-sm mt-1">
                  Thermal, baking, forming
                </p>
              </div>
              <div className="border-l-2 border-white/30 pl-6 py-2">
                <p className="text-white font-semibold">
                  Packaging & Distribution
                </p>
                <p className="text-white/80 text-sm mt-1">
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
