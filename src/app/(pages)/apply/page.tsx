"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

type FormData = {
    // Step 1
    loanType: string;
    amount: string;
    tenure: string;
    // Step 2
    fullName: string;
    email: string;
    mobile: string;
    employmentType: string;
    // Step 3
    income: string;
    pan: string;
    pincode: string;
};

type Step = 1 | 2 | 3 | "loading" | "result";

export default function ApplyPage() {
    const router = useRouter();
    const [step, setStep] = useState<Step>(1);
    const [isEligible, setIsEligible] = useState<boolean>(true);

    const [formData, setFormData] = useState<FormData>({
        loanType: "personal",
        amount: "",
        tenure: "",
        fullName: "",
        email: "",
        mobile: "",
        employmentType: "salaried",
        income: "",
        pan: "",
        pincode: "",
    });

    const updateForm = (field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleNext = () => {
        if (step === 1) setStep(2);
        else if (step === 2) setStep(3);
    };

    const handleBack = () => {
        if (step === 2) setStep(1);
        else if (step === 3) setStep(2);
        else if (step === 1) router.push("/");
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (step !== 3) {
            handleNext();
            return;
        }

        setStep("loading");

        // Mock API call to check eligibility
        setTimeout(() => {
            const incomeNum = parseInt(formData.income || "0");
            const amountNum = parseInt(formData.amount || "0");

            if (incomeNum < 20000 || (amountNum > 5000000 && incomeNum < 100000)) {
                setIsEligible(false);
            } else {
                setIsEligible(true);
            }

            setStep("result");
        }, 2500);
    };

    // Animation variants for crossfading inputs inside the rigid box
    const stepVariants = {
        initial: { opacity: 0, scale: 0.98, filter: "blur(4px)" },
        animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
        exit: { opacity: 0, scale: 1.02, filter: "blur(4px)" },
    };

    return (
        <div className="bg-slate-50 selection:bg-slate-200 selection:text-slate-900 overflow-x-hidden relative">

            {/* ======================= CORPORATE MEMPHIS BACKGROUND ======================= */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#fafafa]">
                {/* Large Amber Circle */}
                <div className="absolute -top-20 -right-20 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-amber-400/20 blur-3xl"></div>
                <svg className="absolute top-[5%] right-[10%] md:top-[10%] md:right-[15%] w-24 h-24 md:w-32 md:h-32 text-amber-300 opacity-60" viewBox="0 0 100 100" fill="currentColor">
                    <circle cx="50" cy="50" r="40" />
                </svg>

                {/* Teal Semi-Circle */}
                <svg className="absolute bottom-[5%] left-[-10%] md:bottom-[10%] md:left-[-5%] w-48 h-48 md:w-64 md:h-64 text-teal-400 opacity-40 rotate-45" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50,10 A40,40 0 0,0 50,90 Z" />
                </svg>

                {/* Rose Pill */}
                <svg className="absolute top-[25%] left-[5%] md:top-[30%] md:left-[10%] w-16 h-32 md:w-24 md:h-48 text-rose-300 opacity-50 -rotate-12" viewBox="0 0 50 100" fill="currentColor">
                    <rect x="10" y="10" width="30" height="80" rx="15" />
                </svg>

                {/* Violet Squiggle */}
                <svg className="absolute bottom-[25%] right-[5%] md:bottom-[30%] md:right-[10%] w-32 h-16 md:w-48 md:h-24 text-violet-400 opacity-50" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
                    <path d="M 20 50 Q 40 20 60 50 T 100 50 T 140 50 T 180 50" />
                </svg>

                {/* Scattered Dots Pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
            </div>

            {/* Top Navigation Bar */}
            <header className="absolute top-0 inset-x-0 h-14 md:h-16 flex items-center px-4 md:px-8 z-20">
                {(step === 1 || step === 2 || step === 3) && (
                    <button
                        onClick={handleBack}
                        className="inline-flex items-center text-[11px] md:text-xs font-bold text-slate-500 hover:text-slate-900 transition-colors group bg-white/50 backdrop-blur-md px-3 py-1.5 rounded-full shadow-sm border border-slate-200/50"
                    >
                        <span className="material-symbols-outlined text-[16px] md:text-[18px] mr-1 group-hover:-translate-x-1 transition-transform">
                            arrow_back
                        </span>
                        {step === 1 ? "Back to Home" : "Back"}
                    </button>
                )}
            </header>

            {/* Main Container */}
            <main className="pt-16 md:pt-20 pb-[20px] px-3 md:px-4 flex justify-center w-full relative z-10">
                <AnimatePresence mode="wait">

                    {/* ======================= STEPS 1 to 3 (BENTO GRID) ======================= */}
                    {(step === 1 || step === 2 || step === 3) && (
                        <motion.form
                            id="apply-form"
                            onSubmit={handleSubmit}
                            key={`bento-grid`}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15, scale: 0.98 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-12 gap-2.5 md:gap-4"
                        >

                            {/* BOX 1: Header (8 cols) */}
                            <div className="md:col-span-8 bg-amber-200 backdrop-blur-xl border border-slate-200/60 rounded-2xl p-4 md:p-6 flex flex-col justify-center shadow-[0_2px_15px_rgb(0,0,0,0.02)]">
                                <div className="flex items-center justify-between mb-1.5">
                                    <h1 className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 tracking-tight">
                                        Check Eligibility
                                    </h1>
                                    <div className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded border border-slate-200 uppercase tracking-widest shadow-sm">
                                        Step {step} of 3
                                    </div>
                                </div>
                                <p className="text-[12px] md:text-[13px] text-slate-500 font-medium">
                                    {step === 1 && "Start by selecting what you need."}
                                    {step === 2 && "Let's grab a few personal details."}
                                    {step === 3 && "Final step to calculate your offers."}
                                </p>
                            </div>

                            {/* BOX 2: Progress (4 cols) */}
                            <div className="md:col-span-4 bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-2xl p-4 md:p-6 flex flex-col justify-center relative overflow-hidden shadow-lg">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-slate-500/20 rounded-full blur-[30px] -mr-10 -mt-10 pointer-events-none"></div>
                                <div className="flex items-center justify-between mb-3 relative z-10">
                                    <span className="text-[11px] md:text-[12px] font-bold text-slate-400">Progress</span>
                                    <span className="text-[12px] md:text-[13px] font-black text-white bg-slate-800/50 px-2 py-0.5 rounded shadow-inner">
                                        {Math.round(((step as number) / 3) * 100)}%
                                    </span>
                                </div>
                                <div className="w-full h-1.5 md:h-2 bg-slate-800 rounded-full overflow-hidden relative z-10 shadow-inner">
                                    <motion.div
                                        initial={{ width: `${(((step as number) - 1) / 3) * 100}%` }}
                                        animate={{ width: `${((step as number) / 3) * 100}%` }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                        className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-rose-500 rounded-full relative"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 animate-[shimmer_1.5s_infinite]"></div>
                                    </motion.div>
                                </div>
                            </div>

                            {/* BOX 3: Dynamic Inputs (12 cols) */}
                            <div className="md:col-span-12  bg-orange-200 backdrop-blur-xl border border-slate-200/60 rounded-2xl p-4 md:p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] relative overflow-hidden min-h-[250px] md:min-h-[280px]">
                                <AnimatePresence mode="wait">

                                    {/* --- STEP 1 --- */}
                                    {step === 1 && (
                                        <motion.div
                                            key="step-1"
                                            variants={stepVariants}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            transition={{ duration: 0.25 }}
                                            className="space-y-4 md:space-y-5"
                                        >
                                            <div className="space-y-2">
                                                <label className="flex items-center gap-1.5 text-[12px] md:text-[13px] font-bold text-slate-800 uppercase tracking-wide">
                                                    <span className="material-symbols-outlined text-[14px] md:text-[16px] text-slate-600">touch_app</span>
                                                    Select Loan Type
                                                </label>
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
                                                    {[
                                                        {
                                                            id: "personal", label: "Personal", icon: "person",
                                                            activeClass: "border-violet-500 bg-violet-500 text-white shadow-[0_4px_15px_rgba(139,92,246,0.3)] scale-[1.02]",
                                                            inactiveClass: "border-slate-200 bg-slate-50/50 text-slate-600 hover:border-violet-300 hover:bg-violet-50",
                                                            iconColor: "text-violet-500"
                                                        },
                                                        {
                                                            id: "business", label: "Business", icon: "storefront",
                                                            activeClass: "border-blue-500 bg-blue-500 text-white shadow-[0_4px_15px_rgba(59,130,246,0.3)] scale-[1.02]",
                                                            inactiveClass: "border-slate-200 bg-slate-50/50 text-slate-600 hover:border-blue-300 hover:bg-blue-50",
                                                            iconColor: "text-blue-500"
                                                        },
                                                        {
                                                            id: "home", label: "Home", icon: "home",
                                                            activeClass: "border-emerald-500 bg-emerald-500 text-white shadow-[0_4px_15px_rgba(16,185,129,0.3)] scale-[1.02]",
                                                            inactiveClass: "border-slate-200 bg-slate-50/50 text-slate-600 hover:border-emerald-300 hover:bg-emerald-50",
                                                            iconColor: "text-emerald-500"
                                                        },
                                                        {
                                                            id: "lap", label: "Property", icon: "real_estate_agent",
                                                            activeClass: "border-amber-500 bg-amber-500 text-white shadow-[0_4px_15px_rgba(245,158,11,0.3)] scale-[1.02]",
                                                            inactiveClass: "border-slate-200 bg-slate-50/50 text-slate-600 hover:border-amber-300 hover:bg-amber-50",
                                                            iconColor: "text-amber-500"
                                                        }
                                                    ].map((type) => (
                                                        <button
                                                            key={type.id}
                                                            type="button"
                                                            onClick={() => updateForm("loanType", type.id)}
                                                            className={`relative flex flex-col items-center justify-center p-2.5 md:p-3 rounded-xl border-2 transition-all duration-300 overflow-hidden ${formData.loanType === type.id ? type.activeClass : type.inactiveClass
                                                                }`}
                                                        >
                                                            <span className={`material-symbols-outlined text-[22px] md:text-[24px] mb-1 md:mb-1.5 ${formData.loanType === type.id ? "text-white" : type.iconColor}`}>
                                                                {type.icon}
                                                            </span>
                                                            <span className="text-[12px] md:text-[13px] font-bold text-center leading-tight">
                                                                {type.label}
                                                            </span>
                                                            {/* Selected state shine */}
                                                            {formData.loanType === type.id && (
                                                                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/0 skew-x-12 translate-x-[-150%] animate-[shimmer_2s_infinite]"></div>
                                                            )}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                                <div className="space-y-1 md:space-y-1.5 bg-slate-50/80 p-2.5 md:p-3 rounded-xl border border-slate-100">
                                                    <label htmlFor="amount" className="flex items-center gap-1.5 text-[11px] md:text-[12px] font-bold text-slate-700 uppercase tracking-wide">
                                                        <span className="material-symbols-outlined text-[14px] md:text-[16px] text-slate-500">edit_square</span>
                                                        Write Amount
                                                    </label>
                                                    <div className="relative">
                                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                            <span className="text-slate-400 text-[15px] md:text-[16px] font-bold">₹</span>
                                                        </div>
                                                        <input
                                                            required
                                                            type="number"
                                                            id="amount"
                                                            value={formData.amount}
                                                            onChange={(e) => updateForm("amount", e.target.value)}
                                                            placeholder="5,00,000"
                                                            className="w-full h-11 md:h-12 pl-8 pr-3 rounded-lg border-2 border-slate-200 bg-white focus:bg-white text-[14px] md:text-[15px] font-bold text-slate-900 focus:outline-none focus:border-slate-500 focus:ring-4 focus:ring-slate-500/10 transition-all placeholder:text-slate-300 placeholder:font-medium shadow-sm"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-1 md:space-y-1.5 bg-slate-50/80 p-2.5 md:p-3 rounded-xl border border-slate-100">
                                                    <label htmlFor="tenure" className="flex items-center gap-1.5 text-[11px] md:text-[12px] font-bold text-slate-700 uppercase tracking-wide">
                                                        <span className="material-symbols-outlined text-[14px] md:text-[16px] text-slate-500">ads_click</span>
                                                        Select Tenure
                                                    </label>
                                                    <div className="relative">
                                                        <select
                                                            required
                                                            id="tenure"
                                                            value={formData.tenure}
                                                            onChange={(e) => updateForm("tenure", e.target.value)}
                                                            className="w-full h-11 md:h-12 pl-3 pr-10 rounded-lg border-2 border-slate-200 bg-white focus:bg-white text-[14px] md:text-[15px] font-bold text-slate-900 focus:outline-none focus:border-slate-500 focus:ring-4 focus:ring-slate-500/10 transition-all appearance-none cursor-pointer shadow-sm"
                                                        >
                                                            <option value="" disabled>Choose years</option>
                                                            <option value="1">1 Year</option>
                                                            <option value="3">3 Years</option>
                                                            <option value="5">5 Years</option>
                                                            <option value="10">10+ Years</option>
                                                        </select>
                                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                            <span className="material-symbols-outlined text-[18px] md:text-[20px] text-slate-400">expand_more</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* --- STEP 2 --- */}
                                    {step === 2 && (
                                        <motion.div
                                            key="step-2"
                                            variants={stepVariants}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            transition={{ duration: 0.25 }}
                                            className="space-y-3 md:space-y-4"
                                        >
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 bg-slate-50/80 p-2.5 md:p-3 rounded-xl border border-slate-100">
                                                <div className="space-y-1 md:space-y-1.5">
                                                    <label htmlFor="fullName" className="flex items-center gap-1.5 text-[11px] md:text-[12px] font-bold text-slate-700 uppercase tracking-wide">
                                                        <span className="material-symbols-outlined text-[14px] md:text-[16px] text-slate-500">edit_square</span>
                                                        Write Full Name
                                                    </label>
                                                    <input
                                                        required
                                                        type="text"
                                                        id="fullName"
                                                        value={formData.fullName}
                                                        onChange={(e) => updateForm("fullName", e.target.value)}
                                                        placeholder="Rahul Sharma"
                                                        className="w-full h-11 md:h-12 px-3 rounded-lg border-2 border-slate-200 bg-white focus:bg-white text-[14px] md:text-[15px] font-bold text-slate-900 focus:outline-none focus:border-slate-500 focus:ring-4 focus:ring-slate-500/10 transition-all placeholder:text-slate-300 placeholder:font-medium shadow-sm"
                                                    />
                                                </div>

                                                <div className="space-y-1 md:space-y-1.5">
                                                    <label htmlFor="email" className="flex items-center gap-1.5 text-[11px] md:text-[12px] font-bold text-slate-700 uppercase tracking-wide">
                                                        <span className="material-symbols-outlined text-[14px] md:text-[16px] text-slate-500">edit_square</span>
                                                        Write Email ID
                                                    </label>
                                                    <input
                                                        required
                                                        type="email"
                                                        id="email"
                                                        value={formData.email}
                                                        onChange={(e) => updateForm("email", e.target.value)}
                                                        placeholder="rahul@example.com"
                                                        className="w-full h-11 md:h-12 px-3 rounded-lg border-2 border-slate-200 bg-white focus:bg-white text-[14px] md:text-[15px] font-bold text-slate-900 focus:outline-none focus:border-slate-500 focus:ring-4 focus:ring-slate-500/10 transition-all placeholder:text-slate-300 placeholder:font-medium shadow-sm"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                                <div className="space-y-1 md:space-y-1.5 bg-slate-50/80 p-2.5 md:p-3 rounded-xl border border-slate-100">
                                                    <label htmlFor="mobile" className="flex items-center gap-1.5 text-[11px] md:text-[12px] font-bold text-slate-700 uppercase tracking-wide">
                                                        <span className="material-symbols-outlined text-[14px] md:text-[16px] text-slate-500">edit_square</span>
                                                        Write Mobile
                                                    </label>
                                                    <div className="relative">
                                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                            <span className="text-[13px] md:text-[14px] text-slate-400 font-bold">+91</span>
                                                        </div>
                                                        <input
                                                            required
                                                            type="tel"
                                                            id="mobile"
                                                            pattern="[0-9]{10}"
                                                            value={formData.mobile}
                                                            onChange={(e) => updateForm("mobile", e.target.value)}
                                                            placeholder="10 digit number"
                                                            className="w-full h-11 md:h-12 pl-[42px] pr-3 rounded-lg border-2 border-slate-200 bg-white focus:bg-white text-[14px] md:text-[15px] font-bold text-slate-900 focus:outline-none focus:border-slate-500 focus:ring-4 focus:ring-slate-500/10 transition-all placeholder:text-slate-300 placeholder:font-medium shadow-sm"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-1 md:space-y-1.5">
                                                    <label className="flex items-center gap-1.5 text-[11px] md:text-[12px] font-bold text-slate-700 uppercase tracking-wide px-1">
                                                        <span className="material-symbols-outlined text-[14px] md:text-[16px] text-slate-500">touch_app</span>
                                                        Select Employment
                                                    </label>
                                                    <div className="grid grid-cols-2 gap-2">
                                                        {[
                                                            {
                                                                id: "salaried", label: "Salaried", icon: "work",
                                                                activeClass: "border-indigo-500 bg-indigo-500 text-white shadow-[0_4px_15px_rgba(99,102,241,0.3)] scale-[1.02]",
                                                                inactiveClass: "border-slate-200 bg-slate-50/50 text-slate-600 hover:border-indigo-300 hover:bg-indigo-50",
                                                                iconColor: "text-indigo-500"
                                                            },
                                                            {
                                                                id: "self_employed", label: "Self Employed", icon: "domain",
                                                                activeClass: "border-rose-500 bg-rose-500 text-white shadow-[0_4px_15px_rgba(244,63,94,0.3)] scale-[1.02]",
                                                                inactiveClass: "border-slate-200 bg-slate-50/50 text-slate-600 hover:border-rose-300 hover:bg-rose-50",
                                                                iconColor: "text-rose-500"
                                                            }
                                                        ].map((type) => (
                                                            <button
                                                                key={type.id}
                                                                type="button"
                                                                onClick={() => updateForm("employmentType", type.id)}
                                                                className={`relative flex flex-row items-center justify-center p-2 rounded-xl border-2 transition-all duration-300 h-11 md:h-12 gap-1.5 overflow-hidden ${formData.employmentType === type.id ? type.activeClass : type.inactiveClass
                                                                    }`}
                                                            >
                                                                <span className={`material-symbols-outlined text-[16px] md:text-[18px] ${formData.employmentType === type.id ? "text-white" : type.iconColor}`}>
                                                                    {type.icon}
                                                                </span>
                                                                <span className="text-[12px] md:text-[13px] font-bold leading-none">
                                                                    {type.label}
                                                                </span>
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {/* --- STEP 3 --- */}
                                    {step === 3 && (
                                        <motion.div
                                            key="step-3"
                                            variants={stepVariants}
                                            initial="initial"
                                            animate="animate"
                                            exit="exit"
                                            transition={{ duration: 0.25 }}
                                            className="space-y-3 md:space-y-4"
                                        >
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 bg-slate-50/80 p-2.5 md:p-3 rounded-xl border border-slate-100">
                                                <div className="space-y-1 md:space-y-1.5">
                                                    <label htmlFor="income" className="flex items-center gap-1.5 text-[11px] md:text-[12px] font-bold text-slate-700 uppercase tracking-wide">
                                                        <span className="material-symbols-outlined text-[14px] md:text-[16px] text-slate-500">edit_square</span>
                                                        Monthly Income
                                                    </label>
                                                    <div className="relative">
                                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                            <span className="text-[15px] md:text-[16px] text-slate-400 font-bold">₹</span>
                                                        </div>
                                                        <input
                                                            required
                                                            type="number"
                                                            id="income"
                                                            value={formData.income}
                                                            onChange={(e) => updateForm("income", e.target.value)}
                                                            placeholder="75,000"
                                                            className="w-full h-11 md:h-12 pl-8 pr-3 rounded-lg border-2 border-slate-200 bg-white focus:bg-white text-[14px] md:text-[15px] font-bold text-slate-900 focus:outline-none focus:border-slate-500 focus:ring-4 focus:ring-slate-500/10 transition-all placeholder:text-slate-300 placeholder:font-medium shadow-sm"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-1 md:space-y-1.5">
                                                    <label htmlFor="pan" className="flex items-center gap-1.5 text-[11px] md:text-[12px] font-bold text-slate-700 uppercase tracking-wide">
                                                        <span className="material-symbols-outlined text-[14px] md:text-[16px] text-slate-500">edit_square</span>
                                                        PAN Number
                                                    </label>
                                                    <input
                                                        required
                                                        type="text"
                                                        id="pan"
                                                        value={formData.pan}
                                                        onChange={(e) => updateForm("pan", e.target.value.toUpperCase())}
                                                        placeholder="ABCDE1234F"
                                                        maxLength={10}
                                                        className="w-full h-11 md:h-12 px-3 rounded-lg border-2 border-slate-200 bg-white focus:bg-white text-[14px] md:text-[15px] font-black text-slate-900 focus:outline-none focus:border-slate-500 focus:ring-4 focus:ring-slate-500/10 transition-all placeholder:text-slate-300 placeholder:font-medium uppercase shadow-sm"
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-1 md:space-y-1.5 w-full md:w-[calc(50%-8px)] bg-slate-50/80 p-2.5 md:p-3 rounded-xl border border-slate-100">
                                                <label htmlFor="pincode" className="flex items-center gap-1.5 text-[11px] md:text-[12px] font-bold text-slate-700 uppercase tracking-wide">
                                                    <span className="material-symbols-outlined text-[14px] md:text-[16px] text-slate-500">edit_square</span>
                                                    Pincode
                                                </label>
                                                <input
                                                    required
                                                    type="text"
                                                    id="pincode"
                                                    pattern="[0-9]{6}"
                                                    maxLength={6}
                                                    value={formData.pincode}
                                                    onChange={(e) => updateForm("pincode", e.target.value)}
                                                    placeholder="400051"
                                                    className="w-full h-11 md:h-12 px-3 rounded-lg border-2 border-slate-200 bg-white focus:bg-white text-[14px] md:text-[15px] font-bold text-slate-900 focus:outline-none focus:border-slate-500 focus:ring-4 focus:ring-slate-500/10 transition-all placeholder:text-slate-300 placeholder:font-medium shadow-sm"
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* BOX 4: Trust Badge (4 cols) */}
                            <div className="md:col-span-4 bg-green-200 backdrop-blur-xl border border-emerald-200/60 rounded-2xl p-3 md:p-4 flex flex-row md:flex-col items-center justify-center md:justify-center gap-3 md:gap-1.5 text-center shadow-inner">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-100 flex items-center justify-center shadow-sm text-emerald-600 shrink-0">
                                    <span className="material-symbols-outlined text-[16px] md:text-[20px]">verified_user</span>
                                </div>
                                <div className="flex flex-col items-start md:items-center text-left md:text-center">
                                    <span className="text-[12px] md:text-[13px] font-bold text-emerald-900">Safe & Secure</span>
                                    <span className="text-[10px] md:text-[11px] font-bold text-emerald-600/80 uppercase tracking-wide">No documents initially</span>
                                </div>
                            </div>

                            {/* BOX 5: Action Button (8 cols) */}
                            <button
                                type="submit"
                                className="md:col-span-8 bg-blue-500 hover:bg-blue-600 text-white rounded-2xl text-[14px] md:text-[15px] font-extrabold tracking-wide shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.3)] hover:-translate-y-[1px] transition-all active:scale-[0.98] flex items-center justify-center gap-2 group h-12 md:h-auto py-3 md:py-0 border border-slate-800"
                            >
                                {step === 3 ? "Check Final Offers" : "Continue"}
                                {step !== 3 && (
                                    <span className="material-symbols-outlined text-[18px] md:text-[20px] group-hover:translate-x-1 transition-transform">
                                        arrow_forward
                                    </span>
                                )}
                            </button>

                        </motion.form>
                    )}

                    {/* ======================= LOADING STATE ======================= */}
                    {step === "loading" && (
                        <motion.div
                            key="loading"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center w-full max-w-sm flex flex-col items-center bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-slate-200/50 shadow-2xl"
                        >
                            <div className="relative w-16 h-16 md:w-20 md:h-20 mb-5 md:mb-6 flex items-center justify-center">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 rounded-full border-2 border-dashed border-slate-900/30"
                                />
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-2 rounded-full border-2 border-t-slate-900 border-r-transparent border-b-transparent border-l-transparent"
                                />
                                <span className="material-symbols-outlined text-2xl md:text-3xl text-slate-900">
                                    travel_explore
                                </span>
                            </div>
                            <h2 className="text-lg md:text-xl font-extrabold text-slate-900 mb-1.5 md:mb-2">
                                Matching you with lenders...
                            </h2>
                            <p className="text-[12px] md:text-[13px] font-medium text-slate-500">
                                Checking your profile against 50+ partners for pre-approved offers.
                            </p>
                        </motion.div>
                    )}

                    {/* ======================= RESULT STATE ======================= */}
                    {step === "result" && (
                        <motion.div
                            key="result"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full max-w-md text-center bg-white/90 backdrop-blur-xl rounded-3xl p-6 md:p-8 shadow-2xl border border-slate-200/50"
                        >
                            {isEligible ? (
                                <>
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6 border border-emerald-100 shadow-inner">
                                        <span className="material-symbols-outlined text-[32px] md:text-[40px]">check_circle</span>
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
                                        Your profile looks great!
                                    </h2>
                                    <p className="text-[13px] md:text-[14px] font-medium text-slate-600 leading-relaxed mb-6 md:mb-8 px-2 md:px-0">
                                        We are fetching pre-approved offers from our network of 25+ partners. Our team will contact you shortly to process your application.
                                    </p>
                                </>
                            ) : (
                                <>
                                    <div className="w-16 h-16 md:w-20 md:h-20 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-5 md:mb-6 border border-amber-100 shadow-inner">
                                        <span className="material-symbols-outlined text-[32px] md:text-[40px]">error</span>
                                    </div>
                                    <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight mb-2">
                                        Additional Review Needed
                                    </h2>
                                    <p className="text-[13px] md:text-[14px] font-medium text-slate-600 leading-relaxed mb-6 md:mb-8 px-2 md:px-0">
                                        Based on the details provided, we couldn't automatically generate pre-approved offers right now. One of our specialists will reach out to help find manual matches.
                                    </p>
                                </>
                            )}

                            <Link
                                href="/"
                                className="inline-flex w-full h-12 md:h-14 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-[13px] md:text-[14px] font-bold tracking-wide shadow-lg transition-all active:scale-[0.98] items-center justify-center gap-2"
                            >
                                <span className="material-symbols-outlined text-[18px] md:text-[20px]">home</span>
                                Return to Home
                            </Link>
                        </motion.div>
                    )}

                </AnimatePresence>
            </main>
        </div>
    );
}
