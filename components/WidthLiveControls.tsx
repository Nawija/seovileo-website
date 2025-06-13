import { Monitor, Smartphone, Tablet, X } from "lucide-react";
import Link from "next/link";

export default function WidthLiveControls({
  handleIframeClassChange,
  portfolioID,
}: {
  handleIframeClassChange: (classChange: string) => void;
  portfolioID: string;
}) {
  return (
    <div className="flex items-center justify-between h-[3rem] bg-main border-second z-[99999] border-b p-2 px-4 text-sm">
      <p className="flex lg:hidden">Więcej opcji na PC</p>
      <div className="hidden md:flex" />
      <div className="hidden items-center justify-center space-x-5 md:flex">
        <button
          className="border-main bg-body cursor-pointer rounded-lg border px-2.5 py-2 transition-colors duration-300 hover:bg-gray-200 hover:text-zinc-800"
          onClick={() =>
            handleIframeClassChange(
              "w-[430px] h-full lg:h-[730px] px-4 py-12 lg:mt-12 rounded-3xl border border-main bg-zinc-800",
            )
          }
        >
          <Smartphone className="h-6 w-6" />
        </button>
        <button
          className="border-main bg-body cursor-pointer rounded-lg border px-2.5 py-2 transition-colors duration-300 hover:bg-gray-200 hover:text-zinc-800"
          onClick={() =>
            handleIframeClassChange(
              "w-[700px] h-full lg:h-[90%] px-4 py-12 lg:mt-2 rounded-3xl border border-main bg-zinc-800",
            )
          }
        >
          <Tablet className="h-6 w-6" />
        </button>
        <button
          className="border-main bg-body cursor-pointer rounded-lg border px-2.5 py-2 transition-colors duration-300 hover:bg-gray-200 hover:text-zinc-800"
          onClick={() => handleIframeClassChange("w-full h-full")}
        >
          <Monitor className="h-6 w-6" />
        </button>
      </div>
      <Link href={`/realizacje/${portfolioID}`} aria-label={portfolioID}>
        <X className="h-10 w-10 p-2" stroke="white" strokeWidth={1.8} />
      </Link>
    </div>
  );
}
