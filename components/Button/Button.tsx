import "./style.scss";

interface IButton {
  text: string;
  isBlack: boolean;
  className?: string;
  isHeader?: boolean;
  isServices?: boolean;
  isQuiz?: boolean;
  data?: string;
  onClick?: () => void;
}

export default function Button({
  text,
  isBlack,
  isHeader,
  isServices,
  data = "quiz",
  onClick,
}: IButton) {
  return (
    <button
      className={`btn ${isBlack ? "btn--black" : ""} ${isHeader ? "btn--header" : ""} ${isServices ? "btn--services" : ""}`}
      data-popup={data}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
