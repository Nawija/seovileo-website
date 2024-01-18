"use client";

import GreenCircle from "../blurCircle/GreenCircle";
import OrangeCircle from "../blurCircle/OrangeCircle";

export default function CircleBlur() {
  return (
    <div className="absolute left-0 -top-20 -z-10 h-full w-full overflow-hidden">
      <OrangeCircle />
      <GreenCircle />
    </div>
  );
}
