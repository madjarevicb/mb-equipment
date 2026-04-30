import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

export default function SectorsSection({
  dict,
  locale,
  ariaLabel,
  viewSolutionsLabel,
  exploreLabel,
}: {
  dict: Dictionary["home"]["sectors"];
  locale: Locale;
  ariaLabel?: string;
  viewSolutionsLabel?: string;
  exploreLabel?: string;
}) {
  const viewSolutions = viewSolutionsLabel ?? "View Solutions";
  const explore = exploreLabel ?? "Explore";
  return (
    <section id="sectors" aria-label={ariaLabel ?? "Business sectors"} className="py-28 lg:py-36 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="max-w-xl mb-20">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1] mb-5">
              {dict.heading1}<br />
              <span className="italic font-normal">{dict.heading2}</span>
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {dict.body}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Large card — Hotels & Restaurants (spans 7 cols) */}
          <AnimatedSection animation="fade-left" className="lg:col-span-7">
            <Link href={`/${locale}/business/hotels-restaurants`} className="group relative block overflow-hidden min-h-[520px] lg:min-h-[640px]">
              <Image
                src="/images/demo/dallas-lg.jpg"
                alt="Professional commercial kitchen with Middleby equipment"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                loading="lazy"
                className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwQTE2MjgiLz48L3N2Zz4="
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent group-hover:via-navy/30 transition-colors duration-700" />
              <div className="relative h-full flex flex-col justify-end p-8 lg:p-12">
                <span className="text-gold/80 text-xs font-medium uppercase tracking-[0.3em] mb-3">{dict.commercial}</span>
                <h3 className="font-display text-3xl lg:text-5xl font-bold text-white mb-4 leading-[1.1]">
                  {dict.hotelsRestaurants}
                </h3>
                <p className="text-white/60 leading-relaxed mb-8 max-w-md text-sm">
                  {dict.commercialDesc}
                </p>
                <div className="flex items-center gap-3 text-white/60 text-xs font-medium uppercase tracking-[0.15em] group-hover:text-white group-hover:gap-5 transition-all duration-500">
                  {viewSolutions} <span aria-hidden="true" className="inline-block group-hover:translate-x-1 transition-transform duration-500">&#8594;</span>
                </div>
              </div>
            </Link>
          </AnimatedSection>

          {/* Right column — 2 stacked cards (5 cols) */}
          <div className="lg:col-span-5 grid grid-rows-2 gap-4">
            {/* Residential card */}
            <AnimatedSection delay={0.1} animation="fade-right">
              <Link href={`/${locale}/business/residential`} className="group relative block overflow-hidden h-full min-h-[300px]">
                <Image
                  src="/images/demo/residential.jpg"
                  alt="Luxury residential kitchen with Viking appliances"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  loading="lazy"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwQTE2MjgiLz48L3N2Zz4="
                />
                <div className="absolute inset-0 bg-gradient-to-br from-navy/80 via-navy/40 to-transparent group-hover:via-navy/30 transition-colors duration-700" />
                <div className="relative h-full flex flex-col justify-end p-8">
                  <span className="text-gold/80 text-xs font-medium uppercase tracking-[0.3em] mb-2">{dict.luxuryHome}</span>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3">{dict.residentialLabel}</h3>
                  <p className="text-white/60 leading-relaxed mb-4 max-w-sm text-sm">
                    {dict.residentialDesc}
                  </p>
                  <div className="flex items-center gap-3 text-white/60 text-xs font-medium uppercase tracking-[0.15em] group-hover:text-white group-hover:gap-5 transition-all duration-500">
                    {explore} <span aria-hidden="true" className="inline-block group-hover:translate-x-1 transition-transform duration-500">&#8594;</span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>

            {/* Food Processing card */}
            <AnimatedSection delay={0.2} animation="fade-right">
              <Link href={`/${locale}/business/food-processing`} className="group relative block overflow-hidden h-full min-h-[300px]">
                <Image
                  src="/images/demo/food-processing.jpg"
                  alt="Industrial food processing equipment and production line"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  loading="lazy"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwQTE2MjgiLz48L3N2Zz4="
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-navy/80 via-navy/30 to-transparent group-hover:via-navy/20 transition-colors duration-700" />
                <div className="relative h-full flex flex-col justify-end p-8">
                  <span className="text-gold/80 text-xs font-medium uppercase tracking-[0.3em] mb-2">{dict.industrial}</span>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3">{dict.foodProcessingLabel}</h3>
                  <p className="text-white/60 leading-relaxed mb-4 max-w-sm text-sm">
                    {dict.foodProcessingDesc}
                  </p>
                  <div className="flex items-center gap-3 text-white/60 text-xs font-medium uppercase tracking-[0.15em] group-hover:text-white group-hover:gap-5 transition-all duration-500">
                    {explore} <span aria-hidden="true" className="inline-block group-hover:translate-x-1 transition-transform duration-500">&#8594;</span>
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
