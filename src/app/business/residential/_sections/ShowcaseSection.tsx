import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { residentialBrands } from "@/data/residential";

export default function ShowcaseSection() {
  return (
    <section
      className="py-28 lg:py-36 bg-offwhite"
      aria-labelledby="showcase-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
            {/* Left — Text */}
            <div className="bg-navy p-12 lg:p-16 flex flex-col justify-center">
              <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-6">
                The Collection
              </p>
              <h2
                id="showcase-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-white leading-[1.1]"
              >
                The Middleby Residential<br />
                <span className="italic font-normal">Collection</span>
              </h2>
              <div className="w-12 h-px bg-gold/30 mt-8 mb-8" />
              <p className="text-white/60 leading-relaxed text-sm">
                MB Equipment Solutions Residential brings together{" "}
                {residentialBrands.length} international consumer brands
                dedicated to manufacturing premium kitchen appliances and
                outdoor cooking equipment — from handcrafted French ranges to
                professional-grade outdoor grills.
              </p>
              <p className="mt-4 text-white/40 leading-relaxed text-sm">
                Every brand is backed by Middleby engineering and our
                regional service team.
              </p>
            </div>
            {/* Right — Logo */}
            <div className="bg-navy flex items-center justify-center p-12 lg:p-16 relative">
              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-white/10" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-white/10" />
              <div className="text-center">
                <Image
                  src="/mb-logo.svg"
                  alt="MB Equipment Solutions"
                  width={220}
                  height={90}
                  loading="lazy"
                  className="mx-auto"
                />
                <div className="w-10 h-px bg-gold/30 mx-auto mt-8 mb-4" />
                <p className="text-white/40 text-sm tracking-[0.4em] uppercase">
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
