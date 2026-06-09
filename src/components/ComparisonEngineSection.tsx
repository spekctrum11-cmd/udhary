import React from "react";

export function ComparisonEngineSection() {
  return (
    <section className="py-6 md:py-8 bg-white relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      
      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 font-medium text-[10px] md:text-[11px] tracking-widest uppercase rounded-full mb-2 md:mb-3 border border-blue-100/50 shadow-sm">
            Compare & Save
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight mb-2 md:mb-3">
            Built for the way people <span className="text-blue-600">actually borrow.</span>
          </h2>
          <p className="text-[15px] md:text-base text-slate-500 font-light max-w-md mx-auto leading-relaxed">
            Not a bank. Not a broker. A comparison engine that works for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
          {/* Item 1 */}
          <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-slate-50/50 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-100 hover:border-blue-100 transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(59,130,246,0.08)] duration-500 group flex flex-row items-center md:flex-col text-left md:text-center gap-4 md:gap-0">
            <div className="w-20 sm:w-24 md:w-auto shrink-0 flex items-center justify-center md:justify-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-300 md:mb-3">
                5 <span className="text-xl sm:text-2xl lg:text-3xl font-bold">min</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="text-[11px] md:text-[13px] font-semibold text-slate-700 uppercase tracking-wider mb-1 md:mb-3">
                Average time to first offer
              </div>
              <p className="text-slate-500 text-[12px] md:text-[14px] leading-snug md:leading-relaxed font-light">
                Fill once. See ranked offers from 50+ lenders immediately.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-slate-50/50 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-100 hover:border-blue-100 transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(59,130,246,0.08)] duration-500 group flex flex-row items-center md:flex-col text-left md:text-center gap-4 md:gap-0">
            <div className="w-20 sm:w-24 md:w-auto shrink-0 flex items-center justify-center md:justify-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-300 md:mb-3">
                2.3%
              </div>
            </div>
            <div className="flex-1">
              <div className="text-[11px] md:text-[13px] font-semibold text-slate-700 uppercase tracking-wider mb-1 md:mb-3">
                Average rate saved vs banks
              </div>
              <p className="text-slate-500 text-[12px] md:text-[14px] leading-snug md:leading-relaxed font-light">
                Users who compare save meaningfully on every EMI, every month.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="p-4 md:p-6 rounded-2xl md:rounded-3xl bg-slate-50/50 shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-slate-100 hover:border-blue-100 transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(59,130,246,0.08)] duration-500 group flex flex-row items-center md:flex-col text-left md:text-center gap-4 md:gap-0">
            <div className="w-20 sm:w-24 md:w-auto shrink-0 flex items-center justify-center md:justify-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors duration-300 md:mb-3">
                Zero
              </div>
            </div>
            <div className="flex-1">
              <div className="text-[11px] md:text-[13px] font-semibold text-slate-700 uppercase tracking-wider mb-1 md:mb-3">
                Impact on your credit score
              </div>
              <p className="text-slate-500 text-[12px] md:text-[14px] leading-snug md:leading-relaxed font-light">
                Soft-check only. Apply confidently without affecting your CIBIL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
