import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Timeline from "@/components/ui/Timeline";

import { roadmap } from "@/content/products";

export default function ProductRoadmap() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeader
          badge="Roadmap"
          title="Development Roadmap"
          description="A phased approach to building the OntoPhi intelligent computing ecosystem."
        />

        <Timeline items={roadmap} />
      </Container>
    </section>
  );
}
