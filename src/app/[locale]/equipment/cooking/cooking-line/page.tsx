import Link from "next/link";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { COMPANY } from "@/lib/constants";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: `${dict.nav.cookingLine} | ${COMPANY.name}`,
    description: dict.nav.cookingLine,
    alternates: {
      canonical: `/${locale}/equipment/cooking/cooking-line`,
      languages: {
        en: "/en/equipment/cooking/cooking-line",
        sr: "/sr/equipment/cooking/cooking-line",
      },
    },
  };
}

export default async function CookingLinePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  const items = [
    { label: dict.nav.ranges, slug: "ranges" },
    { label: dict.nav.heavyDutyRanges, slug: "heavy-duty-ranges" },
    { label: dict.nav.fryers, slug: "fryers" },
    { label: dict.nav.boilingPans, slug: "boiling-pans" },
    { label: dict.nav.tiltingPans, slug: "tilting-pans" },
    { label: dict.nav.pastaCookers, slug: "pasta-cookers" },
    { label: dict.nav.bainMarie, slug: "bain-marie" },
  ];

  return (
    <main>
      <section className="bg-navy text-white pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Breadcrumb
            locale={locale as Locale}
            homeLabel={dict.breadcrumb.home}
            items={[
              { label: dict.nav.equipment, href: `/${locale}/equipment` },
              { label: dict.nav.cooking, href: `/${locale}/equipment/thermal-processing` },
              { label: dict.nav.cookingLine },
            ]}
          />
          <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.24em] text-gold">
            {dict.nav.cooking}
          </p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold leading-[1.05]">
            {dict.nav.cookingLine}
          </h1>
        </div>
      </section>

      <section className="bg-offwhite py-20">
        <div className="mx-auto max-w-7xl px-6">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/${locale}/equipment/cooking/cooking-line/${item.slug}`}
                  className="group block bg-white border border-gray-200 p-8 hover:border-gold transition-colors"
                >
                  <h2 className="font-display text-2xl font-bold text-navy group-hover:text-red transition-colors">
                    {item.label}
                  </h2>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
