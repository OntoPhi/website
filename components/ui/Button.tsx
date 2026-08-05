import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center rounded-full px-8 py-3.5 text-sm font-medium transition-all duration-300",
        variant === "primary"
          ? "bg-black text-white hover:bg-gray-800"
          : "border border-gray-300 hover:border-black",
        className
      )}
    >
      {children}
    </button>
  );
}
