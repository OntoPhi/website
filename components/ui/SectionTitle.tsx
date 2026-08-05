import clsx from "clsx";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  return (
    <div
      className={clsx(
        "max-w-3xl",
        align === "center" && "mx-auto text-center"
      )}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
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
