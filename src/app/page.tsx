import React, { Suspense } from "react";
const Hero = React.lazy(() => import("../components/home/Hero"));
const Portfolio = React.lazy(() => import("../components/home/Portfolio"));
const Test = React.lazy(() => import("../components/home/Test"));

export default function Home() {
  return (
    <div className="anim-opacity relative mx-auto w-full overflow-hidden">
      <Suspense fallback={<div>Ładowanie...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div>Ładowanie...</div>}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<div>Ładowanie...</div>}>
        <Test />
      </Suspense>
    </div>
  );
}
