import Button from "@/components/ui/Button";

export default function CtaSection() {
  return (
    <section className="bg-navy" aria-labelledby="cta-heading">
      <div className="max-w-7xl mx-auto px-6 py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="text-white/30 text-xs font-medium uppercase tracking-[0.3em] mb-8">
            Let&apos;s Talk
          </p>
          <h2 id="cta-heading" className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6">
            The Right Equipment.<br />
            <span className="italic font-normal">The Right Partner.</span>
          </h2>
          <p className="text-white/60 leading-relaxed mb-12 max-w-lg">
            Whether you are designing a new kitchen in Belgrade, upgrading an existing one, or expanding across Southeast Europe — involve us from day one.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" href="/contact">
              Start Your Project
            </Button>
            <Button variant="ghost-dark" href="/references" arrow={false}>
              See Our References
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
