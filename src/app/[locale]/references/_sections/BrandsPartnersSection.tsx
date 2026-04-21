import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Dictionary } from "@/i18n/types";

interface Props {
  dict: Dictionary["references"]["brandsPartners"];
}

export default function BrandsPartnersSection({ dict }: Props) {
  return (
    <section className="py-16 lg:py-20 bg-white" aria-labelledby="brands-partners-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3">
              <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-4">
                {dict.eyebrow}
              </p>
              <h2
                id="brands-partners-heading"
                className="font-display text-2xl sm:text-3xl font-bold text-text-primary leading-[1.1] mb-3"
              >
                {dict.heading1}<br />
                <span className="italic font-normal">{dict.heading2}</span>
              </h2>
              <div className="w-10 h-px bg-gold/30 mb-3" />
              <p className="text-text-secondary text-sm leading-relaxed">
                {dict.body}
              </p>
            </div>
            <div className="lg:col-span-9">
              <Image
                src="/images/references/ref-61.jpg"
                alt="MB Equipment Solutions — Complete brand and partner logo grid"
                width={1200}
                height={400}
                sizes="(max-width: 1024px) 100vw, 960px"
                loading="lazy"
                className="w-full object-contain"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
