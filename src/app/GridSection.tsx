import grid from "@/public/seo-grid.png";
import Image from "next/image";
import { MainBtn } from "../ui/buttons/MainBtn";
import { SecondBtn } from "../ui/buttons/SecondBtn";

export default function GridSection() {
  return (
    <div className=" bg-black/80 ">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center space-y-10 px-3 py-10 text-start md:flex-row md:space-y-0 md:py-20">
        <div className="w-full max-w-screen-sm space-y-5 px-4 md:w-3/4">
          <h2 className="text-main text-lg font-semibold md:text-xl lg:text-2xl">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non beatae
            maiores ullam!
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia,
            nam at explicabo similique doloribus ullam esse aliquam ducimus
            itaque facilis porro molestiae nobis pariatur, repellendus vero,
            minima velit! Qui, ratione?
          </p>
          <div className="flex-s space-x-4">
            <SecondBtn>Wiecej</SecondBtn>
            <MainBtn>Testy</MainBtn>
          </div>
        </div>
        <div className="relative h-full w-full max-w-screen-sm px-4 md:w-full">
          <Image
            src={grid}
            alt="siatka grid"
            height={700}
            width={700}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
