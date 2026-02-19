"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import "./style.scss";
import Button from "@components/Button";

export default function Header() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className="header">
      <div className="header__left">
        <Link href="/">
          <Image
            src="/icons/logo.svg"
            width={71}
            height={71}
            alt="Логотип"
            fetchPriority="high"
            loading="eager"
          ></Image>
        </Link>
        <nav className="header__navigation">
          <ul>
            <li>
              <Link href="/" className={pathname === "/" ? "active" : ""}>
                Главная
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={pathname === "/about" ? "active" : ""}
              >
                О компании
              </Link>
            </li>
            <li>
              <Link
                href="/drainage"
                style={{ color: "rgba(225, 208, 168, 1)" }}
                className={pathname === "/drainage" ? "active" : ""}
              >
                Дренажная система
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className={pathname === "/contacts" ? "active" : ""}
              >
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__right">
        <address>
          <a href="tel:+79252852955">
            <Image
              src="/icons/call-icon.svg"
              width={24}
              height={24}
              alt="Телефонная трубка"
              fetchPriority="high"
              loading="eager"
            ></Image>{" "}
            +7 (925) 285 - 29 - 55
          </a>
          <p>
            с <time dateTime="10:00+03:00">10:00</time> до{" "}
            <time dateTime="19:00+03:00">19:00</time> МСК
          </p>
        </address>
        <div className="header__callback">
          <Link href="#">
            <Image
              src="/icons/tg.svg"
              width={46}
              height={46}
              alt="Telegram"
              fetchPriority="high"
              loading="eager"
            ></Image>
          </Link>
          <Button isHeader={true} text="Заказать звонок" isBlack={false} />
        </div>
        <div className="header__burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
