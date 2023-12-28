import Image from "next/image";
export default function Home() {
  return (
    <>
      <Image
        src="/seovileo.svg"
        height={12}
        width={12}
        priority
        alt="seovileo logo"
      />
    </>
  );
}
