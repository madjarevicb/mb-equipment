import AnimatedSection from "@/components/ui/AnimatedSection";

export default function IntroSection() {
  return (
    <section className="py-16 bg-white" aria-labelledby="intro-heading">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                What to Expect
              </p>
              <h2
                id="intro-heading"
                className="font-display text-2xl sm:text-3xl font-bold text-navy mb-2"
              >
                Not a Sales Pitch.
                <br />A Working Session.
              </h2>
              <div className="w-10 h-[2px] bg-gold" />
            </div>
            <div className="lg:col-span-7 text-text-secondary leading-relaxed space-y-3">
              <p>
                A demo center visit is structured around your project, not our
                catalog. Tell us the menu, the volume, the constraints. We set
                up the relevant equipment, walk through the cook cycles, and let
                your team operate it.
              </p>
              <p>
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
