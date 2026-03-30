import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function SectorsSection() {
  return (
    <section id="sectors" aria-label="Business sectors" className="py-24 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-text mb-3">Sectors</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mb-4">
              Equipment for Every Kitchen — From One Location to One Thousand
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              Whether you are outfitting a five-star hotel kitchen, a quick-service chain rolling out across Southeast Europe, or a meat processing facility — the equipment has to perform. We make sure it does.
            </p>
          </div>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Large card — Hotels & Restaurants */}
          <AnimatedSection animation="fade-left">
            <Link href="/business/hotels-restaurants" className="group relative block overflow-hidden h-full min-h-[420px] lg:min-h-[560px]">
              <Image
                src="/images/demo/dallas-lg.jpg"
                alt="Professional commercial kitchen with Middleby equipment"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-8 lg:p-10">
                <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">Commercial</span>
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">Hotels &<br />Restaurants</h3>
                <p className="text-white/80 leading-relaxed mb-6 max-w-md">Full kitchen design and equipment for hospitality — from fine dining to high-volume banquet operations. Proven across global chains and independent operators alike.</p>
                <div className="flex items-center gap-2 text-red text-sm font-semibold group-hover:gap-4 transition-all">
                  See Commercial Solutions <span aria-hidden="true" className="text-lg">&rarr;</span>
                </div>
              </div>
            </Link>
          </AnimatedSection>

          {/* Right column — 2 stacked cards */}
          <div className="grid grid-rows-2 gap-6">
            {/* Residential card */}
            <AnimatedSection delay={0.15} animation="fade-right">
              <Link href="/business/residential" className="group relative block overflow-hidden h-full min-h-[260px]">
                <Image
                  src="/images/demo/residential.jpg"
                  alt="Luxury residential kitchen with Viking appliances"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-8">
                  <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-2">Luxury Home</span>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3">Residential</h3>
                  <p className="text-white/80 leading-relaxed mb-4 max-w-sm">Viking. La Cornue. AGA. The brands that define the luxury home kitchen.</p>
                  <div className="flex items-center gap-2 text-red text-sm font-semibold group-hover:gap-4 transition-all">
                    Explore Residential Collections <span aria-hidden="true" className="text-lg">&rarr;</span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* Food Processing card */}
            <AnimatedSection delay={0.25} animation="fade-right">
              <Link href="/business/food-processing" className="group relative block overflow-hidden h-full min-h-[260px]">
                <Image
                  src="/images/demo/food-processing.jpg"
                  alt="Industrial food processing equipment and production line"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-8">
                  <span className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-2">Industrial</span>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3">Food Processing</h3>
                  <p className="text-white/80 leading-relaxed mb-4 max-w-sm">Industrial ovens, mixers, slicers, packaging lines. Equipment rated for 24/7 production.</p>
                  <div className="flex items-center gap-2 text-red text-sm font-semibold group-hover:gap-4 transition-all">
                    See Industrial Solutions <span aria-hidden="true" className="text-lg">&rarr;</span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
