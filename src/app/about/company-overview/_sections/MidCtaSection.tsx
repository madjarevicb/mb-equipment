import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function MidCtaSection() {
  return (
    <section className="py-16 lg:py-20 bg-navy" aria-labelledby="mid-cta-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-white/30 text-xs font-medium uppercase tracking-[0.3em] mb-4">Next Step</p>
              <h2 id="mid-cta-heading" className="font-display text-2xl lg:text-3xl font-bold text-white leading-snug">
                Have a Floor Plan?<br />
                <span className="italic font-normal">Send It Over.</span>
              </h2>
              <p className="text-white/60 mt-3 max-w-lg">We will return a full equipment specification with brand recommendations and budget ranges — no obligation.</p>
            </div>
            <Button variant="primary" href="/contact" className="shrink-0">
              Send Your Floor Plan
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
