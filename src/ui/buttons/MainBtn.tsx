import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function MainBtn({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "relative overflow-hidden rounded-xl bg-gradient-to-tr from-[#fb7d00] to-[#c8b806] px-5 py-2 text-[13px] font-semibold text-white/80 shadow-xl shadow-[#e97e0b6b] transition-all duration-300 hover:-translate-y-[2px] hover:text-white hover:shadow-[#e93f0b6b]",
        className,
      )}
    >
      {children}
    </button>
  );
}
