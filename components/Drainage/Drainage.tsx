import Link from "next/link";
import Image from "next/image";
import Button from "@components/Button";
import "./style.scss";

interface IDrainage {
  variant?: number;
}

export default function Drainage({ variant = 1 }) {
  if (variant === 2) {
    return (
      <div className="container drainage__wrapper drainage__wrapper--2">
        <div className="container drainage drainage--2">
          <div className="drainage__text">
            <div className="drainage__header">
              {" "}
              <p>
                Что происходит с участком <br />
              </p>
              <h3>без дренажа</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 1) {
    return (
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
    );
  }
}
