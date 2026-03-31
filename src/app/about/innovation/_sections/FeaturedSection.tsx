import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { featured } from "@/data/innovation";

const CARD_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMUEyQjRBIi8+PC9zdmc+";

export default function FeaturedSection() {
  return (
    <section className="py-24 lg:py-32 bg-navy" aria-labelledby="featured-heading">
      <div className="max-w-7xl mx-auto px-6">
        {/* Asymmetric heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-16">
          <AnimatedSection className="lg:col-span-5">
            <h2
              id="featured-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.1]"
            >
              Kitchen Concepts<br />
              <span className="italic font-normal">Built for What&apos;s Next</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection className="lg:col-span-7" delay={0.05}>
            <p className="text-white/60 leading-relaxed text-sm max-w-lg">
              Three transformative solutions reshaping how commercial kitchens
              operate — from ventless cooking to cloud-connected management.
            </p>
            <div className="w-12 h-px bg-gold/30 mt-6" />
          </AnimatedSection>
        </div>

        {/* Asymmetric grid: first card wide, next two stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured card — wide */}
          <AnimatedSection className="lg:col-span-7">
            <article className="group relative overflow-hidden h-full">
              <div className="aspect-[16/10] lg:aspect-auto lg:h-full relative min-h-[400px]">
                <Image
                  src={featured[0].image}
                  alt={featured[0].alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover will-change-transform group-hover:scale-[1.02] transition-transform duration-700"
                  placeholder="blur"
                  blurDataURL={CARD_BLUR}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-3">
                  {featured[0].title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-md">
                  {featured[0].text}
                </p>
              </div>
            </article>
          </AnimatedSection>

          {/* Two stacked cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {featured.slice(1).map((item, i) => (
              <AnimatedSection key={item.title} delay={0.08 + i * 0.06}>
                <article className="group relative overflow-hidden">
                  <div className="aspect-[16/9] relative">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover will-change-transform group-hover:scale-[1.02] transition-transform duration-700"
                      placeholder="blur"
                      blurDataURL={CARD_BLUR}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                    <h3 className="font-display text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
