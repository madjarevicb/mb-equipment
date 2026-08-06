"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";

interface LanguageSwitcherProps {
  currentLocale: Locale;
  common?: Pick<Dictionary["common"], "languageGroup" | "languageEnglish" | "languageSerbian">;
}

export default function LanguageSwitcher({ currentLocale, common }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale(target: Locale) {
    const segments = pathname.split("/");
    segments[1] = target;
    const search = typeof window !== "undefined" ? window.location.search : "";
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    router.push(segments.join("/") + search + hash);
  }

  const groupLabel = common?.languageGroup ?? "Language";
  const englishLabel = common?.languageEnglish ?? "English";
  const serbianLabel = common?.languageSerbian ?? "Srpski";

  return (
    <div className="flex items-center gap-0.5" role="group" aria-label={groupLabel}>
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center">
          {i > 0 && <span className="text-white/15 mx-1.5 text-[11px]">|</span>}
          <button
            onClick={() => switchLocale(locale)}
            className={`text-[11px] font-medium uppercase tracking-[0.1em] transition-colors duration-300 ${
              locale === currentLocale
                ? "text-white"
                : "text-white/60 hover:text-white/90"
            }`}
            aria-current={locale === currentLocale ? "page" : undefined}
            aria-label={locale === "en" ? englishLabel : serbianLabel}
          >
            {locale === "en" ? "EN" : "SR"}
          </button>
        </span>
      ))}
    </div>
  );
}
