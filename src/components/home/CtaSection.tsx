import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CtaSection() {
  return (
    <section id="contact-cta" aria-label="Start a project" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left — headline */}
          <AnimatedSection className="lg:col-span-7" animation="fade-right">
            <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-4">Ready?</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
              Let&apos;s Spec Your Kitchen.
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mb-4">
              Tell us the project scope. We&apos;ll come back with brands, models, drawings, and a number.
            </p>
            <p className="text-text-secondary text-sm max-w-lg">
              No commitment required — start with a free consultation and site assessment. Our team will evaluate your space, recommend the right equipment, and deliver a detailed proposal within days.
            </p>
            <div className="w-10 h-[2px] bg-gold mt-8" />
          </AnimatedSection>

          {/* Right — CTA block */}
          <AnimatedSection className="lg:col-span-5" animation="fade-left">
            <div className="bg-navy p-8 lg:p-10">
              <p className="text-white/60 text-sm mb-6">
                Whether you are planning a new build, a renovation, or a multi-site rollout — we are ready.
              </p>
              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-red text-white font-semibold px-8 py-4 text-sm tracking-wide hover:bg-red-hover transition-all"
                  aria-label="Request a free kitchen equipment consultation"
                >
                  Request Free Consultation
                </Link>
                <Link
                  href="/references"
                  className="block w-full text-center border border-white/30 text-white font-semibold px-8 py-4 text-sm tracking-wide hover:bg-white/10 transition-all"
                >
                  See Our Work
                </Link>
              </div>
              <p className="text-white/40 text-xs mt-6">
                Average response time: under 24 hours
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
