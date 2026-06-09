"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-2 lg:py-12">
      {/* Subtle background gradient / mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-50/50 via-white to-white pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 text-center lg:text-left">

        {/* TEXT CONTENT - Takes primary focus at the top on Mobile */}
        <div className="max-w-2xl mx-auto lg:mx-0 w-full pt-4 lg:pt-0">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-orange-50 text-orange-600 font-semibold text-xs tracking-widest uppercase rounded-full mb-6 border border-orange-100 shadow-sm"
          >
            Trusted Fintech Solutions
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[36px] sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 mb-5 lg:mb-6 leading-[1.15] tracking-tight"
          >
            Quick, Hassle-Free Loans to Meet Your Every Need
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 px-2 lg:px-0"
          >
            Are you a salaried professional looking for extra financial support? Whether it's for a dream vacation, medical emergency, or home renovation — we've got your back!
          </motion.p>

          {/* Sleek Pill Features for Mobile (Saves huge vertical space) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mb-4 lg:mb-10"
          >
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-slate-200 shadow-sm transition-all hover:border-orange-200">
              <span className="material-symbols-outlined text-[18px] text-slate-600">verified</span>
              <span className="font-semibold text-sm text-slate-800">Low Interest</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-slate-200 shadow-sm transition-all hover:border-blue-200">
              <span className="material-symbols-outlined text-[18px] text-blue-600">speed</span>
              <span className="font-semibold text-sm text-slate-800">Fast Approval</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-slate-200 shadow-sm hidden sm:flex transition-all hover:border-purple-200">
              <span className="material-symbols-outlined text-[18px] text-orange-600">security</span>
              <span className="font-semibold text-sm text-slate-800">100% Secure</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start w-full max-w-md mx-auto lg:mx-0"
          >
            <Link 
              href="/apply" 
              className="relative flex items-center justify-center px-8 py-4 bg-gradient-to-r from-violet-900 to-fuchsia-900 hover:from-violet-950 hover:to-fuchsia-950 text-white font-extrabold rounded-2xl transition-all shadow-[0_8px_30px_rgba(124,58,237,0.4)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.6)] hover:-translate-y-0.5 w-full sm:w-auto text-lg overflow-hidden group border border-violet-500/30"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-150%] group-hover:animate-[shimmer_1.5s_infinite]"></div>
              Check Eligibility <span className="material-symbols-outlined ml-2 text-[22px] group-hover:scale-110 transition-transform">bolt</span>
            </Link>

            <a href="https://app.udhary.com/loan-application?_gl=1*10jgv0m*_ga*MTQ3NTA3ODg0MC4xNzc5MjcyNTkz*_ga_W44M2VB8CN*czE3Nzk0MjUyNDYkbzUkZzAkdDE3Nzk0MjUyNDYkajYwJGwwJGgw" className="flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-2xl transition-all shadow-lg shadow-orange-500/25 hover:-translate-y-0.5 w-full sm:w-auto text-lg">
              Apply Now <span className="material-symbols-outlined ml-2 text-[20px]">arrow_forward</span>
            </a>
          </motion.div>
        </div>

        {/* IMAGE CONTENT - Elite Interactive Signature Design */}
        <div className="relative hidden lg:flex justify-end mt-4 lg:mt-0 flex-1 lg:flex-auto items-center">
          {/* Decorative background shape for the image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] max-w-[700px] aspect-square bg-gradient-to-tr from-orange-200/50 via-purple-200/50 to-blue-200/50 rounded-full blur-[80px] -z-10 animate-blob"></div>

          {/* Hero Family Graphic */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 w-full flex justify-center lg:translate-x-12"
          >
            <div className="relative w-full flex justify-center scale-125">
              <Image
                alt="Family planning for their future"
                src="/phone-hero-v2.png"
                width={1000}
                height={1000}
                className="w-full max-w-[600px] lg:max-w-[1000px] object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.06)] pointer-events-none"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
