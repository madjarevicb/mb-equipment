import AnimatedSection from "@/components/ui/AnimatedSection";
import { residentialBrands } from "@/data/residential";

export default function PortfolioSection() {
  const indoorCount = residentialBrands.filter((b) => b.category === "Indoor").length;
  const outdoorCount = residentialBrands.filter((b) => b.category === "Outdoor").length;
  const beverageCount = residentialBrands.filter((b) => b.category === "Beverage").length;

  return (
    <section
      className="py-28 bg-white relative overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      {/* Decorative gold line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent to-gold" />

      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
            {/* Left — heading */}
            <div className="lg:col-span-2">
              <span className="text-gold-text text-sm font-semibold uppercase tracking-[0.2em]">
                The Portfolio
              </span>
              <h2
                id="portfolio-heading"
                className="font-display text-4xl sm:text-5xl font-bold text-navy leading-[1.15] mt-4"
              >
                Premium Residential
                <span className="block text-gold-text mt-1">
                  Kitchen Brands
                </span>
              </h2>
              <div className="w-16 h-[2px] bg-gold mt-6" />
            </div>

            {/* Right — text with left gold border */}
            <div className="lg:col-span-3 border-l-2 border-gold/50 pl-8">
              <p className="text-text-secondary text-lg leading-relaxed">
                MB Equipment Solutions Residential is your authorized access
                point to {residentialBrands.length} premium brands from the
                Middleby Corporation portfolio — {indoorCount} indoor
                cooking and refrigeration brands, {outdoorCount} outdoor
                grilling brands, and {beverageCount} professional beverage
                systems.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed mt-6">
                As the exclusive regional dealer, we provide showroom
                demonstrations, professional installation, and factory-backed
                service for every brand we carry.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
