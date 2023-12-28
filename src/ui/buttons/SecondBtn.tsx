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
        "relative overflow-hidden rounded-lg px-4 py-2 text-xs font-semibold text-white hover:text-zinc-300 focus-visible:outline active:bg-red-50",
        className,
      )}
    >
      {children}
    </button>
  );
}
