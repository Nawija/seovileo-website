import s1 from "@/public/portfolio/1.jpg";
import s2 from "@/public/portfolio/2.jpg";
import s3 from "@/public/portfolio/3.jpg";
import s4 from "@/public/portfolio/4.jpg";
import s5 from "@/public/portfolio/5.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="anim-opacity relative mx-auto max-w-[2000px] ">
      <section className="flex-c relative h-[50vh] bg-[#EDECEB] py-24">
        <img
          src="https://img.freepik.com/darmowe-zdjecie/streszczenie-eleganckie-niebieskie-tlo-z-miejsca-na-tekst_1017-46767.jpg?w=1380&t=st=1705683800~exp=1705684400~hmac=74fb5327301bcca7924c5320139e360c2fb3c697b42cfc2c22291c3d737e0be9"
          className="absolute left-0 top-0 z-10 h-full w-full object-cover opacity-10"
        />
        <div className="z-20 flex max-w-screen-md flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-3xl font-medium">Hero</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            quaerat assumenda doloribus harum dolor eligendi! Deserunt, eligendi
            consectetur placeat hic nulla repellendus quia magni dolores ex
            culpa quod, iste perferendis, quibusdam sint porro.
          </p>
        </div>
      </section>
      <section className="flex-c my-24 space-x-4">
        <div className="p-10 text-2xl font-medium flex items-end justify-end">
          <p>Najnowsze realizacje</p>
        </div>
        <div className="bg-[#EDECEB] p-10">
          <Image src={s1} alt="..." height={220} />
        </div>
        <div className="bg-[#EDECEB] p-10">
          <Image src={s2} alt="..." height={220} />
        </div>
        <div className="bg-[#EDECEB] p-10">
          <Image src={s3} alt="..." height={220} />
        </div>
        <div className="bg-[#EDECEB] p-10">
          <Image src={s4} alt="..." height={220} />
        </div>
        <div className="bg-[#EDECEB] p-10">
          <Image src={s5} alt="..." height={220} />
        </div>
      </section>
    </div>
  );
}
