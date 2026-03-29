import type { Metadata } from "next";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact MB Equipment Solutions in Belgrade. Free kitchen equipment consultation for commercial, residential & industrial projects. Response within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-gold text-sm font-semibold uppercase tracking-[0.2em]">Get In Touch</span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">Let&apos;s Talk Equipment.</h1>
          <p className="text-white/70 text-lg max-w-2xl">Whether it is a single unit or a full project scope, start here. We respond within one business day.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <h2 className="font-display text-2xl font-bold text-text-primary mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">Full Name <span className="text-red">*</span></label>
                    <input type="text" id="name" name="name" required autoComplete="name" className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:border-red focus:ring-1 focus:ring-red outline-none transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">Email <span className="text-red">*</span></label>
                    <input type="email" id="email" name="email" required autoComplete="email" className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:border-red focus:ring-1 focus:ring-red outline-none transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-1.5">Phone</label>
                    <input type="tel" id="phone" name="phone" autoComplete="tel" className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:border-red focus:ring-1 focus:ring-red outline-none transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-1.5">Company</label>
                    <input type="text" id="company" name="company" autoComplete="organization" className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:border-red focus:ring-1 focus:ring-red outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-text-primary mb-1.5">Interest Area</label>
                  <select id="interest" name="interest" className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:border-red focus:ring-1 focus:ring-red outline-none transition-colors bg-white">
                    <option value="">Select one...</option>
                    <option value="hotels">Hotels & Restaurants</option>
                    <option value="residential">Residential</option>
                    <option value="processing">Food Processing</option>
                    <option value="demo">Demo Request</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">Message <span className="text-red">*</span></label>
                  <textarea id="message" name="message" required rows={5} className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:border-red focus:ring-1 focus:ring-red outline-none transition-colors resize-none" />
                </div>
                <p className="text-xs text-text-secondary">Fields marked with * are required. We respond within one business day.</p>
                <button type="submit" className="w-full sm:w-auto bg-red text-white font-semibold px-8 py-3.5 rounded-md hover:bg-red-hover hover:-translate-y-px transition-all shadow-sm">
                  Send Message
                </button>
              </form>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection className="lg:col-span-2" delay={0.2}>
              <h2 className="font-display text-2xl font-bold text-text-primary mb-8">Or Reach Us Directly</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-3">Belgrade Office</h3>
                  <p className="text-text-primary font-medium">{COMPANY.name}</p>
                  <p className="text-text-secondary text-sm mt-1">{COMPANY.address.street}<br />{COMPANY.address.zip} {COMPANY.address.city}, Srbija</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-3">Contact</h3>
                  <a href={`tel:${COMPANY.phone}`} className="block text-text-primary hover:text-red transition-colors font-medium">{COMPANY.phoneDisplay}</a>
                  <a href={`mailto:${COMPANY.email}`} className="block text-text-primary hover:text-red transition-colors text-sm mt-1">{COMPANY.email}</a>
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gold mb-3">Hours</h3>
                  <p className="text-text-secondary text-sm">Monday — Friday: 08:00 — 17:00<br />Saturday: By appointment<br />Sunday: Closed</p>
                </div>
                <div className="bg-gray-200 rounded-md aspect-[4/3] flex items-center justify-center">
                  <span className="text-text-secondary/40 text-sm">[ Google Maps ]</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
