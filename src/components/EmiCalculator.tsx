"use client";

import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, TrendingUp, PieChart as PieChartIcon } from "lucide-react";

// Darker Matte physical colors for the pie chart
const COLORS = ["#2e3641ff", "#64748b"]; // slate-700, slate-500

export default function EmiCalculator() {
  const [principal, setPrincipal] = useState<number>(250000);
  const [interestRate, setInterestRate] = useState<number>(10.5);
  const [tenure, setTenure] = useState<number>(20);

  const [emi, setEmi] = useState<number>(0);
  const [totalInterest, setTotalInterest] = useState<number>(0);
  const [totalPayment, setTotalPayment] = useState<number>(0);

  useEffect(() => {
    calculateEmi(principal, interestRate, tenure);
  }, [principal, interestRate, tenure]);

  const calculateEmi = (p: number, r: number, t: number) => {
    let emiValue = 0;
    let totalInterestValue = 0;
    let totalPaymentValue = 0;

    if (p > 0 && r > 0 && t > 0) {
      const monthlyRate = r / 12 / 100;
      const months = t * 12;
      emiValue = (p * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
      totalPaymentValue = emiValue * months;
      totalInterestValue = totalPaymentValue - p;
    }

    setEmi(Math.round(emiValue));
    setTotalInterest(Math.round(totalInterestValue));
    setTotalPayment(Math.round(totalPaymentValue));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount).replace("₹", "₹ "); // add space after rupee symbol
  };

  const chartData = [
    { name: "Principal", value: principal },
    { name: "Interest", value: totalInterest },
  ];

  // Heavier, darker 3D slider thumb
  const thumbClasses = "absolute top-1/2 -translate-y-1/2 w-full h-8 appearance-none bg-transparent cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-7 [&::-webkit-slider-thumb]:h-7 [&::-webkit-slider-thumb]:bg-gradient-to-b [&::-webkit-slider-thumb]:from-slate-200 [&::-webkit-slider-thumb]:to-slate-400 [&::-webkit-slider-thumb]:border-t-2 [&::-webkit-slider-thumb]:border-l-2 [&::-webkit-slider-thumb]:border-slate-100 [&::-webkit-slider-thumb]:border-b-[4px] [&::-webkit-slider-thumb]:border-slate-600 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_8px_12px_rgba(0,0,0,0.8),_inset_0_2px_4px_rgba(255,255,255,1)] hover:[&::-webkit-slider-thumb]:scale-105 active:[&::-webkit-slider-thumb]:from-slate-300 active:[&::-webkit-slider-thumb]:to-slate-500 transition-all z-10";

  return (
    <div className="w-full max-w-3xl mx-auto px-4 pt-6 pb-10 relative">

      {/* Main Darker 3D Matte Hardware Board */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-gradient-to-b from-slate-300 to-slate-500 text-slate-900 rounded-[12px] p-5 sm:p-6 shadow-[inset_0_4px_6px_rgba(255,255,255,0.9),_inset_0_-6px_8px_rgba(0,0,0,0.3),_0_20px_30px_rgba(0,0,0,0.4),_0_8px_12px_rgba(0,0,0,0.3)] border-t-[3px] border-l-[3px] border-slate-100 border-b-4 border-r-4 border-slate-700 relative"
      >
        {/* Subtle screw details with darker shadows */}
        <div className="absolute top-3 left-3 w-3 h-3 rounded-full bg-gradient-to-br from-slate-300 to-slate-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),_0_1px_1px_rgba(255,255,255,0.6)] border border-slate-600 flex items-center justify-center"><div className="w-1.5 h-[1px] bg-slate-900 rotate-45 shadow-[0_1px_0_rgba(255,255,255,0.4)]"></div></div>
        <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-gradient-to-br from-slate-300 to-slate-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),_0_1px_1px_rgba(255,255,255,0.6)] border border-slate-600 flex items-center justify-center"><div className="w-1.5 h-[1px] bg-slate-900 -rotate-12 shadow-[0_1px_0_rgba(255,255,255,0.4)]"></div></div>
        <div className="absolute bottom-3 left-3 w-3 h-3 rounded-full bg-gradient-to-br from-slate-300 to-slate-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),_0_1px_1px_rgba(255,255,255,0.6)] border border-slate-600 flex items-center justify-center"><div className="w-1.5 h-[1px] bg-slate-900 rotate-90 shadow-[0_1px_0_rgba(255,255,255,0.4)]"></div></div>
        <div className="absolute bottom-3 right-3 w-3 h-3 rounded-full bg-gradient-to-br from-slate-300 to-slate-600 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),_0_1px_1px_rgba(255,255,255,0.6)] border border-slate-600 flex items-center justify-center"><div className="w-1.5 h-[1px] bg-slate-900 rotate-12 shadow-[0_1px_0_rgba(255,255,255,0.4)]"></div></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch relative z-10">

          {/* Controls Section (Left Side) */}
          <div className="flex flex-col justify-center space-y-5 mt-1">

            {/* Principal Slider */}
            <div className="group">
              <div className="flex justify-between items-end mb-1.5">
                <label className="text-[12px] md:text-[13px] font-black text-slate-800 tracking-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
                  Loan Amount
                </label>
                {/* 3D Recessed Matte LCD - Darkened */}
                <div className="flex items-center bg-[#a3b09e] px-2 py-1 rounded-[4px] border-t-[5px] border-l-[5px] border-slate-700 border-b-[2px] border-r-[2px] border-slate-400 shadow-[inset_0_6px_12px_rgba(0,0,0,0.7),_0_1px_1px_rgba(255,255,255,0.8)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 pointer-events-none"></div>
                  <span className="text-slate-800 font-extrabold mr-1 text-xs drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]">₹</span>
                  <input
                    id="principal-number"
                    aria-label="Loan Amount Value"
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                    className="w-20 md:w-26 text-right bg-transparent text-sm md:text-base text-slate-800 font-black focus:outline-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]"
                    min={10000}
                    max={10000000}
                  />
                </div>
              </div>
              <div className="relative h-2.5 md:h-3 rounded-[10px] bg-slate-500 border-t-[3px] border-slate-700 border-b border-slate-300 shadow-[inset_0_4px_8px_rgba(0,0,0,0.7)]">
                <div
                  className="absolute top-0 left-0 h-full rounded-[10px] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] bg-slate-700"
                  style={{ width: `${((principal - 100000) / (10000000 - 100000)) * 100}%` }}
                ></div>
                <input
                  id="principal-range"
                  aria-label="Loan Amount Range"
                  type="range"
                  min="100000"
                  max="10000000"
                  step="50000"
                  value={principal}
                  onChange={(e) => setPrincipal(Number(e.target.value))}
                  className={thumbClasses}
                />
              </div>
              <div className="flex justify-between mt-2 text-[9px] font-black text-slate-700 uppercase drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
                <span>₹ 1L</span>
                <span>₹ 1Cr</span>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div className="group">
              <div className="flex justify-between items-end mb-1.5">
                <label className="text-[12px] md:text-[13px] font-black text-slate-800 tracking-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
                  Interest Rate
                </label>
                <div className="flex items-center bg-[#a3b09e] px-2 py-1 rounded-[4px] border-t-[5px] border-l-[5px] border-slate-700 border-b-[2px] border-r-[2px] border-slate-400 shadow-[inset_0_6px_12px_rgba(0,0,0,0.7),_0_1px_1px_rgba(255,255,255,0.8)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 pointer-events-none"></div>
                  <input
                    id="interest-number"
                    aria-label="Interest Rate Value"
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-10 md:w-12 text-right bg-transparent text-sm md:text-base text-slate-800 font-black focus:outline-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]"
                    min={1}
                    max={30}
                    step={0.1}
                  />
                  <span className="text-slate-800 font-extrabold ml-1 text-xs drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]">%</span>
                </div>
              </div>
              <div className="relative h-2.5 md:h-3 rounded-[10px] bg-slate-500 border-t-[3px] border-slate-700 border-b border-slate-300 shadow-[inset_0_4px_8px_rgba(0,0,0,0.7)]">
                <div
                  className="absolute top-0 left-0 h-full rounded-[10px] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] bg-slate-700"
                  style={{ width: `${((interestRate - 5) / (25 - 5)) * 100}%` }}
                ></div>
                <input
                  id="interest-range"
                  aria-label="Interest Rate Range"
                  type="range"
                  min="5"
                  max="25"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className={thumbClasses}
                />
              </div>
              <div className="flex justify-between mt-2 text-[9px] font-black text-slate-700 uppercase drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
                <span>5%</span>
                <span>25%</span>
              </div>
            </div>

            {/* Tenure Slider */}
            <div className="group">
              <div className="flex justify-between items-end mb-1.5">
                <label className="text-[12px] md:text-[13px] font-black text-slate-800 tracking-tight drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)]">
                  Loan Tenure
                </label>
                <div className="flex items-center bg-[#a3b09e] px-2 py-1 rounded-[4px] border-t-[5px] border-l-[5px] border-slate-700 border-b-[2px] border-r-[2px] border-slate-400 shadow-[inset_0_6px_12px_rgba(0,0,0,0.7),_0_1px_1px_rgba(255,255,255,0.8)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 pointer-events-none"></div>
                  <input
                    id="tenure-number"
                    aria-label="Loan Tenure Value"
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-10 md:w-12 text-right bg-transparent text-sm md:text-base text-slate-800 font-black focus:outline-none drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]"
                    min={1}
                    max={40}
                  />
                  <span className="text-slate-800 font-extrabold ml-1 text-xs drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]">Yrs</span>
                </div>
              </div>
              <div className="relative h-2.5 md:h-3 rounded-[10px] bg-slate-500 border-t-[3px] border-slate-700 border-b border-slate-300 shadow-[inset_0_4px_8px_rgba(0,0,0,0.7)]">
                <div
                  className="absolute top-0 left-0 h-full rounded-[10px] shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] bg-slate-700"
                  style={{ width: `${((tenure - 1) / (30 - 1)) * 100}%` }}
                ></div>
                <input
                  id="tenure-range"
                  aria-label="Loan Tenure Range"
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className={thumbClasses}
                />
              </div>
              <div className="flex justify-between mt-2 text-[9px] font-black text-slate-700 uppercase drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">
                <span>1 Yr</span>
                <span>30 Yrs</span>
              </div>
            </div>
          </div>

          {/* Results Section (Right Side) */}
          <div className="flex flex-col gap-4 justify-between mt-2 md:mt-0">

            {/* Deep Recessed Main LCD Result - Darkened */}
            <div className="bg-[#a3b09e] rounded-[6px] border-t-8 border-l-8 border-slate-700 border-b-2 border-r-2 border-slate-400 shadow-[inset_0_12px_24px_rgba(0,0,0,0.7),_0_2px_2px_rgba(255,255,255,0.8)] p-4 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 pointer-events-none"></div>

              <div className="flex items-center gap-1.5 mb-1.5 opacity-80 relative z-10">
                <Calculator className="w-3.5 h-3.5 text-slate-900" />
                <h3 className="text-[10px] md:text-[11px] font-black text-slate-900 uppercase tracking-widest drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">Monthly EMI</h3>
              </div>
              <div className="text-2xl md:text-3xl font-black tracking-tight text-slate-900 flex items-baseline overflow-hidden w-full relative z-10" style={{ textShadow: "0 1px 2px rgba(255,255,255,0.5)" }}>
                <span className="text-lg md:text-xl text-slate-800 font-extrabold shrink-0 mr-1.5 drop-shadow-none">₹</span>
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={emi}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="truncate"
                  >
                    {emi.toLocaleString("en-IN")}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* LCD Breakdown Displays */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#a3b09e] rounded-[4px] p-2.5 border-t-[5px] border-l-[5px] border-slate-700 border-b-[2px] border-r-[2px] border-slate-400 shadow-[inset_0_6px_12px_rgba(0,0,0,0.6),_0_1px_1px_rgba(255,255,255,0.8)] flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 pointer-events-none"></div>
                <span className="text-[8px] md:text-[9px] text-slate-900 flex items-center gap-1 mb-1 uppercase tracking-widest font-black opacity-90 relative z-10 drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
                  <TrendingUp className="w-2.5 h-2.5" /> Interest
                </span>
                <span className="text-[12px] md:text-[14px] font-black text-slate-900 truncate tracking-tight relative z-10" style={{ textShadow: "0 1px 2px rgba(255,255,255,0.5)" }}>
                  {formatCurrency(totalInterest)}
                </span>
              </div>

              <div className="bg-[#a3b09e] rounded-[4px] p-2.5 border-t-[5px] border-l-[5px] border-slate-700 border-b-[2px] border-r-[2px] border-slate-400 shadow-[inset_0_6px_12px_rgba(0,0,0,0.6),_0_1px_1px_rgba(255,255,255,0.8)] flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white/10 pointer-events-none"></div>
                <span className="text-[8px] md:text-[9px] text-slate-900 flex items-center gap-1 mb-1 uppercase tracking-widest font-black opacity-90 relative z-10 drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
                  <PieChartIcon className="w-2.5 h-2.5" /> Payment
                </span>
                <span className="text-[12px] md:text-[14px] font-black text-slate-900 truncate tracking-tight relative z-10" style={{ textShadow: "0 1px 2px rgba(255,255,255,0.5)" }}>
                  {formatCurrency(totalPayment)}
                </span>
              </div>
            </div>

            {/* Right-aligned Pie Chart Layout - Darkened */}
            <div className="bg-[#a3b09e] rounded-[5px] p-2.5 border-t-[5px] border-l-[5px] border-slate-700 border-b-2 border-r-2 border-slate-400 shadow-[inset_0_8px_16px_rgba(0,0,0,0.6),_0_2px_2px_rgba(255,255,255,0.8)] flex-1 min-h-[140px] flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-white/5 pointer-events-none z-0"></div>
              {/* Subtle matte scanline for LCD feel */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_50%,rgba(0,0,0,0.06)_50%)] bg-[length:100%_4px] pointer-events-none z-0"></div>

              <h3 className="text-[9px] font-black text-slate-800 mb-1 tracking-widest uppercase relative z-10 drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">Visual Split</h3>
              <div className="flex-1 w-full h-[120px] relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="35%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={45}
                      paddingAngle={3}
                      dataKey="value"
                      stroke="none"
                      animationBegin={0}
                      animationDuration={1000}
                    >
                      {chartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                          style={{ filter: 'drop-shadow(0px 3px 5px rgba(0,0,0,0.6))' }}
                        />
                      ))}
                    </Pie>
                    <RechartsTooltip
                      formatter={(value: any) => formatCurrency(Number(value))}
                      contentStyle={{
                        borderRadius: '3px',
                        border: '2px solid #475569',
                        boxShadow: '0 6px 12px rgba(0,0,0,0.5)',
                        backgroundColor: '#cbd5e1',
                        padding: '6px 10px',
                        color: '#0f172a',
                        fontWeight: 900,
                        fontSize: '11px'
                      }}
                      itemStyle={{ color: '#334155', fontWeight: 900 }}
                    />
                    <Legend
                      layout="vertical"
                      verticalAlign="middle"
                      align="right"
                      iconType="circle"
                      iconSize={6}
                      formatter={(value) => <span className="text-[9px] font-black text-slate-800 ml-1 uppercase tracking-wider drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)]">{value}</span>}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}
