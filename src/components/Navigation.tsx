"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileLoansOpen, setIsMobileLoansOpen] = useState(false);
  const [isDesktopLoansOpen, setIsDesktopLoansOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isDesktopLoansOpen) return;
    const closeDropdown = () => setIsDesktopLoansOpen(false);
    document.addEventListener('click', closeDropdown);
    return () => document.removeEventListener('click', closeDropdown);
  }, [isDesktopLoansOpen]);

  const loansList = [
    { title: "Personal Loan", icon: "person", color: "text-blue-600" },
    { title: "Home Loan", icon: "home", color: "text-slate-600" },
    { title: "Business Loan", icon: "storefront", color: "text-purple-600" },
    { title: "Gold Loan", icon: "/gold-icon.svg", color: "text-yellow-600", isImg: true },
    { title: "Loan Against Property", icon: "real_estate_agent", color: "text-orange-600" },
    { title: "Vehicle Loan", icon: "directions_car", color: "text-red-600" },
    { title: "Education Loan", icon: "school", color: "text-indigo-600" }
  ];

  return (
    <nav className={`w-full sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-1' : 'bg-white py-1.5'}`}>
      <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-5 xl:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-[110px] sm:w-[120px]">
            <Image src="/logo.png" alt="logo" width={160} height={50} priority className="w-full h-auto object-contain" />
          </div>
        </div>

        {/* Desktop Navigation & Actions (Right Aligned) */}
        <div className="hidden lg:flex items-center lg:gap-4 xl:gap-8">
          {/* Desktop Navigation */}
          <div className="flex lg:gap-4 xl:gap-6 items-center font-normal text-slate-600 text-sm">
            <div
              className="relative"
              onMouseEnter={() => setIsDesktopLoansOpen(true)}
              onMouseLeave={() => setIsDesktopLoansOpen(false)}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDesktopLoansOpen(!isDesktopLoansOpen);
                }}
                className="hover:text-primary transition-colors flex items-center gap-1 py-3 -my-3 focus:outline-none cursor-pointer font-normal text-slate-600 text-sm"
              >
                Loans <span className={`material-symbols-outlined text-[18px] transition-transform duration-300 ${isDesktopLoansOpen ? 'rotate-180' : ''}`} style={{ fontVariationSettings: "'wght' 300" }}>expand_more</span>
              </button>
              {/* Minimalist Glassmorphism Dropdown with Elite Infinite Animation */}
              <div
                onClick={(e) => e.stopPropagation()}
                className={`absolute top-full left-0 w-[240px] bg-white/80 backdrop-blur-2xl ring-1 ring-slate-900/5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-2xl transition-all duration-300 z-50 overflow-hidden flex flex-col py-2 ${isDesktopLoansOpen ? 'opacity-100 visible transform translate-y-4' : 'opacity-0 invisible transform translate-y-2'}`}
              >

                {/* Infinite Auto Floating Aurora Background */}
                <div className="absolute top-0 -left-4 w-32 h-32 bg-blue-500/15 rounded-full blur-2xl animate-blob z-0 pointer-events-none"></div>
                <div className="absolute bottom-0 -right-4 w-32 h-32 bg-orange-500/15 rounded-full blur-2xl animate-blob z-0 pointer-events-none" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-blob z-0 pointer-events-none" style={{ animationDelay: '4s' }}></div>

                <div className="flex flex-col px-1.5 relative z-10">
                  {loansList.map((loan, idx) => (
                    <a
                      key={idx}
                      href="https://app.udhary.com/loan-application"
                      className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/60 transition-all duration-300 group/item"
                    >
                      {loan.isImg ? (
                        <img src={loan.icon} alt={loan.title} className="w-[18px] h-[18px] opacity-80 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all object-contain" />
                      ) : (
                        <span className={`material-symbols-outlined text-[18px] ${loan.color} opacity-80 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all`} style={{ fontVariationSettings: "'wght' 300" }}>{loan.icon}</span>
                      )}
                      <div className="text-slate-600 text-[13px] font-normal group-hover/item:text-slate-900 transition-colors">
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
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-2xl transition-all duration-300 overflow-y-auto ${isMobileMenuOpen ? 'max-h-[85vh] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}>
        <div className="flex flex-col px-4 sm:px-6 gap-1.5">

          <div className="flex flex-col bg-slate-50/50 rounded-2xl">
            <button
              onClick={() => setIsMobileLoansOpen(!isMobileLoansOpen)}
              className="flex items-center justify-between px-4 py-4 rounded-2xl hover:bg-slate-100/50 text-slate-800 font-medium text-[15px] transition-all w-full text-left"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-[22px]" style={{ fontVariationSettings: "'wght' 300" }}>account_balance</span>
                Loans
              </div>
              <span className={`material-symbols-outlined text-slate-400 transition-transform duration-300 ${isMobileLoansOpen ? 'rotate-180' : ''}`} style={{ fontVariationSettings: "'wght' 300" }}>expand_more</span>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${isMobileLoansOpen ? 'max-h-[800px] opacity-100 pb-3' : 'max-h-0 opacity-0'}`}>
              <div className="flex flex-col gap-1 pl-4 ml-6 border-l-2 border-slate-200/60 mt-1">
                {loansList.map((loan, idx) => (
                  <a key={idx} href="https://app.udhary.com/loan-application" className="flex items-center gap-3 px-4 py-3 hover:bg-white transition-all duration-300 group/item rounded-xl">
                    {loan.isImg ? (
                      <img src={loan.icon} alt={loan.title} className="w-[20px] h-[20px] opacity-80 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all object-contain" />
                    ) : (
                      <span className={`material-symbols-outlined text-[20px] ${loan.color} opacity-80 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all`} style={{ fontVariationSettings: "'wght' 300" }}>{loan.icon}</span>
                    )}
                    <span className="text-slate-600 text-[14px] font-medium group-hover/item:text-slate-900 transition-colors">
                      {loan.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a href="/emi-calculator" className="flex items-center gap-3 px-4 py-4 rounded-2xl hover:bg-slate-50 text-slate-800 font-medium text-[15px] transition-all">
            <span className="material-symbols-outlined text-blue-500 text-[22px]" style={{ fontVariationSettings: "'wght' 300" }}>calculate</span>
            EMI Calculators
          </a>
          <a href="https://app.udhary.com/apply-credit-card" className="flex items-center gap-3 px-4 py-4 rounded-2xl hover:bg-slate-50 text-slate-800 font-medium text-[15px] transition-all">
            <span className="material-symbols-outlined text-purple-500 text-[22px]" style={{ fontVariationSettings: "'wght' 300" }}>credit_card</span>
            Credit Card
          </a>
          <a href="/contact-us" className="flex items-center gap-3 px-4 py-4 rounded-2xl hover:bg-slate-50 text-slate-800 font-medium text-[15px] transition-all">
            <span className="material-symbols-outlined text-blue-500 text-[22px]" style={{ fontVariationSettings: "'wght' 300" }}>support_agent</span>
            Contact Us
          </a>

          <div className="h-px bg-slate-100 my-3 mx-4"></div>

          <div className="flex flex-col gap-3 px-4 py-2 pb-6">
            <a href="https://app.udhary.com/login" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-primary font-semibold text-[15px] border-2 border-primary/20 bg-primary/5 hover:bg-primary hover:text-white transition-all">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'wght' 300" }}>login</span>
              Login
            </a>
            <a href="https://app.udhary.com/phone-verification" className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white font-semibold text-[15px] hover:bg-primary-container shadow-lg shadow-primary/25 transition-all">
              <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'wght' 300" }}>handshake</span>
              Become a Partner
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}