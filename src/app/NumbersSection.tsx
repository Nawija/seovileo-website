import GreenCircle from "../ui/blurCircle/GreenCircle";
import OrangeCircle from "../ui/blurCircle/OrangeCircle";

export default function NumersSection() {
  return (
    <section className="border-main  flex flex-col items-center justify-center space-y-10 border-y py-24 text-start md:flex-row md:space-y-0">
      <div className="mx-auto flex relative max-w-screen-xl flex-col items-start justify-center px-4 py-12 md:flex-row md:py-24">
        <div className="text-main md:top-28 mb-32 h-full w-full px-4 text-center text-3xl md:sticky md:mb-0 md:w-1/2 md:text-start md:text-3xl">
          <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h2>
        </div>
        <div className="absolute top-0 md:top-12 lg:top-52 opacity-40 left-0 -z-10">
          <OrangeCircle />
          <GreenCircle />
        </div>
        <div className="flex flex-col items-center justify-center px-4 md:pl-12">
          <div className="flex items-center justify-center">
            <div className="from mr-2 flex -rotate-12 items-center justify-center rounded-full px-4 py-2 text-9xl font-semibold opacity-20">
              1
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam explicabo doloribus eius error esse sint tempore
              eligendi, deleniti aliquid ratione. A tempora expedita natus
              placeat eveniet quaerat corporis rerum soluta?
            </p>
          </div>
          <div className="bg-gradient my-6 h-24 w-px" />
          <div className="flex items-center justify-center">
            <div className="from mr-2 flex -rotate-12 items-center justify-center rounded-full px-4 py-2 text-9xl font-semibold opacity-20">
              2
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam explicabo doloribus eius error esse sint tempore
              eligendi, deleniti aliquid ratione. A tempora expedita natus
              placeat eveniet quaerat corporis rerum soluta?
            </p>
          </div>
          <div className="bg-gradient my-6 h-24 w-px" />
          <div className="flex items-center justify-center">
            <div className="from mr-2 flex -rotate-12 items-center justify-center rounded-full px-4 py-2 text-9xl font-semibold opacity-20">
              3
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam explicabo doloribus eius error esse sint tempore
              eligendi, deleniti aliquid ratione. A tempora expedita natus
              placeat eveniet quaerat corporis rerum soluta?
            </p>
          </div>
          <div className="bg-gradient my-6 h-24 w-px" />
          <div className="flex items-center justify-center">
            <div className="from mr-2 flex -rotate-12 items-center justify-center rounded-full px-4 py-2 text-9xl font-semibold opacity-20">
              4
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam explicabo doloribus eius error esse sint tempore
              eligendi, deleniti aliquid ratione. A tempora expedita natus
              placeat eveniet quaerat corporis rerum soluta?
            </p>
          </div>
          <div className="bg-gradient my-6 h-24 w-px" />
          <div className="flex items-center justify-center">
            <div className="from mr-2 flex -rotate-12 items-center justify-center rounded-full px-4 py-2 text-9xl font-semibold opacity-20">
              5
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam explicabo doloribus eius error esse sint tempore
              eligendi, deleniti aliquid ratione. A tempora expedita natus
              placeat eveniet quaerat corporis rerum soluta?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
