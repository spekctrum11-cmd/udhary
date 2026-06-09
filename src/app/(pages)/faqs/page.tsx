import React from 'react';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata = {
  title: 'FAQs | Udhary.com',
  description: 'Frequently Asked Questions about Udhary.com loan products, eligibility and process.',
};

export default function FAQsPage() {
  const faqs = [
    {
      q: "What types of loans does Udhary.com offer?",
      a: "Udhary.com offers a diverse range of loan products tailored to various needs, including personal loans, business loans, home loans, loans against property, gold loans, education loans and vehicle loans."
    },
    {
      q: "What are the eligibility criteria to apply for a loan?",
      a: "Eligibility criteria may vary based on the type of loan. Generally, factors such as credit score, income, employment status and other financial aspects are considered to processing for loan."
    },
    {
      q: "How long does the loan approval process take?",
      a: "The approval timeframe may vary depending on the type of loan and the completeness of the application. Our smooth and streamlined process ensures quick decisions. In fact, many applicants easily receive approval within a few business days."
    },
    {
      q: "What interest rates can I expect?",
      a: "Interest rates vary based on several factors, including the type of loan, credit score, loan amount and term of loan. Udhary.com aims to offer the most competitive interest rates and provides the best rates to acquire loan."
    },
    {
      q: "Are there any prepayment penalties or hidden fees?",
      a: "Udhary.com is committed to transparency. We outline all associated fees, including prepayment penalties, if applicable, in the loan agreement. We believe in clear communication and strive to ensure there are no hidden costs for our borrowers."
    },
    {
      q: "What documents are required to apply for a loan?",
      a: "The specific documents required may vary depending on the loan type. Generally, you may need identification, proof of income, bank statements and other financial documents. Detailed document requirements are provided during the application process."
    },
    {
      q: "How do I repay my loan?",
      a: "Udhary.com offers various repayment options, including automatic bank withdrawals, online payments, or in-person payments. Loan repayment details are mentioned properly in your loan agreement."
    },
    {
      q: "Is there customer support available for loan inquiries?",
      a: "Yes, our dedicated customer support team is available to assist you with any loan-related inquiries or concerns. You can reach us via phone, email, or visit our nearest branch located within your consideration."
    },
    {
      q: "Does Udhary.com offer refinancing options for existing loans?",
      a: "Yes, depending on the loan type, Udhary.com may offer refinancing options to help you secure better terms, lower interest rates, or adjust the repayment schedule. Contact us for more information on refinancing options available for your specific loan."
    }
  ];

  return (
    <main className="flex-1 bg-surface-container-lowest">
      {/* Hero Section */}
                  {/* Elegant Ambient Background */}
      <section className="bg-slate-50 pt-20 pb-16 border-b border-slate-200 relative overflow-hidden">
        {/* Ambient Aurora Glows (Highly Visible) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[150px] -left-[100px] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[80px]"></div>
          <div className="absolute -bottom-[150px] -right-[100px] w-[500px] h-[500px] bg-orange-500/15 rounded-full blur-[80px]"></div>
        </div>
        
        {/* Crisp Top Highlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
        
        <div className="max-w-container-max mx-auto px-gutter text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-blue-500/10 text-primary font-bold text-xs tracking-widest uppercase rounded-full mb-6 border border-blue-500/20 shadow-sm backdrop-blur-sm">
            Support
          </span>
          <h1 className="text-display-lg font-display-lg text-primary mb-4">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Find answers to the most common questions about our loan products, application process and repayment options.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-gutter space-y-4">
          {faqs.map((faq, index) => (
            <FAQAccordion 
              key={index}
              question={faq.q}
              answer={faq.a}
              defaultOpen={index === 0}
            />
          ))}
          
          <div className="mt-16 text-center bg-surface-container-low p-8 rounded-2xl border border-outline-variant/30">
            <h3 className="text-headline-sm font-bold text-primary mb-2">Still have questions?</h3>
            <p className="text-on-surface-variant mb-6">Our dedicated support team is ready to help you with any inquiries.</p>
            <a href="/contact-us" className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-deep-navy transition-colors">
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
