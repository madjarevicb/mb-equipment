"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import ChevronIcon from "@/components/ui/ChevronIcon";
import type { NavChild } from "@/lib/navigation";

interface DropdownProps {
  label: string;
  items: NavChild[];
}

export default function DesktopDropdown({ label, items }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const isMega = items.some((item) => item.children && item.children.length > 0);

  /* Flatten all links for keyboard nav */
  const allLinks: NavChild[] = isMega
    ? items.flatMap((item) => [item, ...(item.children ?? [])])
    : items;

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

  useEffect(() => {
    if (focusedIndex >= 0 && menuRef.current) {
      const links = menuRef.current.querySelectorAll<HTMLAnchorElement>("[role='menuitem']");
      links[focusedIndex]?.focus();
    }
  }, [focusedIndex]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
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
            setFocusedIndex((prev) => (prev + 1) % allLinks.length);
          }
          break;
        case "ArrowUp":
          e.preventDefault();
          if (isOpen) {
            setFocusedIndex((prev) => (prev - 1 + allLinks.length) % allLinks.length);
          }
          break;
        case "Tab":
          setIsOpen(false);
          setFocusedIndex(-1);
          break;
      }
    },
    [isOpen, allLinks.length],
  );

  const menuId = `dropdown-${label.replace(/\s+/g, "-").toLowerCase()}`;

  /* Track global link index for keyboard navigation */
  let linkIndex = -1;

  return (
    <div
      ref={containerRef}
      className="relative"
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setIsOpen(false);
        setFocusedIndex(-1);
      }}
    >
      <button
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => {
          setIsOpen(!isOpen);
          setFocusedIndex(-1);
        }}
        className="text-sm font-medium text-white/60 hover:text-gold transition-colors py-2 flex items-center gap-1"
      >
        {label}
        <ChevronIcon
          className={`w-3.5 h-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className={`absolute top-full pt-2 ${isMega ? "right-0" : "left-0"}`}>
          <div
            ref={menuRef}
            id={menuId}
            role="menu"
            aria-label={label}
            className={
              isMega
                ? "bg-white border border-gray-200 py-5 px-6 grid grid-cols-3 gap-8 min-w-[560px]"
                : "bg-white border border-gray-200 py-2 min-w-[220px]"
            }
          >
            {isMega
              ? items.map((column) => {
                  /* Category header link */
                  linkIndex++;
                  const headerIdx = linkIndex;

                  return (
                    <div key={column.href} className="min-w-[150px]">
                      <Link
                        href={column.href}
                        role="menuitem"
                        tabIndex={focusedIndex === headerIdx ? 0 : -1}
                        onClick={() => {
                          setIsOpen(false);
                          setFocusedIndex(-1);
                        }}
                        className="block text-[11px] font-medium uppercase tracking-[0.2em] text-text-secondary hover:text-red transition-colors mb-3 pb-2 border-b border-gray-100"
                      >
                        {column.label}
                      </Link>
                      <div className="space-y-0.5">
                        {column.children?.map((sub) => {
                          linkIndex++;
                          const subIdx = linkIndex;
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              role="menuitem"
                              tabIndex={focusedIndex === subIdx ? 0 : -1}
                              onClick={() => {
                                setIsOpen(false);
                                setFocusedIndex(-1);
                              }}
                              className="block py-1.5 text-[13px] text-text-primary hover:text-red transition-colors"
                            >
                              {sub.label}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              : items.map((child, i) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    role="menuitem"
                    tabIndex={focusedIndex === i ? 0 : -1}
                    onClick={() => {
                      setIsOpen(false);
                      setFocusedIndex(-1);
                    }}
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
