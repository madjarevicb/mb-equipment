import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function CtaSection() {
  return (
    <section
      className="py-28 lg:py-36 bg-offwhite border-t border-gray-100"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-end">
            {/* Left — heading & copy */}
            <div className="lg:col-span-7">
              <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-8">
                Experience
              </p>
              <h2
                id="cta-heading"
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.1] mb-6"
              >
                Touch It. Cook On It.<br />
                <span className="italic font-normal">Decide.</span>
              </h2>
              <p className="text-text-secondary leading-relaxed mb-12 max-w-lg">
                We do not sell residential equipment from a PDF. Our Belgrade
                showroom has live Viking, La Cornue, and AGA units ready to
                demonstrate. Bring your architect. Bring your contractor.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" href="/demo-centers">
                  Book a Showroom Visit
                </Button>
                <Button variant="ghost-light" href="/contact" arrow={false}>
                  Contact Us
                </Button>
              </div>
            </div>

            {/* Right — showroom details */}
            <div className="lg:col-span-5">
              <div className="border-l-2 border-gold/30 pl-8 space-y-5">
                <div>
                  <span className="text-text-primary font-medium text-sm">Live Demonstrations</span>
                  <p className="text-text-secondary/60 text-xs mt-1">
                    Viking, La Cornue, AGA, Lynx — cook on real units before you buy.
                  </p>
                </div>
                <div>
                  <span className="text-text-primary font-medium text-sm">Design Consultation</span>
                  <p className="text-text-secondary/60 text-xs mt-1">
                    Specifications, dimensions, utility requirements, finish options.
                  </p>
                </div>
                <div>
                  <span className="text-text-primary font-medium text-sm">Belgrade Showroom</span>
                  <p className="text-text-secondary/60 text-xs mt-1">
                    By appointment — bring your architect and contractor.
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
