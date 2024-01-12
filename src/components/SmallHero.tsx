export default function SmallHero() {
  return (
    <div className="relative -z-10">
      <img
        src="https://img.freepik.com/darmowe-zdjecie/3d-futurystyczna-ilustracja-z-plynacymi-cyber-kropkami_1048-11939.jpg?w=2000&t=st=1705100116~exp=1705100716~hmac=37d2e7ff33d2be527f22b8407b48ece8cc25ba1ed082884377e4a72bd574c3c2"
        className="h-[40vh] w-full object-cover"
      />
      <div className="text-main absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 z-10">
        Lorem ipsum dolor sit.
      </div>
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-b from-transparent to-[#0B0B0B]" />
    </div>
  );
}
