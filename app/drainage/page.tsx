import "./style.scss";
import { Metadata } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";
import Button from "@components/Button";
import Projects from "@components/Projects";
import Drainage from "@components/Drainage";
import Certificats from "@components/Certificats";
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
              приживаются,
              <br /> а дом надежно защищен от сырости и разрушений.
            </span>
          </p>
        </div>
      </div>
      <div className="container drainage-materials">
        <div className="drainage-materials__first-line">
          <div className="drainage-materials__first-line__left">
            <h2>Наши материалы</h2>
            <div className="drainage-materials__first-line__left--description">
              <p>
                Использование первичного полиэтилена низкого давления
                гарантирует, что ваша дренажная система прослужит десятилетия
                без замены, защищая ваш участок и фундамент от воды навсегда.
              </p>
            </div>
          </div>
          <div className="drainage-materials__first-line__right">
            <div className="drainage-materials__first-line__right--image">
              <Image
                src="/images/image_39.png"
                width={260}
                height={350}
                alt=""
              />
            </div>
            <div className="drainage-materials__first-line__right--image">
              <Image
                src="/images/image_40.png"
                width={260}
                height={350}
                alt=""
              />
            </div>
            <div className="drainage-materials__first-line__right--image">
              <Image
                src="/images/image_41.png"
                width={260}
                height={350}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="drainage-materials__second-line">
          <div className="drainage-materials__item-wrapper">
            <div className="drainage-materials__item drainage-materials__item--accent">
              <div>
                <p className="drainage-materials__item--title">
                  Долговечность и Прочность
                </p>
                <p className="drainage-materials__item--description">
                  Трубы обладают высокой кольцевой жёсткостью, устойчивы к
                  нагрузкам, коррозии, агрессивным средам и морозам, обеспечивая
                  срок службы 50 лет и более.
                </p>
              </div>
              <Image
                src="/images/shield-half.png"
                alt=""
                width={89}
                height={121}
              />
            </div>
          </div>
          <div className="drainage-materials__item-wrapper drainage-materials__item-wrapper--with-dec">
            <div className="drainage-materials__item">
              <p className="drainage-materials__item--title">
                Экологичность и Безопасность
              </p>
              <p className="drainage-materials__item--description">
                Материалы экологически безопасны, не выделяют вредных веществ и
                подлежат вторичной переработке.
              </p>
            </div>
            <Image
              src="/images/dec2-half-big-bottom.png"
              alt=""
              width={429}
              height={121}
            />
          </div>
          <div className="drainage-materials__item-wrapper">
            <div className="drainage-materials__item drainage-materials__item--bg-dec">
              <p className="drainage-materials__item--title">
                Эффективность и Функциональность
              </p>
              <p className="drainage-materials__item--description">
                Оптимальная перфорация, фильтрующие оболочки из геотекстиля и
                гладкая внутренняя поверхность обеспечивают эффективный сбор
                воды, высокую пропускную способность и защиту от заиливания.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Cta />
      <Projects />
      <div className="container drainage-why-us">
        <div className="drainage-why-us__header">
          <h2>
            Почему нас{" "}
            <div style={{ color: "rgba(225, 208, 168, 1)" }}>выбирают</div>
          </h2>
          <div className="drainage-why-us__header__description">
            <p className="big">10</p>
            <p>
              штатных бригад{" "}
              <span
                style={{ color: "rgba(225, 208, 168, 1)", fontWeight: 700 }}
              >
                с опытом
                <br /> более 5-ти лет.
              </span>
            </p>
          </div>
        </div>
        <Image
          src="/images/image_20.png"
          className="drainage-why-us--dec-image"
          alt="Избушка"
          width={1536}
          height={1348}
        />
        <div className="drainage-why-us__content">
          <div className="drainage-why-us__column drainage-why-us__column--1">
            <div className="drainage-why-us__block drainage-why-us__block--1">
              <h3 className="drainage-why-us__block--title">
                Работы полностью “Под ключ”
              </h3>
              <p className="drainage-why-us__block--description">
                выполняем весь комплекс работ: обследование участка,
                проектирование, монтаж и проверку работы системы.
              </p>
            </div>
            <div className="drainage-why-us__block drainage-why-us__block--2">
              <h3 className="drainage-why-us__block--title">
                Быстрый выезд на объект
              </h3>
              <p className="drainage-why-us__block--description">
                на следующий день или в удобное для вас время.
              </p>
            </div>
          </div>
          <div className="drainage-why-us__column drainage-why-us__column--2">
            <div className="drainage-why-us__block drainage-why-us__block--3">
              <h3 className="drainage-why-us__block--title">
                Индивидуальные
                <br /> решения
              </h3>
              <p className="drainage-why-us__block--description">
                подбор дренажной системы с учетом типа грунта, уровня грунтовых
                вод и рельефа
              </p>
              <div className="drainage-without__item--images">
                <Image
                  src="/images/image_42.png"
                  width={166}
                  height={119}
                  alt=""
                />
                <Image
                  src="/images/image_43.png"
                  width={166}
                  height={119}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="drainage-why-us__column drainage-why-us__column--3">
            <div className="drainage-why-us__block drainage-why-us__block--4">
              <h3 className="drainage-why-us__block--title">
                Работаем строго по договору
              </h3>
              <p className="drainage-why-us__block--description">
                на следующий день или в удобное для вас время.
              </p>
            </div>
            <div className="drainage-why-us__block drainage-why-us__block--5">
              <h3 className="drainage-why-us__block--title">
                Фиксированная и прозрачная смета
              </h3>
              <p className="drainage-why-us__block--description">
                у вас не будет сюрпризов в момент приезда бригады
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container drainage-how-we-work">
        <h2>
          Как мы
          <br /> работаем
        </h2>
        <div className="drainage-how-we-work__content">
          <div className="drainage-how-we-work__block--accent">
            <div className="drainage-how-we-work__block--accent__content">
              <div className="drainage-how-we-work__block--accent__content__header">
                <p className="drainage-how-we-work__block--accent--title">
                  Заявка
                </p>
                <p className="drainage-how-we-work__block--accent--description">
                  Принимаем заявку и передаём<br></br> её менеджеру
                </p>
              </div>
              <Button text="Оставить заявку" isBlack={false} />
            </div>
          </div>
          <div className="drainage-how-we-work__wrapper-blocks">
            <div className="drainage-how-we-work__column">
              <div className="drainage-how-we-work__block">
                <p className="drainage-how-we-work__block--number">2</p>
                <div className="drainage-how-we-work__block__header">
                  <p className="drainage-how-we-work__block--title">
                    Консультация
                  </p>
                  <p className="drainage-how-we-work__block--description">
                    Менеджер связывается с вами для уточнения деталей
                  </p>
                </div>
              </div>
              <div className="drainage-how-we-work__block">
                <p className="drainage-how-we-work__block--number">3</p>
                <div className="drainage-how-we-work__block__header">
                  <p className="drainage-how-we-work__block--title">
                    Выезд инженера
                  </p>
                  <p className="drainage-how-we-work__block--description">
                    Назначаем дату и время выезда инженера на участок
                  </p>
                </div>
              </div>
              <div className="drainage-how-we-work__block">
                <p className="drainage-how-we-work__block--number">4</p>
                <div className="drainage-how-we-work__block__header">
                  <p className="drainage-how-we-work__block--title">Смета</p>
                  <p className="drainage-how-we-work__block--description">
                    Согласовываем смету и стоимость работ
                  </p>
                </div>
              </div>
            </div>
            <div className="drainage-how-we-work__column">
              <div className="drainage-how-we-work__block">
                <p className="drainage-how-we-work__block--number">5</p>
                <div className="drainage-how-we-work__block__header">
                  <p className="drainage-how-we-work__block--title">Договор</p>
                  <p className="drainage-how-we-work__block--description">
                    Заключаем договор
                  </p>
                </div>
              </div>
              <div className="drainage-how-we-work__block">
                <p className="drainage-how-we-work__block--number">6</p>
                <div className="drainage-how-we-work__block__header">
                  <p className="drainage-how-we-work__block--title">
                    Выполнение работ
                  </p>
                  <p className="drainage-how-we-work__block--description">
                    Выполняем работы в согласованные сроки
                  </p>
                </div>
              </div>
              <div
                className="drainage-how-we-work__block"
                style={{ color: "rgba(225, 208, 168, 1)" }}
              >
                <p className="drainage-how-we-work__block--number">7</p>
                <div className="drainage-how-we-work__block__header">
                  <p className="drainage-how-we-work__block--title">Приёмка</p>
                  <p className="drainage-how-we-work__block--description">
                    Сдаём объект и подписываем акт выполненных работ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container drainage-reviews">
        <div className="drainage-reviews__text">
          <h2>
            О нас говорят <br></br>клиенты
          </h2>
          <div className="drainage-reviews__text--description">
            <div className="video"></div>
          </div>
        </div>
        <div className="drainage-reviews--dec">
          <Image
            src="/images/dec2-half-big-right-2.png"
            alt=""
            width={262}
            height={482}
          />
        </div>
      </div>
      <Certificats />
      <div className="container drainage-faq">
        <div className="drainage-faq__header">
          <div className="drainage-faq__header__text">
            <h2>Часто задаваемые вопросы</h2>
            <p>Остались вопросы? Задайте их нам!</p>
          </div>
          <Button text="Задать свой вопрос" isBlack={false} />
        </div>
        <div className="drainage-faq__content">
          <div className="faq_right">
            <details className="faq__item" id="faq-q1">
              <summary className="faq__summary">
                <span className="faq__item--question">
                  Какой срок службы дренажной системы?
                </span>
                <span className="faq__chev" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M3.39998 12.542L8.83331 7.10866C9.47498 6.46699 10.525 6.46699 11.1666 7.10866L16.6 12.542"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </summary>
              <div className="faq__content">
                <p>
                  При правильном проектировании и монтаже дренаж служит 20–30
                  лет и более.
                </p>
              </div>
            </details>
            <details className="faq__item" id="faq-q2">
              <summary className="faq__summary">
                <span className="faq__item--question">
                  Какой срок службы дренажной системы?
                </span>
                <span className="faq__chev" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M3.39998 12.542L8.83331 7.10866C9.47498 6.46699 10.525 6.46699 11.1666 7.10866L16.6 12.542"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </summary>
              <div className="faq__content">
                <p>
                  При правильном проектировании и монтаже дренаж служит 20–30
                  лет и более.
                </p>
              </div>
            </details>
            <details className="faq__item" id="faq-q3">
              <summary className="faq__summary">
                <span className="faq__item--question">
                  Какой срок службы дренажной системы?
                </span>
                <span className="faq__chev" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M3.39998 12.542L8.83331 7.10866C9.47498 6.46699 10.525 6.46699 11.1666 7.10866L16.6 12.542"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </summary>
              <div className="faq__content">
                <p>
                  При правильном проектировании и монтаже дренаж служит 20–30
                  лет и более.
                </p>
              </div>
            </details>
            <details className="faq__item" id="faq-q4">
              <summary className="faq__summary">
                <span className="faq__item--question">
                  Какой срок службы дренажной системы?
                </span>
                <span className="faq__chev" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M3.39998 12.542L8.83331 7.10866C9.47498 6.46699 10.525 6.46699 11.1666 7.10866L16.6 12.542"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </summary>
              <div className="faq__content">
                <p>
                  При правильном проектировании и монтаже дренаж служит 20–30
                  лет и более.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
