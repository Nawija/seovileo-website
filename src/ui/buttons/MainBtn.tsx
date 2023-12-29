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
        "relative overflow-hidden rounded-xl border border-[#92D5FF] bg-gradient-to-bl from-[#0b7ee9] to-[#0b60e9] px-5 py-2 text-[13px] font-semibold text-white/80 shadow-xl shadow-[#0b94e96b] hover:shadow-[#0b64e96b] transition-all hover:-translate-y-[2px] duration-300 hover:bg-[#0B93E9] hover:text-white active:bg-[#0b73e9]",
        className,
      )}
    >
      {children}
    </button>
  );
}
