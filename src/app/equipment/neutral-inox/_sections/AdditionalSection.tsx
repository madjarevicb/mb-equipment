import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AdditionalSection() {
  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="additional-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-12">
            <div className="lg:col-span-5">
              <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-6">
                Also Available
              </p>
              <h2
                id="additional-heading"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1]"
              >
                Warewashing<br />
                <span className="italic font-normal">&amp; Waste Management</span>
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-text-secondary leading-relaxed text-sm max-w-lg">
                Complete kitchen infrastructure beyond cooking and refrigeration —
                professional dishwashing and waste separation systems.
              </p>
            </div>
          </div>
          <div className="w-full h-px bg-gray-200 mb-0" />
        </AnimatedSection>

        <AnimatedSection stagger>
          <div className="group py-6 border-b border-gray-200 transition-all duration-300">
            <div className="flex items-start gap-6">
              <span className="font-display text-xl font-bold text-text-secondary/30 w-10 flex-shrink-0 italic">
                01
              </span>
              <div className="flex-1">
                <p className="text-text-primary font-medium group-hover:text-red transition-colors duration-300 mb-2">
                  Commercial Warewashing
                </p>
                <p className="text-text-secondary text-sm leading-relaxed max-w-xl">
                  Dishwashers, glasswashers, and rack conveyor systems for high-volume
                  kitchen operations — sized for your throughput requirements.
                </p>
              </div>
            </div>
          </div>
          <div className="group py-6 border-b border-gray-200 transition-all duration-300">
            <div className="flex items-start gap-6">
              <span className="font-display text-xl font-bold text-text-secondary/30 w-10 flex-shrink-0 italic">
                02
              </span>
              <div className="flex-1">
                <p className="text-text-primary font-medium group-hover:text-red transition-colors duration-300 mb-2">
                  IPC Waste Stations
                </p>
                <p className="text-text-secondary text-sm leading-relaxed max-w-xl">
                  Professional waste management and separation stations — hygienic,
                  space-efficient, and compliant with local waste codes.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
