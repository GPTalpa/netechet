import Button from "@/components/Button";
import Image from "next/image";

import "./style.scss";
import Link from "next/link";

export default function StocksPage() {
  return (
    <div className="thank-you">
      <picture>
        <source
          srcSet={`/icons/logo.svg`}
          media="(max-width: 768px)"
          width={62}
          height={62}
        />
        <Image
          src={`/icons/logo-big.svg`}
          height={100}
          width={100}
          fetchPriority="high"
          alt="Логотип"
          priority={true}
        />
      </picture>
      <h1>Спасибо</h1>
      <h2>Ваша заявка принята!</h2>
      <p>Свяжемся с Вами в течении 5 минут</p>
      <Link href="/" className="btn">
        Вернуться на главную
      </Link>

      <div className="thank-you__dec thank-you__dec--2">
        <picture>
          <source
            srcSet={`/images/thank-dec-left-sm.webp`}
            media="(max-width: 768px)"
          />
          <img
            src={`/images/thank-dec-left-lg.webp`}
            fetchPriority="high"
            alt=""
          />
        </picture>
      </div>
      <div className="thank-you__dec thank-you__dec--1">
        <picture>
          <source
            srcSet={`/images/thank-dec-right-sm.webp`}
            media="(max-width: 768px)"
          />
          <img
            src={`/images/thank-dec-right-lg.webp`}
            fetchPriority="high"
            alt=""
          />
        </picture>
      </div>
    </div>
  );
}
