import { FAQAccordion } from "@/components/FAQAccordion";

export function FAQSection() {
  return (
    <section className="py-2 lg:py-8 bg-surface-blue">
      <div className="max-w-3xl mx-auto px-gutter">
        <div className="text-center mb-6 lg:mb-12">
          <h2 className="text-headline-md font-headline-md text-primary">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          <FAQAccordion
            question="What types of loans does Udhary.com offer?"
            answer="Udhary.com offers a diverse range of loan products tailored to various needs, including personal loans, business loans, home loans, loans against property, gold loans, education loans, and vehicle loans."
            defaultOpen
          />
          <FAQAccordion
            question="What are the eligibility criteria to apply?"
            answer="Eligibility criteria vary based on the loan type. Generally, factors like credit score, monthly income, employment status, and age (typically 21-60 years) are considered during processing."
          />
          <FAQAccordion
            question="How long does the approval process take?"
            answer="Our smooth and streamlined process ensures quick decisions. In fact, many applicants receive preliminary approval within a few business days if documentation is complete."
          />
        </div>
        <div className="mt-6 lg:mt-12 text-center">
          <a href="/faqs" className="text-secondary font-bold inline-flex items-center gap-2 hover:underline">
            View All FAQs <span className="material-symbols-outlined">arrow_right_alt</span>
          </a>
        </div>
      </div>
    </section>
  );
}
