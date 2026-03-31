import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { COMPANY } from "@/lib/constants";
import dynamic_ from "next/dynamic";
const ContactForm = dynamic_(() => import("@/components/contact/ContactForm"));

/* ------------------------------------------------------------------ */
/*  Static rendering                                                   */
/* ------------------------------------------------------------------ */
export const dynamic = "force-static";

/* ------------------------------------------------------------------ */
/*  SEO metadata                                                       */
/* ------------------------------------------------------------------ */
const PAGE_TITLE =
  "Contact Us — Commercial Kitchen Equipment Inquiry | MB Equipment Solutions";
const TEMPLATE_TITLE = "Contact Us — Commercial Kitchen Equipment Inquiry";
const PAGE_DESC =
  "Contact MB Equipment Solutions in Belgrade. Free kitchen equipment consultation for commercial, residential & industrial projects. Response within one business day.";

export const metadata: Metadata = {
  title: TEMPLATE_TITLE,
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
  alternates: { canonical: "/contact" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: `${COMPANY.url}/contact`,
    siteName: COMPANY.name,
    locale: "en_US",
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

/* ------------------------------------------------------------------ */
/*  JSON-LD structured data                                            */
/* ------------------------------------------------------------------ */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      name: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${COMPANY.url}/contact`,
      isPartOf: { "@type": "WebSite", url: COMPANY.url },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: COMPANY.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Contact",
          item: `${COMPANY.url}/contact`,
        },
      ],
    },
  ],
};

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Breadcrumb items={[
        { label: "Contact" },
      ]} />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-24" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-6">Get In Touch</p>
          <h1
            id="contact-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
          >
            Let&apos;s Talk<br />
            <span className="italic font-normal">Equipment.</span>
          </h1>
          <div className="w-16 h-px bg-gold/60 mb-6" />
          <p className="text-white/60 text-lg max-w-lg font-light">
            Whether it is a single unit or a full project scope, start here.
            We respond within one business day.
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
                Send Us a Message
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary leading-[1.1] mb-10">
                Start the<br />
                <span className="italic font-normal">Conversation.</span>
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-5 lg:pl-8">
              <p className="text-text-secondary text-xs font-medium uppercase tracking-[0.3em] mb-4">
                Or Reach Us Directly
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary leading-[1.1] mb-10">
                Direct<br />
                <span className="italic font-normal">Contact.</span>
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-text-secondary mb-3">Belgrade Office</h3>
                  <p className="text-text-primary font-medium">{COMPANY.name}</p>
                  <p className="text-text-secondary text-sm mt-1">{COMPANY.address.street}<br />{COMPANY.address.zip} {COMPANY.address.city}, Srbija</p>
                </div>
                <div className="w-10 h-px bg-gray-200" />
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-text-secondary mb-3">Contact</h3>
                  <a href={`tel:${COMPANY.phone}`} className="block text-text-primary hover:text-red transition-colors font-medium">{COMPANY.phoneDisplay}</a>
                  <a href={`mailto:${COMPANY.email}`} className="block text-text-secondary hover:text-red transition-colors text-sm mt-1">{COMPANY.email}</a>
                </div>
                <div className="w-10 h-px bg-gray-200" />
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-text-secondary mb-3">Hours</h3>
                  <p className="text-text-secondary text-sm">Monday — Friday: 08:00 — 17:00<br />Saturday: By appointment<br />Sunday: Closed</p>
                </div>
                <div className="bg-gray-100 aspect-[4/3] flex items-center justify-center border border-gray-200">
                  <span className="text-text-secondary text-sm">[ Google Maps ]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
