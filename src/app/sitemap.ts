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
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
