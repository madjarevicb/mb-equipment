import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/lib/navigation";
import { COMPANY } from "@/lib/constants";
import MobileMenu from "./MobileMenu";
import DesktopDropdown from "./DesktopDropdown";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-navy text-white/80 text-xs hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between">
          <span>Mon-Fri: 08:00 - 17:00 CET</span>
          <div className="flex gap-4">
            <a href={`tel:${COMPANY.phone}`} className="hover:text-white transition-colors">{COMPANY.phoneDisplay}</a>
            <span className="text-white/30">|</span>
            <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">{COMPANY.email}</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav aria-label="Main navigation" className="bg-navy/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/mb-logo.svg"
              alt="MB Equipment Solutions"
              width={160}
              height={80}
              className="h-12 lg:h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.label} label={item.label} items={item.children} />
              ) : (
                <Link key={item.label} href={item.href} className="text-sm font-medium text-white/80 hover:text-gold transition-colors">
                  {item.label}
                </Link>
              )
            )}
            <Link href="/contact" className="bg-red text-white text-sm font-semibold px-5 py-2.5 rounded-sm hover:bg-red-hover hover:-translate-y-px transition-all shadow-sm">
              Get a Quote
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-3 lg:hidden">
            <a href={`tel:${COMPANY.phone}`} className="text-white p-2" aria-label="Call us">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </a>
            <MobileMenu navItems={navItems} />
          </div>
        </div>
      </nav>
    </header>
  );
}
