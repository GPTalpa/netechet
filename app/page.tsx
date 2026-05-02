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
      {/* <div className="container services">
        <h2>услуги</h2>
        <div className="services__content">
          <div className="services__item services__item--contrast">
            <div className="services__item--image">
              <Image
                src="/images/image_2.webp"
                width={483}
                height={219}
                alt="Дренаж участка"
              />
            </div>
            <div className="services__item__text">
              <div className="services__item__header">
                <p className="services__item__header--title">Дренаж участка</p>
                <p className="services__item__header--description">
                  одна из самых важных и сложных инженерных задач в обустройстве
                  территории. Правильно сделанный дренаж защитит дом от сырости,
                  предотвратит подтопление подвала, избавит участок от луж и
                  заболачивания.
                </p>
              </div>
              <div className="services__item__price">
                <p>стоимость</p>
                <p className="price">от 1500₽ за МП</p>
              </div>
              <div className="services__item__btns">
                <Button
                  text={"Рассчитать стоимость"}
                  isBlack={false}
                  isServices={true}
                />
                <Link
                  href="/drainage"
                  className="btn btn--black  btn--services"
                >
                  Подробнее
                </Link>
              </div>
            </div>
          </div>
          <div className="services__item">
            <div className="services__item--image">
              <Image
                src="/images/image_31.webp"
                width={483}
                height={219}
                alt="Отмостка"
              />
            </div>

            <div className="services__item__text">
              <div className="services__item__header">
                <p className="services__item__header--title">Отмостка</p>
                <p className="services__item__header--description">
                  водонепроницаемая полоса вокруг здания, которая служит для
                  отвода дождевых и талых вод от фундамента. Её правильное
                  устройство предотвращает просадку и разрушение фундамента,
                  защищает цоколь от влаги и может служить декоративным
                  элементом.
                </p>
              </div>
              <div className="services__item__char">
                <p>
                  <span style={{ fontWeight: 700 }}>Мягкая отмостка:</span> от
                  4500 М2
                </p>
                <p>
                  <span style={{ fontWeight: 700 }}>Бетонная отмостка:</span> от
                  6500 М2
                </p>
              </div>
              <div className="services__item__btns">
                <Button
                  text={"Оставить заявку"}
                  isBlack={false}
                  isServices={true}
                />
              </div>
            </div>
          </div>
          <div className="services__item">
            <div className="services__item--image">
              {" "}
              <Image
                src="/images/image_30.webp"
                width={483}
                height={219}
                alt="Гидроизоляция фундамента"
              />
            </div>

            <div className="services__item__text">
              <div className="services__item__header">
                <p className="services__item__header--title">
                  Гидроизоляция фундамента
                </p>
                <p className="services__item__header--description">
                  критически важный этап строительства, который защищает дом от
                  влаги, предотвращая сырость, грибок, разрушение конструкции и
                  потерю тепла. Пренебрежение им приводит к огромным проблемам и
                  затратам в будущем.
                </p>
              </div>
              <div className="services__item__char">
                <p>
                  <span style={{ fontWeight: 700 }}>
                    Индивидуальный расчет стоимости
                  </span>
                </p>
              </div>
              <div className="services__item__btns">
                <Button
                  text={"Оставить заявку"}
                  isBlack={false}
                  isServices={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Reviews />
    </div>
  );
}
