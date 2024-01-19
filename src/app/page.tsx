import CarouselPortfolio from "./CarouselPortfolio";

export default function Home() {
  return (
    <div className="anim-opacity relative mx-auto max-w-[2000px] ">
      <section className="flex-c relative h-[50vh] bg-[#EDECEB] py-24">
        <img
          src="https://img.freepik.com/darmowe-zdjecie/streszczenie-eleganckie-niebieskie-tlo-z-miejsca-na-tekst_1017-46767.jpg?w=1380&t=st=1705683800~exp=1705684400~hmac=74fb5327301bcca7924c5320139e360c2fb3c697b42cfc2c22291c3d737e0be9"
          className="absolute left-0 top-0 z-10 h-full w-full object-cover opacity-10"
        />
        <div className="z-20 flex max-w-screen-md flex-col items-center justify-center space-y-4 px-10 text-center">
          <h1 className="text-3xl font-medium">Hero</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            quaerat assumenda doloribus harum dolor eligendi! Deserunt, eligendi
            consectetur placeat hic nulla repellendus quia magni dolores ex
            culpa quod, iste perferendis, quibusdam sint porro.
          </p>
        </div>
      </section>
      <section className="my-24 flex flex-col md:flex-row max-w-screen-xl mx-auto items-center justify-center space-x-4">
        <p className="font-semibold">Najnowsze realizacje</p>
        <div className="overflow-hidden relative w-full">
          <CarouselPortfolio />
        </div>
      </section>
    </div>
  );
}
