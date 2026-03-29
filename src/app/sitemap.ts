import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mbequipmentsolutions.com";
  const lastModified = new Date("2026-03-29");

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
  ];
}
