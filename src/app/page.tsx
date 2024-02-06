import AA from "@/public/aa.webp";
import Image from "next/image";

export default function Home() {
  return (
    <div className="anim-opacity relative mx-auto text-gray-200">
      <div className="h-[85vh] w-full overflow-hidden">
        <Image
          className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
          src={AA}
          alt="hero"
          fill
        />
        <div className="absolute -z-10 h-full w-full bg-gradient-to-t from-black via-transparent to-black" />

        <div className="mx-auto flex h-full max-w-screen-md flex-col items-center justify-center space-y-8 px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            provident cupiditate iure iusto
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            quis qui quidem ab eum sunt autem cupiditate beatae eligendi.
            Voluptas, reprehenderit consectetur
          </p>
        </div>
      </div>
    </div>
  );
}
