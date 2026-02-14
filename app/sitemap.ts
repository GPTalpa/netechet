import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://maximbet.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/gambling`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gambling/online-pokies`,
      lastModified: "2025-12-12T00:00:00+00:00",
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gambling/best-online-casinos-australia`,
      lastModified: "2025-12-16T00:00:00+00:00",
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gambling/crypto-payments-in-online-gambling`,
      lastModified: "2025-12-18T00:00:00+00:00",
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gambling/pennsylvania-igaming-revenue-records`,
      lastModified: "2025-12-20T00:00:00+00:00",
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gambling/uk-regulator-cracks-down-on-casino-bonus-offers`,
      lastModified: "2025-12-17T00:00:00+00:00",
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/betting`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/betting/new-york-sports-betting-revenue-record`,
      lastModified: "2025-12-20T00:00:00+00:00",
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/odds`,
      lastModified: "2025-11-28T00:00:00+00:00",
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/odds/nfl`,
      lastModified: "2025-11-28T00:00:00+00:00",
      changeFrequency: "daily",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/odds/college-football`,
      lastModified: "2025-11-28T00:00:00+00:00",
      changeFrequency: "daily",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/odds/college-basketball`,
      lastModified: "2025-11-28T00:00:00+00:00",
      changeFrequency: "daily",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/odds/nba`,
      lastModified: "2025-11-28T00:00:00+00:00",
      changeFrequency: "daily",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/odds/mlb`,
      lastModified: "2025-11-28T00:00:00+00:00",
      changeFrequency: "daily",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/odds/golf`,
      lastModified: "2025-11-28T00:00:00+00:00",
      changeFrequency: "daily",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/odds/nfl/super-bowl`,
      lastModified: "2025-11-28T15:46:03+00:00",
      changeFrequency: "weekly",
      priority: 0.51,
    },
    {
      url: `${baseUrl}/odds/nba/futures`,
      lastModified: "2025-11-28T15:46:03+00:00",
      changeFrequency: "weekly",
      priority: 0.51,
    },

    {
      url: `${baseUrl}/terms`,
      lastModified: "2025-11-28T15:46:03+00:00",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: "2025-11-28T15:46:03+00:00",
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/responsible-gambling`,
      lastModified: "2025-11-28T15:46:03+00:00",
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
