import React from "react";

interface GridProps {
  children: React.ReactNode;
}

export default function Grid({ children }: GridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-12">
      {children}
    </div>
  );
}

