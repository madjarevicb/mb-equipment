import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/lib/navigation";
import { COMPANY } from "@/lib/constants";
import MobileMenu from "./MobileMenu";
import DesktopDropdown from "./DesktopDropdown";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Thin accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* Main nav */}
      <nav aria-label="Main navigation" className="bg-navy/95 backdrop-blur-md border-b border-white/5">
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
                <Link key={item.label} href={item.href} className="text-[13px] font-medium text-white/60 hover:text-white transition-colors duration-300">
                  {item.label}
                </Link>
              )
            )}
            <div className="w-px h-5 bg-white/10 mx-1" />
            <a href={`tel:${COMPANY.phone}`} className="text-white/40 hover:text-white transition-colors duration-300" aria-label="Call us">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <Link
              href="/contact"
              className="text-[13px] font-medium text-white bg-white/10 px-5 py-2.5 tracking-[0.08em] uppercase hover:bg-white/15 transition-colors duration-300"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-3 lg:hidden">
            <a href={`tel:${COMPANY.phone}`} className="text-white/60 p-2" aria-label="Call us">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </a>
            <MobileMenu navItems={navItems} />
          </div>
        </div>
      </nav>
    </header>
  );
}
