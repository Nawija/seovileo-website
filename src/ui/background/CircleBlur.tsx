"use client";

export default function CircleBlur() {
  return (
    <div className="absolute left-0 -top-20 -z-10 h-full w-full overflow-hidden">
      <div className="absolute left-0 top-0 h-[40vw] w-[40vw] rounded-full bg-orange-400 blur-[80px] lg:-left-24 lg:-top-24 lg:h-[15vw] lg:w-[15vw] lg:blur-[103px]" />
      <div className="absolute bottom-0 right-24 h-[40vw] w-[40vw] rounded-full bg-emerald-400 blur-[80px] lg:-bottom-24 lg:-right-24 lg:h-[20vw] lg:w-[20vw] lg:blur-[103px]" />
    </div>
  );
}