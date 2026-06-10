import React from "react";

export function ComparisonEngineSection() {
  return (
    <section className="py-6 md:py-16 bg-white relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      
      {/* Smart, Tasteful Corporate Memphis Accents */}
      <div className="absolute inset-0 pointer-events-none z-20 md:z-0 overflow-hidden opacity-30 md:opacity-60">
        
        {/* Top Left: Memphis Arch */}
        <svg className="absolute top-[2%] md:top-[5%] -left-6 md:left-[5%] w-20 h-28 md:w-32 md:h-40 -rotate-6" viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
          <path fill="#7986CB" d="M10,120 L10,50 A40,40 0 0,1 90,50 L90,120 Z" />
          <path fill="none" stroke="#5C6BC0" strokeWidth="4" d="M20,130 L20,60 A40,40 0 0,1 100,60 L100,130 Z" />
        </svg>

        {/* Top Right: Accent Dots & Floating Cross */}
        <svg className="absolute top-[5%] md:top-[10%] -right-4 md:right-[5%] w-24 h-24 md:w-32 md:h-32 opacity-50 md:opacity-70" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <pattern id="memphis-dots-smart" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="3" fill="#81D4FA" />
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#memphis-dots-smart)" />
        </svg>
        <svg className="absolute top-[12%] md:top-[25%] right-[5%] md:right-[12%] text-[#FF8A65] w-8 h-8 md:w-8 md:h-8 rotate-45" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
          <path stroke="currentColor" strokeWidth="6" strokeLinecap="round" d="M25,5 L25,45 M5,25 L45,25" />
        </svg>

        {/* Bottom Left: Pill / Capsule */}
        <svg className="absolute bottom-[2%] md:bottom-[5%] -left-8 md:left-[10%] w-12 h-24 md:w-20 md:h-40 rotate-[35deg]" viewBox="0 0 100 200" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="80" height="180" rx="40" fill="#F48FB1" />
          <rect x="20" y="20" width="80" height="180" rx="40" fill="none" stroke="#D81B60" strokeWidth="3" strokeDasharray="10 5" />
        </svg>

        {/* Bottom Right: Thick Squiggle & Triangle */}
        <svg className="absolute bottom-[5%] md:bottom-[10%] -right-12 md:right-[8%] w-32 h-32 md:w-48 md:h-48 -rotate-12" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path stroke="#FFE082" strokeWidth="16" fill="none" strokeLinecap="round" strokeLinejoin="round" d="M20,100 Q40,60 60,100 T100,100 T140,100 T180,100" />
          <path stroke="#FFCA28" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" d="M25,105 Q45,65 65,105 T105,105 T145,105 T185,105" />
        </svg>
        <svg className="absolute bottom-[20%] md:bottom-[25%] right-[2%] md:right-[5%] w-12 h-12 md:w-20 md:h-20 -rotate-[25deg] hidden sm:block" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <polygon fill="none" stroke="#4DD0E1" strokeWidth="8" strokeLinejoin="round" points="50,10 90,90 10,90" />
        </svg>

      </div>

      <div className="max-w-5xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-12">
          <span className="inline-block px-3 py-1 bg-blue-50/80 backdrop-blur-sm text-blue-600 font-medium text-[10px] md:text-[11px] tracking-widest uppercase rounded-full mb-2 md:mb-3 border border-blue-100/50 shadow-sm">
            Compare & Save
          </span>
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-2 md:mb-4">
            Built for the way people <span className="text-blue-600">actually borrow.</span>
          </h2>
          <p className="text-[15px] md:text-lg text-slate-500 font-light max-w-md mx-auto leading-relaxed">
            Not a bank. Not a broker. A comparison engine that works for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {/* Item 1 */}
          <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/70 backdrop-blur-md shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-blue-200 active:border-blue-200 transition-all hover:-translate-y-1 active:-translate-y-1 hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)] active:shadow-[0_8px_30px_rgb(59,130,246,0.12)] duration-500 group flex flex-row items-center md:flex-col text-left md:text-center gap-4 md:gap-0 cursor-pointer">
            <div className="w-20 sm:w-24 md:w-auto shrink-0 flex items-center justify-center md:justify-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 group-active:text-blue-600 transition-colors duration-300 md:mb-4">
                5 <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">min</span>
              </div>
            </div>
            <div className="flex-1">
              <div className="text-[11px] md:text-[13px] font-bold text-slate-800 uppercase tracking-wider mb-1 md:mb-3">
                Average time to first offer
              </div>
              <p className="text-slate-500 text-[13px] md:text-[15px] leading-relaxed font-light">
                Fill once. See ranked offers from 50+ lenders immediately.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/70 backdrop-blur-md shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-blue-200 active:border-blue-200 transition-all hover:-translate-y-1 active:-translate-y-1 hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)] active:shadow-[0_8px_30px_rgb(59,130,246,0.12)] duration-500 group flex flex-row items-center md:flex-col text-left md:text-center gap-4 md:gap-0 cursor-pointer">
            <div className="w-20 sm:w-24 md:w-auto shrink-0 flex items-center justify-center md:justify-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 group-active:text-blue-600 transition-colors duration-300 md:mb-4">
                2.3%
              </div>
            </div>
            <div className="flex-1">
              <div className="text-[11px] md:text-[13px] font-bold text-slate-800 uppercase tracking-wider mb-1 md:mb-3">
                Average rate saved vs banks
              </div>
              <p className="text-slate-500 text-[13px] md:text-[15px] leading-relaxed font-light">
                Users who compare save meaningfully on every EMI, every month.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/70 backdrop-blur-md shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-blue-200 active:border-blue-200 transition-all hover:-translate-y-1 active:-translate-y-1 hover:shadow-[0_8px_30px_rgb(59,130,246,0.12)] active:shadow-[0_8px_30px_rgb(59,130,246,0.12)] duration-500 group flex flex-row items-center md:flex-col text-left md:text-center gap-4 md:gap-0 cursor-pointer">
            <div className="w-20 sm:w-24 md:w-auto shrink-0 flex items-center justify-center md:justify-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight group-hover:text-blue-600 group-active:text-blue-600 transition-colors duration-300 md:mb-4">
                Zero
              </div>
            </div>
            <div className="flex-1">
              <div className="text-[11px] md:text-[13px] font-bold text-slate-800 uppercase tracking-wider mb-1 md:mb-3">
                Impact on your credit score
              </div>
              <p className="text-slate-500 text-[13px] md:text-[15px] leading-relaxed font-light">
                Soft-check only. Apply confidently without affecting your CIBIL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
