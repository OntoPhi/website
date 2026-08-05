interface GridProps {
  children: React.ReactNode;
}

export default function Grid({
  children,
}: GridProps) {
  return (
    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
}
