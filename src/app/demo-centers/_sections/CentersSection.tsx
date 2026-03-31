import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { centers } from "@/data/demo-centers";

const CARD_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTVlN2ViIi8+PC9zdmc+";

export default function CentersSection() {
  return (
    <section
      id="centers"
      className="py-24 lg:py-32 bg-offwhite"
      aria-labelledby="centers-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-4">
            Our Locations
          </p>
          <h2
            id="centers-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-text-primary leading-[1.1] mb-16"
          >
            Innovation Centers<br />
            <span className="italic font-normal">Worldwide</span>
          </h2>
        </AnimatedSection>

        <div className="space-y-8">
          {centers.map((center, idx) => (
            <AnimatedSection key={center.id} delay={idx * 0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white overflow-hidden border border-gray-100 hover:border-gray-300 transition-all duration-300">
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
                  className={`p-8 lg:p-12 flex flex-col justify-center ${
                    idx % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.2em] mb-3">
                    {center.location}
                  </p>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-text-primary mb-4">
                    {center.name}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6">
                    {center.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {center.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-[10px] uppercase tracking-[0.2em] text-text-secondary border border-gray-200 px-3 py-1.5"
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
