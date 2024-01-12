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
        "relative overflow-hidden border rounded-lg px-4 py-2 text-xs font-semibold text-white hover:text-zinc-300 focus-visible:outline active:bg-orange-50 active:text-black",
        className,
      )}
    >
      {children}
    </button>
  );
}
