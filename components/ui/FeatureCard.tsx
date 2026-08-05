import Card from "./Card";

interface FeatureCardProps {
  title: string;
  description: string;
}

export default function FeatureCard({
  title,
  description,
}: FeatureCardProps) {
  return (
    <Card>
      <h3 className="text-2xl font-semibold">
        {title}
      </h3>

      <p className="mt-5 leading-8 text-gray-600">
        {description}
      </p>
    </Card>
  );
}
