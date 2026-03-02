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
  return (
    <div className="contacts">
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
                href="https://t.me/sergeyanikeev97/"
                target="_blank"
                className="contacts__telegram"
              >
                <Image src="/icons/tg-red.svg" alt="" width={46} height={46} />
                <p>Мы в телеграм!</p>
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
