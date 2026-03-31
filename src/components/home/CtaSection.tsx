import Button from "@/components/ui/Button";

export default function CtaSection() {
  return (
    <section id="contact-cta" aria-label="Start a project" className="bg-navy">
      <div className="max-w-7xl mx-auto px-6 py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="text-white/30 text-xs font-medium uppercase tracking-[0.3em] mb-8">
            Ready to start?
          </p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            Let&apos;s Spec<br />
            <span className="italic font-normal">Your Kitchen.</span>
          </h2>
          <p className="text-white/60 leading-relaxed mb-12 max-w-lg">
            Tell us the project scope. We&apos;ll come back with brands, models, drawings, and a number. No commitment required.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" href="/contact">
              Request Consultation
            </Button>
            <Button variant="ghost-dark" href="/references" arrow={false}>
              See Our Work
            </Button>
          </div>
          <p className="text-white/25 text-xs tracking-[0.2em] mt-10">
            Average response time: under 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
