import React from 'react';

export const metadata = {
  title: 'Refund Policy | Udhary.com',
  description: 'Read the refund policy for application fees, loan processing fees, and other charges at Udhary.com.',
};

export default function RefundPolicyPage() {
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
            Commitment
          </span>
          <h1 className="text-display-lg font-display-lg text-primary mb-4">
            Refund <span className="text-secondary">Policy</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Clear and transparent policies for our customers.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-gutter">
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-outline-variant/20 prose prose-lg prose-blue max-w-none text-on-surface-variant">
            
            <h3 className="text-headline-sm font-bold text-primary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">payments</span> Application Fees
            </h3>
            <ul className="mb-8">
              <li>Application fees are non-refundable once the loan application process has commenced.</li>
              <li>In case of a rejected application or withdrawal before the processing begins, a refund may be considered, subject to a deduction for administrative expenses.</li>
            </ul>

            <h3 className="text-headline-sm font-bold text-primary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">account_balance</span> Loan Processing Fees
            </h3>
            <ul className="mb-8">
              <li>Once the loan processing has commenced, processing fees are non-refundable.</li>
              <li>If the loan is not approved, a refund may be provided, excluding any expenses incurred during the processing of the application.</li>
            </ul>

            <h3 className="text-headline-sm font-bold text-primary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">currency_exchange</span> Interest and Principal Repayments
            </h3>
            <p className="mb-8">
              Refunds for interest and principal repayments are not applicable, as these are considered as payments towards the borrowed funds.
            </p>

            <h3 className="text-headline-sm font-bold text-primary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">cancel</span> Cancellation of Loan Agreement
            </h3>
            <p className="mb-8">
              In the event of a loan agreement cancellation before disbursement, any fees paid will be refunded, less processing charges.
            </p>

            <h3 className="text-headline-sm font-bold text-primary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">send_money</span> Disbursement and Utilization
            </h3>
            <p className="mb-8">
              Once the loan amount is disbursed, no refunds are applicable as the funds are considered utilized by the borrower.
            </p>

            <h3 className="text-headline-sm font-bold text-primary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">support_agent</span> Refund Request Process
            </h3>
            <ul className="mb-8">
              <li>Refund requests must be submitted in writing to our customer support department.</li>
              <li>Refund eligibility will be assessed on a case-by-case basis.</li>
              <li>Processing times for refunds may vary.</li>
            </ul>

            <h3 className="text-headline-sm font-bold text-primary mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary">contact_mail</span> Contact Information
            </h3>
            <p className="mb-8">
              For refund requests or further clarification, please contact our customer support team at <a href="mailto:Care@Udhary.com" className="text-secondary font-bold">Care@Udhary.com</a> or call <span className="font-bold">[+91 7669755501]</span>.
            </p>

            <div className="bg-surface-blue p-6 rounded-2xl border border-outline-variant/30 text-sm mt-8">
              <p>
                <strong>Please note</strong> that this Refund Policy is subject to change, and any revisions will be updated on our website. It is the responsibility of users to review the policy periodically for changes.
              </p>
              <p className="mt-2 font-medium text-primary">
                Thank you for choosing Udhary.com. We appreciate the opportunity to assist you with your financial needs.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
