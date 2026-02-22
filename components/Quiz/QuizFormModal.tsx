"use client";

import PhoneField from "../PhoneInput/PhoneInput";
import "./style.scss";
import { useState } from "react";

type QuizData = {
  foundation?: string;
  lvlWater?: string;
  service?: string;
  term?: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  quizAnswers?: QuizData;
  textBtn?: string;
  textPlaceholder?: string;
};

export default function QuizFormModal({
  isOpen,
  onClose,
  quizAnswers,
  textBtn,
  textPlaceholder,
}: Props) {
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [customValue, setCustomValue] = useState("");
  const [consent, setConsent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await fetch("/api/quiz", {
      method: "POST",
      body: JSON.stringify({
        quiz: quizAnswers,
        contact: { name, phone, customValue },
      }),
    });

    onClose();
    alert("Заявка отправлена!");
  };

  return (
    <div className="quiz-modal">
      <div className="quiz-modal__content">
        <h3>Свяжемся с Вами в течении 24 часов</h3>

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
            placeholder={
              textPlaceholder ? textPlaceholder : "Свой ответ (напишите)"
            }
            value={customValue}
            className="quiz-radio__label quizName"
            onChange={(e) => {
              setCustomValue(e.target.value);
            }}
            required
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
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
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
                <a href="#" target="_blank">
                  Политикой конфиденциальности
                </a>{" "}
                и даю{" "}
                <a href="#" target="_blank">
                  Согласие на обработку персональных данных
                </a>{" "}
              </span>
            </label>
          </div>
          <button className="btn btn-modal" type="submit">
            {textBtn ? textBtn : "Отправить вопрос"}
          </button>
        </form>
      </div>
    </div>
  );
}
