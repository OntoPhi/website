export interface ContactMethod {
  title: string;
  value: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const contactMethods: ContactMethod[] = [
  {
    title: "General Inquiries",
    value: "hello@ontophi.com",
    description: "Questions about Ontophi and our mission."
  },
  {
    title: "Research",
    value: "research@ontophi.com",
    description: "Research collaborations and publications."
  },
  {
    title: "Engineering",
    value: "engineering@ontophi.com",
    description: "Technology partnerships and engineering."
  },
  {
    title: "Careers",
    value: "careers@ontophi.com",
    description: "Career opportunities at Ontophi."
  }
];

export const faqs: FAQItem[] = [
  {
    question: "Does Ontophi accept research collaborations?",
    answer: "Yes. We welcome collaborations from academia, industry, and independent researchers."
  },
  {
    question: "Are your technologies open source?",
    answer: "Selected technologies and research datasets will be released as open source."
  },
  {
    question: "How can I join Ontophi?",
    answer: "Visit our Careers page to view current open directory vacancies."
  }
];

