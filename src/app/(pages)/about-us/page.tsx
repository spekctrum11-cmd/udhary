import React from 'react';

export const metadata = {
  title: 'About Us | Udhary.com',
  description: 'Learn about Udhary.com, our mission, vision, and commitment to providing exceptional lending experiences.',
};

export default function AboutUsPage() {
  return (
    <main className="flex-1 bg-surface-container-lowest">
      {/* Header Section */}
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
            Who we are
          </span>
          <h1 className="text-display-lg font-display-lg text-primary mb-4">
            About <span className="text-secondary">Udhary.com</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Your first initial choice for loans due to our commitment and dedication to providing a great exceptional lending experience.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-gutter space-y-16">
          
          <div className="prose prose-lg prose-blue max-w-none text-on-surface-variant leading-relaxed text-center">
            <p className="text-xl mb-6 font-medium text-primary">
              At Udhary.com, we stand apart as your first initial choice for loans due to our commitment and dedication to providing a great exceptional lending experience. With competitive interest rates and a range of flexible loan options tailored to diverse needs, we ensure that our customers find the perfect financial solution.
            </p>
            <p className="mb-6">
              Our transparent and clear terms dispose of confusion, offering a comprehensive understanding of fees, penalties, and repayment schedules right from the start. Our smooth and streamlined online application process promises ease and convenience, while our quick and swift approval and disbursement of funds highlight our dedication to meeting your financial needs and requirements effectively.
            </p>
            <p>
              Backed by an exceptional customer support team, amazing customer reviews, and a focus on a responsible borrowing system, we strive to exceed expectations. Our extensive industry expertise and commitment to responsible lending practices make Udhary.com your reliable partner for securing the loan you need when you need it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-outline-variant/30 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-4xl">rocket_launch</span>
              </div>
              <h3 className="text-headline-md font-bold text-primary mb-2">Our Mission</h3>
              <p className="text-secondary font-medium mb-6 italic border-b border-outline-variant/30 pb-4">Time has changed</p>
              <p className="text-on-surface-variant leading-relaxed">
                Our mission at Udhary.com is to deliver accessible, transparent, and tailored financial products and services that meet the diverse needs of our customers. We strive to foster financial stability and growth by leveraging cutting-edge technology, industry expertise, and a customer-centric approach. We are dedicated to building lasting relationships based on trust, reliability, and excellence in service, ensuring that every interaction reflects our commitment to financial empowerment and success.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-deep-navy text-white p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary rounded-full blur-[80px] opacity-50"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-secondary-fixed text-4xl">visibility</span>
                </div>
                <h3 className="text-headline-md font-bold text-white mb-2">Our Vision</h3>
                <p className="text-secondary-fixed font-medium mb-6 italic border-b border-white/20 pb-4">Time has changed</p>
                <p className="opacity-90 leading-relaxed">
                  At Udhary.com, our vision is to be the foremost financial partner, empowering individuals and businesses to achieve their goals by providing innovative and personalized financial solutions. We aim to set new benchmarks in the industry through integrity, expertise, and a steadfast commitment to enhancing our customer's financial well-being.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
