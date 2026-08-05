import Card from "./Card";

interface TimelineItem {
  year?: string;
  step?: string;
  label?: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="mx-auto mt-16 max-w-5xl space-y-6">
      {items.map((item, index) => {
        const label = item.label ?? item.step ?? item.year ?? `${index + 1}`;

        return (
          <Card key={`${label}-${item.title}`}>
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="w-28 shrink-0">
                <span className="text-2xl font-bold">
                  {label}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-8 text-gray-600">
                  {item.description}
                </p>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}