export default function TextHero() {
  return (
    <div className="relative mx-auto max-w-screen-2xl px-3 py-10 text-center md:pt-20">
      <div className="mx-auto mb-4 w-max rounded-3xl bg-gradient-to-r from-[#41a63a]  to-[#b0b301] p-0.5">
        <div className=" flex items-center justify-center rounded-3xl bg-[#101017e8] px-5 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="text-second mr-2 h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
            />
          </svg>
          <p className="text-xs sm:text-sm">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <h1 className="text-main text-2xl font-semibold sm:text-3xl md:text-5xl lg:text-6xl">
        Lorem ipsum is placeholder <br />
        <span className="w-max bg-gradient-to-tr from-orange-500 to-yellow-400 bg-clip-text text-transparent">
          Strony Internetowe
        </span>
      </h1>
     <p className="mt-12 w-1/2 mx-auto">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, deleniti rem. Numquam, minima! Eos blanditiis corporis magnam, nihil alias laboriosam asperiores tempore et quibusdam quas aperiam iste iusto a explicabo.</p>
    </div>
  );
}
