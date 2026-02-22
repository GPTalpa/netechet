"use client";

import "./style.scss";

type Props = {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  children: React.ReactNode;
};

export default function RadioCard({
  id,
  name,
  value,
  checked,
  onChange,
  children,
}: Props) {
  return (
    <div className="quiz-radio">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="quiz-radio__input"
      />

      <label htmlFor={id} className="quiz-radio__label">
        <span className="quiz-radio__check">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            className="quiz-radio__icon"
          >
            <path
              d="M0.75 5.75465L4.01904 8.75L12.75 0.75"
              stroke="#8F212D"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>

        <span className="quiz-radio__content">{children}</span>
      </label>
    </div>
  );
}
