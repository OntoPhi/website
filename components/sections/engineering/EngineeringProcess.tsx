import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Timeline from "@/components/ui/Timeline";

import { engineeringProcess } from "@/content/engineering";

export default function EngineeringProcess() {
  return (
    <section className="bg-gray-50 py-20 transition-colors duration-300 dark:bg-gray-900/40 sm:py-24">
      <Container>
        <SectionHeader
          badge="Engineering Process"
          title="From Idea to System"
          description="We turn ideas and research into reliable systems through disciplined design, implementation, optimization, and validation."
        />

        <div className="mt-12">
          <Timeline items={engineeringProcess} />
        </div>
      </Container>
    </section>
  );
}
