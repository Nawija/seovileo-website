import React, { Suspense } from "react";
const Hero = React.lazy(() => import("../components/home/Hero"));
const Portfolio = React.lazy(() => import("../components/home/Portfolio"));
const Test = React.lazy(() => import("../components/home/Test"));

export default function Home() {
  return (
    <div className="anim-opacity relative mx-auto w-full overflow-hidden">
      <Hero />
      <Portfolio />
      <Suspense fallback={<div>Ładowanie...</div>}>
        <Test />
      </Suspense>
    </div>
  );
}
