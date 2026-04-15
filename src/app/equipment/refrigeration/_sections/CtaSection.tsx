import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function CtaSection() {
  return (
    <section className="py-28 lg:py-36 bg-offwhite" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
            <div className="lg:col-span-7">
              <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-8">
                Work With Us
              </p>
              <h2
                id="cta-heading"
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] mb-6"
              >
                Keep It<br />
                <span className="italic font-normal">Cold.</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-12 max-w-lg">
                From single display cases to complete cold room installations —
                we specify, supply, and commission refrigeration equipment matched
                to your operation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" href="/contact">
                  Start Your Project
                </Button>
                <Button variant="ghost-light" href="/demo-centers" arrow={false}>
                  Visit a Showroom
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border-l-2 border-gold/30 pl-8 space-y-6">
                {[
                  { value: "50+", label: "Projects delivered" },
                  { value: "110+", label: "Brands represented" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <span className="font-display text-3xl font-bold text-text-primary">
                      {stat.value}
                    </span>
                    <p className="text-text-secondary/50 text-xs uppercase tracking-[0.15em] mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
                <div className="pt-2">
                  <p className="text-text-secondary/50 text-xs">
                    Balkans — Central Europe — Southeast Europe
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
