import type { MetadataRoute } from "next";

const siteUrl = "https://www.mindcareabroad.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date("2026-07-03"),
    },
  ];
}
