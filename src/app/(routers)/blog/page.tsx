import SmallHero from "@/src/components/SmallHero";
import { SecondBtn } from "@/src/ui/buttons/SecondBtn";

export default function Bulding() {
  return (
    <div className="anim-opacity">
      <SmallHero />
      <div className="mx-auto -mt-24 grid w-full max-w-screen-2xl grid-cols-1 sm:grid-cols-2 gap-4 px-4 lg:grid-cols-4">
        <div className="border-main overflow-hidden rounded-lg border">
          <img
            className="h-64 w-full object-cover"
            src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=3200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <div className="bg-second space-y-4 px-4 py-4">
            <div className="text-p flex items-center justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.4}
                stroke="currentColor"
                className="mr-1 h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
              <small>12.12.2023</small>
            </div>
            <p className="text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              ullam voluptas quas!
            </p>
            <SecondBtn>Czytaj wiecej</SecondBtn>
          </div>
        </div>
      </div>
    </div>
  );
}
