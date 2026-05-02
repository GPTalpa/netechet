"use client";

import "./style.scss";
import Image from "next/image";
import { useState } from "react";
import PhoneField from "../PhoneInput/PhoneInput";
import { getTrackingParams } from "@/utils/utm";

export default function FreeGoBlock() {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [consent, setConsent] = useState(false);

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
        },
        tracking: trackingData,
      }),
    });

    window.location.href = "/thank-you/";
  };
  return (
    <>
      <div className="container freego-block--wrapper">
        <div className=" freego-block">
          <div className="freego-block__image">
            <picture>
              <source
                srcSet={`/images/freegoblock-mobile.webp`}
                media="(max-width: 768px)"
                width={336}
                height={399}
              />
              <Image
                src={`/images/freegoblock.webp`}
                height={595}
                width={641}
                alt="Бесплатный выезд"
              />
            </picture>
          </div>
          <div className="freego-block__content">
            <h2>
              <div style={{ color: "#8F212D" }}>Бесплатный выезд</div> инженера
              на участок
            </h2>
            <p>
              Заполните поля ниже, чтобы мы могли связаться с<br /> Вами и
              оформить бесплатный выезд
            </p>
            <form onSubmit={handleSubmit}>
              <PhoneField value={phone} onChange={setPhone} />
              <input
                className="quizName"
                type="text"
                placeholder="Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />{" "}
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
              <button className="btn" type="submit">
                {"Оставить заявку"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
