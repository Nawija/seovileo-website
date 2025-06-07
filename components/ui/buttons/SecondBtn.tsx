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
        "border-main bg-main relative rounded-lg cursor-pointer border text-sm font-semibold text-white/80 transition-colors duration-300 hover:bg-zinc-900 hover:text-white",
        className,
      )}
    >
      {children}
    </button>
  );
}
