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
    title: "Image",
  },
  {
    src: s2,
    alt: "...",
    title: "Image",
  },
  {
    src: s3,
    alt: "...",
    title: "Image",
  },
  {
    src: s4,
    alt: "...",
    title: "Image",
  },
  {
    src: s5,
    alt: "...",
    title: "Image",
  },
];

export const dynamic = true;

export default function CarouselPortfolio() {
  return (
    <Swiper
      effect={"coverflow"}
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
      spaceBetween={90}
      coverflowEffect={{
        rotate: 0,
        stretch: 13,
        depth: 0,
        modifier: 5,
        slideShadows: false,
      }}
      modules={[EffectCoverflow, Navigation]}
      className="mySwiper mx-auto max-w-screen-xl"
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
      }}
    >
      {imgSwiper.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="mx-2 my-4 bg-[#EDECEB] p-4">
            <Image
              style={{
                
                objectFit: "cover",
                objectPosition: "top",
              }}
              loading="lazy"
              className="h-[200px] w-full"
              height={300}
              width={200}
              src={slide.src}
              alt={slide.alt}
              sizes="(min-width: 1668px) 80vw, (max-width: 786px) 50vw, 33vw"
            />
            <p className="mt-2 text-center text-sm font-semibold ">{slide.title}</p>
          </div>
        </SwiperSlide>
      ))}
      <div className="mt-4 flex items-center justify-end mr-4 space-x-6">
        <div className="swiper-button-prev cursor-pointer">
          <div className="text-4xl border border-main rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
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
        <div className="text-4xl border border-main rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
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
