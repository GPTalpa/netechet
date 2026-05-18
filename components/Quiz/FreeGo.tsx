"use client";

import { getTrackingParams } from "@/utils/utm";
import PhoneField from "../PhoneInput/PhoneInput";
import "./style.scss";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function FreeGo() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [consent, setConsent] = useState(false);
  const [customValue, setCustomValue] = useState("");
  const [showOffer, setShowOffer] = useState(false);

  useEffect(() => {
    // Устанавливаем таймер на 30 секунд
    const timer = setTimeout(() => {
      setShowOffer(true);
    }, 30000); // 30 000 мс

    // Очищаем таймер при размонтировании компонента
    return () => clearTimeout(timer);
  }, []);

  if (!showOffer) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trackingData = getTrackingParams();
    await fetch("/send.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contact: {
          name,
          phone,
          customValue,
        },
        tracking: trackingData,
      }),
    });

    setShowOffer(false);
    window.location.href = "/thank-you/";
  };

  return (
    <div className="form__modal free-go">
      <div className="popup__wrapper">
        <div className="free-go__image">
          <picture>
            <source
              srcSet={`/images/freego-mobile.webp`}
              media="(max-width: 768px)"
              width={357}
              height={495}
            />
            <Image
              src={`/images/freego.webp`}
              height={734}
              width={572}
              alt="Бесплатный выезд"
            />
          </picture>
        </div>
        <div className="quiz-modal">
          <div className="quiz-modal__content">
            <h3 className="popup__header">
              Бесплатный выезд
              <br /> инженера на участок
            </h3>
            <p>
              Заполните поля ниже, чтобы мы могли связаться
              <br /> с Вами и <strong>оформить бесплатный выезд</strong>
            </p>

            <form onSubmit={handleSubmit}>
              <PhoneField value={phone} onChange={setPhone} />
              <input
                className="quizName"
                type="text"
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />{" "}
              <input
                type="text"
                placeholder={"Свой ответ (напишите)"}
                value={customValue}
                className="quiz-radio__label quizName"
                onChange={(e) => {
                  setCustomValue(e.target.value);
                }}
              />
              <div className="consent">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="consent__input"
                  id="consentCheckbox"
                  required
                />

                <label htmlFor="consentCheckbox" className="consent__label">
                  <span className="consent__box">
                    {consent && (
                      <svg
                        width="14"
                        height="10"
                        viewBox="0 0 14 10"
                        fill="none"
                      >
                        <path
                          d="M1 5L5 9L13 1"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>

                  <span className="consent__text">
                    Согласен с{" "}
                    <a href="/privacy-policy.pdf" target="_blank">
                      Политикой конфиденциальности
                    </a>{" "}
                    и даю{" "}
                    <a href="/personal-consent.pdf" target="_blank">
                      Согласие на обработку персональных данных
                    </a>{" "}
                  </span>
                </label>
              </div>
              <button className="btn btn-modal btn--black" type="submit">
                {"Оставить заявку"}
              </button>
            </form>
          </div>
        </div>
        <button className="modal-close" onClick={() => setShowOffer(false)}>
          ×
        </button>
      </div>
    </div>
  );
}
