"use client";

import { useEffect, useState } from "react";
import QuizPopup from "../Quiz/QuizPopup";
import QuizFormModal from "../Quiz/QuizFormModal";

export default function PopupLayer() {
  const [type, setType] = useState<"quiz" | "faq" | "popup" | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Ищем ближайший элемент с data-popup
      const popupTrigger = target.closest<HTMLElement>("[data-popup]");

      if (popupTrigger) {
        const popupType = popupTrigger.dataset.popup as
          | "quiz"
          | "faq"
          | "popup"
          | undefined;

        if (popupType) {
          setType(popupType);
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const close = () => setType(null);

  return (
    <>
      {type === "quiz" && <QuizPopup isOpen={true} onClose={close} />}

      {type === "faq" && (
        <div className="form__modal">
          <div className="popup__wrapper">
            <h3 className="popup__header">
              <span style={{ color: "rgba(143, 33, 45, 1)" }}>
                Задайте вопрос
              </span>{" "}
              и мы
              <br /> с вами свяжемся
            </h3>
            <QuizFormModal
              isOpen={true}
              onClose={close}
              textBtn="Отправить вопрос"
              textPlaceholder="Ваш вопрос"
            />
            <button className="modal-close" onClick={close}>
              ×
            </button>
          </div>
        </div>
      )}

      {type === "popup" && (
        <div className="form__modal">
          <div className="popup__wrapper">
            <h3 className="popup__header">
              Оставьте Ваши данные
              <br />и{" "}
              <span style={{ color: "rgba(143, 33, 45, 1)" }}>
                мы свяжемся с вами
              </span>
            </h3>
            <QuizFormModal
              isOpen={true}
              onClose={close}
              textBtn="Перезвоните мне"
              textPlaceholder="Ваш вопрос"
            />
            <button className="modal-close" onClick={close}>
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
