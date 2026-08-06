import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/config";

interface Props {
  dict: Dictionary["neutralInoxPage"]["additional"];
  locale: Locale;
}

export default function AdditionalSection({ dict, locale }: Props) {
  /* The two items under "additional" are warewashing and waste management.
     Their names/descriptions come from the dict body/heading — but the individual
     item text is not in the dictionary structure, so we keep the hardcoded items
     and use the section-level dict for headings. The item-level text stays as-is
     since there are no per-item dict keys in the type. */
  const itemData = [
    {
      slug: "warewashing",
      name: "Commercial Warewashing",
      description:
        "Dishwashers, glasswashers, and rack conveyor systems for high-volume kitchen operations — sized for your throughput requirements.",
    },
    {
      slug: "waste-management",
      name: "IPC Waste Stations",
      description:
        "Professional waste management and separation stations — hygienic, space-efficient, and compliant with local waste codes.",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white" aria-labelledby="additional-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-12">
            <div className="lg:col-span-5">
              <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-6">
                {dict.eyebrow}
              </p>
              <h2
                id="additional-heading"
                className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-[1.1]"
              >
                {dict.heading1}<br />
                <span className="italic font-normal">{dict.heading2}</span>
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-text-secondary leading-relaxed text-sm max-w-lg">
                {dict.body}
              </p>
            </div>
          </div>
          <div className="w-full h-px bg-gray-200 mb-0" />
        </AnimatedSection>

        <AnimatedSection stagger>
          {itemData.map((item, i) => (
            <Link
              key={item.slug}
              href={`/${locale}/equipment/neutral-inox/${item.slug}`}
              className="group block py-6 border-b border-gray-200 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <span className="font-display text-xl font-bold text-text-secondary/30 w-10 flex-shrink-0 italic">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <p className="text-text-primary font-medium group-hover:text-red transition-colors duration-300 mb-2">
                    {item.name}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>
                <span className="text-text-secondary/30 group-hover:text-red group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1" aria-hidden="true">
                  &#8594;
                </span>
              </div>
            </Link>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
