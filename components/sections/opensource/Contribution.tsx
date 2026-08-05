import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Timeline from "@/components/ui/Timeline";

import { contributionSteps } from "@/content/opensource";

export default function Contribution() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeader
          badge="Community"
          title="How to Contribute"
          description="Everyone is welcome to participate in building the future of intelligent computing."
        />

        <Timeline items={contributionSteps} />
      </Container>
    </section>
  );
}
