import { ContactMethod, FAQ } from "@/types/contact";

export const contactMethods: ContactMethod[] = [
  {
    title: "General Inquiries",
    value: "hello@ontophi.com",
    description: "Questions about OntoPhi and our mission.",
  },
  {
    title: "Research",
    value: "research@ontophi.com",
    description: "Research collaborations and publications.",
  },
  {
    title: "Engineering",
    value: "engineering@ontophi.com",
    description: "Technology partnerships and engineering.",
  },
  {
    title: "Careers",
    value: "careers@ontophi.com",
    description: "Career opportunities at OntoPhi.",
  },
];

export const faqs: FAQ[] = [
  {
    question: "Does OntoPhi accept research collaborations?",
    answer: "Yes. We welcome collaborations from academia, industry, and independent researchers.",
  },
  {
    question: "Are your technologies open source?",
    answer: "Selected technologies and research initiatives will be released as open source.",
  },
  {
    question: "How can I join OntoPhi?",
    answer: "Visit the Careers page or contact us directly.",
  },
];
