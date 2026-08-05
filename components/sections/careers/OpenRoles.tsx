import Container from "@/components/ui/Container";
import Grid from "@/components/ui/Grid";
import FeatureCard from "@/components/ui/FeatureCard";
import SectionHeader from "@/components/ui/SectionHeader";

import { roles } from "@/content/careers";

export default function OpenRoles() {
  return (
    <section className="bg-gray-50 py-16">
      <Container>
        <SectionHeader
          badge="Open Positions"
          title="Current Opportunities"
          description="We're looking for curious researchers and engineers."
        />

        <Grid>
          {roles.map((role) => (
            <FeatureCard
              key={role.title}
              title={role.title}
              description={`${role.location} • ${role.type}`}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}
