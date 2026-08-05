import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Timeline from "@/components/ui/Timeline";

import { engineeringProcess } from "@/content/engineering";

export default function EngineeringProcess() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeader
          badge="Process"
          title="Engineering Process"
          description="Every engineering project follows a structured and measurable workflow."
        />

        <Timeline items={engineeringProcess} />
      </Container>
    </section>
  );
}
