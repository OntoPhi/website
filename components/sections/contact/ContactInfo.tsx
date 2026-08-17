import Container from "@/components/ui/Container";
import Grid from "@/components/ui/Grid";
import FeatureCard from "@/components/ui/FeatureCard";
import SectionHeader from "@/components/ui/SectionHeader";

import { contactMethods } from "@/content/contact";

export default function ContactInfo() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeader
          badge="Get in Touch"
          title="Contact Information"
          description="Reach the right team for your inquiry."
        />

        <Grid>
          {contactMethods.map((item) => (
            <FeatureCard
              key={item.title}
              title={item.title}
              description={
                <div className="flex flex-col gap-2">
                  <a 
                    href={`mailto:${item.value}`} 
                    className="text-blue-600 hover:underline font-medium break-all"
                  >
                    {item.value}
                  </a>
                  <p className="text-gray-500 text-sm">
                    {item.description}
                  </p>
                </div>
              }
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

