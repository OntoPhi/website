interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  description,
  center = true,
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-4xl ${
        center ? "mx-auto text-center" : ""
      }`}
    >
      {badge && (
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-500">
          {badge}
        </p>
      )}

      <h2 className="mt-4 text-4xl font-bold md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}
