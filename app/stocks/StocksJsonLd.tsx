// components/Stocks/StocksJsonLd.tsx

import { stocks } from "@/data/stocks";

export function StocksJsonLd() {
  // Breadcrumb для навигации
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Главная",
        item: "https://нетечет.рф/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Акции",
        item: "https://нетечет.рф/stocks/",
      },
    ],
  };

  // Основные акции как SpecialAnnouncement
  const specialAnnouncements = stocks.map((stock) => ({
    "@context": "https://schema.org",
    "@type": "SpecialAnnouncement",
    name: `${stock.title} ${stock.titleNextStr}`,
    description: stock.conditions,
    startDate: "2026-01-01",
    endDate: "2026-12-31",
    category:
      stock.type === "neighbor"
        ? "https://schema.org/Offer"
        : "https://schema.org/DiscountOffer",
    audience:
      stock.type === "veteran"
        ? {
            "@type": "Audience",
            name: "Ветераны",
            audienceType: "veterans",
          }
        : stock.type === "family"
          ? {
              "@type": "Audience",
              name: "Многодетные семьи",
              audienceType: "largeFamily",
            }
          : undefined,
    ...(stock.type === "neighbor" && {
      funding: {
        "@type": "MonetaryAmount",
        name: "Бонус за рекомендацию",
        value: "5000",
        currency: "RUB",
      },
    }),
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {specialAnnouncements.map((announcement, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(announcement) }}
        />
      ))}
    </>
  );
}
