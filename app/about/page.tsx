export const dynamic = "force-static";

import "./style.scss";
import { Metadata } from "next";
import Image from "next/image";
import Cta from "@components/Cta";
import Certificats from "@components/Certificats";
import { homePageMeta } from "./head";

export const metadata: Metadata = {
  title: homePageMeta.title,
  description: homePageMeta.description,
  keywords: homePageMeta.keywords,
  icons: homePageMeta.icons,
  alternates: {
    canonical: "https://нетечет.рф/about/",
    languages: {
      ru: "https://нетечет.рф/about/",
    },
  },
  openGraph: {
    title: homePageMeta.title,
    description: homePageMeta.description,
    type: "website",
    url: "https://нетечет.рф/about/",
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

export default function About() {
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
          "Компания «Нетечет» специализируется на устройстве дренажа участков, пристенного дренажа, ливневых систем и гидроизоляции фундаментов в Москве и Московской области",
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
        foundingDate: "2026",
        email: "info@нетечет.рф",
        telephone: "+7-925-285-29-55",
        sameAs: [
          "https://t.me/netechetmsk/",
          "https://max.ru/u/f9LHodD0cOIM_CFGBXTdBHOzzxVmm5-tJHgwirF83XVhim0mQzAL4n3FW4E",
        ],
      },
      {
        "@type": "AboutPage",
        "@id": "https://нетечет.рф/about/#webpage",
        url: "https://нетечет.рф/about/",
        name: "О компании Нетечет — дренажные системы и гидроизоляция фундаментов",
        description:
          "Компания «Нетечет» специализируется на устройстве дренажа участков, пристенного дренажа, ливневых систем и гидроизоляции фундаментов в Москве и Московской области. Опыт, гарантия, работа под ключ.",
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
              name: "О компании",
              item: "https://нетечет.рф/about/",
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

  return (
    <div className="about">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container about-company">
        <div className="about-company__left">
          <div className="about-company__image">
            <Image
              src="/images/image_21.webp"
              alt="Директор компании «Не течет» Аникеев Сергей"
              width={544}
              height={630}
            />
            <div className="about-company__image__text">
              <p className="about-company__image__text--title">
                Аникеев Сергей
              </p>
              <p className="about-company__image__text--description">
                Директор компании «Не течет»
              </p>
            </div>
          </div>
        </div>
        <div className="about-company__right">
          <h1>о компании</h1>
          <div className="about-company__image--mobile">
            <Image
              src="/images/image_21--mobile.png"
              alt="Директор компании «Не течет» Аникеев Сергей"
              width={335}
              height={462}
            />
            <div className="about-company__image__text">
              <p className="about-company__image__text--title">
                Аникеев Сергей
              </p>
              <p className="about-company__image__text--description">
                Директор компании «Не течет»
              </p>
            </div>
          </div>
          <div className="about-company__right__text">
            <p>
              <span style={{ fontWeight: 700 }}>
                История компании «Не течет»
              </span>{" "}
              начинается с суммы опыта нашей команды.
            </p>
            <p>
              Мы — сплоченный коллектив инженеров, проектировщиков и
              монтажников,{" "}
              <span style={{ fontWeight: 700 }}>
                каждый из которых прошел путь в 5, 10, а то и 15 лет в
                строительстве подземных систем.
              </span>
            </p>
            <p>
              Почему мы решили объединиться под новым именем? Мы увидели запрос
              рынка не просто на «установку труб», а на комплексные, продуманные
              решения, где нет места шаблонному подходу. Где каждый проект
              начинается с глубокого анализа, а не с готового шаблона. Где{" "}
              <span style={{ fontWeight: 700 }}>
                заказчик получает честный диалог, прозрачную смету и гарантию на
                десятилетия вперед.
              </span>
            </p>
          </div>
          <div className="about-company__right--decor">
            <Image src="/images/dec1.png" alt="" width={44} height={44} />
            <Image src="/images/dec2.png" alt="" width={44} height={44} />
            <Image src="/images/dec2.png" alt="" width={44} height={44} />
          </div>
        </div>
      </div>
      <div className="container about-info">
        <div className="about-info__item about-info__item--accent">
          <p className="about-info__item--title">
            Наш фундамент <br />— это люди.
          </p>
          <p className="about-info__item--description">
            {" "}
            В нашей команде работают опытные специалисты, которые знают своё
            дело до мелочей.{" "}
          </p>
        </div>
        <div className="about-info__item">
          <p className="about-info__item--title">Инженеры-проектировщики</p>
          <p className="about-info__item--description">
            которые знают СНиПы и СП лучше, чем кто-либо, но главное — понимают,
            как эти нормы применять к реальной почве на вашем участке.
          </p>
        </div>
        <div className="about-info__item">
          <p className="about-info__item--title">Мастера-монтажники</p>
          <p className="about-info__item--description">
            чьи руки помнят укладку километров дрен, монтаж сложных коллекторов
            и систем ливневой канализации. Они знают материал и технологию.
          </p>
        </div>
      </div>
      <div className="container about-projects">
        <div className="about-projects__text">
          <h2>
            <span className="h2-dec">300+</span>
            <br />
            реализованных объектов в Москве
            <br /> и области
          </h2>
          <div className="vertical_separator"></div>
          <div className="about-projects__info-item">
            <p className="about-projects__info-item--title">10</p>
            <p className="about-projects__info-item--description">
              штатных бригад
            </p>
          </div>
          <div className="about-projects__info-item">
            <p className="about-projects__info-item--title">5+</p>
            <p className="about-projects__info-item--description">
              опыт специалистов
            </p>
          </div>
          <div className="about-projects__info-item">
            <p className="about-projects__info-item--title">3</p>
            <p className="about-projects__info-item--description">
              года гарантия на работы
            </p>
          </div>
        </div>
        <div className="about-projects--dec">
          <Image
            src="/images/dec2-half-big.png"
            alt=""
            width={194}
            height={412}
          />
        </div>
      </div>
      <Cta />
      <Certificats />
    </div>
  );
}
