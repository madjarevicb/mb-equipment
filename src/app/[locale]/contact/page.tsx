import Breadcrumb from "@/components/ui/Breadcrumb";
import { COMPANY } from "@/lib/constants";
import { getDictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import { getProductLabel } from "@/lib/productLabels";
import dynamic_ from "next/dynamic";
const ContactForm = dynamic_(() => import("@/components/contact/ContactForm"));

/* ------------------------------------------------------------------ */
/*  SEO metadata                                                       */
/* ------------------------------------------------------------------ */
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);
  const PAGE_TITLE = dict.metadata.contact.title;
  const PAGE_DESC = dict.metadata.contact.description;

  return {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    keywords: [
      "contact MB Equipment",
      "commercial kitchen consultation",
      "kitchen equipment inquiry",
      "restaurant equipment quote",
      "foodservice equipment Belgrade",
      "commercial kitchen supplier contact",
      "Middleby partner contact",
      "kitchen equipment consultation free",
    ],
    alternates: {
      canonical: `/${locale}/contact`,
      languages: { en: "/en/contact", sr: "/sr/contact", "x-default": "/sr/contact" },
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${COMPANY.url}/${locale}/contact`,
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
export default async function ContactPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ product?: string }>;
}) {
  const { locale } = await params;
  const sp = await searchParams;
  const dict = await getDictionary(locale as Locale);

  /* Resolve product context from `?product=` query string */
  const productLabel = getProductLabel(sp.product, locale as Locale);
  const initialMessage = productLabel
    ? locale === "sr"
      ? `Poštovani, zainteresovan/a sam za: ${productLabel}.\n\n`
      : `Hello — I'm interested in ${productLabel}.\n\n`
    : undefined;

  /* ------------------------------------------------------------------ */
  /*  JSON-LD structured data                                            */
  /* ------------------------------------------------------------------ */
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        name: dict.metadata.contact.title,
        description: dict.metadata.contact.description,
        url: `${COMPANY.url}/contact`,
        isPartOf: { "@type": "WebSite", url: COMPANY.url },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: dict.breadcrumb.home,
            item: COMPANY.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: dict.nav.contact,
            item: `${COMPANY.url}/contact`,
          },
        ],
      },
    ],
  };

  const heroDict = dict.contact.hero;
  const formDict = dict.contact.form;
  const directDict = dict.contact.directContact;

  /* Split hours into lines for display */
  const hoursLines = directDict.hours.split("\n");

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Breadcrumb
        locale={locale as Locale}
        homeLabel={dict.breadcrumb.home}
        items={[
          { label: dict.nav.contact },
        ]}
      />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-24" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-6">{heroDict.eyebrow}</p>
          <h1
            id="contact-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
          >
            {heroDict.heading1}<br />
            <span className="italic font-normal">{heroDict.heading2}</span>
          </h1>
          <div className="w-16 h-px bg-gold/60 mb-6" />
          <p className="text-white/60 text-lg max-w-lg font-light">
            {heroDict.body}
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-4">
                {formDict.eyebrow}
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary leading-[1.1] mb-10">
                {formDict.heading1}<br />
                <span className="italic font-normal">{formDict.heading2}</span>
              </h2>
              <ContactForm
                dict={formDict}
                initialMessage={initialMessage}
                productLabel={productLabel}
                failedToSendLabel={dict.common.formFailedToSend}
                websiteHoneypotLabel={dict.common.websiteHoneypot}
                locale={locale as Locale}
              />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-5 lg:pl-8">
              <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-4">
                {directDict.eyebrow}
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary leading-[1.1] mb-10">
                {directDict.heading1}<br />
                <span className="italic font-normal">{directDict.heading2}</span>
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-text-secondary mb-3">{directDict.officeLabel}</h3>
                  <p className="text-text-primary font-medium">{COMPANY.name}</p>
                  <p className="text-text-secondary text-sm mt-1">{COMPANY.address.street}<br />{COMPANY.address.zip} {COMPANY.address.city}, {dict.common.serbiaCountry}</p>
                </div>
                <div className="w-10 h-px bg-gray-200" />
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-text-secondary mb-3">{directDict.contactLabel}</h3>
                  <a href={`tel:${COMPANY.phone}`} className="block text-text-primary hover:text-red transition-colors font-medium">{COMPANY.phoneDisplay}</a>
                  <a href={`mailto:${COMPANY.email}`} className="block text-text-secondary hover:text-red transition-colors text-sm mt-1">{COMPANY.email}</a>
                </div>
                <div className="w-10 h-px bg-gray-200" />
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-text-secondary mb-3">{directDict.hoursLabel}</h3>
                  <p className="text-text-secondary text-sm">
                    {hoursLines.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < hoursLines.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
                <div className="bg-gray-100 aspect-[4/3] flex items-center justify-center border border-gray-200">
                  <span className="text-text-secondary text-sm">{dict.common.googleMapsLabel}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
