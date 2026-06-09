import React from "react";

export function ComparisonEngineSection() {
  return (
    <section className="py-6 md:py-8 bg-white relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto px-8 md:px-12 lg:px-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 font-medium text-[10px] tracking-widest uppercase rounded-full mb-2 border border-blue-100/50 shadow-sm">
            Compare & Save
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-2">
            Built for the way people <span className="text-blue-600">actually borrow.</span>
          </h2>
          <p className="text-base text-slate-500 font-light">
            Not a bank. Not a broker. A comparison engine that works for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-3 lg:gap-4 text-center">
          {/* Item 1 */}
          <div className="p-4 md:p-5 rounded-2xl bg-slate-50/50 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-100 hover:border-blue-100 transition-all hover:-translate-y-1 hover:shadow-[0_4px_20px_rgb(59,130,246,0.08)] duration-500 group">
            <div className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-1 group-hover:text-blue-600 transition-colors duration-300">
              5 min
            </div>
            <div className="text-[11px] md:text-[12px] font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Average time to first offer
            </div>
            <p className="text-slate-500 text-[13px] leading-snug font-light">
              Fill once. See ranked offers from 50+ lenders immediately.
            </p>
          </div>

          {/* Item 2 */}
          <div className="p-4 md:p-5 rounded-2xl bg-slate-50/50 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-100 hover:border-blue-100 transition-all hover:-translate-y-1 hover:shadow-[0_4px_20px_rgb(59,130,246,0.08)] duration-500 group">
            <div className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-1 group-hover:text-blue-600 transition-colors duration-300">
              2.3%
            </div>
            <div className="text-[11px] md:text-[12px] font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Average rate saved vs bank quotes
            </div>
            <p className="text-slate-500 text-[13px] leading-snug font-light">
              Users who compare save meaningfully on every EMI, every month.
            </p>
          </div>

          {/* Item 3 */}
          <div className="p-4 md:p-5 rounded-2xl bg-slate-50/50 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-100 hover:border-blue-100 transition-all hover:-translate-y-1 hover:shadow-[0_4px_20px_rgb(59,130,246,0.08)] duration-500 group">
            <div className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight mb-1 group-hover:text-blue-600 transition-colors duration-300">
              Zero
            </div>
            <div className="text-[11px] md:text-[12px] font-semibold text-slate-700 uppercase tracking-wider mb-2">
              Impact on your credit score
            </div>
            <p className="text-slate-500 text-[13px] leading-snug font-light">
              Soft-check only. Apply confidently without affecting your CIBIL.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
