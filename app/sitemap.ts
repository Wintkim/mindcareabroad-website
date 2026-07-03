import type { MetadataRoute } from "next";

const siteUrl = "https://mindcareabroad-website.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-07-03"),
      changeFrequency: "weekly",
      priority: 1,
      images: [`${siteUrl}/profile.png.png`],
      alternates: {
        languages: {
          ko: siteUrl,
          en: siteUrl,
          "x-default": siteUrl,
        },
      },
    },
  ];
}
