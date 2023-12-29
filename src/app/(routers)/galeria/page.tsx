import { MainBtn } from "@/src/ui/buttons/MainBtn";
import Link from "next/link";

export default function Bulding() {
  return (
    <div className="anim-opacity h-screen w-full flex items-center justify-center flex-col">
      <h1 className="text-xl mb-8 font-medium">Strona w <span className="text-main-color">budowie</span></h1>
      <Link href="/">
        <MainBtn>Powrót</MainBtn>
      </Link>
    </div>
  );
}
