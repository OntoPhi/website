import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Timeline from "@/components/ui/Timeline";

import { hiringSteps } from "@/content/careers";

export default function HiringProcess() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeader
/*          badge="Hiring Process"
          title="Simple & Transparent"
          description="Our hiring process is designed to identify talent while respecting your time." */
        />

        <Timeline items={hiringSteps} />
      </Container>
    </section>
  );
}
