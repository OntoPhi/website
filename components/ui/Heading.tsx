import { ElementType } from "react";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

export default function Heading({
  level = 2,
  children,
  className = "",
}: HeadingProps) {
  const Tag = (`h${level}`) as ElementType;

  const styles = {
    1: "text-6xl md:text-7xl xl:text-[88px]",
    2: "text-5xl md:text-6xl",
    3: "text-4xl md:text-5xl",
    4: "text-3xl",
    5: "text-2xl",
    6: "text-xl",
  };

  return (
    <Tag className={`${styles[level]} font-semibold tracking-tight ${className}`}>
      {children}
    </Tag>
  );
}