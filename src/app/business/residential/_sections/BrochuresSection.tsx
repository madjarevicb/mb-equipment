import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { brochures } from "@/data/residential";

export default function BrochuresSection() {
  return (
    <section
      className="py-20 bg-navy"
      aria-labelledby="brochures-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Left — heading */}
            <div className="lg:max-w-xs flex-shrink-0">
              <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">
                Brochures
              </span>
              <h2
                id="brochures-heading"
                className="font-display text-2xl font-bold text-white mt-2"
              >
                Learn More About Middleby Residential
              </h2>
              <div className="w-12 h-[2px] bg-gold mt-3" />
            </div>

            {/* Right — brochure cards from data */}
            <div className="flex flex-col sm:flex-row gap-5">
              {brochures.map((b) => (
                <a
                  key={b.title}
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 bg-white/5 border border-white/10 px-5 py-4 hover:border-gold/40 hover:bg-white/10 transition-all duration-300"
                >
                  <Image
                    src={b.image}
                    alt={b.alt}
                    width={70}
                    height={80}
                    loading="lazy"
                    className="shadow-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div>
                    <p className="text-white font-semibold text-sm">
                      {b.title}
                    </p>
                    <p className="text-white/80 text-xs mt-1">{b.subtitle}</p>
                    <p className="text-white/80 text-xs mt-1">{b.description}</p>
                    <span className="mt-2 inline-flex items-center gap-1 text-gold font-semibold text-xs">
                      Download PDF{" "}
                      <span className="group-hover:translate-x-1 transition-transform">
                        &rarr;
                      </span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
