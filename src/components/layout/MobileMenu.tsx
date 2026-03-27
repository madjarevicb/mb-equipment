"use client";

import { useState } from "react";
import Link from "next/link";

interface NavChild { label: string; href: string }
interface NavItem { label: string; href?: string; children?: NavChild[] }

export default function MobileMenu({ navItems }: { navItems: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-[#0A1628]"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <div className="w-6 h-5 relative flex flex-col justify-between">
          <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </div>
      </button>

      {isOpen && (
        <div className="fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
          <div className="px-6 py-8">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-[#D32F3D] text-white text-center font-semibold py-3.5 rounded-md mb-8"
            >
              Get a Quote
            </Link>

            <nav className="space-y-1">
              {navItems.map((item) =>
                item.children ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setOpenSection(openSection === item.label ? null : item.label)}
                      className="w-full flex items-center justify-between py-3 text-lg font-medium text-[#212529] border-b border-gray-100"
                    >
                      {item.label}
                      <svg className={`w-4 h-4 transition-transform ${openSection === item.label ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    {openSection === item.label && (
                      <div className="pl-4 py-2 space-y-1">
                        {item.children.map((child) => (
                          <Link key={child.href} href={child.href} onClick={() => setIsOpen(false)} className="block py-2 text-[#595F66] hover:text-[#D32F3D]">
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link key={item.label} href={item.href!} onClick={() => setIsOpen(false)} className="block py-3 text-lg font-medium text-[#212529] border-b border-gray-100">
                    {item.label}
                  </Link>
                )
              )}
              <Link href="/contact" onClick={() => setIsOpen(false)} className="block py-3 text-lg font-medium text-[#212529] border-b border-gray-100">
                Contact
              </Link>
            </nav>

            <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-[#595F66]">
              <a href="tel:+381111234567" className="block py-1">+381 11 123 4567</a>
              <a href="mailto:info@mbequipmentsolutions.com" className="block py-1">info@mbequipmentsolutions.com</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
