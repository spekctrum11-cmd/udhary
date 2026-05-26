import React from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function FAQAccordion({ question, answer, defaultOpen = false }: FAQItemProps) {
  return (
    <details className="group bg-white rounded-xl soft-elevation overflow-hidden" open={defaultOpen}>
      <summary className="flex justify-between items-center p-6 cursor-pointer font-bold text-primary list-none">
        {question}
        <span className="material-symbols-outlined transition-transform group-open:rotate-180">
          expand_more
        </span>
      </summary>
      <div className="px-6 pb-6 text-on-surface-variant border-t border-surface-container">
        {answer}
      </div>
    </details>
  );
}
