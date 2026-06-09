"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function SimpleProcedure() {
  const [key, setKey] = useState(0);

  // Auto-restart animation every 6 seconds to create a continuous loop
  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prev => prev + 1);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      step: 1,
      title: 'Share your profile',
      desc: 'Enter your loan amount, income, and CIBIL score. Takes under 90 seconds.',
      icon: 'person',
    },
    {
      step: 2,
      title: 'See matched offers',
      desc: 'We rank offers from 50+ lenders by rate, fee, and your eligibility — not commission.',
      icon: 'checklist_rtl',
    },
    {
      step: 3,
      title: 'Apply and get funded',
      desc: 'Pick your offer, complete digital KYC, and receive disbursement directly to your account.',
      icon: 'account_balance_wallet',
    },
  ];

  return (
    <section className="py-2 pb-10 lg:py-8 bg-white relative overflow-hidden">
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-50/50 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-6 lg:mb-20">
          <span className="inline-block px-4 py-1.5 bg-orange-50 text-orange-600 font-semibold text-xs tracking-widest uppercase rounded-full mb-4 border border-orange-100">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            From curious to approved,<br className="hidden sm:block" />
            <span className="text-orange-500 font-bold"> in minutes.</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            No branch visits. No paperwork stacks. No waiting.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto px-2 md:px-0" key={key}>
          {/* Desktop Horizontal Track */}
          <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-1 bg-slate-100 rounded-full z-0"></div>
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '66.66%' }}
            transition={{ duration: 3, ease: "easeInOut", delay: 0.5 }}
            className="hidden md:block absolute top-12 left-[16.66%] h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full z-10"
          ></motion.div>

          <div className="flex flex-col md:grid md:grid-cols-3 gap-10 md:gap-0 relative z-20">
            {steps.map((item, index) => (
              <div key={item.step} className="relative flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-6 md:gap-0">

                {/* Mobile connecting line (drawn per step to prevent bleeding past the last item) */}
                {index !== steps.length - 1 && (
                  <>
                    <div className="md:hidden absolute top-8 bottom-[-72px] left-8 w-1 -ml-[2px] bg-slate-100 z-0"></div>
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 1.2, ease: "linear", delay: 0.5 + (index * 1.2) }}
                      className="md:hidden absolute top-8 bottom-[-72px] left-8 w-1 -ml-[2px] bg-gradient-to-b from-orange-400 to-orange-500 z-10 origin-top"
                    ></motion.div>
                  </>
                )}
                {/* Node / Icon */}
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: -8 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 1.2) }}
                  className="relative w-16 h-16 md:w-24 md:h-24 shrink-0 z-20 md:mb-8"
                >
                  <motion.div
                    initial={{ borderColor: '#f1f5f9', color: '#cbd5e1' }}
                    animate={{ borderColor: '#f97316', color: '#f97316' }}
                    transition={{ duration: 0.4, delay: 0.5 + (index * 1.2) }}
                    className="absolute inset-0 bg-white rounded-full md:shadow-[0_0_0_8px_rgba(255,255,255,1)] flex items-center justify-center border-2 z-20"
                  >
                    <span className="material-symbols-outlined text-[28px] md:text-[36px]" style={{ color: 'inherit' }}>
                      {item.icon}
                    </span>
                  </motion.div>

                  {/* Pulse effect behind the node */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1.8, opacity: [0, 0.6, 0] }}
                    transition={{ duration: 1.5, delay: 0.5 + (index * 1.2) }}
                    className="absolute inset-0 bg-orange-200 rounded-full z-10"
                  />
                </motion.div>

                {/* Text content */}
                <motion.div
                  initial={{ opacity: 0.4, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 1.2) }}
                  className="px-0 md:px-4 flex-1 pt-1 md:pt-0"
                >
                  <div className="text-orange-500 font-bold text-xs md:text-sm tracking-widest uppercase mb-1 md:mb-2">Step 0{item.step}</div>
                  <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 md:mb-3">{item.title}</h4>
                  <p className="text-sm md:text-base text-slate-600 leading-relaxed">{item.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
