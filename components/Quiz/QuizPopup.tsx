import { useEffect } from "react";
import { createPortal } from "react-dom";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

import Quiz from "./Quiz";
import "./style.scss";
export default function QuizPopup({ isOpen, onClose }: Props) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="popup__quiz">
          <div className="popup__wrapper">
            <h3 className="popup__header">
              <span style={{ color: "rgba(143, 33, 45, 1)" }}>
                Рассчитаем стоимость
              </span>
              <br /> и свяжемся с вами
            </h3>
            <Quiz type="modal" />
            <button className="modal-close" onClick={onClose}>
              ×
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}
