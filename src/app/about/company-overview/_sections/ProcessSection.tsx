import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionHeading from "@/components/ui/SectionHeading";
import ProcessStepCard from "@/components/ui/ProcessStepCard";
import { processSteps } from "@/data/company-overview";

const PROCESS_ROW_1 = 3;

export default function ProcessSection() {
  return (
    <section className="relative py-28 bg-white overflow-hidden" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="mb-20">
            <SectionHeading id="process-heading" overline="The Process" heading="The Full Cycle" subtext="Most equipment companies stop at delivery. We do not." />
          </div>
        </AnimatedSection>

        <AnimatedSection stagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.slice(0, PROCESS_ROW_1).map((step, i) => (
              <ProcessStepCard key={step.title} {...step} index={i} isLast={false} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
            {processSteps.slice(PROCESS_ROW_1).map((step, i) => (
              <ProcessStepCard key={step.title} {...step} index={i + PROCESS_ROW_1} isLast={i + PROCESS_ROW_1 === processSteps.length - 1} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
