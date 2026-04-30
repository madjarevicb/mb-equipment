import Link from "next/link";
import { Fragment } from "react";
import type { Locale } from "@/i18n/config";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  locale?: Locale;
  homeLabel?: string;
  ariaLabel?: string;
}

export default function Breadcrumb({ items, locale, homeLabel = "Home", ariaLabel }: BreadcrumbProps) {
  const homeHref = locale ? `/${locale}` : "/";
  const allItems: BreadcrumbItem[] = [{ label: homeLabel, href: homeHref }, ...items];
  const breadcrumbLabel = ariaLabel ?? (locale === "sr" ? "Navigaciona putanja" : "Breadcrumb");

  return (
    <nav className="max-w-7xl mx-auto px-6 pt-4" aria-label={breadcrumbLabel}>
      <ol className="flex items-center gap-2 text-sm text-text-secondary">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;

          return (
            <Fragment key={item.label}>
              {index > 0 && <li aria-hidden="true">/</li>}
              {isLast ? (
                <li aria-current="page" className="text-navy font-medium">
                  {item.label}
                </li>
              ) : (
                <li>
                  <Link
                    href={item.href!}
                    className="hover:text-navy transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
