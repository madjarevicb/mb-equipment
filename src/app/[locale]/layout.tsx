import { notFound } from "next/navigation";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VercelAnalytics from "@/components/analytics/VercelAnalytics";
import { COMPANY } from "@/lib/constants";
import { locales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["400", "700"],
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Organization"],
  "@id": `${COMPANY.url}/#organization`,
  name: COMPANY.name,
  url: COMPANY.url,
  logo: `${COMPANY.url}/mb-logo.svg`,
  image: `${COMPANY.url}/mb-logo.svg`,
  telephone: COMPANY.phone,
  email: COMPANY.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address.street,
    addressLocality: COMPANY.address.city,
    postalCode: COMPANY.address.zip,
    addressCountry: COMPANY.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: COMPANY.geo.lat,
    longitude: COMPANY.geo.lng,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  priceRange: "$$$",
  parentOrganization: {
    "@type": "Corporation",
    name: "Middleby Corporation",
    url: "https://www.middleby.com",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: COMPANY.geo.lat,
      longitude: COMPANY.geo.lng,
    },
    geoRadius: "2000 km",
  },
  knowsAbout: [
    "Commercial Kitchen Equipment",
    "Restaurant Equipment",
    "Food Processing Equipment",
    "Hotel Kitchen Design",
    "Middleby Equipment",
    "Residential Kitchen Appliances",
    "Thermal Processing Equipment",
    "Commercial Refrigeration",
    "Stainless Steel Kitchen Fabrication",
  ],
  sameAs: [
    "https://www.linkedin.com/company/mb-equipment-solutions",
    "https://www.instagram.com/mbequipmentsolutions",
    "https://www.facebook.com/mbequipmentsolutions",
  ],
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const dict = await getDictionary(locale as Locale);

  return (
    <html lang={locale} className={`${dmSans.variable} ${cormorant.variable} antialiased`}>
      <head>
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: ".stagger-children > * { opacity: 1 !important; transform: none !important; animation: none !important; }" }} />
        </noscript>
      </head>
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-red focus:text-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        <Header locale={locale as Locale} nav={dict.nav} footer={dict.footer} common={dict.common} />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer locale={locale as Locale} nav={dict.nav} footer={dict.footer} />
        <VercelAnalytics />
      </body>
    </html>
  );
}
