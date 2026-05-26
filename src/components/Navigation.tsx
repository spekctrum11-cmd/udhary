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
    "Personal Loan",
    "Home Loan",
    "Business Loan",
    "Gold Loan",
    "Loan Against Property",
    "Vehicle Loan",
    "Education Loan"
  ];

  return (
    <nav className={`w-full sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-white py-4'}`}>
      <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="logo" width={150} height={150} className="w-[120px] sm:w-[150px] h-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8 items-center font-medium text-slate-600">
          <div className="relative group">
            <a href="#" className="hover:text-primary transition-colors flex items-center gap-1 py-6 -my-6">
              Loans <span className="material-symbols-outlined text-[20px] group-hover:rotate-180 transition-transform">expand_more</span>
            </a>
            <div className="absolute top-full left-0 w-56 bg-white border border-slate-100 shadow-[0_20px_40px_rgba(0,0,0,0.08)] rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-4 z-50 overflow-hidden flex flex-col py-2">
              {loansList.map((loan, idx) => (
                <a
                  key={idx}
                  href="https://app.udhary.com/loan-application"
                  className="px-5 py-2.5 hover:bg-blue-50/80 hover:text-primary transition-colors text-slate-700 text-sm font-semibold"
                >
                  {loan}
                </a>
              ))}
            </div>
          </div>
          <a href="/emi-calculator" className="hover:text-primary transition-colors flex items-center gap-1">
            EMI Calculators
          </a>
          <a href="https://app.udhary.com/apply-credit-card" className="hover:text-primary transition-colors">Credit Card</a>
          <a href="/contact-us" className="hover:text-primary transition-colors">Contact Us</a>
          <a href="#" className="hover:text-primary transition-colors">Support</a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex gap-4">
          <a href="https://app.udhary.com/login" className="px-6 py-2.5 rounded-xl text-primary font-semibold border-2 border-primary hover:bg-primary hover:text-white transition-all">
            Login
          </a>
          <a href="https://app.udhary.com/phone-verification" className="px-6 py-2.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary-container transition-all">
            Become a Partner
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-slate-600 hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Mobile Menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-xl transition-all duration-300 overflow-y-auto ${isMobileMenuOpen ? 'max-h-[80vh] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}>
        <div className="flex flex-col px-4 sm:px-6 gap-2">
          
          <div className="flex flex-col">
            <button 
              onClick={() => setIsMobileLoansOpen(!isMobileLoansOpen)}
              className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-700 font-medium transition-colors w-full text-left"
            >
              Loans
              <span className={`material-symbols-outlined transition-transform duration-300 ${isMobileLoansOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${isMobileLoansOpen ? 'max-h-96 mt-1' : 'max-h-0'}`}>
              <div className="flex flex-col pl-4 gap-1 border-l-2 border-slate-100 ml-4 py-2">
                {loansList.map((loan, idx) => (
                  <a key={idx} href="https://app.udhary.com/loan-application" className="px-4 py-2 rounded-lg hover:bg-slate-50 text-slate-600 text-sm font-medium transition-colors">
                    {loan}
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