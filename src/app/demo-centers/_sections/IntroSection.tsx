import AnimatedSection from "@/components/ui/AnimatedSection";

export default function IntroSection() {
  return (
    <section className="py-16 lg:py-20 bg-white" aria-labelledby="intro-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
            <div className="lg:col-span-5">
              <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-6">
                What to Expect
              </p>
              <h2
                id="intro-heading"
                className="font-display text-3xl sm:text-4xl font-bold text-text-primary leading-[1.1]"
              >
                Not a Sales Pitch.<br />
                <span className="italic font-normal">A Working Session.</span>
              </h2>
              <div className="w-10 h-px bg-gold/30 mt-8" />
            </div>
            <div className="lg:col-span-7 text-text-secondary leading-relaxed space-y-4">
              <p>
                A demo center visit is structured around your project, not our
                catalog. Tell us the menu, the volume, the constraints. We set
                up the relevant equipment, walk through the cook cycles, and let
                your team operate it.
              </p>
              <p className="text-sm">
                Sessions run 90 minutes to half a day depending on scope.
                Factory application chefs are available for complex
                demonstrations. You leave with a clear picture of what works,
                what fits, and what the numbers look like.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
