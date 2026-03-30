import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { globalChains } from "@/data/references";

export default function GlobalChainsSection() {
  const tripled = [...globalChains, ...globalChains, ...globalChains];

  return (
    <section
      className="py-20 bg-white overflow-hidden"
      aria-labelledby="global-chains-heading"
    >
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <AnimatedSection>
          <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-3">
            Global Partnerships
          </p>
          <h2
            id="global-chains-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-navy mb-4"
          >
            Multi-Unit Partners
          </h2>
          <p className="text-text-secondary text-sm">
            {globalChains.map((chain, i) => (
              <span key={chain.name}>
                {chain.name}
                {i < globalChains.length - 1 && (
                  <span className="text-gold mx-2">·</span>
                )}
              </span>
            ))}
          </p>
        </AnimatedSection>
      </div>

      {/* Auto-scrolling carousel */}
      <div className="relative" aria-label="Global chain partner projects">
        <div className="flex gap-4 animate-scroll-references">
          {tripled.map((item, i) => (
            <div
              key={`gc-${i}`}
              className="shrink-0 w-[400px] h-[220px] rounded-sm overflow-hidden relative"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="400px"
                loading="lazy"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
