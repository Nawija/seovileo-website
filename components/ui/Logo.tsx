import Image from "next/image";

export function Logo({ h, w }: {h:number,w:number}) {
  return (
    <div className="flex-c">
      <Image
        src="/seovileo.svg"
        alt="logo seovileo"
        className="mr-1.5"
        height={h || 27}
        width={w || 27}
      />
      <p className="text-white">Seovileo</p>
    </div>
  );
}
