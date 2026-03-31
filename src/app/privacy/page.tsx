import type { Metadata } from "next";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { COMPANY } from "@/lib/constants";

export const dynamic = "force-static";

const PAGE_TITLE = "Privacy Policy";
const PAGE_DESC =
  "Privacy policy for MB Equipment Solutions. Learn how we collect, use, and protect your personal information.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: `${COMPANY.url}/privacy`,
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

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb items={[
        { label: "Privacy Policy" },
      ]} />

      {/* Hero */}
      <section className="bg-navy pt-32 pb-24" aria-labelledby="privacy-heading">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gold text-xs font-medium uppercase tracking-[0.3em] mb-6">
            Legal
          </p>
          <h1
            id="privacy-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
          >
            Privacy<br />
            <span className="italic font-normal">Policy.</span>
          </h1>
          <div className="w-16 h-px bg-gold/60 mb-6" />
          <p className="text-white/60 text-lg max-w-lg font-light">
            How we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-xl font-bold text-text-primary mb-4">
                Information We Collect
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                When you use our contact form, we collect the information you
                provide: your name, email address, phone number (optional),
                company name (optional), area of interest, and message content.
                We also collect standard web analytics data through Vercel
                Analytics to improve our website performance.
              </p>
            </div>

            <div className="w-12 h-px bg-gray-200" />

            <div>
              <h2 className="font-display text-xl font-bold text-text-primary mb-4">
                How We Use Your Information
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                We use the information you submit through our contact form
                solely to respond to your inquiry and provide the requested
                consultation or quote. We do not sell, rent, or share your
                personal information with third parties for marketing purposes.
              </p>
            </div>

            <div className="w-12 h-px bg-gray-200" />

            <div>
              <h2 className="font-display text-xl font-bold text-text-primary mb-4">
                Data Protection
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                We implement appropriate technical and organizational measures
                to protect your personal data against unauthorized access,
                alteration, disclosure, or destruction. Our website is served
                over HTTPS, and form submissions are processed through secure
                channels.
              </p>
            </div>

            <div className="w-12 h-px bg-gray-200" />

            <div>
              <h2 className="font-display text-xl font-bold text-text-primary mb-4">
                Cookies &amp; Analytics
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                This website uses Vercel Analytics and Speed Insights to
                collect anonymized performance data. These tools do not use
                cookies for tracking and do not collect personally identifiable
                information. No third-party advertising cookies are used on
                this website.
              </p>
            </div>

            <div className="w-12 h-px bg-gray-200" />

            <div>
              <h2 className="font-display text-xl font-bold text-text-primary mb-4">
                Your Rights
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                You have the right to request access to, correction of, or
                deletion of your personal data. To exercise these rights,
                please contact us at{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-text-primary hover:text-red transition-colors"
                >
                  {COMPANY.email}
                </a>
                .
              </p>
            </div>

            <div className="w-12 h-px bg-gray-200" />

            <div>
              <h2 className="font-display text-xl font-bold text-text-primary mb-4">
                Contact
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed">
                For any privacy-related questions, contact us at{" "}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-text-primary hover:text-red transition-colors"
                >
                  {COMPANY.email}
                </a>{" "}
                or write to {COMPANY.name}, {COMPANY.address.street},{" "}
                {COMPANY.address.zip} {COMPANY.address.city}.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <p className="text-text-secondary/60 text-xs">
                Last updated: March 2026
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
