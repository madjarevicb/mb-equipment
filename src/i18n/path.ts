import type { Locale } from "./config";

/** Prefix a path with the current locale */
export function lp(locale: Locale, path: string): string {
  return `/${locale}${path}`;
}
