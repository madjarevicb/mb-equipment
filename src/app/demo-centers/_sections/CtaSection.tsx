import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";

export default function CtaSection() {
  return (
    <section className="py-28 lg:py-36 bg-navy" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="max-w-3xl">
            <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-8">
              Next Step
            </p>
            <h2
              id="cta-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
            >
              Cook On It<br />
              <span className="italic font-normal">Before You Commit.</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-12 max-w-lg">
              Bring your menu. Bring your team. Put the equipment through a real
              service simulation before you sign.
            </p>
            <Button variant="primary" href="/contact">
              Book a Demo Session
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
