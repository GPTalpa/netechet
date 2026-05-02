"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./style.scss";
import { stocks } from "@/data/stocks";
import Button from "../Button";

export default function Stocks() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  return (
    <div className="container stocks">
      {/* <div className="stocks__left">
        <p className="stocks__count">300+</p>
        <p className="stocks__text">
          реализованных объектов в Москве и области
        </p>

        
      </div> */}
      <div className="stocks__right">
        <div className="slider">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            loop
            spaceBetween={0}
            watchSlidesProgress
            observer
            observeParents
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
                pagination: {
                  enabled: true, // Отключаем на десктопе если нужно
                },
              },
              768: {
                slidesPerView: 1,
                pagination: {
                  enabled: false, // Отключаем на десктопе если нужно
                },
              },
            }}
            onSwiper={(swiper: SwiperType) => {
              setTimeout(() => {
                if (
                  !swiper.params.navigation ||
                  typeof swiper.params.navigation === "boolean"
                )
                  return;

                swiper.params.navigation.prevEl = prevRef.current!;
                swiper.params.navigation.nextEl = nextRef.current!;

                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            onSlideChange={(swiper) => {
              // Для loop режима нужно корректно вычислять реальный индекс
              const realIndex = swiper.realIndex;
              setCurrentIndex(realIndex);
            }}
          >
            {stocks.map((e, i) => {
              if (!e.isNeighbor) {
                return (
                  <SwiperSlide className="stocks__slide" key={i}>
                    <div className="stocks__slide__wrapper">
                      <div className="stocks__slide--image">
                        <picture>
                          <source
                            srcSet={`/images/${e.image}-xsm.webp`}
                            media="(max-width: 768px)"
                            width={335}
                            height={419}
                          />
                          <Image
                            width={1440}
                            height={419}
                            src={`/images/${e.image}-xl.webp`}
                            alt={`${e.title} ${e.titleNextStr}`}
                            fetchPriority="high"
                            loading="eager"
                          />
                        </picture>
                      </div>

                      <div
                        className={`stocks__slide__text ${e.isRight ? "stocks__slide__text--right" : ""}`}
                      >
                        <p className="stocks__slide__text--title">
                          <span className="stocks__slide__text--title--main">
                            {e.title}
                          </span>
                          <br /> {e.titleNextStr}
                        </p>
                        <Link href="/stocks/" className="btn btn--black">
                          Узнать больше
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              }
              if (e.isNeighbor) {
                return (
                  <SwiperSlide className="stocks__slide" key={i}>
                    <div className="stocks__slide__wrapper">
                      <div className="stocks__slide--image">
                        <picture>
                          <source
                            srcSet={`/images/${e.image}-xsm.webp`}
                            media="(max-width: 768px)"
                            width={335}
                            height={419}
                          />
                          <Image
                            width={1440}
                            height={419}
                            src={`/images/${e.image}-xl.webp`}
                            alt={`${e.title} ${e.titleNextStr}`}
                          />
                        </picture>
                      </div>

                      <div
                        className={`stocks__slide__text stocks__slide__text--2 ${e.isRight ? "stocks__slide__text--right" : ""}`}
                      >
                        <p className="stocks__slide__text--neighbor">Дарим</p>
                        <p className="stocks__slide__text--neighbor-cost">
                          5000р
                        </p>
                        <p className="stocks__slide__text--title--neighbor">
                          {e.title} <br />
                          <strong>{e.titleNextStr}</strong>
                        </p>
                        <Link href="/stocks/" className="btn btn--black">
                          Узнать больше
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              }
            })}
          </Swiper>
          <div className="custom-pagination mobile-only">
            {stocks.map((_, idx) => (
              <button
                key={idx}
                className={`pagination-dot ${currentIndex === idx ? "active" : ""}`}
                onClick={() => swiperRef.current?.slideTo(idx)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="stocks__btns--slider">
        <button ref={prevRef} className="slider__arrow slider__arrow--prev">
          <Image
            src="/icons/arrow-left-white.svg"
            width={54}
            height={54}
            alt=""
          />
        </button>
        <button ref={nextRef} className="slider__arrow slider__arrow--next">
          <Image
            src="/icons/arrow-right-white.svg"
            width={54}
            height={54}
            alt=""
          />
        </button>
      </div>
    </div>
  );
}
