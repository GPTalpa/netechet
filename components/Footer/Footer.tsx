"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import "./style.scss";
import Button from "@components/Button";

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="footer__wrapper">
      <div className="footer">
        <div className="footer__left">
          {" "}
          <div className="footer__text">
            <div className="footer__header">
              {" "}
              <div className="footer__header--with-logo">
                <h2>не течет</h2>
                <Link href="/">
                  <Image
                    src="/icons/logo.svg"
                    width={47}
                    height={47}
                    alt="Логотип"
                    fetchPriority="high"
                    loading="eager"
                    className="footer__header--logo"
                  ></Image>
                </Link>
              </div>
              <nav className="footer__navigation">
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
                <ul>
                  <li>
                    <Link href="#">Политика конфиденциальности</Link>
                  </li>
                  <li>
                    <Link href="#">Политика обработки персональных данных</Link>
                  </li>
                  <li>
                    <Link href="#">Согласие на обработку файлов cookies</Link>
                  </li>
                  <li>
                    <Link href="#">Управление файлами cookies</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="footer__right">
          <address className="footer__time">
            <Link href="tel:+79252852955">
              <Image
                src="/icons/call-icon.svg"
                width={24}
                height={24}
                alt="Телефонная трубка"
                fetchPriority="high"
                loading="eager"
              ></Image>{" "}
              +7 (925) 285 - 29 - 55
            </Link>
            <p>
              с <time dateTime="10:00+03:00">10:00</time> до{" "}
              <time dateTime="19:00+03:00">19:00</time> МСК
            </p>
          </address>
          <Button text="обратный звонок" isBlack={false} />
          <address className="footer__telegram">
            <Link href="https://t.me/netechet" target="_blank">
              <Image
                src="/icons/tg.svg"
                width={46}
                height={46}
                alt="Telegram"
                fetchPriority="high"
                loading="eager"
              ></Image>
              Мы в Телеграм!
            </Link>
          </address>
          <ul className="footer__navigation--mobile">
            <li>
              <Link href="#">Политика конфиденциальности</Link>
            </li>
            <li>
              <Link href="#">Политика обработки персональных данных</Link>
            </li>
            <li>
              <Link href="#">Согласие на обработку файлов cookies</Link>
            </li>
            <li>
              <Link href="#">Управление файлами cookies</Link>
            </li>
          </ul>
          <div className="footer__copyright">
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
            <address>
              <p>ИП Фамилия И.О.</p>
            </address>
            <p>2026 г.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
