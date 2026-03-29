import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mbequipmentsolutions.com"),
  title: {
    default: "MB Equipment Solutions | Professional Kitchen Equipment",
    template: "%s | MB Equipment Solutions",
  },
  description:
    "Leading provider of commercial kitchen equipment. Middleby endorsed. 110+ brands for hotels, restaurants, residential, and food processing. Belgrade, Serbia.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MB Equipment Solutions",
    images: [{ url: "/images/og/homepage.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Organization"],
  "@id": "https://www.mbequipmentsolutions.com/#organization",
  name: "MB Equipment Solutions",
  url: "https://www.mbequipmentsolutions.com",
  logo: "https://www.mbequipmentsolutions.com/mb-logo.svg",
  image: "https://www.mbequipmentsolutions.com/mb-logo.svg",
  telephone: "+381111234567",
  email: "info@mbequipmentsolutions.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vladimira Popovića 6",
    addressLocality: "Beograd",
    postalCode: "11070",
    addressCountry: "RS",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.8176,
    longitude: 20.4633,
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
      latitude: 44.8176,
      longitude: 20.4633,
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
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${cormorant.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-red focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
