import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function CtaSection() {
  return (
    <section className="py-28 lg:py-36 bg-navy" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
            <div className="lg:col-span-7">
              <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-8">
                Work With Us
              </p>
              <h2
                id="cta-heading"
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
              >
                Scale Your<br />
                <span className="italic font-normal">Production.</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-12 max-w-lg">
                From single-line upgrades to complete processing facilities — we
                design, supply, and commission equipment that meets your throughput
                and compliance requirements.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" href="/contact">
                  Start a Project
                </Button>
                <Button variant="ghost-dark" href="/references" arrow={false}>
                  See Our References
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
                    <span className="font-display text-3xl font-bold text-white">
                      {stat.value}
                    </span>
                    <p className="text-white/50 text-xs uppercase tracking-[0.15em] mt-1">
                      {stat.label}
                    </p>
                  </div>
                ))}
                <div className="pt-2">
                  <p className="text-white/30 text-xs">
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
