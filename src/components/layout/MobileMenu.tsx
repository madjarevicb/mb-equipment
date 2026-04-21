"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import ChevronIcon from "@/components/ui/ChevronIcon";
import { COMPANY } from "@/lib/constants";
import type { NavItem } from "@/lib/navigation";

export default function MobileMenu({ navItems }: { navItems: NavItem[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [openSubSection, setOpenSubSection] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Reset sub-accordion when parent closes
  useEffect(() => {
    if (!openSection) setOpenSubSection(null);
  }, [openSection]);

  // Focus trap
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      triggerRef.current?.focus();
      return;
    }
    if (e.key !== "Tab" || !menuRef.current) return;

    const focusable = menuRef.current.querySelectorAll<HTMLElement>(
      'a[href], button, [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }, []);

  const close = () => setIsOpen(false);

  const menuPanel = isOpen ? (
    <div
      ref={menuRef}
      className="fixed bg-white overflow-y-auto"
      style={{ top: "65px", left: 0, right: 0, bottom: 0, zIndex: 60 }}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      onKeyDown={handleKeyDown}
    >
      <div className="px-6 py-8">
        <Link
          href="/contact"
          onClick={close}
          className="block w-full bg-red text-white text-center font-medium py-3.5 mb-8 text-sm tracking-[0.08em] uppercase"
        >
          Get a Quote
        </Link>

        <nav className="space-y-1">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setOpenSection(openSection === item.label ? null : item.label)
                  }
                  aria-expanded={openSection === item.label}
                  className="w-full flex items-center justify-between py-3 text-lg font-medium text-text-primary border-b border-gray-100"
                >
                  {item.label}
                  <ChevronIcon
                    className={`w-4 h-4 transition-transform ${openSection === item.label ? "rotate-180" : ""}`}
                  />
                </button>
                {openSection === item.label && (
                  <div className="pl-4 py-2 space-y-0.5">
                    {item.children.map((child) =>
                      child.children && child.children.length > 0 ? (
                        /* --- Sub-accordion for nested children --- */
                        <div key={child.href}>
                          <button
                            onClick={() =>
                              setOpenSubSection(
                                openSubSection === child.label ? null : child.label,
                              )
                            }
                            aria-expanded={openSubSection === child.label}
                            className="w-full flex items-center justify-between py-2 text-text-primary font-medium text-[15px]"
                          >
                            {child.label}
                            <ChevronIcon
                              className={`w-3.5 h-3.5 transition-transform text-text-secondary/40 ${openSubSection === child.label ? "rotate-180" : ""}`}
                            />
                          </button>
                          {openSubSection === child.label && (
                            <div className="pl-4 py-1 space-y-0.5 border-l border-gray-100">
                              {/* Link to parent category page */}
                              <Link
                                href={child.href}
                                onClick={close}
                                className="block py-1.5 text-[13px] text-text-secondary/60 hover:text-red"
                              >
                                All {child.label} &#8594;
                              </Link>
                              {child.children.map((sub) => (
                                <Link
                                  key={sub.href}
                                  href={sub.href}
                                  onClick={close}
                                  className="block py-1.5 text-[13px] text-text-secondary hover:text-red"
                                >
                                  {sub.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        /* --- Flat link (no nested children) --- */
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={close}
                          className="block py-2 text-text-secondary hover:text-red"
                        >
                          {child.label}
                        </Link>
                      ),
                    )}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={close}
                className="block py-3 text-lg font-medium text-text-primary border-b border-gray-100"
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href="/contact"
            onClick={close}
            className="block py-3 text-lg font-medium text-text-primary border-b border-gray-100"
          >
            Contact
          </Link>
        </nav>

        <div className="mt-8 pt-6 border-t border-gray-200 text-sm text-text-secondary">
          <a href={`tel:${COMPANY.phone}`} className="block py-1">
            {COMPANY.phoneDisplay}
          </a>
          <a href={`mailto:${COMPANY.email}`} className="block py-1">
            {COMPANY.email}
          </a>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-white"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <div className="w-6 h-5 relative flex flex-col justify-between">
          <span
            className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </div>
      </button>

      {typeof document !== "undefined" && createPortal(menuPanel, document.body)}
    </>
  );
}
