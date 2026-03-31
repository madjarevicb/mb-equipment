import AnimatedSection from "@/components/ui/AnimatedSection";
import { residentialBrands } from "@/data/residential";

export default function PortfolioSection() {
  const indoorCount = residentialBrands.filter((b) => b.category === "Indoor").length;
  const outdoorCount = residentialBrands.filter((b) => b.category === "Outdoor").length;
  const beverageCount = residentialBrands.filter((b) => b.category === "Beverage").length;

  return (
    <section
      className="py-28 lg:py-36 bg-white"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left — heading */}
            <div className="lg:col-span-5">
              <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-6">
                The Portfolio
              </p>
              <h2
                id="portfolio-heading"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1]"
              >
                Premium Residential<br />
                <span className="italic font-normal">Kitchen Brands</span>
              </h2>
              <div className="w-12 h-px bg-gold/30 mt-8" />
            </div>

            {/* Right — text */}
            <div className="lg:col-span-7">
              <p className="text-text-secondary leading-relaxed mb-6">
                MB Equipment Solutions Residential is your authorized access
                point to {residentialBrands.length} premium brands from the
                Middleby Corporation portfolio — {indoorCount} indoor
                cooking and refrigeration brands, {outdoorCount} outdoor
                grilling brands, and {beverageCount} professional beverage
                systems.
              </p>
              <p className="text-text-secondary leading-relaxed text-sm">
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
