import Button from "@/components/ui/Button";

export default function CtaSection() {
  return (
    <section
      className="bg-navy"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-7xl mx-auto px-6 py-32 lg:py-40">
        <div className="max-w-3xl">
          <p className="text-white/30 text-xs font-medium uppercase tracking-[0.3em] mb-8">
            Experience It Live
          </p>
          <h2
            id="cta-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
          >
            See It Running.<br />
            <span className="italic font-normal">In Our Belgrade Demo Center.</span>
          </h2>
          <p className="text-white/60 leading-relaxed mb-12 max-w-lg">
            Our showroom features live cooking stations with TurboChef, Middleby
            Marshall, and Follett equipment — available for hands-on testing and
            recipe development with your team.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" href="/demo-centers">
              Book a Live Demo
            </Button>
            <Button variant="ghost-dark" href="/contact" arrow={false}>
              Request a Consultation
            </Button>
          </div>
          <p className="text-white/25 text-xs tracking-[0.2em] mt-10">
            Walk-ins welcome · Belgrade showroom open weekdays 9–17h
          </p>
        </div>
      </div>
    </section>
  );
}
