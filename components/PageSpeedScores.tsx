"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

type ScoreProps = {
  label: string;
  value: number;
};

const getColor = (value: number) => {
  if (value < 50) return "#FF4E42";       // czerwony
  if (value < 90) return "#FFA400";       // żółty
  return "#0CCE6B";                       // zielony
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
    <div className="flex flex-col items-center justify-center gap-2 w-28 select-none">
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        role="img"
        aria-label={`${label} score: ${value}`}
      >
        {/* Tło - jasne pastelowe */}
        <circle
          cx="60"
          cy="60"
          r={radius + 8}
          fill="rgba(200, 230, 255, 0.3)" // lekki błękitny pastelowy kolor w tle
        />
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
          style={{ filter: `drop-shadow(0 0 6px ${strokeColor})` }}
        />
        {/* Wartość liczby w środku */}
        <text
          x="60"
          y="68"
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
        className="text-gray-700 font-medium text-sm tracking-wide"
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
    <section className="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-xl flex flex-wrap justify-center gap-12">
      <CircleScore label="Wydajność" value={performance} />
      <CircleScore label="Dostępność" value={accessibility} />
      <CircleScore label="Metody" value={bestPractices} />
      <CircleScore label="SEO" value={seo} />
    </section>
  );
}
