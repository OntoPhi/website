import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ontophi.com";

  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/careers",
    "/research",
    "/engineering",
    "/products",
    "/opensource",
    "/insights",
    "/privacy",
    "/waitlist",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority:
      route === ""
        ? 1.0
        : route === "/waitlist"
          ? 0.6
          : 0.8,
  }));

  return staticRoutes;
}
