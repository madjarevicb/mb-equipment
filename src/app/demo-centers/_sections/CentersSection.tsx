import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { centers } from "@/data/demo-centers";

const CARD_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTVlN2ViIi8+PC9zdmc+";

export default function CentersSection() {
  return (
    <section
      id="centers"
      className="py-16 bg-offwhite"
      aria-labelledby="centers-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Our Locations
          </p>
          <h2
            id="centers-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-navy mb-12"
          >
            Innovation Centers Worldwide
          </h2>
        </AnimatedSection>

        <div className="space-y-8">
          {centers.map((center, idx) => (
            <AnimatedSection key={center.id} delay={idx * 0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                {/* Image */}
                <div
                  className={`relative aspect-[16/10] lg:aspect-auto ${
                    idx % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={center.image}
                    alt={`${center.name} — ${center.location}`}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={CARD_BLUR}
                    className="object-cover"
                  />
                </div>
                {/* Content */}
                <div
                  className={`p-8 lg:p-10 flex flex-col justify-center ${
                    idx % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                    {center.location}
                  </p>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-navy mb-4">
                    {center.name}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    {center.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {center.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs uppercase tracking-wider text-navy border border-navy/15 px-3 py-1.5"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
