"use client";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import Image from "next/image";
import Link from "next/link";
import { IMG_PORTFOLIO } from "../constants";

export default function Home() {
  return (
    <div className="anim-opacity mx-auto max-w-[2000px] ">
      <section className="bg-gray-200 py-24">
        <h1 className="mx-auto max-w-screen-lg px-6 text-center text-2xl sm:text-3xl lg:text-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iste
          eveniet aspernatur
        </h1>
      </section>

      <section className="mx-auto my-24 flex flex-col items-center justify-center px-3 md:flex-row lg:ml-24">
        <div className="mb-8 text-center font-semibold lg:ml-52 lg:text-start">
          <small className="text-orange-500">Zobacz</small>
          <p className="mt-1 text-xl lg:text-2xl">Najnowsze realizacje</p>
        </div>
        <Carousel
          withIndicators
          controlsOffset="md"
          slideSize={{ base: "85%", sm: "30%" }}
          height={200}
          slideGap="md"
          align="start"
        >
          {IMG_PORTFOLIO.map((image, index) => (
            <Carousel.Slide key={index}>
              <Link href="/xx">
                <Image
                  src={image.src}
                  alt="..."
                  height={300}
                  width={300}
                  className="h-80 w-[95%] object-cover object-top"
                />
              </Link>
            </Carousel.Slide>
          ))}
          <Carousel.Slide>
            <div>
              <Link href="/galeria">
                <div className="flex-c h-80 w-3/4 bg-gray-100 border">
                  <p>Wiecej</p>
                </div>
              </Link>
            </div>
          </Carousel.Slide>
        </Carousel>
      </section>
    </div>
  );
}
