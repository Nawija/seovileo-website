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
        "relative overflow-hidden rounded-lg px-4 py-2 text-xs font-semibold text-white hover:text-zinc-300 focus-visible:outline active:bg-red-50",
        className,
      )}
    >
      {children}
      <span className="absolute left-0 top-0 z-[-3] h-full w-full rounded-lg bg-black" />
      <span className="absolute left-0 top-0 z-[-2] h-[30%] w-full animate-pulse bg-emerald-600 blur-md" />
      <span className="absolute bottom-0 left-0 z-[-2] h-2/5 w-full animate-pulse bg-green-400 blur-md" />
    </button>
  );
}
