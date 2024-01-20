"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import s1 from "@/public/portfolio/1.jpg";
import s2 from "@/public/portfolio/2.jpg";
import s3 from "@/public/portfolio/3.jpg";
import s4 from "@/public/portfolio/4.jpg";
import s5 from "@/public/portfolio/5.jpg";

const imgSwiper = [
  {
    src: s1,
    alt: "...",
    title: "Oficialside",
  },
  {
    src: s2,
    alt: "...",
    title: "Kalanimbu",
  },
  {
    src: s3,
    alt: "...",
    title: "ImageOPG",
  },
  {
    src: s4,
    alt: "...",
    title: "Temenolis",
  },
  {
    src: s5,
    alt: "...",
    title: "Gebenzis",
  },
];

export const dynamic = true;

export default function CarouselPortfolio() {
  return (
    <Swiper
      effect={"coverflow"}
      slidesPerView={3}
      spaceBetween={333}
      freeMode={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      loop
      speed={500}
      autoplay={{
        delay: 2600,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 0,
        modifier: 0,
        slideShadows: false,
      }}
      modules={[EffectCoverflow, Navigation]}
      breakpoints={{
        320: {
          slidesPerView: 2,
        },

        680: {
          slidesPerView: 3,
        },
        1000: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
    >
      {imgSwiper.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className=" bg-gradient-to-br from-[#ffd394] to p-7 w-max">
            <Image
              loading="lazy"
              className="h-[300px] w-[300px] object-cover object-top"
              height={300}
              width={200}
              src={slide.src}
              alt={slide.alt}
              sizes="(min-width: 1668px) 80vw, (max-width: 786px) 50vw, 33vw"
            />
          </div>
          <div className="flex flex-col items-start justify-start p-2">
            <small>Dev</small>
            <p className="text-center text-sm font-semibold mt-0.5">{slide.title}</p>
          </div>
        </SwiperSlide>
      ))}
      <div className="mr-4 mt-6 flex items-center justify-center lg:justify-end space-x-3 text-main">
        <div className="swiper-button-prev cursor-pointer">
          <div className="border-main rounded-full border bg-[#EDECEB] p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </div>
        </div>
        <div className="swiper-button-next cursor-pointer">
          <div className="border-main rounded-full border bg-[#EDECEB] p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>
    </Swiper>
  );
}
