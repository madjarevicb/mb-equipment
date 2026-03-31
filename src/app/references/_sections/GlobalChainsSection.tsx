import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { globalChains } from "@/data/references";

export default function GlobalChainsSection() {
  const tripled = [...globalChains, ...globalChains, ...globalChains];

  return (
    <section
      className="py-16 lg:py-20 bg-white overflow-hidden"
      aria-labelledby="global-chains-heading"
    >
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <AnimatedSection>
          <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-4">
            Global Partnerships
          </p>
          <h2
            id="global-chains-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-text-primary leading-[1.1] mb-4"
          >
            Multi-Unit<br />
            <span className="italic font-normal">Partners</span>
          </h2>
          <p className="text-text-secondary text-sm">
            {globalChains.map((chain, i) => (
              <span key={chain.name}>
                {chain.name}
                {i < globalChains.length - 1 && (
                  <span className="text-text-secondary/30 mx-2">—</span>
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
              className="shrink-0 w-[400px] h-[220px] overflow-hidden relative"
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
