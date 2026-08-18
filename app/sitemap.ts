import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://ontophi.com";

  // Core static marketing and institutional routes
  const staticRoutes = ["", "/about", "/contact", "/careers", "/research", "/engineering", "/insights"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1.0 : 0.8,
    })
  );

  // Optional: Fetch dynamic blog/research posts from your CMS or local content layer
  // const posts = await getLatestInsights();
  // const dynamicRoutes = posts.map(post => ({
  //   url: `${baseUrl}/insights/${post.slug}`,
  //   lastModified: new Date(post.updatedAt).toISOString(),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.6,
  // }));

  return [...staticRoutes];
}

