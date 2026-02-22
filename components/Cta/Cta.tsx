import Link from "next/link";
import Image from "next/image";
import Button from "@components/Button";
import "./style.scss";

export default function Cta() {
  return (
    <div className="container about-cta__wrapper">
      <div className="container about-cta">
        <div className="about-cta__text">
          <div className="about-cta__header">
            <h2>Защитите свой участок сейчас!</h2>
          </div>

          <p>
            Наш менеджер свяжется с Вами для уточнения
            <br /> даты и времени выезда инженера на участок!
          </p>
          <Button text="Получить расчет стоимости" isBlack={false}/>
        </div>
      </div>
    </div>
  );
}
