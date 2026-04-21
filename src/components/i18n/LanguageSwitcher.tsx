"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";

export default function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(target: Locale) {
    const segments = pathname.split("/");
    segments[1] = target;
    router.push(segments.join("/"));
  }

  return (
    <div className="flex items-center gap-0.5" role="group" aria-label="Language">
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center">
          {i > 0 && <span className="text-white/15 mx-1.5 text-[11px]">|</span>}
          <button
            onClick={() => switchLocale(locale)}
            className={`text-[11px] font-medium uppercase tracking-[0.1em] transition-colors duration-300 ${
              locale === currentLocale
                ? "text-white"
                : "text-white/40 hover:text-white/70"
            }`}
            aria-current={locale === currentLocale ? "page" : undefined}
            aria-label={locale === "en" ? "English" : "Srpski"}
          >
            {locale === "en" ? "EN" : "SR"}
          </button>
        </span>
      ))}
    </div>
  );
}
