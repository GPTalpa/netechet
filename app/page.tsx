import "./home.scss";
import { Metadata } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";
import Button from "@/components/Button/Button";
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
      <div className="container projects"></div>
    </main>
  );
}
