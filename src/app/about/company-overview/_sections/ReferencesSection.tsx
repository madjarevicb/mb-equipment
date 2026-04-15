import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { projectReferences } from "@/data/company-overview";

export default function ReferencesSection() {
  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="references-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left — heading */}
          <AnimatedSection className="lg:col-span-5" animation="fade-right">
            <h2 id="references-heading" className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1] mb-5">
              Built &amp; Delivered.<br />
              <span className="italic font-normal">Verified.</span>
            </h2>
            <p className="text-text-secondary leading-relaxed text-sm mb-8">
              From convention centers to boutique hotels and restaurants — every project is a complete cycle: specification, supply, installation, training.
            </p>
            <Button variant="ghost-light" href="/references">
              See All References
            </Button>
            <div className="w-12 h-px bg-gold/50 mt-8" />
          </AnimatedSection>

          {/* Right — project references */}
          <div className="lg:col-span-7">
            {projectReferences.map((ref, i) => (
              <AnimatedSection key={ref.name} delay={i * 0.1} animation="fade-left">
                <div className={`py-8 ${i < projectReferences.length - 1 ? "border-b border-gray-200" : ""}`}>
                  <div className="border-l-2 border-gold/40 pl-6">
                    <p className="text-gold/80 text-[11px] font-medium uppercase tracking-[0.2em] mb-2">{ref.label}</p>
                    <h3 className="font-display text-lg lg:text-xl font-bold text-text-primary leading-snug mb-2">{ref.name}</h3>
                    <p className="text-text-secondary text-sm leading-[1.8]">{ref.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
