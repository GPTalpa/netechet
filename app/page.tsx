import "./home.scss";
import { Metadata } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";
import Button from "@components/Button";
import Projects from "@components/Projects";
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

export default function HomePage() {
  return (
    <main className="home">
      <div className="container drainage__wrapper">
        <div className="container drainage">
          <div className="drainage__text">
            <div className="drainage__header">
              {" "}
              <h1>Монтаж дренажных систем на участке</h1>
              <h2>
                за 2-3 дня в Москве и МО <br /> под ключ
              </h2>
            </div>

            <p>
              Оставь заявку и{" "}
              <span style={{ fontWeight: 700 }}>получи скидку 10%</span> до
              конца <br /> месяца на монтаж
            </p>
            <Button text="Получить расчет стоимости" isBlack={false} />
          </div>
        </div>
      </div>
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
    </main>
  );
}
