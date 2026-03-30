import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { featured } from "@/data/innovation";

const CARD_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMkExMDEyIi8+PC9zdmc+";

export default function FeaturedSection() {
  return (
    <section className="py-24 bg-red" aria-labelledby="featured-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <span className="text-white/90 text-sm font-semibold uppercase tracking-[0.2em]">
            Featured Solutions
          </span>
          <h2
            id="featured-heading"
            className="font-display text-3xl lg:text-4xl font-bold text-white mt-4 mb-4"
          >
            Kitchen Concepts Built for What&apos;s Next
          </h2>
          <p className="text-white/90 max-w-2xl mb-16">
            Three transformative solutions reshaping how commercial kitchens
            operate — from ventless cooking to cloud-connected management.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {featured.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.15}>
              <article className="group relative overflow-hidden">
                {/* Image */}
                <div className="aspect-[4/5] relative">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover will-change-transform group-hover:scale-[1.02] transition-transform duration-500"
                    placeholder="blur"
                    blurDataURL={CARD_BLUR}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Content overlay — always visible (mobile has no hover) */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-display text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
