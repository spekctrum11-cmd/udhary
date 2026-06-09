import React from "react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-6 md:py-8 bg-slate-50/50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <div className="bg-gradient-to-b from-blue-600 to-blue-800 rounded-[5px] border border-blue-900 p-5 md:p-6 shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),_0_8px_20px_rgba(37,99,235,0.2)] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <div className="text-center md:text-left flex-1">
            <h2 className="text-xl md:text-2xl font-extrabold text-white mb-1.5 tracking-tight" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>
              See Your Loan Options in Minutes
            </h2>
            <p className="text-blue-100 text-[12px] md:text-[13px] font-medium leading-snug">
              Join thousands of Indians who found their ideal loan through Udhary.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end shrink-0">
            <Link 
              href="/apply" 
              className="inline-flex items-center justify-center font-bold text-blue-900 bg-gradient-to-b from-white to-slate-100 border border-slate-300 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.1),_0_4px_8px_rgba(0,0,0,0.3)] hover:from-white hover:to-white active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.2)] active:translate-y-[2px] rounded-[5px] px-6 min-h-[32px] text-[11px] uppercase tracking-wide transition-all duration-200"
            >
              Check Eligibility Now
            </Link>
            <div className="flex items-center gap-1 mt-2 text-blue-200 opacity-90">
              <span className="material-symbols-outlined text-[14px]">verified</span>
              <p className="text-[9px] md:text-[10px] font-semibold tracking-wide uppercase">
                100% free. No impact on credit score.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
