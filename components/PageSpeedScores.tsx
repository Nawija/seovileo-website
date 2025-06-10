"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

type ScoreProps = {
  label: string;
  value: number;
};

const getColor = (value: number) => {
  if (value < 50) return "#FF4E42"; // red
  if (value < 90) return "#FFA400"; // yellow
  return "#00A763"; // green
};

const CircleScore = ({ label, value }: ScoreProps) => {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      strokeDashoffset: circumference * (1 - value / 100),
      transition: { duration: 1.6, ease: "easeOut" },
    });
  }, [value, circumference, controls]);

  const strokeColor = getColor(value);

  return (
    <div className="flex w-32 flex-col items-center justify-center text-center select-none">
      <div className="relative">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          role="img"
          aria-label={`${label} score: ${value}`}
        >
          {/* Grey track circle */}
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#494949"
            strokeWidth="12"
            fill="none"
          />
          {/* Animated progress circle */}
          <motion.circle
            cx="60"
            cy="60"
            r={radius}
            stroke={strokeColor}
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={controls}
            style={{ filter: `drop-shadow(0 0 2px ${strokeColor})` }}
          />
          {/* Center score text */}
          <text
            x="60"
            y="72"
            textAnchor="middle"
            fontSize="36"
            fontWeight="700"
            fill={strokeColor}
            fontFamily="Poppins, Roboto, Arial, sans-serif"
          >
            {value}
          </text>
        </svg>
      </div>
      <span className="mt-2 text-xs font-medium tracking-wide text-white/80">
        {label}
      </span>
    </div>
  );
};

export default function PageSpeedScores({
  performance,
  accessibility,
  bestPractices,
  seo,
}: {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
}) {
  return (
    <section className="border-main my-12 py-12 flex flex-wrap justify-center gap-8 rounded-lg border bg-white/5 p-6">
      <CircleScore label="Wydajność" value={performance} />
      <CircleScore label="Dostępność" value={accessibility} />
      <CircleScore label="Najlepsze praktyki" value={bestPractices} />
      <CircleScore label="SEO" value={seo} />

      <div className="mt-2 max-w-2xl text-white lg:text-center">
        <h2 className="text-main mb-3 text-2xl font-semibold">
          Dlaczego wyniki Google Lighthouse są kluczowe?
        </h2>
        <p className="leading-relaxed text-white/80 lg:text-start lg:ml-12">
          Wysokie wyniki w Google Lighthouse mają bezpośredni wpływ na
          pozycjonowanie strony w wyszukiwarce. Parametry takie jak{" "}
          <strong>wydajność</strong>, <strong>dostępność</strong>,{" "}
          <strong>najlepsze praktyki</strong> oraz <strong>SEO</strong> są
          analizowane przez algorytmy Google, co przekłada się na wyższą
          widoczność witryny. Dobrze zoptymalizowana strona nie tylko ładuje się
          szybciej, ale zapewnia też lepsze doświadczenie użytkownika — co
          zwiększa konwersje i zaufanie do marki.
        </p>
      </div>
    </section>
  );
}
