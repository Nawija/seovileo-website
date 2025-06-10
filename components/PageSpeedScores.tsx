"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

type ScoreProps = {
  label: string;
  value: number;
};

const getColor = (value: number) => {
  if (value < 50) return "#FF4E42"; // czerwony
  if (value < 90) return "#FFA400"; // żółty
  return "#00a63e"; // zielony
};

const CircleScore = ({ label, value }: ScoreProps) => {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      strokeDashoffset: circumference * (1 - value / 100),
      transition: { duration: 1.4, ease: "easeOut" },
    });
  }, [value, circumference, controls]);

  const strokeColor = getColor(value);

  return (
    <div className="flex w-28 flex-col items-center justify-center gap-2 select-none">
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        role="img"
        aria-label={`${label} score: ${value}`}
      >
        {/* Tło - jasne pastelowe */}
        <circle cx="60" cy="60" r={radius + 8} fill="none" />
        {/* Szary okrąg tła */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#e0e0e0"
          strokeWidth="12"
          fill="none"
        />
        {/* Animowany wskaźnik */}
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
        />
        {/* Wartość liczby w środku */}
        <text
          x="60"
          y="72"
          textAnchor="middle"
          fontWeight="700"
          fontSize="38"
          fill={strokeColor}
          fontFamily="Poppins, Roboto, Arial, sans-serif"
          letterSpacing="0.02em"
        >
          {value}
        </text>
      </svg>
      {/* Etykieta pod wykresem */}
      <span
        className="text-sm font-medium tracking-wide text-white"
        style={{ fontFamily: "Poppins, Roboto, Arial, sans-serif" }}
      >
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
    <section className="border-main my-6 flex flex-wrap justify-center gap-12 rounded-2xl border bg-white/5 p-6 shadow-xl">
      <CircleScore label="Wydajność" value={performance} />
      <CircleScore label="Dostępność" value={accessibility} />
      <CircleScore label="Metody" value={bestPractices} />
      <CircleScore label="SEO" value={seo} />
    </section>
  );
}
