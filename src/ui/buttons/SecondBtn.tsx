import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function SecondBtn({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "relative overflow-hidden rounded-lg border border-x-2 border-white/80 px-4 py-2 text-xs font-semibold text-white/80 shadow-xl shadow-white/10 transition-all duration-300 hover:-translate-y-[2px] hover:text-white hover:shadow-green-400/30",
        className,
      )}
    >
      {children}
    </button>
  );
}
