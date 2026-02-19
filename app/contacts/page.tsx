import "./style.scss";
import { Metadata } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";
import Button from "@components/Button";
import Projects from "@components/Projects";

import Cta from "@components/Cta";
import Link from "next/link";
// import { homePageMeta } from "./head";

// const Button = dynamic(() => import("@/components/Button/Button"), {
//   loading: () => (
//     <div
//       className="button-skeleton"
//       style={{
//         height: "48px",
//         width: "120px",
//         background: "#1a1a1a",
//         borderRadius: "24px",
//       }}
//     />
//   ),
// });

// export const metadata: Metadata = {
//   title: homePageMeta.title,
//   description: homePageMeta.description,
//   keywords: homePageMeta.keywords,
//   alternates: {
//     canonical: "https://maximbet.com/",
//     languages: {
//       en: "https://maximbet.com/",
//       "x-default": "https://maximbet.com/",
//     },
//   },
//   openGraph: {
//     title: "Latest iGaming, Casino & Betting News | MaximBet",
//     description:
//       "MaximBet covers gaming, casino and betting industry news, publishing features, guides and explainers focused on market activity and regulatory developments.",
//     type: "website",
//     url: "https://maximbet.com/",
//     locale: "en",
//     siteName: "MaximBet",
//     images: [
//       {
//         url: "https://maximbet.com/images/ogBanner.webp",
//         width: 1200,
//         height: 630,
//         alt: "MaximBet logo on a dark background",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Latest iGaming, Casino & Betting News | MaximBet",
//     description:
//       "MaximBet covers gaming, casino and betting industry news, publishing features, guides and explainers focused on market activity and regulatory developments.",
//     images: ["https://maximbet.com/images/ogBanner.webp"],
//   },
// };

export default function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts__content">
        <Image
          src="/images/image_20.png"
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
              <p>ИП Фамилия И.О.</p>
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
              <p style={{ fontWeight: 700 }}>ИНН</p>
              <p style={{ fontWeight: 700 }}>ОГРН</p>
              <Link href="#" className="contacts__telegram">
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
