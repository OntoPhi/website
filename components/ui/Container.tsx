import { ReactNode } from "react";
import clsx from "clsx";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizes = {
  sm: "max-w-5xl",
  md: "max-w-6xl",
  lg: "max-w-7xl",
  xl: "max-w-[1400px]",
};

export default function Container({
  children,
  className,
  size = "xl",
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        sizes[size],
        className
      )}
    >
      {children}
    </div>
  );
}
