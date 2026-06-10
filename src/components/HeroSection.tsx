"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-8 lg:py-10 z-0">
      
      {/* Light Multicolor Aurora Backgrounds */}
      <div className="absolute top-[-10%] left-[-5%] md:left-[10%] w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-blue-400/30 rounded-full blur-[80px] md:blur-[120px] pointer-events-none -z-10 animate-blob"></div>
      <div className="absolute top-[20%] right-[-5%] md:right-[15%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-purple-400/20 rounded-full blur-[80px] md:blur-[120px] pointer-events-none -z-10 animate-blob" style={{ animationDelay: '2s' }}></div>

      {/* Background Floating Doodles */}
      <svg className="absolute top-16 left-8 md:left-16 w-10 h-10 md:w-16 md:h-16 text-amber-300 -z-10 rotate-12 animate-pulse" viewBox="0 0 100 100" fill="currentColor">
         <polygon points="50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 items-center relative z-10 text-center lg:text-left">

        {/* TEXT CONTENT */}
        <div className="max-w-2xl mx-auto lg:mx-0 w-full pt-4 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-rose-200 text-rose-900 font-bold text-xs sm:text-sm uppercase tracking-widest rounded-full mb-5 border-2 border-rose-300 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-[pulse_2s_infinite]"></span>
            Trusted Fintech Solutions
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[40px] sm:text-5xl lg:text-[56px] font-black text-slate-900 mb-4 leading-[1.05] tracking-tighter"
          >
            Quick, Hassle-Free Loans for Your <span className="text-blue-600 relative inline-block whitespace-nowrap">Every Need
              <svg className="absolute -bottom-2 md:-bottom-3 left-0 w-full h-3 md:h-5 text-amber-400 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round">
                <path d="M 5 15 Q 50 0 95 15" />
              </svg>
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 font-bold leading-relaxed max-w-xl mx-auto lg:mx-0 px-2 lg:px-0"
          >
            Are you a salaried professional looking for extra support? From dream vacations to home renovations — we've got your back!
          </motion.p>

          {/* Vibrant Solid Pill Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6"
          >
            <div className="flex items-center gap-2 bg-emerald-200 text-emerald-900 px-4 py-2.5 rounded-2xl font-bold text-sm transition-transform hover:-translate-y-1">
              <span className="material-symbols-outlined text-[18px]">verified</span>
              Low Interest
            </div>
            <div className="flex items-center gap-2 bg-amber-200 text-amber-900 px-4 py-2.5 rounded-2xl font-bold text-sm transition-transform hover:-translate-y-1">
              <span className="material-symbols-outlined text-[18px]">speed</span>
              Fast Approval
            </div>
            <div className="flex items-center gap-2 bg-violet-200 text-violet-900 px-4 py-2.5 rounded-2xl font-bold text-sm hidden sm:flex transition-transform hover:-translate-y-1">
              <span className="material-symbols-outlined text-[18px]">security</span>
              100% Secure
            </div>
          </motion.div>

          {/* Chunky 3D Solid Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start w-full max-w-md mx-auto lg:mx-0"
          >
            <Link 
              href="/apply" 
              className="flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-transform active:translate-y-[4px] active:shadow-none w-full sm:w-auto text-base md:text-lg shadow-[0_6px_0_#1e40af] hover:translate-y-[2px] hover:shadow-[0_4px_0_#1e40af]"
            >
              Check Eligibility <span className="material-symbols-outlined ml-2 text-[20px]">bolt</span>
            </Link>

            <a 
              href="https://app.udhary.com/loan-application" 
              className="flex items-center justify-center px-6 py-3 bg-orange-200 hover:bg-orange-300 text-orange-900 font-black rounded-2xl transition-transform active:translate-y-[4px] active:shadow-none w-full sm:w-auto text-base md:text-lg shadow-[0_6px_0_#fb923c] hover:translate-y-[2px] hover:shadow-[0_4px_0_#fb923c]"
            >
              Apply Now <span className="material-symbols-outlined ml-2 text-[18px]">arrow_forward</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 text-slate-700 text-xs md:text-sm font-bold"
          >
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-green-500">check_circle</span>
              No credit score impact
            </div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-green-500">check_circle</span>
              Zero hidden charges
            </div>
          </motion.div>
        </div>

        {/* IMAGE CONTENT - Solid Memphis Backdrop */}
        <div className="relative hidden lg:flex justify-center lg:justify-end mt-12 lg:mt-0 items-center">
          
          {/* Solid Color Backdrop Shape */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] max-w-[450px] aspect-square bg-emerald-200 rounded-[3rem] rotate-12 -z-10"></div>
          
          {/* Floating Background Accent Shapes */}
          <div className="absolute top-0 right-10 lg:-right-10 w-20 h-20 bg-amber-300 rounded-full -z-10 animate-[bounce_5s_infinite]"></div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 w-full flex justify-center"
          >
            <Image
              alt="Family planning for their future"
              src="/phone-hero-v2.png"
              width={1000}
              height={1000}
              className="w-full max-w-[400px] lg:max-w-[600px] object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.15)] pointer-events-none lg:translate-x-6"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
