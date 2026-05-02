export const dynamic = "force-static";

import "./style.scss";
import { Metadata } from "next";
import Image from "next/image";
import Button from "@components/Button";
import { homePageMeta } from "./head";
import { stocks } from "@/data/stocks";
import { StocksJsonLd } from "./StocksJsonLd";

export const metadata: Metadata = {
  title: homePageMeta.title,
  description: homePageMeta.description,
  keywords: homePageMeta.keywords,
  icons: homePageMeta.icons,
  alternates: {
    canonical: "https://нетечет.рф/stocks/",
    languages: {
      ru: "https://нетечет.рф/stocks/",
    },
  },
  openGraph: {
    title: homePageMeta.title,
    description: homePageMeta.description,
    type: "website",
    url: "https://нетечет.рф/stocks/",
    locale: "ru",
    siteName: "Нетечет",
    images: [
      {
        url: "https://нетечет.рф/images/stocks-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Акции и спецпредложения Нетечет",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homePageMeta.title,
    description: homePageMeta.description,
    images: ["https://нетечет.рф/images/stocks-og-image.jpg"],
  },
};

export default function StocksPage() {
  <StocksJsonLd/>;
  return (
    <div className="container stocks-page">
      <h1>Акции</h1>
      <div className="stocks-page__container">
        {stocks.map((stock, index) => {
          return (
            <div className="stocks-page__item" key={index}>
              <picture>
                <source
                  srcSet={`/images/${stock.image}-sm.webp`}
                  media="(max-width: 768px)"
                  width={335}
                  height={419}
                />
                <Image
                  src={`/images/${stock.image}.webp`}
                  height={420}
                  width={680}
                  fetchPriority="high"
                  alt="Description"
                  priority={true}
                />
              </picture>
              <div className="stocks-page__item__block">
                <div className="stocks-page__item__text">
                  <h3>
                    <span style={{ color: "#E1D0A8" }}>Акция:</span>{" "}
                    {stock.title}
                    <br /> {stock.titleNextStr}
                  </h3>
                  <p>Условия акции: {stock.conditions}</p>
                  <p>Срок действия акции: {stock.duration}</p>
                </div>
                <Button
                  text="Воспользоваться акцией"
                  isBlack={false}
                  stock={stock.type}
                />
              </div>
            </div>
          );
        })}

        {/* <div className="stocks-page__item">
          <picture>
            <source
              srcSet="/images/image-stocks-1-sm.webp"
              media="(max-width: 768px)"
              width={335}
              height={419}
            />
            <Image
              src="/images/image-stocks-1.webp"
              height={420}
              width={680}
              fetchPriority="high"
              alt="15% скидка для участников ВОВ и СВО"
              priority={true}
            />
          </picture>
          <div className="stocks-page__item__block">
            <div className="stocks-page__item__text">
              <h3>
                <span style={{ color: "#E1D0A8" }}>Акция:</span> 15% скидка
                <br /> для участников ВОВ и СВО
              </h3>
              <p>Условия акции</p>
              <p>Срок действия акции: </p>
            </div>
            <Button text="Воспользоваться акцией" isBlack={false} />
          </div>
        </div>
        <div className="stocks-page__item">
          <picture>
            <source
              srcSet="/images/image-stocks-sm.webp"
              media="(max-width: 768px)"
              width={335}
              height={419}
            />
            <Image
              src="/images/image-stocks.webp"
              height={420}
              width={680}
              fetchPriority="high"
              alt="Description"
              priority={true}
            />
          </picture>
          <div className="stocks-page__item__block">
            <div className="stocks-page__item__text">
              <h3>
                <span style={{ color: "#E1D0A8" }}>Акция:</span> 15% скидка
                <br /> для участников ВОВ и СВО
              </h3>
              <p>Условия акции</p>
              <p>Срок действия акции: </p>
            </div>
            <Button text="Воспользоваться акцией" isBlack={false} />
          </div>
        </div> */}
      </div>
    </div>
  );
}
