import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function InnovationCentersSection() {
  return (
    <section className="py-28 lg:py-36 bg-white" aria-labelledby="innovation-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
            {/* Left — heading & copy */}
            <div className="lg:col-span-7">
              <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-8">
                Innovation Centers
              </p>
              <h2
                id="innovation-heading"
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] mb-6"
              >
                Test Your Products<br />
                <span className="italic font-normal">on Full-Scale Equipment</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-12 max-w-lg">
                Our Innovation Centers bring together the most advanced food
                processing technologies. Schedule a visit to see equipment
                running at full production capacity with your products.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" href="/demo-centers">
                  Visit an Innovation Center
                </Button>
                <Button variant="ghost-light" href="/contact" arrow={false}>
                  Discuss Your Line
                </Button>
              </div>
            </div>

            {/* Right — stat */}
            <div className="lg:col-span-5">
              <div className="border-l-2 border-gold/30 pl-8">
                <span className="font-display text-6xl font-bold text-text-primary">6</span>
                <p className="text-text-secondary text-xs uppercase tracking-[0.15em] mt-2">
                  Innovation Centers
                </p>
                <p className="text-text-secondary/60 text-xs mt-1">
                  Across the region
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
