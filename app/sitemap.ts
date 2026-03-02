import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://нетечет.рф";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/drainage/`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacts/`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
