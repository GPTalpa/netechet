import "./style.scss";
import { Metadata } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";
import Button from "@components/Button";
import Projects from "@components/Projects";
import Drainage from "@components/Drainage";

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

export default function DrainagePage() {
  return (
    <div className="drainage-page">
      <Drainage />
      <div className="container advantages-in-numbers">
        <div className="advantages-in-numbers__container">
          <Image
            src="/images/dec2-big.png"
            width={144}
            height={135}
            alt="Дренаж участка"
          />

          <div className="advantages-in-numbers__container__text">
            <h3>3 года</h3>
            <p>
              гарантия на работы в соответствии <br /> с ФЗ «о защите прав
              потребителей»
            </p>
          </div>
          <div className="advantages-in-numbers__container__text">
            <h3>1-2 дня</h3>
            <p>
              скорость монтажа <br /> дренажных систем
            </p>
          </div>
        </div>
      </div>

      <div className="container drainage-plot">
        <div className="drainage-plot__content">
          <div className="drainage-plot__content__left">
            <Image
              src="/images/image_32.png"
              alt="Дренаж участка"
              width={466}
              height={597}
            />
          </div>
          <div className="drainage-plot__content__right">
            <div className="drainage-plot__content__right__line drainage-plot__content__right__line--1">
              <div className="drainage-plot__content__right__line__content">
                <h2>
                  Дренаж <br />
                  участка
                </h2>
                <p>
                  это одна из самых важных и сложных инженерных задач в
                  обустройстве территории
                </p>
              </div>
            </div>
            <div className="drainage-plot__content__right__line drainage-plot__content__right__line--2">
              <div className="drainage-plot__content__right__line__content">
                <div className="drainage-plot__content__right__line--image">
                  <Image
                    src="/images/image_33.png"
                    alt="Дренаж участка"
                    width={440}
                    height={156}
                  />
                </div>
                <p>
                  Правильно сделанный дренаж{" "}
                  <span style={{ fontWeight: 700 }}>
                    защитит дом от сырости, предотвратит подтопление подвала,
                    избавит участок от луж и заболачивания.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="drainage-plot--dec">
          <Image
            src="/images/dec2-half-big.png"
            alt=""
            width={194}
            height={412}
          />
        </div>
      </div>
      <div className="container drainage-without">
        <div className="drainage-without__line drainage-without__line--1">
          <Drainage variant={2} />
          <div className="drainage-without__line--image">
            <Image
              src="/images/image_34.png"
              width={499}
              height={388}
              alt="Участок без дренажа"
            />
          </div>
        </div>
        <div className="drainage-without__line drainage-without__line--2">
          <div className="drainage-without__item drainage-without__item--without-bg ">
            <div className="drainage-without__item__content drainage-without__item__content--1">
              <p className="drainage-without__item--title">
                Подтапливается <br /> фундамент
              </p>
              <p className="drainage-without__item--description">
                Влага скапливается у дома, появляются трещины
                <br /> в фундаменте и на стенах дома, сырость в<br /> подвале,
                риск просадки здания или даже
                <br /> разрушение фундамента. 
              </p>
            </div>
          </div>
          <div className="drainage-without__item">
            <div className="drainage-without__item__content drainage-without__item__content--2">
              <p className="drainage-without__item--title">
                Разрушаются <br /> дорожки и отмостка
              </p>
              <p className="drainage-without__item--description">
                Плитка проседает, отмостка трескается,
                <br /> покрытие теряет внешний вид.
              </p>
              <div className="drainage-without__item--images">
                <Image
                  src="/images/image_35.png"
                  width={172}
                  height={81}
                  alt="Разрушенные дорожки"
                />
                <Image
                  src="/images/image_36.png"
                  width={172}
                  height={81}
                  alt="Разрушенная отмостка"
                />
              </div>
            </div>
          </div>
          <div className="drainage-without__item ">
            <div className="drainage-without__item__content drainage-without__item__content--3">
              <p className="drainage-without__item--title">
                Сырость и<br /> плесень в доме
              </p>
              <p className="drainage-without__item--description">
                Повышенная влажность приводит к появлению
                <br /> плесени, грибка и неприятного запаха.
              </p>
            </div>
          </div>
        </div>
        <div className="drainage-without__line drainage-without__line--3">
          <div className="drainage-without__item ">
            <div className="drainage-without__item__content drainage-without__item__content--4">
              <p className="drainage-without__item--title">
                Плохо растут
                <br /> растения и газон
              </p>
              <p className="drainage-without__item--description">
                Корни гниют от избытка воды, газон
                <br /> желтеет, растения погибают.
              </p>
              <div className="drainage-without__item--images">
                <Image
                  src="/images/image_37.png"
                  width={172}
                  height={81}
                  alt="Потоп"
                />
                <Image
                  src="/images/image_38.png"
                  width={172}
                  height={81}
                  alt="Потоп"
                />
              </div>
            </div>
          </div>
          <div className="drainage-without__item  ">
            <div className="drainage-without__item__content drainage-without__item__content--5">
              <p className="drainage-without__item--title">Проблемы зимой</p>
              <p className="drainage-without__item--description">
                Вода в грунте замерзает, вызывая
                <br /> перекос фундамента, заборов и дорожек.
              </p>
            </div>
          </div>
          <div className="drainage-without__item drainage-without__item--without-bg ">
            <div className="drainage-without__item__content drainage-without__item__content--6">
              <p className="drainage-without__item--title">
                Постоянные траты
                <br /> на ремонт
              </p>
              <p className="drainage-without__item--description">
                Без дренажа проблемы накапливаются и<br /> со временем обходятся
                дороже.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container drainage-deal full-bleed">
        <div className="drainage-deal--dec">
          <Image
            src="/images/dec2-half-big-right.png"
            alt=""
            width={263}
            height={463}
          />
        </div>
        <div className="drainage-deal__content">
          <h3>
            мы решаем <br /> <div>эти проблемы!</div>
          </h3>
          <p>
            Выполняем монтаж дренажных систем под ключ — от обследования участка
            до полного отвода лишней воды. Подбираем решение с учетом рельефа,
            типа грунта и уровня грунтовых вод, чтобы эффективно защитить
            фундамент, дорожки и благоустройство.{" "}
            <span style={{ fontWeight: 700 }}>
              После установки дренажа участок остаётся сухим, растения хорошо
              приживаются, а дом надежно защищен от сырости и разрушений.
            </span>
          </p>
        </div>
      </div>
      <Cta />
      <Projects />
    </div>
  );
}
