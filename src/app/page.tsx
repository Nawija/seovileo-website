export default function Home() {
  return (
    <div className="anim-opacity relative mx-auto max-w-[1700px] text-gray-200">
      <div className="h-[85vh] w-full overflow-hidden">
        <img
          className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
          src="https://img.freepik.com/darmowe-zdjecie/3d-grunge-pokoju-wnetrze-z-swiatlem-reflektorow-i-dymnym-atmosfery-tlem_1048-11333.jpg?w=2000&t=st=1707210182~exp=1707210782~hmac=2b56b11d8d06b5fc6b7ee981adc62dec6d4084e91e0de1f68aeeb500dc9469e6"
        />
        <div className="absolute -z-10 h-full w-full bg-gradient-to-t from-gray-50 via-transparent to-black" />

        <div className="mx-auto flex max-w-screen-md flex-col items-center justify-center space-y-8 px-8 text-center h-full">
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
