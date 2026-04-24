import Breadcrumb from "@/components/ui/Breadcrumb";
import { COMPANY } from "@/lib/constants";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

export const dynamic = "force-static";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  return {
    title: `${dict.nav.wasteStationIhc} | ${COMPANY.name}`,
    description: dict.nav.wasteStationIhc,
    alternates: {
      canonical: `/${locale}/equipment/neutral-inox/waste-management/waste-station-ihc`,
      languages: {
        en: "/en/equipment/neutral-inox/waste-management/waste-station-ihc",
        sr: "/sr/equipment/neutral-inox/waste-management/waste-station-ihc",
      },
    },
  };
}

export default async function WasteStationIhcPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <main>
      <section className="bg-navy text-white pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Breadcrumb
            locale={locale as Locale}
            homeLabel={dict.breadcrumb.home}
            items={[
              { label: dict.nav.equipment, href: `/${locale}/equipment` },
              { label: dict.nav.wasteManagement, href: `/${locale}/equipment/neutral-inox/waste-management` },
              { label: dict.nav.wasteStationIhc },
            ]}
          />
          <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.24em] text-gold">
            {dict.nav.wasteManagement}
          </p>
          <h1 className="mt-3 font-display text-5xl md:text-6xl font-bold leading-[1.05]">
            {dict.nav.wasteStationIhc}
          </h1>
        </div>
      </section>
    </main>
  );
}
