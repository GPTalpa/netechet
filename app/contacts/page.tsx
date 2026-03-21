import "./style.scss";
import { Metadata } from "next";
import Image from "next/image";

import Cta from "@components/Cta";
import Link from "next/link";
import { homePageMeta } from "./head";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: homePageMeta.title,
  description: homePageMeta.description,
  keywords: homePageMeta.keywords,
  icons: homePageMeta.icons,
  alternates: {
    canonical: "https://нетечет.рф/contacts/",
    languages: {
      ru: "https://нетечет.рф/contacts/",
    },
  },
  openGraph: {
    title: homePageMeta.title,
    description: homePageMeta.description,
    type: "website",
    url: "https://нетечет.рф/contacts/",
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
export default function Contacts() {
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
          "Компания по дренажу участков и гидроизоляции фундаментов в Москве и Московской области",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Москва",
          addressRegion: "Московская область",
          addressCountry: "RU",
        },
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+7-925-285-29-55", // Основной телефон
            contactType: "customer service",
            areaServed: ["Москва", "Московская область"],
            availableLanguage: "Russian",
          },
        ],
        email: "info@нетечет.рф",
        sameAs: [
          "https://t.me/netechetmsk/",
          "https://max.ru/u/f9LHodD0cOIM_CFGBXTdBHOzzxVmm5-tJHgwirF83XVhim0mQzAL4n3FW4E",
        ],
      },
      {
        "@type": "ContactPage",
        "@id": "https://нетечет.рф/contacts/#webpage",
        url: "https://нетечет.рф/contacts/",
        name: "Контакты компании Нетечет — дренаж и гидроизоляция в Москве и МО",
        description:
          "Свяжитесь с компанией «Нетечет» для расчета стоимости дренажа участка, устройства ливневки или гидроизоляции фундамента. Работаем по всей Москве и Московской области.",
        isPartOf: {
          "@id": "https://нетечет.рф/#website",
        },
        about: {
          "@id": "https://нетечет.рф/#organization",
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: "https://нетечет.рф/images/logo-big.png",
        },
        inLanguage: "ru",
        breadcrumb: {
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
              name: "Контакты",
              item: "https://нетечет.рф/contacts/",
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
    ],
  };

  const contactPoint = {
    "@context": "https://schema.org",
    "@type": "ContactPoint",
    name: "Быстрая связь через мессенджеры",
    telephone: "+7-925-285-29-55",
    contactType: "customer support",
    contactOption: "TollFree",
    areaServed: ["Москва", "Московская область"],
    availableLanguage: ["Russian"],
    sameAs: [
      "https://t.me/netechetmsk/",
      "https://max.ru/u/f9LHodD0cOIM_CFGBXTdBHOzzxVmm5-tJHgwirF83XVhim0mQzAL4n3FW4E",
    ],
  };

  return (
    <div className="contacts">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPoint) }}
      />
      <div className="contacts__content">
        <Image
          src="/images/image_20.webp"
          className="contacts__content__decorative-image"
          alt="Избушка"
          width={1536}
          height={1348}
        />
        <div className="contacts__block">
          <div className="contacts__block__left">
            <h1>
              Контакты{" "}
              <Link href="/" className="logo-mobile">
                <Image
                  src="/icons/logo.svg"
                  width={47}
                  height={47}
                  alt="Логотип"
                  fetchPriority="high"
                  loading="eager"
                  className="footer__header--logo"
                ></Image>
              </Link>
            </h1>
            <address>
              <p className="contacts__company-name">Компания «Не течет»</p>
              <p>ИП Аникеев Сергей Алексеевич</p>
              <p>г. Москва</p>
              <p>
                <span style={{ fontWeight: 700 }}>Телефон: </span>
                <Link href="tel: +79252852955"> +7 (925) 285 - 29 - 55</Link>
              </p>
              <p>
                <span style={{ fontWeight: 700 }}>Время работы: </span>
                <span>
                  с <time dateTime="10:00+03:00">10:00</time> до{" "}
                  <time dateTime="19:00+03:00">19:00</time> МСК
                </span>
              </p>
              <p>
                <span style={{ fontWeight: 700 }}>ИНН:</span> 773013165986
              </p>
              <p>
                <span style={{ fontWeight: 700 }}>ОГРН</span> 326774600058132
              </p>
              <Link
                href="https://t.me/netechetmsk/"
                target="_blank"
                className="contacts__telegram"
              >
                <Image src="/icons/tg-red.svg" alt="" width={46} height={46} />
                <p>Мы в телеграм!</p>
              </Link>
              <Link
                href="https://max.ru/u/f9LHodD0cOIM_CFGBXTdBHOzzxVmm5-tJHgwirF83XVhim0mQzAL4n3FW4E"
                target="_blank"
                className="contacts__telegram"
              >
                <Image src="/icons/max.png" alt="" width={46} height={46} />
                <p>Мы в Максе!</p>
              </Link>
            </address>
          </div>
          <div className="contacts__block__right">
            <Image
              src="/images/logo-big.png"
              alt="Логотип большой"
              width={402}
              height={402}
            />
          </div>
        </div>
      </div>
      <Cta />
    </div>
  );
}
