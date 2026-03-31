import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { brochures } from "@/data/residential";

export default function BrochuresSection() {
  return (
    <section
      className="py-16 lg:py-20 bg-navy"
      aria-labelledby="brochures-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left — heading */}
            <div className="lg:col-span-4">
              <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-4">
                Brochures
              </p>
              <h2
                id="brochures-heading"
                className="font-display text-2xl sm:text-3xl font-bold text-white leading-[1.2]"
              >
                Learn More About<br />
                <span className="italic font-normal">Middleby Residential</span>
              </h2>
              <div className="w-10 h-px bg-gold/30 mt-6" />
            </div>

            {/* Right — brochure cards from data */}
            <div className="lg:col-span-8 flex flex-col sm:flex-row gap-5">
              {brochures.map((b) => (
                <a
                  key={b.title}
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-5 bg-white/5 border border-white/10 px-5 py-4 hover:border-white/20 transition-all duration-300 flex-1"
                >
                  <Image
                    src={b.image}
                    alt={b.alt}
                    width={70}
                    height={80}
                    loading="lazy"
                    className="flex-shrink-0 group-hover:scale-[1.03] transition-transform duration-300"
                  />
                  <div>
                    <p className="text-white font-medium text-sm">
                      {b.title}
                    </p>
                    <p className="text-white/60 text-xs mt-1">{b.subtitle}</p>
                    <p className="text-white/40 text-xs mt-1">{b.description}</p>
                    <span className="mt-2 inline-flex items-center gap-1 text-white/60 text-xs group-hover:text-white/80 transition-colors duration-300">
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
