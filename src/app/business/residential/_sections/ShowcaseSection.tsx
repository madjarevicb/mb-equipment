import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { residentialBrands } from "@/data/residential";

export default function ShowcaseSection() {
  return (
    <section
      className="py-28 bg-offwhite"
      aria-labelledby="showcase-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden rounded-sm">
            {/* Left — Text */}
            <div className="bg-navy p-12 lg:p-16 flex flex-col justify-center">
              <div className="w-12 h-[2px] bg-gold mb-8" />
              <h2
                id="showcase-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight"
              >
                The Middleby Residential
                <span className="block text-gold mt-2">Collection</span>
              </h2>
              <p className="mt-8 text-white/80 leading-relaxed">
                MB Equipment Solutions Residential brings together{" "}
                {residentialBrands.length} international consumer brands
                dedicated to manufacturing premium kitchen appliances and
                outdoor cooking equipment — from handcrafted French ranges to
                professional-grade outdoor grills.
              </p>
              <p className="mt-4 text-white/80 leading-relaxed text-sm">
                Middleby is setting the standard for the luxury home industry,
                committed to serving excellence in everything we do.
              </p>
            </div>
            {/* Right — Logo */}
            <div className="bg-[#0D1520] flex items-center justify-center p-12 lg:p-16 relative">
              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-gold/20" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-gold/20" />
              <div className="text-center">
                <Image
                  src="/mb-logo.svg"
                  alt="MB Equipment Solutions"
                  width={220}
                  height={90}
                  loading="lazy"
                  className="mx-auto"
                />
                <div className="w-10 h-[1px] bg-gold/40 mx-auto mt-8 mb-4" />
                <p className="text-white/80 text-lg tracking-[0.6em] uppercase">
                  Residential
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
