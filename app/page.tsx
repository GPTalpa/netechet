export const dynamic = "force-static";

import "./home.scss";
import { Metadata } from "next";
import Image from "next/image";
import Button from "@components/Button";
import Projects from "@components/Projects";
import Drainage from "@components/Drainage";
import { homePageMeta } from "./head";
import Reviews from "@/components/Reviews";
import Link from "next/link";
import Services from "@/components/Services";
import Stocks from "@/components/Stocks";

export const metadata: Metadata = {
  title: homePageMeta.title,
  description: homePageMeta.description,
  keywords: homePageMeta.keywords,
  icons: homePageMeta.icons,
  alternates: {
    canonical: "https://нетечет.рф/",
    languages: {
      ru: "https://нетечет.рф/",
      "x-default": "https://нетечет.рф/",
    },
  },
  openGraph: {
    title: homePageMeta.title,
    description: homePageMeta.description,
    type: "website",
    url: "https://нетечет.рф/",
    locale: "ru",
    siteName: "Нетечет",
    images: [
      {
        url: "https://нетечет.рф/images/logo-big.png",
        width: 400,
        height: 400,
        alt: "Нетечет логотип",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homePageMeta.title,
    description: homePageMeta.description,
    images: ["https://нетечет.рф/images/logo-big.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://нетечет.рф/#organization",
      name: "Нетечет",
      url: "https://нетечет.рф/",
      logo: {
        "@type": "ImageObject",
        url: "https://нетечет.рф/images/logo-big.png",
        width: 400,
        height: 400,
      },
      description:
        "Профессиональный дренаж участка и фундамента под ключ в Москве и Московской области",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Москва",
        addressRegion: "Московская область",
        addressCountry: "RU",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Москва",
        },
        {
          "@type": "State",
          name: "Московская область",
        },
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://нетечет.рф/#business",
      parentOrganization: {
        "@id": "https://нетечет.рф/#organization",
      },
      name: "Нетечет - Дренаж участка и фундамента",
      description:
        "Профессиональный дренаж вокруг дома, гидроизоляция фундамента и ливневая канализация под ключ в Москве и МО. Работаем с грунтовыми водами и сложными участками. Бесплатный выезд и расчет сметы.",
      url: "https://нетечет.рф/",
      telephone: "+7-925-285-29-55",
      areaServed: [
        {
          "@type": "City",
          name: "Москва",
        },
        {
          "@type": "State",
          name: "Московская область",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Услуги по дренажу",
        itemListElement: [
          {
            "@type": "Service",
            name: "Дренаж участка под ключ",
            description:
              "Профессиональный дренаж участка в Москве и Московской области",
            provider: {
              "@id": "https://нетечет.рф/#organization",
            },
            areaServed: ["Москва", "Московская область"],
          },
          {
            "@type": "Service",
            name: "Дренаж вокруг дома",
            description: "Защита фундамента от грунтовых вод",
            provider: {
              "@id": "https://нетечет.рф/#organization",
            },
            areaServed: ["Москва", "Московская область"],
          },
          {
            "@type": "Service",
            name: "Гидроизоляция фундамента",
            description: "Надежная защита фундамента от влаги",
            provider: {
              "@id": "https://нетечет.рф/#organization",
            },
            areaServed: ["Москва", "Московская область"],
          },
          {
            "@type": "Service",
            name: "Ливневая канализация",
            description: "Отвод дождевой воды с участка",
            provider: {
              "@id": "https://нетечет.рф/#organization",
            },
            areaServed: ["Москва", "Московская область"],
          },
          {
            "@type": "Service",
            name: "Мягкая отмостка",
            description: "Современное решение для отвода воды от фундамента",
            provider: {
              "@id": "https://нетечет.рф/#organization",
            },
            areaServed: ["Москва", "Московская область"],
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://нетечет.рф/#website",
      url: "https://нетечет.рф/",
      name: "Нетечет",
      description:
        "Дренаж участка и фундамента под ключ в Москве и Московской области",
      publisher: {
        "@id": "https://нетечет.рф/#organization",
      },
      inLanguage: "ru",
    },
    {
      "@type": "WebPage",
      "@id": "https://нетечет.рф/#webpage",
      url: "https://нетечет.рф/",
      name: "Дренаж участка и фундамента под ключ в Москве и Московской области | Нетечет",
      description:
        "Профессиональный дренаж вокруг дома, гидроизоляция фундамента и ливневая канализация под ключ в Москве и МО. Бесплатный выезд и расчет сметы.",
      isPartOf: {
        "@id": "https://нетечет.рф/#website",
      },
      about: {
        "@id": "https://нетечет.рф/#business",
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: "https://нетечет.рф/images/logo-big.png",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <div className="home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Drainage />
      <Stocks />
      <Projects />
      <Services />
      <Reviews />
    </div>
  );
}
