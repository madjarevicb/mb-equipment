import AnimatedSection from "@/components/ui/AnimatedSection";
import { no1Categories } from "@/data/references";

export default function MarketLeadershipSection() {
  return (
    <section
      className="py-20 bg-navy"
      aria-labelledby="market-leadership-heading"
    >
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-10">
            <span className="text-gold text-sm font-semibold uppercase tracking-[0.3em]">
              Market Leadership
            </span>
            <h2
              id="market-leadership-heading"
              className="font-display text-6xl sm:text-7xl font-bold text-white mt-4 italic"
            >
              No. 1
            </h2>
            <p className="text-white/80 mt-2 text-sm">
              Across 9 foodservice segments worldwide
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {no1Categories.map((cat) => (
              <span
                key={cat}
                className="text-white/80 text-sm uppercase tracking-wider border border-white/10 px-5 py-2.5 hover:border-gold/40 hover:text-white transition-all"
              >
                {cat}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
