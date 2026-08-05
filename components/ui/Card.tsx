interface CardProps {
  children: React.ReactNode;
}

export default function Card({
  children,
}: CardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-black hover:shadow-xl">
      {children}
    </div>
  );
}
