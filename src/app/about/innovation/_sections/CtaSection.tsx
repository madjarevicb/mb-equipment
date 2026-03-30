import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ChevronRightIcon from "@/components/ui/ChevronRightIcon";

export default function CtaSection() {
  return (
    <section
      className="py-24 bg-navy relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-red/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <AnimatedSection>
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">
            Experience It Live
          </span>
          <h2
            id="cta-heading"
            className="font-display text-3xl lg:text-5xl font-bold text-white mt-4 mb-6"
          >
            Every Solution on This Page Is Running in Our Belgrade Demo Center
          </h2>
          <p className="text-white/90 max-w-lg mx-auto mb-10 leading-relaxed">
            Our showroom features live cooking stations with TurboChef, Middleby
            Marshall, and Follett equipment — available for hands-on testing and
            recipe development with your team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/demo-centers"
              className="inline-flex items-center gap-2 bg-red text-white font-semibold px-10 py-4 rounded-sm shadow-lg hover:bg-red-hover hover:-translate-y-px transition-all"
            >
              Book a Live Demo
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-10 py-4 rounded-sm hover:bg-white/10 transition-all"
            >
              Request a Consultation
              <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
