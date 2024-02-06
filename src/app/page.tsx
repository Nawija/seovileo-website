import HeroBg from "@/public/wysoka-plama-seo.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <div className="anim-opacity relative mx-auto text-gray-800">
      <section className="h-[100vh] w-full overflow-hidden">
        <Image
          className="absolute left-0 top-0 -z-10 h-full w-full rotate-180 object-cover"
          src={HeroBg}
          alt="hero"
          quality={100}
          placeholder="blur"
          priority
          fill
        />
        <img
          className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
          src="https://img.freepik.com/darmowe-zdjecie/streszczenie-zolte-gladkie-linie-fal_1017-24863.jpg?w=2000&t=st=1707246342~exp=1707246942~hmac=662c4975069c924404a7df794835153abefb5a8376b0fcddcfcfe382e25b7a56"
        />
        <div className="absolute -z-10 h-full w-full bg-gradient-to-t from-gray-50 via-transparent to-gray-50 " />

        <div className="mx-auto flex h-full max-w-screen-lg flex-col items-center justify-center space-y-8 px-8 text-center -mt-24">
          <h1 className="text-3xl font-medium md:text-4xl lg:text-6xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            provident cupiditate iure iusto
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
            quis qui quidem ab eum sunt autem cupiditate beatae eligendi.
            Voluptas, reprehenderit consectetur
          </p>
        </div>
      </section>
    </div>
  );
}
