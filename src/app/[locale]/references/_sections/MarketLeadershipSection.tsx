import AnimatedSection from "@/components/ui/AnimatedSection";
import { no1Categories } from "@/data/references";
import type { Dictionary } from "@/i18n/types";

interface Props {
  dict: Dictionary["references"]["marketLeadership"];
}

export default function MarketLeadershipSection({ dict }: Props) {
  return (
    <section
      className="py-24 lg:py-32 bg-navy"
      aria-labelledby="market-leadership-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left — big number */}
            <div className="lg:col-span-4">
              <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-6">
                {dict.heading}
              </p>
              <h2
                id="market-leadership-heading"
                className="font-display text-7xl sm:text-8xl font-bold text-white italic leading-none"
              >
                No. 1
              </h2>
              <p className="text-white/40 mt-4 text-sm">
                {dict.body}
              </p>
              <div className="w-12 h-px bg-gold/30 mt-6" />
            </div>

            {/* Right — category badges */}
            <div className="lg:col-span-8">
              <div className="flex flex-wrap gap-3">
                {no1Categories.map((cat) => (
                  <span
                    key={cat}
                    className="text-white/60 text-sm uppercase tracking-[0.2em] border border-white/10 px-5 py-2.5 hover:border-white/25 hover:text-white/80 transition-all duration-300"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
