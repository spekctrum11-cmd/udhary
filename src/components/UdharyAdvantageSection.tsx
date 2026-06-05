"use client";

import React from 'react';
import Image from 'next/image';
import { X, Check, Globe, HelpCircle, Wallet, PhoneCall, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export function UdharyAdvantageSection() {
  return (
    <section className="py-10 md:py-16 bg-gradient-to-b from-white to-slate-50/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center justify-center px-3 py-1 mb-3 md:mb-4 bg-blue-50/80 text-blue-600 rounded-full text-[10px] font-bold tracking-widest uppercase border border-blue-100/50">
            The Udhary Advantage
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-2 md:mb-3 tracking-tight">
            Before vs After
          </h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto font-medium px-4">
            The smarter, transparent way to choose financial products
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* VS Badge - Absolute center for desktop */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-md rounded-full shadow-lg shadow-slate-200/50 border border-slate-100/50 font-extrabold text-lg text-slate-400">
            VS
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-4 lg:gap-6">

            {/* Card 1: Without Udhary */}
            <div className="bg-white rounded-2xl md:rounded-3xl border border-slate-100 overflow-hidden shadow-sm flex flex-col h-full relative transition-all duration-300 hover:shadow-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-rose-400"></div>

              <div className="px-5 py-4 md:px-8 md:py-6 text-center">
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-0.5 md:mb-1">Without Udhary</h3>
                <p className="text-xs md:text-sm text-slate-500 font-medium">Time-consuming. Confusing. Costly.</p>
              </div>

              {/* Image Area - Without Udhary */}
              <div className="relative h-44 sm:h-56 bg-white overflow-hidden group border-y border-slate-50">
                <Image
                  src="/left-whyUdhary.jpg"
                  alt="Frustrated person"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Floating Tags using framer-motion */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg shadow-sm border border-slate-100/50 text-[10px] md:text-[11px] font-semibold text-slate-600 whitespace-nowrap"
                >
                  <Globe className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-500" />
                  Different Websites
                  <X className="w-2.5 h-2.5 md:w-3 md:h-3 text-red-500 ml-0.5" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-12 left-2 sm:left-4 z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg shadow-sm border border-slate-100/50 text-[10px] md:text-[11px] font-semibold text-slate-600 whitespace-nowrap"
                >
                  <HelpCircle className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-500" />
                  Confusing Offers
                  <X className="w-2.5 h-2.5 md:w-3 md:h-3 text-red-500 ml-0.5" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-16 right-2 sm:right-4 z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg shadow-sm border border-slate-100/50 text-[10px] md:text-[11px] font-semibold text-slate-600 whitespace-nowrap"
                >
                  <Wallet className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-500" />
                  Hidden Charges
                  <X className="w-2.5 h-2.5 md:w-3 md:h-3 text-red-500 ml-0.5" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute bottom-10 right-4 sm:right-6 z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg shadow-sm border border-slate-100/50 text-[10px] md:text-[11px] font-semibold text-slate-600 whitespace-nowrap"
                >
                  <PhoneCall className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-500" />
                  Multiple Calls
                  <X className="w-2.5 h-2.5 md:w-3 md:h-3 text-red-500 ml-0.5" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute bottom-4 left-4 sm:left-6 z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-1 md:px-3 md:py-1.5 rounded-lg shadow-sm border border-slate-100/50 text-[10px] md:text-[11px] font-semibold text-slate-600 whitespace-nowrap"
                >
                  <Clock className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-500" />
                  Time Consuming
                  <X className="w-2.5 h-2.5 md:w-3 md:h-3 text-red-500 ml-0.5" />
                </motion.div>
              </div>

              {/* List Area */}
              <div className="bg-gradient-to-b from-red-50/30 to-transparent p-5 md:p-6 flex-grow">
                <ul className="space-y-3">
                  {[
                    "Visit Multiple Websites",
                    "Compare Manually",
                    "Unclear Information",
                    "Risk of Higher Interest Rates",
                    "Long & Exhausting Process"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-slate-600">
                      <div className="mr-3 mt-0.5 flex-shrink-0 w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                        <X className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-400 stroke-[2.5]" />
                      </div>
                      <span className="font-medium text-[12px] md:text-[13px] leading-tight md:leading-normal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* VS Badge - Mobile only (between cards) */}
            <div className="flex md:hidden items-center justify-center w-10 h-10 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-slate-100/50 font-extrabold text-sm text-slate-400 mx-auto -my-4 relative z-20">
              VS
            </div>

            {/* Card 2: With Udhary */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-emerald-100/50 overflow-hidden shadow-xl shadow-emerald-900/5 flex flex-col h-full relative ring-1 ring-emerald-500/10 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-900/10 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-400"></div>

              <div className="px-5 py-4 md:px-8 md:py-6 text-center">
                <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-0.5 md:mb-1">With Udhary</h3>
                <p className="text-xs md:text-sm text-emerald-600/80 font-medium">Smart. Simple. Transparent.</p>
              </div>

              {/* Image Area - With Udhary */}
              <div className="relative h-44 sm:h-56 bg-white overflow-hidden group flex items-end justify-end border-y border-emerald-50/50">
                <Image
                  src="/right-whyUdhary.jpeg"
                  alt="Happy person using Udhary"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Floating UI Elements */}
                {/* Offers Table */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-2 md:top-3 left-2 md:left-4 z-20 bg-white/95 backdrop-blur-md p-2.5 md:p-4 rounded-xl shadow-lg shadow-slate-400/50 border border-white/50 w-[200px] md:w-[240px]"
                >
                  <div className="flex justify-between items-start mb-2 md:mb-3">
                    <div>
                      <div className="text-[10px] md:text-xs font-bold text-slate-800 mb-0.5">Best Offers</div>
                      <div className="text-[8px] md:text-[9px] text-slate-500">Top lenders matched</div>
                    </div>
                    <div className="text-[8px] md:text-[9px] font-bold text-emerald-700 bg-emerald-50/80 backdrop-blur-sm px-1.5 md:px-2 py-0.5 rounded-full border border-emerald-100/50 whitespace-nowrap">
                      Save ₹28.5k
                    </div>
                  </div>

                  {/* Table Header */}
                  <div className="flex justify-between items-center text-[8px] md:text-[9px] text-slate-400 font-semibold mb-1.5 pb-1 md:pb-1.5 border-b border-slate-100/50 uppercase tracking-wider">
                    <div className="w-[35%]">Lender</div>
                    <div className="w-[30%] text-center">Rate</div>
                    <div className="w-[35%] text-right">EMI</div>
                  </div>

                  <div className="space-y-1.5 md:space-y-2">
                    <div className="flex justify-between items-center text-[9px] md:text-[10px]">
                      <div className="flex items-center gap-1 md:gap-1.5 w-[35%] font-semibold text-slate-700">
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-gradient-to-br from-red-500 to-red-600 rounded-[3px] md:rounded-sm flex items-center justify-center text-white text-[5px] md:text-[6px] font-bold shadow-sm">H</div>
                        HDFC
                      </div>
                      <div className="w-[30%] text-center font-bold text-slate-800">8.65%</div>
                      <div className="w-[35%] text-right font-medium text-slate-600">₹11,243</div>
                    </div>
                    <div className="flex justify-between items-center text-[9px] md:text-[10px]">
                      <div className="flex items-center gap-1 md:gap-1.5 w-[35%] font-semibold text-slate-700">
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-gradient-to-br from-orange-400 to-orange-500 rounded-[3px] md:rounded-sm flex items-center justify-center text-white text-[5px] md:text-[6px] font-bold shadow-sm">I</div>
                        ICICI
                      </div>
                      <div className="w-[30%] text-center font-bold text-slate-800">8.75%</div>
                      <div className="w-[35%] text-right font-medium text-slate-600">₹11,568</div>
                    </div>
                    <div className="flex justify-between items-center text-[9px] md:text-[10px]">
                      <div className="flex items-center gap-1 md:gap-1.5 w-[35%] font-semibold text-slate-700">
                        <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-[3px] md:rounded-sm flex items-center justify-center text-white text-[5px] md:text-[6px] font-bold shadow-sm">S</div>
                        SBI
                      </div>
                      <div className="w-[30%] text-center font-bold text-slate-800">8.90%</div>
                      <div className="w-[35%] text-right font-medium text-slate-600">₹11,945</div>
                    </div>
                  </div>
                </motion.div>

                {/* Savings Badge */}
                <motion.div
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-3 md:bottom-4 right-2 md:right-6 z-20 bg-white/95 backdrop-blur-md px-3 py-2 md:px-4 md:py-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 flex items-center gap-2 md:gap-3"
                >
                  <div className="w-7 h-7 md:w-9 md:h-9 bg-gradient-to-br from-emerald-100 to-teal-50 rounded-full flex items-center justify-center relative shadow-inner">
                    <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-emerald-600" />
                    <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 md:w-3.5 md:h-3.5 bg-emerald-500 rounded-full flex items-center justify-center border border-white shadow-sm">
                      <Check className="w-[7px] h-[7px] md:w-2.5 md:h-2.5 text-white stroke-[3]" />
                    </div>
                  </div>
                  <div>
                    <div className="text-[7px] md:text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Total Savings</div>
                    <div className="text-sm md:text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600 leading-none mb-0.5">₹28,500</div>
                    <div className="text-[7px] md:text-[9px] font-medium text-slate-400">On Your Loan</div>
                  </div>
                </motion.div>

                {/* 2nd Layer Foreground Image for 3D Overlap Effect (Hidden on mobile/tablet) */}
                <Image
                  src="/right-whyUdhary-2ndlayer.png"
                  alt="Person foreground overlap"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="hidden lg:block object-cover object-center z-30 pointer-events-none drop-shadow-xl transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* List Area */}
              <div className="bg-gradient-to-b from-emerald-50/30 to-transparent p-5 md:p-6 flex-grow">
                <ul className="space-y-3">
                  {[
                    "One Platform, Multiple Lenders",
                    "Instant Comparison",
                    "Transparent Information",
                    "Better Interest Rates",
                    "Quick & Hassle-Free Process"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start text-slate-700">
                      <div className="mr-3 mt-0.5 flex-shrink-0 w-4 h-4 md:w-5 md:h-5 flex items-center justify-center bg-gradient-to-br from-emerald-100 to-teal-50 rounded-full shadow-sm">
                        <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-emerald-600 stroke-[3]" />
                      </div>
                      <span className="font-medium text-[12px] md:text-[13px] leading-tight md:leading-normal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
