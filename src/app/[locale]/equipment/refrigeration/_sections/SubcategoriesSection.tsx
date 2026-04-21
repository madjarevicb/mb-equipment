import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { refrigerationSubcategories } from "@/data/refrigeration";
import type { Dictionary } from "@/i18n/types";
import type { Locale } from "@/i18n/config";

interface Props {
  dict: Dictionary["refrigerationPage"]["subcategories"];
  data: Dictionary["data"]["refrigerationSubcategories"];
  locale: Locale;
}

export default function SubcategoriesSection({ dict, data, locale }: Props) {
  return (
    <section className="py-24 lg:py-32 bg-offwhite" aria-labelledby="subcategories-heading">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-12">
            <div className="lg:col-span-5">
              <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-6">
                {dict.eyebrow}
              </p>
              <h2
                id="subcategories-heading"
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
          {refrigerationSubcategories.map((item, i) => (
            <Link
              key={item.id}
              href={`/${locale}/equipment/refrigeration/${item.slug}`}
              className="group block py-6 border-b border-gray-200 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <span className="font-display text-xl font-bold text-text-secondary/30 w-10 flex-shrink-0 italic">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <p className="text-text-primary font-medium group-hover:text-red transition-colors duration-300 mb-2">
                    {data[i]?.name ?? item.name}
                  </p>
                  <p className="text-text-secondary text-sm leading-relaxed max-w-xl">
                    {data[i]?.description ?? item.description}
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
