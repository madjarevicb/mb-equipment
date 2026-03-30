import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import { socialProofBrands, testimonials } from "@/data/company-overview";

export default function SocialProofSection() {
  return (
    <section className="py-28 bg-white" aria-labelledby="proof-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="mb-16">
            <SectionHeading id="proof-heading" heading="Trusted Across 40+ Countries" subtext="2,000+ projects delivered — from five-star hotel kitchens and global QSR rollouts to industrial food processing lines across Southeast Europe, the Middle East, and Central Asia." divider />
          </div>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-lg font-semibold text-text-secondary uppercase tracking-widest mb-14">
            {socialProofBrands.map((brand) => (
              <Link key={brand.name} href={brand.href} className="hover:text-gold transition-colors" aria-label={`${brand.name} — view references`}>{brand.name}</Link>
            ))}
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <blockquote key={t.attribution} className="text-center border-t-2 border-gold/50 pt-8" role="figure" aria-label="Client testimonial">
                <p className="text-lg text-text-secondary italic leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 text-sm font-semibold text-text-primary">— <cite className="text-gold-text not-italic">{t.attribution}</cite></footer>
              </blockquote>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
