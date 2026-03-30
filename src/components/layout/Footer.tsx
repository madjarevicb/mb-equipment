import Link from "next/link";
import Image from "next/image";
import { solutionLinks, companyLinks } from "@/lib/navigation";
import { COMPANY } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/mb-logo.svg"
                alt="MB Equipment Solutions"
                width={160}
                height={80}
                className="h-14 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Southeast Europe&apos;s most complete foodservice equipment partner. Authorized partner of Middleby Corporation.
            </p>
            <div className="flex items-center gap-2 text-gold text-xs font-medium uppercase tracking-wider">
              <span className="w-8 h-px bg-gold" />
              Authorized Middleby Partner
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">Solutions</h3>
            <ul className="space-y-3">
              {solutionLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/80 hover:text-white transition-colors">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-white/80">
              <a href={`mailto:${COMPANY.email}`} className="block hover:text-white transition-colors">{COMPANY.email}</a>
              <a href={`tel:${COMPANY.phone}`} className="block hover:text-white transition-colors">{COMPANY.phoneDisplay}</a>
              <p>{COMPANY.address.street}<br />{COMPANY.address.zip} {COMPANY.address.city}, Srbija</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/80">
          <span>&copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</span>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
