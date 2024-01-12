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
        "relative overflow-hidden rounded-xl bg-gradient-to-tr from-[#fb7d00] to-[#c8b806] px-5 py-2 text-[13px] font-semibold text-white/80 shadow-xl shadow-[#e9640b6b] hover:shadow-[#e9bd0b6b] transition-all hover:-translate-y-[2px] duration-300 hover:text-white",
        className,
      )}
    >
      {children}
    </button>
  );
}
