import "./style.scss";

interface IButton {
  text: string;
  isBlack: boolean;
  className?: string;
  isHeader?: boolean;
  isServices?: boolean;
  isQuiz?: boolean;
  data?: string;
}

export default function Button({
  text,
  isBlack,
  isHeader,
  isServices,
  data = "quiz",
}: IButton) {
  return (
    <button
      className={`btn ${isBlack ? "btn--black" : ""} ${isHeader ? "btn--header" : ""} ${isServices ? "btn--services" : ""}`}
      data-popup={data}
    >
      {text}
    </button>
  );
}
