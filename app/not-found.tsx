// import ButtonAnimated from "@/components/ButtonAnimated/ButtonAnimated";
import Image from "next/image";

import "./globals.scss";

export default function NotFound() {
  return (
    <main
      style={{ textAlign: "center", padding: "4rem 1rem" }}
      className="notFound"
    >
      <Image
        src="/images/notFound.svg"
        alt="notFound"
        fill
        quality={65}
        sizes="(max-width: 580px) 72px, 142px"
      />
      <h1>404</h1>
      <p>not found</p>
      {/* <ButtonAnimated text="HOME PAGE" href="/" /> */}
    </main>
  );
}
