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
        "relative overflow-hidden rounded-lg border border-gray-300 bg-gradient-to-b from-white to-gray-200 px-4 py-2 text-xs font-semibold text-gray-800 shadow-xl transition-all duration-300 hover:-translate-y-[2px] hover:text-black hover:shadow-black/20",
        className,
      )}
    >
      {children}
    </button>
  );
}
