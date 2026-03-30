import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function AboutSection() {
  return (
    <section aria-label="About MB Equipment Solutions" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection animation="fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="text-gold text-sm font-semibold uppercase tracking-[0.2em] mb-3">Who We Are</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-2">
                Southeast Europe&apos;s Premier Kitchen Equipment Partner
              </h2>
              <div className="w-10 h-[2px] bg-gold" />
            </div>
            <div className="lg:col-span-7 text-text-secondary leading-relaxed space-y-4">
              <p>
                MB Equipment Solutions is the region&apos;s most comprehensive commercial kitchen equipment provider, authorized by Middleby Corporation — the world&apos;s largest foodservice equipment manufacturer. From our headquarters in Belgrade, Serbia, we supply, install, and service professional kitchen equipment across 40+ countries.
              </p>
              <p>
                Our portfolio spans 110+ leading equipment brands including commercial ovens, refrigeration systems, food preparation equipment, warewashing solutions, and ventilation systems. We serve hotels, restaurants, quick-service chains, catering operations, luxury residential kitchens, and industrial food processing facilities.
              </p>
              <p>
                What sets us apart is end-to-end project capability. We do not just sell equipment — we consult on kitchen workflow, produce detailed CAD layouts, coordinate delivery logistics, and commission every unit on-site. After installation, our service engineering team provides ongoing maintenance, warranty support, and spare parts from our regional inventory.
              </p>
              <div className="pt-2">
                <Link
                  href="/about/company-overview"
                  className="inline-flex items-center gap-2 text-red text-sm font-semibold hover:gap-4 transition-all"
                >
                  Learn more about us <span aria-hidden="true" className="text-lg">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
