import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY.url;
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${baseUrl}/about/company-overview`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/about/innovation`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/business/hotels-restaurants`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/business/residential`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/business/food-processing`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/references`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/demo-centers`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/equipment`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/equipment/thermal-processing`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/equipment/thermal-processing/charcoal-grills`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/equipment/thermal-processing/ranges`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/equipment/thermal-processing/fryers`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/equipment/thermal-processing/pasta-cookers`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/equipment/thermal-processing/bain-marie`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/equipment/thermal-processing/combi-ovens`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/equipment/refrigeration`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/equipment/refrigeration/display-cases`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/equipment/refrigeration/food-refrigeration`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/equipment/refrigeration/cold-rooms`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/equipment/neutral-inox`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/equipment/neutral-inox/warewashing`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/equipment/neutral-inox/waste-management`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
