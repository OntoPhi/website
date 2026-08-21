import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ontophi.com";

  // Core pages
  const staticRoutes = [
    "",
    "/about",
    "/research",
    "/engineering",
    "/products",
    "/opensource",
    "/insights",
    "/careers",
    "/contact",
    "/privacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Local Markdown Insights
  const insightsDir = path.join(process.cwd(), "content/insights");

  let insightRoutes: MetadataRoute.Sitemap = [];

  if (fs.existsSync(insightsDir)) {
    const files = fs
      .readdirSync(insightsDir)
      .filter((file) => file.endsWith(".md"));

    insightRoutes = files.map((file) => {
      const slug = file.replace(/\.md$/, "");

      return {
        url: `${baseUrl}/insights/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      };
    });
  }

  return [...staticRoutes, ...insightRoutes];
}
