import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/constants";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY.url;
  const lastModified = new Date();

  const paths = [
    { path: "", changeFrequency: "monthly" as const, priority: 1.0 },
    { path: "/about/company-overview", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/about/innovation", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/business/hotels-restaurants", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/business/residential", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/business/food-processing", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/references", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/demo-centers", changeFrequency: "monthly" as const, priority: 0.6 },
    { path: "/equipment", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/equipment/thermal-processing", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/equipment/thermal-processing/charcoal-grills", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/equipment/thermal-processing/ranges", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/equipment/thermal-processing/fryers", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/equipment/thermal-processing/pasta-cookers", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/equipment/thermal-processing/bain-marie", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/equipment/thermal-processing/combi-ovens", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/equipment/refrigeration", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/equipment/refrigeration/display-cases", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/equipment/refrigeration/food-refrigeration", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/equipment/refrigeration/cold-rooms", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/equipment/neutral-inox", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/equipment/neutral-inox/warewashing", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/equipment/neutral-inox/waste-management", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "yearly" as const, priority: 0.8 },
    { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  /* Emit one entry per locale per path */
  return locales.flatMap((locale) =>
    paths.map(({ path, changeFrequency, priority }) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${baseUrl}/${l}${path}`]),
        ),
      },
    })),
  );
}
