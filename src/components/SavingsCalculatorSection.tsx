"use client";

import React, { useState, useEffect } from "react";

export function SavingsCalculatorSection() {
  const [currentInterest, setCurrentInterest] = useState<number>(16);
  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [tenureYears, setTenureYears] = useState<number>(3);

  const newInterestRate = 13.5;

  const [monthlySavings, setMonthlySavings] = useState(0);
  const [totalSaved, setTotalSaved] = useState(0);
  const [newEmi, setNewEmi] = useState(0);

  useEffect(() => {
    if (loanAmount > 0 && tenureYears > 0 && currentInterest > 0) {
      const months = tenureYears * 12;
      const rCurrent = currentInterest / 12 / 100;
      const emiCurrent = (loanAmount * rCurrent * Math.pow(1 + rCurrent, months)) / (Math.pow(1 + rCurrent, months) - 1);
      const rNew = newInterestRate / 12 / 100;
      const emiNew = (loanAmount * rNew * Math.pow(1 + rNew, months)) / (Math.pow(1 + rNew, months) - 1);

      const savings = emiCurrent - emiNew;
      const actualSavings = Math.max(0, savings);

      setNewEmi(Math.round(emiNew));
      setMonthlySavings(Math.round(actualSavings));
      setTotalSaved(Math.round(actualSavings * months));
    }
  }, [currentInterest, loanAmount, tenureYears]);

  const formatCurrency = (val: number) => {
    if (val >= 100000) return `₹${(val / 100000).toFixed(1)}L`;
    if (val >= 1000) return `₹${(val / 1000).toFixed(1)}K`;
    return `₹${val.toLocaleString('en-IN')}`;
  };

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-10 relative z-10">
          <h2 className="relative inline-block text-2xl md:text-4xl font-black mb-3 text-slate-900 tracking-tight z-10">
            How much can you save?

            {/* Sparkle Doodle */}
            <svg className="absolute -top-4 -left-6 md:-top-6 md:-left-8 w-6 h-6 md:w-8 md:h-8 text-emerald-400 -z-10 animate-[pulse_3s_ease-in-out_infinite]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M50 10 Q50 50 10 50 Q50 50 50 90 Q50 50 90 50 Q50 50 50 10" />
            </svg>

            {/* Plus Doodle */}
            <svg className="absolute -top-1 -right-6 md:-top-2 md:-right-8 w-4 h-4 md:w-5 md:h-5 text-rose-400 -z-10 rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="16" strokeLinecap="round">
              <path d="M 50 10 L 50 90 M 10 50 L 90 50" />
            </svg>

            {/* Dot Doodle */}
            <svg className="absolute top-4 -right-8 md:top-6 md:-right-12 w-2 h-2 md:w-3 md:h-3 text-blue-400 -z-10" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="50" r="50" />
            </svg>

            {/* Swoosh Underline Doodle */}
            <svg className="absolute -bottom-2 md:-bottom-3 left-1/2 -translate-x-1/2 w-[105%] h-3 md:h-4 text-amber-400 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
              <path d="M 5 15 Q 50 -2 95 15" />
            </svg>
          </h2>
          <p className="text-slate-600 text-sm md:text-base font-medium px-2 mt-2 md:mt-3">Refinance your existing loan with our partners and see instant savings.</p>
        </div>

        {/* Bento Grid Layout - Fully Asymmetric */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:auto-rows-fr">

          {/* Card 1: Total Interest Saved (Massive 2x2 Block) */}
          <div className="col-start-1 col-span-2 row-start-1 row-span-1 md:row-span-2 bg-slate-700 rounded-[1.25rem] p-5 md:p-6 flex flex-col justify-center items-center text-center">
            <p className="text-slate-400 font-bold mb-1 uppercase tracking-wider text-[10px] md:text-xs">Total Interest Saved</p>
            <div className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white tracking-tighter mb-2">
              {formatCurrency(totalSaved)}
            </div>
            <p className="text-slate-500 font-bold text-xs md:text-sm">Over {tenureYears} years</p>
          </div>

          {/* Card 2: Loan Amount (Super Wide 3x1 Block) */}
          <div className="col-start-1 col-span-2 row-start-2 row-span-1 md:col-start-1 md:col-span-3 md:row-start-3 md:row-span-1 bg-amber-200 rounded-[1.25rem] p-4 md:p-5 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-2">
              <label className="text-amber-900 font-bold text-sm sm:text-base md:text-lg">Outstanding Loan</label>
              <span className="text-xl sm:text-2xl md:text-3xl font-black text-amber-700 tracking-tight">{formatCurrency(loanAmount)}</span>
            </div>
            <div className="mt-2 md:mt-auto">
              <input
                id="loanAmount"
                aria-label="Outstanding Loan Amount"
                type="range" min="50000" max="5000000" step="50000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2.5 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-4 focus:ring-amber-500/20 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_2px_10px_rgba(0,0,0,0.15)] [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-amber-500 hover:[&::-webkit-slider-thumb]:scale-110 active:[&::-webkit-slider-thumb]:scale-95 [&::-webkit-slider-thumb]:transition-transform [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:shadow-[0_2px_10px_rgba(0,0,0,0.15)] [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-amber-500 [&::-moz-range-thumb]:transition-transform"
                style={{ background: `linear-gradient(to right, #f59e0b ${((loanAmount - 50000) / (5000000 - 50000)) * 100}%, #e9ce61ff ${((loanAmount - 50000) / (5000000 - 50000)) * 100}%)` }}
              />
              <div className="flex justify-between text-[10px] sm:text-xs text-amber-700/60 font-black mt-2">
                <span>₹50K</span><span>₹50L</span>
              </div>
            </div>
          </div>

          {/* Card 3: Interest Rate (Compact 1x1 Block) */}
          <div className="col-start-1 col-span-1 row-start-3 row-span-1 md:col-start-3 md:col-span-1 md:row-start-2 md:row-span-1 bg-emerald-200 rounded-[1.25rem] p-4 md:p-5 flex flex-col justify-between">
            <div>
              <label className="text-emerald-900 font-bold block mb-1 text-xs sm:text-sm md:text-base">Interest Rate</label>
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-emerald-700 block tracking-tight">{currentInterest}%</span>
            </div>
            <div className="mt-4 md:mt-3">
              <input
                id="currentInterest"
                aria-label="Current Interest Rate"
                type="range" min="8" max="24" step="0.5"
                value={currentInterest}
                onChange={(e) => setCurrentInterest(Number(e.target.value))}
                className="w-full h-2.5 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-4 focus:ring-emerald-500/20 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_2px_10px_rgba(0,0,0,0.15)] [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-emerald-500 hover:[&::-webkit-slider-thumb]:scale-110 active:[&::-webkit-slider-thumb]:scale-95 [&::-webkit-slider-thumb]:transition-transform [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:shadow-[0_2px_10px_rgba(0,0,0,0.15)] [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-emerald-500 [&::-moz-range-thumb]:transition-transform"
                style={{ background: `linear-gradient(to right, #10b981 ${((currentInterest - 8) / (24 - 8)) * 100}%, #6ba389ff ${((currentInterest - 8) / (24 - 8)) * 100}%)` }}
              />
              <div className="flex justify-between text-[10px] sm:text-xs text-emerald-700/60 font-black mt-2">
                <span>8%</span><span>24%</span>
              </div>
            </div>
          </div>

          {/* Card 4: Tenure (Compact 1x1 Block) */}
          <div className="col-start-1 col-span-1 row-start-4 row-span-1 md:col-start-4 md:col-span-1 md:row-start-3 md:row-span-1 bg-rose-200 rounded-[1.25rem] p-4 md:p-5 flex flex-col justify-between">
            <div>
              <label className="text-rose-900 font-bold block mb-1 text-xs sm:text-sm md:text-base">Tenure</label>
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-rose-700 block tracking-tight">
                {tenureYears} <span className="text-lg md:text-xl">{tenureYears === 1 ? 'Yr' : 'Yrs'}</span>
              </span>
            </div>
            <div className="mt-4 md:mt-3">
              <input
                id="tenureYears"
                aria-label="Tenure in Years"
                type="range" min="1" max="7" step="1"
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full h-2.5 rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-4 focus:ring-rose-500/20 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_2px_10px_rgba(0,0,0,0.15)] [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-rose-500 hover:[&::-webkit-slider-thumb]:scale-110 active:[&::-webkit-slider-thumb]:scale-95 [&::-webkit-slider-thumb]:transition-transform [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:shadow-[0_2px_10px_rgba(0,0,0,0.15)] [&::-moz-range-thumb]:border-[3px] [&::-moz-range-thumb]:border-rose-500 [&::-moz-range-thumb]:transition-transform"
                style={{ background: `linear-gradient(to right, #f43f5e ${((tenureYears - 1) / (7 - 1)) * 100}%, #d6a2a2ff ${((tenureYears - 1) / (7 - 1)) * 100}%)` }}
              />
              <div className="flex justify-between text-[10px] sm:text-xs text-rose-700/60 font-black mt-2">
                <span>1 Yr</span><span>7 Yrs</span>
              </div>
            </div>
          </div>

          {/* Card 5: Monthly Savings (Wide 2x1 Block) */}
          <div className="col-start-2 col-span-1 row-start-3 row-span-2 md:col-start-3 md:col-span-2 md:row-start-1 md:row-span-1 bg-blue-200 rounded-[1.25rem] p-4 md:p-5 flex flex-col md:flex-row items-center md:justify-between justify-center gap-2 md:gap-4 text-center md:text-left">
            <div>
              <p className="text-blue-900 font-bold text-xs sm:text-sm md:text-lg">Monthly Savings</p>
              <p className="text-blue-700/70 text-[10px] sm:text-xs font-bold leading-tight mt-0.5 md:mt-0">Every month</p>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-700 tracking-tight mt-1 md:mt-0">
              ₹{monthlySavings.toLocaleString('en-IN')}
            </div>
          </div>

          {/* Card 6: New EMI (Compact 1x1 Block) */}
          <div className="col-start-1 col-span-2 row-start-5 row-span-1 md:col-start-4 md:col-span-1 md:row-start-2 md:row-span-1 bg-violet-200 rounded-[1.25rem] p-4 md:p-5 flex flex-row md:flex-col justify-between items-center md:items-start gap-2 md:gap-3">
            <div>
              <p className="text-violet-900 font-bold text-xs sm:text-sm md:text-base">New EMI (Est.)</p>
              <p className="text-violet-700/70 text-[10px] sm:text-xs font-bold leading-tight mt-0.5">@ 13.5% int.</p>
            </div>
            <div className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-black text-violet-700 tracking-tight mt-auto">
              {formatCurrency(newEmi)}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
