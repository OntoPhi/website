import Badge from "./Badge";
import Container from "./Container";

interface PageHeroProps {
  badge: string;
  title: string;
  description: string;
}

export default function PageHero({
  badge,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="py-32">
      <Container>
        <div className="mx-auto max-w-5xl text-center">

          <Badge>{badge}</Badge>

          <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl whitespace-pre-line">
            {title}
          </h1>

          <p className="mx-auto mt-10 max-w-4xl text-xl leading-9 text-gray-600">
            {description}
          </p>

        </div>
      </Container>
    </section>
  );
}
