import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'About Us | Udhary.com',
  description: 'Learn about Udhary.com, our mission, vision and commitment to providing exceptional lending experiences.',
};

export default function AboutUsPage() {
  return (
    <main className="flex-1 bg-slate-50/50">
      {/* Header Section - Premium Compressed */}
      <section className="bg-gradient-to-b from-white to-slate-50 pt-16 pb-12 border-b border-slate-200 relative overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        {/* Crisp Top Highlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        
        <div className="max-w-5xl mx-auto px-4 md:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-b from-blue-50 to-blue-100 text-blue-700 font-bold text-[11px] tracking-widest uppercase rounded-[5px] mb-4 border border-blue-300 shadow-[inset_0_1px_1px_rgba(255,255,255,1),_0_2px_4px_rgba(0,0,0,0.05)]">
            Who we are
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">
            About <span className="text-blue-600">Udhary.com</span>
          </h1>
          <p className="text-slate-500 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
            Your premier choice for loans, dedicated to providing an exceptional lending experience through speed, transparency and trust.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4 md:px-8 space-y-12">
          
          {/* Core Values Section - Beautiful & Compressed */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* Radical Transparency */}
            <div className="bg-gradient-to-b from-white to-slate-50 border border-slate-200 rounded-[5px] p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,1),_0_4px_10px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3 border-b border-slate-100 pb-3">
                <div className="w-8 h-8 rounded-[5px] bg-blue-50 border border-blue-100 flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]">
                  <span className="material-symbols-outlined text-blue-600 text-[18px]">policy</span>
                </div>
                <h4 className="text-slate-800 font-extrabold text-[13px] tracking-wide uppercase">Radical Transparency</h4>
              </div>
              <p className="text-slate-500 text-[12px] font-medium leading-relaxed">
                No hidden charges or biased recommendations. We show you exactly what you pay.
              </p>
            </div>

            {/* Speed at Core */}
            <div className="bg-gradient-to-b from-white to-slate-50 border border-slate-200 rounded-[5px] p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,1),_0_4px_10px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3 border-b border-slate-100 pb-3">
                <div className="w-8 h-8 rounded-[5px] bg-orange-50 border border-orange-100 flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]">
                  <span className="material-symbols-outlined text-orange-600 text-[18px]">flash_on</span>
                </div>
                <h4 className="text-slate-800 font-extrabold text-[13px] tracking-wide uppercase">Speed at Core</h4>
              </div>
              <p className="text-slate-500 text-[12px] font-medium leading-relaxed">
                Time is money. Our technology matches you with the right lender in minutes.
              </p>
            </div>

            {/* User First */}
            <div className="bg-gradient-to-b from-white to-slate-50 border border-slate-200 rounded-[5px] p-5 shadow-[inset_0_1px_1px_rgba(255,255,255,1),_0_4px_10px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3 border-b border-slate-100 pb-3">
                <div className="w-8 h-8 rounded-[5px] bg-purple-50 border border-purple-100 flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]">
                  <span className="material-symbols-outlined text-purple-600 text-[18px]">favorite</span>
                </div>
                <h4 className="text-slate-800 font-extrabold text-[13px] tracking-wide uppercase">User First</h4>
              </div>
              <p className="text-slate-500 text-[12px] font-medium leading-relaxed">
                We work for you, not the banks. Your financial well-being is our primary objective.
              </p>
            </div>
          </div>

          {/* About Text Block - Skeuomorphic Panel */}
          <div className="bg-gradient-to-b from-white to-slate-50 border border-slate-300 rounded-[5px] p-6 md:p-8 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),_0_8px_20px_rgba(0,0,0,0.06)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
            <h2 className="text-xl font-extrabold text-slate-800 mb-4 tracking-tight">Setting a New Standard in Lending</h2>
            <div className="grid md:grid-cols-2 gap-6 text-[13px] text-slate-600 font-medium leading-relaxed">
              <p>
                At Udhary.com, we stand apart as your first choice for loans. With competitive interest rates and a range of flexible loan options tailored to diverse needs, we ensure that our customers find the perfect financial solution without the traditional red tape.
              </p>
              <p>
                Our transparent terms dispose of confusion, offering a comprehensive understanding of fees, penalties and repayment schedules right from the start. Our smooth online application process promises ease and convenience, while our quick approval and disbursement highlight our dedication to meeting your financial needs.
              </p>
            </div>
          </div>

          {/* Mission & Vision - Compressed Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Mission Card */}
            <div className="bg-gradient-to-b from-white to-slate-50 border border-slate-300 rounded-[5px] p-6 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),_0_6px_15px_rgba(0,0,0,0.05)] relative group hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-4">
                <div>
                  <h3 className="text-lg font-extrabold text-slate-800 tracking-tight uppercase">Our Mission</h3>
                  <p className="text-blue-600 text-[10px] font-bold tracking-widest uppercase mt-0.5">Empowering Growth</p>
                </div>
                <div className="w-10 h-10 bg-blue-50 border border-blue-100 rounded-[5px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] group-hover:bg-blue-600 transition-colors">
                  <span className="material-symbols-outlined text-blue-600 group-hover:text-white transition-colors">rocket_launch</span>
                </div>
              </div>
              <p className="text-slate-600 text-[13px] font-medium leading-relaxed">
                To deliver accessible, transparent and tailored financial products that meet diverse needs. We strive to foster financial stability by leveraging cutting-edge technology and a customer-centric approach, building lasting relationships based on trust and reliability.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 rounded-[5px] p-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_8px_20px_rgba(0,0,0,0.2)] relative group hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-[40px] pointer-events-none"></div>
              
              <div className="flex items-center justify-between mb-4 border-b border-slate-700 pb-4 relative z-10">
                <div>
                  <h3 className="text-lg font-extrabold text-white tracking-tight uppercase">Our Vision</h3>
                  <p className="text-blue-400 text-[10px] font-bold tracking-widest uppercase mt-0.5">Setting Benchmarks</p>
                </div>
                <div className="w-10 h-10 bg-slate-700 border border-slate-600 rounded-[5px] flex items-center justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.05)] group-hover:bg-blue-500 transition-colors">
                  <span className="material-symbols-outlined text-white">visibility</span>
                </div>
              </div>
              <p className="text-slate-300 text-[13px] font-medium leading-relaxed relative z-10">
                To be the foremost financial partner, empowering individuals and businesses to achieve their goals through innovative solutions. We aim to set new benchmarks in the industry through integrity, expertise and a steadfast commitment to enhancing financial well-being.
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

