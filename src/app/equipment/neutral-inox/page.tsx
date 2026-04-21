import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { COMPANY } from "@/lib/constants";
import { neutralCapabilities, fabricationSteps } from "@/data/neutral-inox";
import {
  HeroSection,
  OverviewSection,
  CapabilitiesSection,
  FabricationProcessSection,
  AdditionalSection,
  CtaSection,
} from "./_sections";

export const dynamic = "force-static";

const PAGE_TITLE = "Neutral INOX Equipment — Custom Stainless Steel | MB Equipment Solutions";
const TEMPLATE_TITLE = "Neutral INOX & Steel Fabrication";
const PAGE_DESC =
  "Custom stainless steel kitchen equipment — worktops, shelving, sinks, ventilation hoods, and service counters. Built to your exact layout and dimensions.";

export const metadata: Metadata = {
  title: TEMPLATE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "stainless steel kitchen equipment",
    "custom kitchen fabrication",
    "commercial worktops INOX",
    "stainless steel shelving",
    "commercial kitchen sinks",
    "ventilation hoods commercial",
    "neutral kitchen equipment",
    "custom stainless steel",
  ],
  alternates: { canonical: "/equipment/neutral-inox" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: `${COMPANY.url}/equipment/neutral-inox`,
    siteName: COMPANY.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      name: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${COMPANY.url}/equipment/neutral-inox`,
      isPartOf: { "@type": "WebSite", url: COMPANY.url },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: COMPANY.url },
        { "@type": "ListItem", position: 2, name: "Equipment", item: `${COMPANY.url}/equipment` },
        { "@type": "ListItem", position: 3, name: "Neutral INOX", item: `${COMPANY.url}/equipment/neutral-inox` },
      ],
    },
    {
      "@type": "ItemList",
      name: "Neutral INOX Equipment Capabilities",
      numberOfItems: neutralCapabilities.length,
      itemListElement: neutralCapabilities.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        description: item.description,
      })),
    },
    {
      "@type": "HowTo",
      name: "Custom Stainless Steel Fabrication Process",
      description: "Our four-step process from site survey to installation.",
      step: fabricationSteps.map((step, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: step.title,
        text: step.description,
      })),
    },
  ],
};

export default function NeutralInoxPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Breadcrumb items={[
        { label: "Equipment", href: "/equipment" },
        { label: "Neutral INOX" },
      ]} />

      <HeroSection />
      <OverviewSection />
      <CapabilitiesSection />
      <FabricationProcessSection />
      <AdditionalSection />
      <CtaSection />
    </>
  );
}
