import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
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
  "@type": "Organization",
  name: "MB Equipment Solutions",
  url: "https://www.mbequipmentsolutions.com",
  email: "info@mbequipmentsolutions.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Vladimira Popovića 6",
    addressLocality: "Beograd",
    postalCode: "11070",
    addressCountry: "RS",
  },
  parentOrganization: {
    "@type": "Corporation",
    name: "Middleby Corporation",
    url: "https://www.middleby.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
