import { Fragment } from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { COMPANY } from "@/lib/constants";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";

export const dynamic = "force-static";

/* ------------------------------------------------------------------ */
/*  SEO metadata                                                       */
/* ------------------------------------------------------------------ */
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const PAGE_TITLE = dict.metadata.privacy.title;
  const PAGE_DESC = dict.metadata.privacy.description;

  return {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    alternates: {
      canonical: `/${locale}/privacy`,
      languages: { en: "/en/privacy", sr: "/sr/privacy", "x-default": "/sr/privacy" },
    },
    robots: { index: true, follow: true },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${COMPANY.url}/${locale}/privacy`,
      siteName: COMPANY.name,
      locale: locale === "sr" ? "sr_RS" : "en_US",
      type: "website",
      images: [{ url: "/images/og/homepage.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: PAGE_TITLE,
      description: PAGE_DESC,
      images: ["/images/og/homepage.jpg"],
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const privacy = dict.privacy;

  return (
    <>
      <Breadcrumb
        locale={locale as Locale}
        homeLabel={dict.breadcrumb.home}
        items={[
          { label: dict.footer.privacyPolicy },
        ]}
      />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-24" aria-labelledby="privacy-heading">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-6">
            {privacy.eyebrow}
          </p>
          <h1
            id="privacy-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
          >
            {privacy.heading1}<br />
            <span className="italic font-normal">{privacy.heading2}</span>
          </h1>
          <div className="w-16 h-px bg-gold/60 mb-6" />
          <p className="text-white/60 text-lg max-w-lg font-light">
            {privacy.subtitle}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-12">
            {privacy.sections.map((section, i) => (
              <Fragment key={i}>
                {i > 0 && <div className="w-12 h-px bg-gray-200" />}
                <div>
                  <h2 className="font-display text-xl font-bold text-text-primary mb-4">
                    {section.title}
                  </h2>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {section.body}
                  </p>
                </div>
              </Fragment>
            ))}

            <div className="border-t border-gray-200 pt-8">
              <p className="text-text-secondary/60 text-xs">
                {privacy.lastUpdated}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
