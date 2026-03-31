import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { socialProofBrands, testimonials } from "@/data/company-overview";

export default function SocialProofSection() {
  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="proof-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left — heading + brands */}
          <AnimatedSection className="lg:col-span-5" animation="fade-right">
            <h2 id="proof-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1] mb-5">
              Trusted Across<br />
              <span className="italic font-normal">40+ Countries</span>
            </h2>
            <p className="text-text-secondary leading-relaxed text-sm mb-8">
              2,000+ projects delivered — from five-star hotel kitchens and global QSR rollouts to industrial food processing lines.
            </p>
            <div className="flex flex-wrap items-center gap-y-3">
              {socialProofBrands.map((brand, i) => (
                <span key={brand.name} className="flex items-center">
                  {i > 0 && <span aria-hidden="true" className="mx-3 text-text-secondary/20 text-[10px]">—</span>}
                  <Link href={brand.href} className="text-text-primary/70 text-[13px] font-medium tracking-[0.05em] hover:text-gold transition-colors duration-300" aria-label={`${brand.name} — view references`}>{brand.name}</Link>
                </span>
              ))}
            </div>
            <div className="w-12 h-px bg-gold/50 mt-8" />
          </AnimatedSection>

          {/* Right — testimonials */}
          <div className="lg:col-span-7">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.attribution} delay={i * 0.1} animation="fade-left">
                <blockquote className={`py-8 ${i < testimonials.length - 1 ? "border-b border-gray-200" : ""}`}>
                  <div className="border-l-2 border-gold/40 pl-6">
                    <p className="font-display text-lg lg:text-xl text-text-primary italic leading-snug">&ldquo;{t.quote}&rdquo;</p>
                    <footer className="mt-4 text-xs font-medium text-text-secondary uppercase tracking-[0.15em]">— {t.attribution}</footer>
                  </div>
                </blockquote>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
