"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import ChevronIcon from "@/components/ui/ChevronIcon";

interface DropdownProps {
  label: string;
  items: { label: string; href: string }[];
}

export default function DesktopDropdown({ label, items }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Focus menu item by index
  useEffect(() => {
    if (focusedIndex >= 0 && menuRef.current) {
      const items = menuRef.current.querySelectorAll<HTMLAnchorElement>("[role='menuitem']");
      items[focusedIndex]?.focus();
    }
  }, [focusedIndex]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Escape":
        setIsOpen(false);
        setFocusedIndex(-1);
        containerRef.current?.querySelector("button")?.focus();
        e.preventDefault();
        break;
      case "ArrowDown":
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(0);
        } else {
          setFocusedIndex((prev) => (prev + 1) % items.length);
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (isOpen) {
          setFocusedIndex((prev) => (prev - 1 + items.length) % items.length);
        }
        break;
      case "Tab":
        setIsOpen(false);
        setFocusedIndex(-1);
        break;
    }
  }, [isOpen, items.length]);

  const menuId = `dropdown-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div ref={containerRef} className="relative" onKeyDown={handleKeyDown}>
      <button
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => { setIsOpen(!isOpen); setFocusedIndex(-1); }}
        onMouseEnter={() => setIsOpen(true)}
        className="text-sm font-medium text-white/60 hover:text-gold transition-colors py-2 flex items-center gap-1"
      >
        {label}
        <ChevronIcon className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div
          className="absolute top-full left-0 pt-2"
          onMouseLeave={() => { setIsOpen(false); setFocusedIndex(-1); }}
        >
          <div
            ref={menuRef}
            id={menuId}
            role="menu"
            aria-label={label}
            className="bg-white border border-gray-200 py-2 min-w-[220px]"
          >
            {items.map((child, i) => (
              <Link
                key={child.href}
                href={child.href}
                role="menuitem"
                tabIndex={focusedIndex === i ? 0 : -1}
                onClick={() => { setIsOpen(false); setFocusedIndex(-1); }}
                className="block px-4 py-2.5 text-sm text-text-primary hover:bg-offwhite hover:text-red transition-colors"
              >
                {child.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
