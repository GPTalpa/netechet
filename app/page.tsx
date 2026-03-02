export const dynamic = "force-static";

import "./home.scss";
import { Metadata } from "next";
import Image from "next/image";
import Button from "@components/Button";
import Projects from "@components/Projects";
import Drainage from "@components/Drainage";
import { homePageMeta } from "./head";

export const metadata: Metadata = {
  title: homePageMeta.title,
  description: homePageMeta.description,
  keywords: homePageMeta.keywords,
  alternates: {
    canonical: "https://нетечет.рф/",
    languages: {
      ru: "https://нетечет.рф/",
      "x-default": "нетечет.рф/",
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

export default function HomePage() {
  return (
    <div className="home">
      <Drainage />
      <Projects />
      <div className="container services">
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
                <Button text={"Подробнее"} isBlack={true} isServices={true} />
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
      </div>
    </div>
  );
}
