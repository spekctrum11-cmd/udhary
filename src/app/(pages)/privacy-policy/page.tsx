import React from 'react';
import Image from 'next/image';

export const metadata = {
  title: 'Privacy Policy | Udhary.com',
  description: 'Read the privacy policy of Udhary.com.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-1 bg-surface-container-lowest">
      {/* Hero Section */}
      {/* Elegant Ambient Background */}
      <section className="bg-slate-50 pt-20 pb-12 border-b border-slate-200 relative overflow-hidden">
        {/* Ambient Aurora Glows (Highly Visible) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[150px] -left-[100px] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[80px]"></div>
          <div className="absolute -bottom-[150px] -right-[100px] w-[500px] h-[500px] bg-orange-500/15 rounded-full blur-[80px]"></div>
        </div>

        {/* Crisp Top Highlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>

        <div className="max-w-container-max mx-auto px-gutter text-center relative z-10">
          <h1 className="text-display-lg font-display-lg text-primary mb-4">Privacy <span className="text-secondary">Policy</span></h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">How we manage, protect, and use your personal information securely.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="pt-5 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto px-gutter">
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-outline-variant/20 prose prose-lg prose-blue max-w-none text-on-surface-variant">

            {/* Header Image */}
            <div className="w-full mb-10 rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30">
              <Image
                src="/Privacy-policy.jpeg"
                alt="Privacy Policy"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            <p>
              In this Privacy Policy, the words such as “we”, “our”, “company”, and “us” refer to <strong>Udhary.com</strong> and its undertaken system. Words such as “you” and “your” refer to Udhary.com’s user, customer, channel partner, etc.
            </p>
            <p>
              As a user of the website owned by Udhary.com, your privacy is important to us. This Privacy Policy discusses the information we collect about you, how we treat it, with whom we share it, and how we protect it.
            </p>
            <p>
              Udhary.com is our company’s domain name/brand name and <strong>Spectrum Fintech Private Limited</strong> is our company’s name.
            </p>
            <p>
              This Privacy Policy is published in compliance with the Information Technology Act, 2000; and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Information) Rules, 2011 (the “SPDI Rules”) as amended from time to time.
            </p>

            <h3 className="text-headline-sm font-bold text-primary mt-12 mb-4">Information Collection</h3>
            <p>In the normal course of business, we collect personal information about you from a variety of sources, including:</p>
            <ul>
              <li>Information from you, such as applications or other forms (which includes your name, address, marital status, employment, assets, and income)</li>
              <li>Information about you, your accounts, and your holdings and transactions that we receive from you or others, such as account custodians, brokers, and other financial services firms, banks, etc.</li>
            </ul>

            <h3 className="text-headline-sm font-bold text-primary mt-12 mb-4">How We Manage and Protect Your Personal Information</h3>
            <p>We do not sell information about current or former clients to third parties. We may disclose your personal information as necessary to:</p>
            <ul>
              <li>Effect, administer, or enforce a transaction that you request Udhary.com or authorize;</li>
              <li>Process or service a financial product or service that you request or authorize; or</li>
              <li>Maintain or service your account with us or with another entity.</li>
            </ul>
            <p>
              We restrict access to your personal information to our employees and to permit third parties who need to know that information to provide products or services for us... To protect your personal information from unauthorized access and use, we have adopted administrative, technical, and physical security procedures that comply with the Laws in India.
            </p>
            <div className="bg-primary/5 p-4 rounded-xl border border-primary/20 my-6">
              <strong>Note:</strong> All the KYC documents submitted by the customer remain in our system for a span of 7 days only. After that, the documents get removed from the system.
            </div>

            <h3 className="text-headline-sm font-bold text-primary mt-12 mb-4">What we can do with your personal information</h3>
            <ul>
              <li>Considering any application for an account or service;</li>
              <li>Carrying out our business functions and activities;</li>
              <li>Collecting amounts you owe us, including taking enforcement action;</li>
              <li>Exercising our rights and fulfilling our obligations under any agreement with you;</li>
              <li>Exercising our rights and fulfilling our obligations to comply with all applicable laws...</li>
            </ul>

            <h3 className="text-headline-sm font-bold text-primary mt-12 mb-4">Sharing of Personal Information with Third Parties</h3>
            <p>
              We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </p>

            <h3 className="text-headline-sm font-bold text-primary mt-12 mb-4">Data Grievance Officer</h3>
            <div className="bg-surface-blue p-6 rounded-2xl border border-outline-variant/30 mt-6">
              <p className="mb-2">In case you have any grievances concerning by applicable law on Information Technology and rules made there under, the name and contact details of the Grievance Officer are provided below:</p>
              <ul className="list-none pl-0">
                <li><strong>Name:</strong> Mrs. Seema Karush</li>
                <li><strong>Mob:</strong> 7669755501</li>
                <li><strong>Email:</strong> <a href="mailto:Care@Udhary.com" className="text-secondary font-bold">Care@Udhary.com</a></li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
