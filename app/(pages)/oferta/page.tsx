import { MainBtn } from "@/components/ui/buttons/MainBtn";
import Link from "next/link";

export default function Bulding() {
  return (
    <div className="anim-opacity flex h-[82vh] w-full flex-col items-center justify-center">
      <h1 className="mb-8 text-xl font-medium">
        Strona w <span className="text-main-color">budowie</span>
      </h1>
      <Link href="/">
        <MainBtn>Powrót</MainBtn>
      </Link>
    </div>
  );
}
