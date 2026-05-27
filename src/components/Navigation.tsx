"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileLoansOpen, setIsMobileLoansOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const loansList = [
    { title: "Personal Loan", icon: "person", color: "text-blue-600" },
    { title: "Home Loan", icon: "home", color: "text-green-600" },
    { title: "Business Loan", icon: "storefront", color: "text-purple-600" },
    { title: "Gold Loan", icon: "diamond", color: "text-yellow-600" },
    { title: "Loan Against Property", icon: "real_estate_agent", color: "text-orange-600" },
    { title: "Vehicle Loan", icon: "directions_car", color: "text-red-600" },
    { title: "Education Loan", icon: "school", color: "text-indigo-600" }
  ];

  return (
    <nav className={`w-full sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-1' : 'bg-white py-1.5'}`}>
      <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-[110px] sm:w-[120px]">
            <Image src="/logo.png" alt="logo" width={160} height={50} className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* Desktop Navigation & Actions (Right Aligned) */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Desktop Navigation */}
          <div className="flex gap-6 items-center font-normal text-slate-600 text-sm">
            <div className="relative group">
              <a href="https://app.udhary.com/loan-application" className="hover:text-primary transition-colors flex items-center gap-1 py-3 -my-3">
                Loans <span className="material-symbols-outlined text-[18px] group-hover:rotate-180 transition-transform" style={{ fontVariationSettings: "'wght' 300" }}>expand_more</span>
              </a>
              {/* Standard Menu Dropdown with colorful icons */}
              <div className="absolute top-full left-0 w-[240px] bg-white border border-slate-100 shadow-[0_20px_40px_rgba(0,0,0,0.08)] rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-4 z-50 overflow-hidden flex flex-col py-1.5">
                <div className="flex flex-col">
                  {loansList.map((loan, idx) => (
                    <a
                      key={idx}
                      href="https://app.udhary.com/loan-application"
                      className="flex items-center gap-3 px-4 py-2 hover:bg-slate-50 transition-colors group/item"
                    >
                      <span className={`material-symbols-outlined text-[18px] ${loan.color}`} style={{ fontVariationSettings: "'wght' 300" }}>{loan.icon}</span>
                      <div className="text-slate-600 text-[13px] font-normal group-hover/item:text-primary transition-colors">
                        {loan.title}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <a href="/emi-calculator" className="hover:text-primary transition-colors flex items-center gap-1">
              EMI Calculators
            </a>
            <a href="https://app.udhary.com/apply-credit-card" className="hover:text-primary transition-colors">Credit Card</a>
            <a href="/contact-us" className="hover:text-primary transition-colors">Contact Us</a>
          </div>

          {/* Desktop Actions */}
          <div className="flex gap-3">
            <a href="https://app.udhary.com/login" className="px-5 py-1.5 rounded-xl text-primary font-medium text-[13px] border border-primary hover:bg-primary hover:text-white transition-all">
              Login
            </a>
            <a href="https://app.udhary.com/phone-verification" className="px-5 py-1.5 rounded-xl bg-primary text-white font-medium text-[13px] hover:bg-primary-container transition-all">
              Become a Partner
            </a>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-slate-600 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'wght' 300" }}>
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl transition-all duration-300 overflow-y-auto ${isMobileMenuOpen ? 'max-h-[80vh] opacity-100 py-3' : 'max-h-0 opacity-0 py-0'}`}>
        <div className="flex flex-col px-4 sm:px-6 gap-1">

          <div className="flex flex-col">
            <button
              onClick={() => setIsMobileLoansOpen(!isMobileLoansOpen)}
              className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-600 font-normal text-sm transition-colors w-full text-left"
            >
              Loans
              <span className={`material-symbols-outlined transition-transform duration-300 ${isMobileLoansOpen ? 'rotate-180' : ''}`} style={{ fontVariationSettings: "'wght' 300" }}>expand_more</span>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${isMobileLoansOpen ? 'max-h-[800px] mt-1' : 'max-h-0'}`}>
              <div className="flex flex-col pl-2 gap-1 border-l border-slate-100 ml-5 py-1">
                {loansList.map((loan, idx) => (
                  <a key={idx} href="https://app.udhary.com/loan-application" className="flex items-center gap-3 px-3 py-2 hover:bg-slate-50 transition-colors group/item rounded-lg">
                    <span className={`material-symbols-outlined text-[20px] ${loan.color}`} style={{ fontVariationSettings: "'wght' 300" }}>{loan.icon}</span>
                    <span className="text-slate-600 text-[13px] font-normal group-hover/item:text-primary transition-colors">
                      {loan.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="/emi-calculator" className="px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-700 font-medium transition-colors">EMI Calculators</a>
          <a href="https://app.udhary.com/apply-credit-card" className="px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-700 font-medium transition-colors">Credit Card</a>
          <a href="/contact-us" className="px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-700 font-medium transition-colors">Contact Us</a>

          <div className="h-px bg-slate-100 my-2 mx-4"></div>

          <div className="flex flex-col gap-3 px-4 py-2 pb-6">
            <a href="https://app.udhary.com/login" className="w-full text-center px-6 py-3 rounded-xl text-primary font-semibold border-2 border-primary hover:bg-primary hover:text-white transition-all">
              Login
            </a>
            <a href="https://app.udhary.com/phone-verification" className="w-full text-center px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary-container transition-all">
              Become a Partner
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}