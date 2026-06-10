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
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
          <h2 className="text-2xl md:text-4xl font-black mb-2 text-slate-900 tracking-tight">How much can you save?</h2>
          <p className="text-slate-600 text-sm md:text-base font-medium px-2">Refinance your existing loan with our partners and see instant savings.</p>
        </div>

        {/* Bento Grid Layout - Fully Asymmetric */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:auto-rows-fr">
          
          {/* Card 1: Total Interest Saved (Massive 2x2 Block) */}
          <div className="col-span-2 md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-2 bg-slate-900 rounded-[1.25rem] p-5 md:p-6 flex flex-col justify-center items-center text-center">
            <p className="text-slate-400 font-bold mb-1 uppercase tracking-wider text-[10px] md:text-xs">Total Interest Saved</p>
            <div className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white tracking-tighter mb-2">
              {formatCurrency(totalSaved)}
            </div>
            <p className="text-slate-500 font-bold text-xs md:text-sm">Over {tenureYears} years</p>
          </div>
          
          {/* Card 2: Loan Amount (Super Wide 3x1 Block) */}
          <div className="col-span-2 md:col-start-1 md:col-span-3 md:row-start-3 md:row-span-1 bg-amber-100 rounded-[1.25rem] p-4 md:p-5 flex flex-col justify-between">
            <div className="flex justify-between items-start mb-2">
              <label className="text-amber-900 font-bold text-sm sm:text-base md:text-lg">Outstanding Loan</label>
              <span className="text-xl sm:text-2xl md:text-3xl font-black text-amber-700 tracking-tight">{formatCurrency(loanAmount)}</span>
            </div>
            <div className="mt-2 md:mt-auto">
              <input 
                type="range" min="50000" max="5000000" step="50000" 
                value={loanAmount} 
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-amber-200 rounded-lg appearance-none cursor-pointer accent-amber-600"
              />
              <div className="flex justify-between text-[10px] sm:text-xs text-amber-700/60 font-black mt-2">
                <span>₹50K</span><span>₹50L</span>
              </div>
            </div>
          </div>

          {/* Card 3: Interest Rate (Compact 1x1 Block) */}
          <div className="col-span-1 md:col-start-3 md:col-span-1 md:row-start-2 md:row-span-1 bg-emerald-100 rounded-[1.25rem] p-4 md:p-5 flex flex-col justify-between">
            <div>
              <label className="text-emerald-900 font-bold block mb-1 text-xs sm:text-sm md:text-base">Interest Rate</label>
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-emerald-700 block tracking-tight">{currentInterest}%</span>
            </div>
            <div className="mt-4 md:mt-3">
              <input 
                type="range" min="8" max="24" step="0.5" 
                value={currentInterest} 
                onChange={(e) => setCurrentInterest(Number(e.target.value))}
                className="w-full h-2 bg-emerald-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[10px] sm:text-xs text-emerald-700/60 font-black mt-2">
                <span>8%</span><span>24%</span>
              </div>
            </div>
          </div>

          {/* Card 4: Tenure (Compact 1x1 Block) */}
          <div className="col-span-1 md:col-start-4 md:col-span-1 md:row-start-3 md:row-span-1 bg-rose-100 rounded-[1.25rem] p-4 md:p-5 flex flex-col justify-between">
            <div>
              <label className="text-rose-900 font-bold block mb-1 text-xs sm:text-sm md:text-base">Tenure</label>
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-rose-700 block tracking-tight">
                {tenureYears} <span className="text-lg md:text-xl">{tenureYears === 1 ? 'Yr' : 'Yrs'}</span>
              </span>
            </div>
            <div className="mt-4 md:mt-3">
              <input 
                type="range" min="1" max="7" step="1" 
                value={tenureYears} 
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full h-2 bg-rose-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
              />
              <div className="flex justify-between text-[10px] sm:text-xs text-rose-700/60 font-black mt-2">
                <span>1 Yr</span><span>7 Yrs</span>
              </div>
            </div>
          </div>

          {/* Card 5: Monthly Savings (Wide 2x1 Block) */}
          <div className="col-span-1 md:col-start-3 md:col-span-2 md:row-start-1 md:row-span-1 bg-blue-100 rounded-[1.25rem] p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-4">
            <div>
              <p className="text-blue-900 font-bold text-xs sm:text-sm md:text-lg">Monthly Savings</p>
              <p className="text-blue-700/70 text-[10px] sm:text-xs font-bold leading-tight mt-0.5 md:mt-0">Every month</p>
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-black text-blue-700 tracking-tight mt-1 md:mt-0">
              ₹{monthlySavings.toLocaleString('en-IN')}
            </div>
          </div>

          {/* Card 6: New EMI (Compact 1x1 Block) */}
          <div className="col-span-1 md:col-start-4 md:col-span-1 md:row-start-2 md:row-span-1 bg-violet-100 rounded-[1.25rem] p-4 md:p-5 flex flex-col justify-between gap-2 md:gap-3">
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
