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

import { cases } from "@/data/cases";

export default function Projects() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  return (
    <div className="projects">
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
            breakpoints={{
              0: {
                slidesPerView: 1.3,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2.7,
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
          >
            {cases.map((e, i) => {
              return (
                <SwiperSlide className="projects__slide" key={i}>
                  <div className="projects__slide__wrapper">
                    <div className="projects__slide--image">
                      <Image
                        width={417}
                        height={436}
                        src={`/images/cases/${e.image}`}
                        alt={`${e.title} ${e.pos}`}
                      />
                    </div>

                    <div className="projects__slide__text">
                      <p className="projects__slide__text--title">{e.title}</p>
                      <p className="projects__slide__text--description">
                        {e.pos}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
