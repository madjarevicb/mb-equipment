import { cache } from "react";
import type { Locale } from "./config";
import type { Dictionary } from "./types";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./dictionaries/en").then((m) => m.default),
  sr: () => import("./dictionaries/sr").then((m) => m.default),
};

export const getDictionary = cache(async (locale: Locale): Promise<Dictionary> => {
  return dictionaries[locale]();
});
