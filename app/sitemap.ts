import type { MetadataRoute } from "next";
import { SITE_URL } from "./site-url";
import { servicePages } from "./servicos/service-data";
import { contentArticles } from "./conteudos/content-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacidade`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    ...servicePages.map(({ slug }) => ({
      url: `${SITE_URL}/servicos/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...contentArticles.map(({ slug, publishedAt }) => ({
      url: `${SITE_URL}/conteudos/${slug}`,
      lastModified: new Date(publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
