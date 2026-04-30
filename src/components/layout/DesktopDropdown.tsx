"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import ChevronIcon from "@/components/ui/ChevronIcon";
import type { NavChild } from "@/lib/navigation";

interface CtaLink {
  label: string;
  href: string;
}

interface DropdownProps {
  label: string;
  items: NavChild[];
  cta?: CtaLink;
}

export default function DesktopDropdown({ label, items, cta }: DropdownProps) {
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
        <div
          className={`absolute top-full pt-2 ${isMega ? "left-1/2" : "left-0"}`}
          style={isMega ? { transform: "translateX(-50%)" } : undefined}
        >
          <div
            ref={menuRef}
            id={menuId}
            role="menu"
            aria-label={label}
            style={
              isMega
                ? { width: "min(900px, calc(100vw - 48px))", backgroundColor: "#FDFCF9" }
                : undefined
            }
            className={
              isMega
                ? "border border-gray-200 shadow-lg flex flex-col"
                : "bg-white border border-gray-200 py-2 min-w-[220px]"
            }
          >
            {isMega ? (
              <>
                <div className="flex gap-0 pt-6 pb-7 px-5">
            {items.map((column) => {
                  /* Category header link */
                  linkIndex++;
                  const headerIdx = linkIndex;

                  return (
                    <div
                      key={column.href}
                      style={{ flex: "1 1 0", minWidth: "210px" }}
                      className="flex flex-col px-5 border-l border-gray-100 first:border-l-0"
                    >
                      <Link
                        href={column.href}
                        role="menuitem"
                        tabIndex={focusedIndex === headerIdx ? 0 : -1}
                        onClick={() => {
                          setIsOpen(false);
                          setFocusedIndex(-1);
                        }}
                        style={{
                          letterSpacing: "0.16em",
                          borderBottomColor: "var(--color-gold)",
                          paddingBottom: "10px",
                          marginBottom: "12px",
                          minHeight: "34px",
                        }}
                        className="flex items-end justify-center text-center text-xs font-semibold uppercase text-navy hover:text-red transition-colors border-b"
                      >
                        {column.label}
                      </Link>

                      <div className="flex flex-col">
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
                              className="group/sub relative flex items-center py-2 text-sm leading-snug text-text-secondary hover:text-navy transition-colors"
                            >
                              {/* Sliding gold marker — replaces generic color hover */}
                              <span
                                aria-hidden="true"
                                style={{
                                  backgroundColor: "var(--color-gold)",
                                  transition:
                                    "width 220ms ease, opacity 220ms ease",
                                }}
                                className="inline-block h-px w-0 opacity-0 group-hover/sub:w-3 group-hover/sub:opacity-100 group-focus/sub:w-3 group-focus/sub:opacity-100 mr-0 group-hover/sub:mr-2 group-focus/sub:mr-2"
                              />
                              <span>{sub.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
                </div>
                {cta && (
                  <Link
                    href={cta.href}
                    role="menuitem"
                    onClick={() => {
                      setIsOpen(false);
                      setFocusedIndex(-1);
                    }}
                    style={{ backgroundColor: "var(--color-navy)", letterSpacing: "0.22em" }}
                    className="group/cta flex items-center justify-center gap-3 py-4 text-xs font-medium uppercase text-white hover:text-gold transition-colors border-t border-gold/30"
                  >
                    <span>{cta.label}</span>
                    <span
                      aria-hidden="true"
                      style={{ color: "var(--color-gold)" }}
                      className="transition-transform duration-200 group-hover/cta:translate-x-1"
                    >
                      &rarr;
                    </span>
                  </Link>
                )}
              </>
            ) : (
              items.map((child, i) => (
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
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
