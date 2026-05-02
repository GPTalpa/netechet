import "./style.scss";

interface IButton {
  text: string;
  isBlack: boolean;
  className?: string;
  isHeader?: boolean;
  isServices?: boolean;
  isQuiz?: boolean;
  data?: string;
  stock?: string;
  onClick?: () => void;
}

export default function Button({
  text,
  isBlack,
  isHeader,
  isServices,
  data = "quiz",
  stock,
  onClick,
}: IButton) {
  return (
    <button
      className={`btn ${isBlack ? "btn--black" : ""} ${isHeader ? "btn--header" : ""} ${isServices ? "btn--services" : ""}`}
      data-popup={data}
      data-stock={stock}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
