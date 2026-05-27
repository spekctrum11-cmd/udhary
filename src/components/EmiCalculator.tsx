"use client";

import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Sparkles, TrendingUp, PieChart as PieChartIcon } from "lucide-react";

// True blue and warm orange
const COLORS = ["#3b82f6", "#fb923c"];

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
    { name: "Principal Amount", value: principal },
    { name: "Total Interest", value: totalInterest },
  ];

  // Custom slider background for light mode track fill
  const getSliderStyle = (value: number, min: number, max: number) => {
    const percentage = ((value - min) / (max - min)) * 100;
    return {
      background: `linear-gradient(to right, #3b82f6 ${percentage}%, #fefeffff ${percentage}%)`,
    };
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 pt-8 pb-12 lg:pt-12 lg:pb-20 relative">

      {/* Main Unified Calculator Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="bg-blue-200 text-slate-900 rounded-[1.5rem] md:rounded-[2.5rem] p-4 sm:p-5 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden"
      >
        {/* Subtle corner gradients for "true blue and white" */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100 via-blue-50/50 to-transparent rounded-full blur-3xl opacity-80 -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-50 to-transparent rounded-full blur-3xl opacity-80 translate-y-1/3 -translate-x-1/3"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-12 items-stretch relative z-10">

          {/* Controls Section (Left Side) */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-5 md:space-y-10">
            {/* Principal Slider */}
            <div className="group">
              <div className="flex justify-between items-center md:items-end mb-2 md:mb-4">
                <div>
                  <label className="text-[15px] md:text-lg font-bold text-slate-800 flex items-center">
                    Loan Amount
                  </label>
                  <p className="hidden md:block text-sm text-slate-500 mt-1">Total amount you want to borrow</p>
                </div>
                <div className="flex items-center bg-slate-50 px-2 py-1 md:px-4 md:py-2 rounded-lg md:rounded-xl border border-slate-200 shadow-sm transition-all group-hover:border-blue-300">
                  <span className="text-slate-500 font-medium mr-1 md:mr-2 text-sm md:text-lg">₹</span>
                  <input
                    type="number"
                    value={principal}
                    onChange={(e) => setPrincipal(Number(e.target.value))}
                    className="w-20 sm:w-28 md:w-40 text-right bg-transparent text-base md:text-xl text-slate-800 font-extrabold focus:outline-none"
                    min={10000}
                    max={10000000}
                  />
                </div>
              </div>
              <div className="relative h-2 rounded-full bg-slate-200">
                <input
                  type="range"
                  min="100000"
                  max="10000000"
                  step="50000"
                  value={principal}
                  onChange={(e) => setPrincipal(Number(e.target.value))}
                  style={getSliderStyle(principal, 100000, 10000000)}
                  className="absolute top-0 w-full h-full appearance-none bg-transparent cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md hover:[&::-webkit-slider-thumb]:scale-125 transition-all"
                />
              </div>
              <div className="flex justify-between mt-3 text-sm font-medium text-slate-400">
                <span>₹ 1L</span>
                <span>₹ 1Cr</span>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div className="group">
              <div className="flex justify-between items-center md:items-end mb-2 md:mb-4">
                <div>
                  <label className="text-[15px] md:text-lg font-bold text-slate-800 flex items-center">
                    Interest Rate
                  </label>
                  <p className="hidden md:block text-sm text-slate-500 mt-1">Annual percentage rate</p>
                </div>
                <div className="flex items-center bg-slate-50 px-2 py-1 md:px-4 md:py-2 rounded-lg md:rounded-xl border border-slate-200 shadow-sm transition-all group-hover:border-blue-300">
                  <input
                    type="number"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-12 sm:w-16 md:w-24 text-right bg-transparent text-base md:text-xl text-slate-800 font-extrabold focus:outline-none"
                    min={1}
                    max={30}
                    step={0.1}
                  />
                  <span className="text-slate-500 font-medium ml-1 md:ml-2 text-sm md:text-lg">%</span>
                </div>
              </div>
              <div className="relative h-2 rounded-full bg-slate-200">
                <input
                  type="range"
                  min="5"
                  max="25"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  style={getSliderStyle(interestRate, 5, 25)}
                  className="absolute top-0 w-full h-full appearance-none bg-transparent cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md hover:[&::-webkit-slider-thumb]:scale-125 transition-all"
                />
              </div>
              <div className="flex justify-between mt-3 text-sm font-medium text-slate-400">
                <span>5%</span>
                <span>25%</span>
              </div>
            </div>

            {/* Tenure Slider */}
            <div className="group">
              <div className="flex justify-between items-center md:items-end mb-2 md:mb-4">
                <div>
                  <label className="text-[15px] md:text-lg font-bold text-slate-800 flex items-center">
                    Loan Tenure
                  </label>
                  <p className="hidden md:block text-sm text-slate-500 mt-1">Duration of the loan</p>
                </div>
                <div className="flex items-center bg-slate-50 px-2 py-1 md:px-4 md:py-2 rounded-lg md:rounded-xl border border-slate-200 shadow-sm transition-all group-hover:border-blue-300">
                  <input
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-12 sm:w-16 md:w-24 text-right bg-transparent text-base md:text-xl text-slate-800 font-extrabold focus:outline-none"
                    min={1}
                    max={40}
                  />
                  <span className="text-slate-500 font-medium ml-1 md:ml-2 text-sm md:text-lg">Yrs</span>
                </div>
              </div>
              <div className="relative h-2 rounded-full bg-slate-200">
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  style={getSliderStyle(tenure, 1, 30)}
                  className="absolute top-0 w-full h-full appearance-none bg-transparent cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-[3px] [&::-webkit-slider-thumb]:border-blue-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-md hover:[&::-webkit-slider-thumb]:scale-125 transition-all"
                />
              </div>
              <div className="flex justify-between mt-3 text-sm font-medium text-slate-400">
                <span>1 Yr</span>
                <span>30 Yrs</span>
              </div>
            </div>
          </div>

          {/* Results Section (Right Side) */}
          <div className="lg:col-span-6 flex flex-col gap-3 md:gap-6">

            {/* Top row: EMI Highlight & Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">

              {/* Big EMI Highlight Box */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-[1.25rem] md:rounded-3xl p-4 md:p-6 border border-blue-400/20 shadow-lg flex flex-col justify-center text-white">
                <div className="flex items-center gap-1.5 md:gap-2 mb-1 md:mb-2">
                  <Calculator className="w-3.5 h-3.5 md:w-5 md:h-5 text-blue-100" />
                  <h3 className="text-[11px] md:text-sm font-medium text-blue-100 uppercase tracking-wider">Monthly EMI</h3>
                </div>
                <div className="text-xl sm:text-2xl md:text-4xl lg:text-4xl font-black tracking-tight flex items-baseline overflow-hidden w-full">
                  <span className="text-base md:text-2xl text-blue-200 font-medium shrink-0 mr-1">₹</span>
                  <AnimatePresence mode="popLayout">
                    <motion.span
                      key={emi}
                      initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                      transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                      className="text-white truncate"
                    >
                      {emi.toLocaleString("en-IN")}
                    </motion.span>
                  </AnimatePresence>
                </div>
              </div>

              {/* Breakdown Stack (Side-by-side on Mobile) */}
              <div className="grid grid-cols-2 md:grid-cols-1 md:flex md:flex-col gap-2.5 md:gap-4">
                <div className="bg-slate-50 rounded-xl md:rounded-2xl p-2.5 md:p-4 border border-slate-100 hover:bg-slate-100 transition-colors flex-1 flex flex-col justify-center">
                  <span className="text-[9px] md:text-xs text-slate-500 flex items-center gap-1 md:gap-2 mb-0.5 md:mb-1 uppercase tracking-wide font-bold">
                    <TrendingUp className="w-2.5 h-2.5 md:w-4 md:h-4 text-blue-500" /> Total Interest
                  </span>
                  <motion.span
                    key={totalInterest}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[14px] sm:text-base md:text-2xl font-bold text-slate-800 truncate"
                  >
                    {formatCurrency(totalInterest)}
                  </motion.span>
                </div>

                <div className="bg-slate-50 rounded-xl md:rounded-2xl p-2.5 md:p-4 border border-slate-100 hover:bg-slate-100 transition-colors flex-1 flex flex-col justify-center">
                  <span className="text-[9px] md:text-xs text-slate-500 flex items-center gap-1 md:gap-2 mb-0.5 md:mb-1 uppercase tracking-wide font-bold">
                    <PieChartIcon className="w-2.5 h-2.5 md:w-4 md:h-4 text-orange-400" /> Total Payment
                  </span>
                  <motion.span
                    key={totalPayment}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[14px] sm:text-base md:text-2xl font-bold text-slate-800 truncate"
                  >
                    {formatCurrency(totalPayment)}
                  </motion.span>
                </div>
              </div>

            </div>

            {/* Bottom row: The Chart */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-3 md:p-6 border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] flex-1 flex flex-col relative overflow-hidden min-h-[220px] md:min-h-0">
              <h3 className="text-[11px] md:text-sm font-bold text-slate-700 mb-1 md:mb-2 tracking-wider uppercase relative z-10">Payment Breakdown</h3>
              <div className="flex-1 min-h-[180px] md:min-h-[220px] w-full relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={45}
                      outerRadius={65}
                      paddingAngle={2}
                      dataKey="value"
                      stroke="none"
                      animationBegin={0}
                      animationDuration={1500}
                      animationEasing="ease-out"
                    >
                      {chartData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <RechartsTooltip
                      formatter={(value: any) => formatCurrency(Number(value))}
                      contentStyle={{
                        borderRadius: '12px',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                        backgroundColor: 'rgba(255, 255, 255, 0.98)',
                        padding: '12px 16px',
                        color: '#1e293b',
                        fontWeight: 600
                      }}
                      itemStyle={{ color: '#3b82f6' }}
                    />
                    <Legend
                      verticalAlign="bottom"
                      height={30}
                      iconType="circle"
                      formatter={(value) => <span className="text-xs font-semibold text-slate-600 ml-1">{value}</span>}
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
