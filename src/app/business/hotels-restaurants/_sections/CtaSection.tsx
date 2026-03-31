import Button from "@/components/ui/Button";

export default function CtaSection() {
  return (
    <section
      className="bg-white border-t border-gray-100"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto px-6 py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
          {/* Left — heading & copy */}
          <div className="lg:col-span-7">
            <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-8">
              Next Step
            </p>
            <h2
              id="cta-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] mb-6"
            >
              Let&apos;s Spec<br />
              <span className="italic font-normal">Your Kitchen.</span>
            </h2>
            <p className="text-text-secondary leading-relaxed mb-12 max-w-lg">
              Tell us the project scope — menu concept, capacity, space
              constraints. We&apos;ll come back with brands, models, CAD drawings,
              and a number.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" href="/contact">
                Start a Project
              </Button>
              <Button variant="ghost-light" href="/references" arrow={false}>
                See Our References
              </Button>
            </div>
          </div>

          {/* Right — stats block */}
          <div className="lg:col-span-5">
            <div className="border-l-2 border-gold/30 pl-8 space-y-6">
              {[
                { value: "77", label: "Brands represented" },
                { value: "15+", label: "Years of partnership" },
                { value: "500+", label: "Projects delivered" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className="font-display text-3xl font-bold text-text-primary">
                    {stat.value}
                  </span>
                  <p className="text-text-secondary text-xs uppercase tracking-[0.15em] mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
