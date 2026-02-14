import Link from "next/link";
import Image from "next/image";
// import { usePathname } from "next/navigation";

import "./style.scss";

interface IButton {
  text: string;
  isBlack: boolean;
  className?: string;
  isHeader?: boolean;
}

export default function Button({ text, isBlack, isHeader }: IButton) {
  return (
    <button
      className={`btn ${isBlack ? "btn--black" : ""} ${isHeader ? "btn--header" : ""}`}
    >
      {text}
    </button>
  );
}
