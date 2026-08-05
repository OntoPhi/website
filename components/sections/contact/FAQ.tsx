import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

import { faqs } from "@/content/contact";

export default function FAQ() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          description="Quick answers to common questions."
        />

        <div className="mx-auto mt-12 max-w-4xl space-y-8">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
