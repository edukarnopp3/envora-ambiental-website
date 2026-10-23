import type { MetadataRoute } from "next";
import { SITE_URL } from "./site-url";
import { servicePages } from "./servicos/service-data";
import { commercialServiceDrafts } from "./servicos/commercial-service-drafts";
import { contentArticles } from "./conteudos/content-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacidade`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/conteudos`,
      changeFrequency: "monthly",
      priority: 0.65,
    },
    ...servicePages.map(({ slug }) => ({
      url: `${SITE_URL}/servicos/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...commercialServiceDrafts.map(({ slug }) => ({
      url: `${SITE_URL}/servicos/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...contentArticles.map(({ slug, publishedAt, updatedAt }) => ({
      url: `${SITE_URL}/conteudos/${slug}`,
      lastModified: new Date(updatedAt ?? publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
