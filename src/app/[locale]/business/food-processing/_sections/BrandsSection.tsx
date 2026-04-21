import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Dictionary } from "@/i18n/types";

interface Props {
  dict: Dictionary["foodProcessing"]["brands"];
}

export default function BrandsSection({ dict }: Props) {
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
                {dict.eyebrow}
              </p>
              <h2
                id="brands-heading"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1] mb-8"
              >
                {dict.heading1}<br />
                <span className="italic font-normal">{dict.heading2}</span>
              </h2>
              <div className="w-12 h-px bg-gold/30 mb-8" />
              <p className="text-white/60 leading-relaxed mb-4">
                {dict.body1}
              </p>
              <p className="text-white/40 leading-relaxed text-sm">
                {dict.body2}
              </p>
            </div>

            {/* Right — capability blocks */}
            <div className="lg:col-span-5 flex flex-col gap-6 lg:justify-center">
              <div className="border-l-2 border-gold/40 pl-6 py-2">
                <p className="text-white font-medium text-sm">
                  {dict.rawMaterial}
                </p>
                <p className="text-white/40 text-xs mt-1">
                  {dict.rawMaterialDesc}
                </p>
              </div>
              <div className="border-l-2 border-red/50 pl-6 py-2">
                <p className="text-white font-medium text-sm">
                  {dict.production}
                </p>
                <p className="text-white/40 text-xs mt-1">
                  {dict.productionDesc}
                </p>
              </div>
              <div className="border-l-2 border-white/20 pl-6 py-2">
                <p className="text-white font-medium text-sm">
                  {dict.packaging}
                </p>
                <p className="text-white/40 text-xs mt-1">
                  {dict.packagingDesc}
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
