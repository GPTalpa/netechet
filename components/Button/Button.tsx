import Link from "next/link";
import Image from "next/image";
// import { usePathname } from "next/navigation";

import "./style.scss";

interface IButton {
  text: string;
  isBlack: boolean;
  className?: string;
  isHeader?: boolean;
  isServices?: boolean;
}

export default function Button({
  text,
  isBlack,
  isHeader,
  isServices,
}: IButton) {
  return (
    <button
      className={`btn ${isBlack ? "btn--black" : ""} ${isHeader ? "btn--header" : ""} ${isServices ? "btn--services" : ""}`}
    >
      {text}
    </button>
  );
}
