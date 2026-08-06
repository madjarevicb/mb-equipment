import type { Metadata } from "next";
import { COMPANY } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(COMPANY.url),
  title: {
    default: "MB Equipment Solutions | Professional Kitchen Equipment",
    template: "%s | MB Equipment Solutions",
  },
  description:
    "Authorized Middleby partner providing 110+ commercial kitchen equipment brands for hotels, restaurants, residential, and food processing. Belgrade, Serbia.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "MB Equipment Solutions",
    images: [{ url: "/images/og/homepage.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
