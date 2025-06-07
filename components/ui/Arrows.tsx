import Image from "next/image";

export function ArrowLeft({ h, w }: {h:number,w:number}) {
  return (
    <Image
      src="/arrowLeft.svg"
      alt="strzałka w bok"
      height={h || 12}
      width={w || 12}
    />
  );
}
export function ArrowRight({ h, w }: {h:number,w:number}) {
  return (
    <Image
      src="/arrowRight.svg"
      alt="strzałka w bok"
      height={h || 12}
      width={w || 12}
    />
  );
}
