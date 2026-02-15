"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "./style.scss";

export default function Projects() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  return (
    <div className="container projects">
      <div className="projects__left">
        <p className="projects__count">300+</p>
        <p className="projects__text">
          реализованных объектов в Москве и области
        </p>

        <div className="projects__btns--slider">
          <button ref={prevRef} className="slider__arrow slider__arrow--prev">
            <Image src="/icons/arrow-left.svg" width={20} height={20} alt="" />
          </button>
          <button ref={nextRef} className="slider__arrow slider__arrow--next">
            <Image src="/icons/arrow-right.svg" width={20} height={20} alt="" />
          </button>
        </div>
      </div>
      <div className="projects__right">
        <div className="slider">
          <Swiper
            modules={[Navigation]}
            slidesPerView={2.7}
            loop
            spaceBetween={0}
            watchSlidesProgress
            observer
            observeParents
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
          >
            <SwiperSlide className="projects__slide">
              <div className="projects__slide__wrapper">
                <div className="projects__slide--image">
                  <Image
                    width={417}
                    height={436}
                    src="/images/image_23.webp"
                    alt="Мягкая отмостка"
                  />
                </div>
                <div className="projects__slide__text">
                  <p className="projects__slide__text--title">
                    Мягкая отмостка
                  </p>
                  <p className="projects__slide__text--description">
                    МО, Химки
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="projects__slide">
              <div className="projects__slide__wrapper">
                <div className="projects__slide--image">
                  <Image
                    width={417}
                    height={436}
                    src="/images/image_24.webp"
                    alt="Мягкая отмостка"
                  />
                </div>
                <div className="projects__slide__text">
                  <p className="projects__slide__text--title">
                    Мягкая отмостка
                  </p>
                  <p className="projects__slide__text--description">
                    МО, Подольск
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="projects__slide">
              <div className="projects__slide__wrapper">
                <div className="projects__slide--image">
                  <Image
                    width={417}
                    height={436}
                    src="/images/image_25.webp"
                    alt="Мягкая отмостка + ливневая канализация + дренаж"
                  />
                </div>

                <div className="projects__slide__text">
                  <p className="projects__slide__text--title">
                    Мягкая отмостка + ливневая канализация + дренаж
                  </p>
                  <p className="projects__slide__text--description">
                    КП, юрьево парк
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="projects__slide">
              <div className="projects__slide__wrapper">
                <div className="projects__slide--image">
                  <Image
                    width={417}
                    height={436}
                    src="/images/image_26.webp"
                    alt="Бетонная отмостка"
                  />
                </div>

                <div className="projects__slide__text">
                  <p className="projects__slide__text--title">
                    Бетонная отмостка
                  </p>
                  <p className="projects__slide__text--description">
                    МО, Наро-Фоминск
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="projects__slide">
              <div className="projects__slide__wrapper">
                <div className="projects__slide--image">
                  <Image
                    width={417}
                    height={436}
                    src="/images/image_27.webp"
                    alt="Бетонная отмостка + дренажная система"
                  />
                </div>

                <div className="projects__slide__text">
                  <p className="projects__slide__text--title">
                    Бетонная отмостка+ дренажная система
                  </p>
                  <p className="projects__slide__text--description">
                    МО, Павлово КП «лес и река»
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="projects__slide">
              <div className="projects__slide__wrapper">
                <div className="projects__slide--image">
                  <Image
                    width={417}
                    height={436}
                    src="/images/image_28.webp"
                    alt="Дренаж фундамента"
                  />
                </div>

                <div className="projects__slide__text">
                  <p className="projects__slide__text--title">
                    Дренаж фундамента
                  </p>
                  <p className="projects__slide__text--description">
                    МО, Солнечногорск
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="projects__slide">
              <div className="projects__slide__wrapper">
                <div className="projects__slide--image">
                  <Image
                    width={417}
                    height={436}
                    src="/images/image_29.webp"
                    alt="Дренажная система"
                  />
                </div>

                <div className="projects__slide__text">
                  <p className="projects__slide__text--title">
                    Дренажная система
                  </p>
                  <p className="projects__slide__text--description">
                    МО, хотьково
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
