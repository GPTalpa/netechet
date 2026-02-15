import "./style.scss";
import { Metadata } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";
import Button from "@components/Button";
import Projects from "@components/Projects";
import Cta from "@components/Cta";
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

export default function About() {
  return (
    <div className="about">
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
          <div className="about-company__right__text">
            <p>
              <span style={{ fontWeight: 700 }}>
                История компании «Не течет»
              </span>{" "}
              начинается с суммы опыта нашей команды.
            </p>
            <p>
              Мы — сплоченный коллектив инженеров, проектировщиков и
              монтажников,
              <span style={{ fontWeight: 700 }}>
                каждый из которого прошел путь в 5, 10, а то и 15 лет в
                строительстве подземных систем.
              </span>
            </p>
            <p>
              Почему мы решили объединиться под новым именем? Мы увидели запрос
              рынка не просто на «установку труб», а на комплексные, продуманные
              решения, где нет места шаблонному подходу. Где каждый проект
              начинается с глубокого анализа, а не с готового шаблона. Где
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
          <p className="about-info__item--title">Наш фундамент — это люди.</p>
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
            и пусконаладку систем ливневой канализации. Они чувствуют материал и
            технологию.
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
          <Image src="/images/dec2-big.png" alt="" width={194} height={412} />
        </div>
      </div>
      <Cta />
      <div className="container cert">
        <h2>сертификаты</h2>
        <div className="cert__content">
          <div className="cert__item">
            <Image
              src="/images/cert1.png"
              alt="Сертификат"
              width={394}
              height={557}
            />
          </div>
          <div className="cert__item">
            <Image
              src="/images/cert2.png"
              alt="Сертификат"
              width={394}
              height={557}
            />
          </div>
          <div className="cert__item">
            <Image
              src="/images/cert3.png"
              alt="Сертификат"
              width={394}
              height={557}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
