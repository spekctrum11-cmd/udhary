import Image from "next/image";

export function PremiumOfferingsSection() {
  return (
    <section className="py-2 lg:py-8 bg-[#F8FAFC] relative overflow-hidden">
      {/* Subtle background ambient elements */}
      <div className="absolute top-0 left-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-blue-200/30 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-orange-100/40 rounded-full blur-[80px] md:blur-[120px] translate-y-1/3 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-6 lg:mb-16 max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 bg-blue-100/50 text-blue-700 font-bold text-[10px] md:text-xs tracking-widest uppercase rounded-full mb-4 shadow-[0_2px_10px_rgba(37,99,235,0.1)] border border-blue-200/50 backdrop-blur-sm">
            Premium Offerings
          </span>
          <h2 className="text-[32px] leading-[1.1] md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-5 md:mb-6">
            Tailored for your ambitions
          </h2>
          <p className="text-sm md:text-lg text-slate-600 px-2 md:px-4 leading-relaxed font-medium">
            Experience financial products designed with absolute precision, offering unmatched flexibility and lightning-fast processing.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">

          {/* Business Loan */}
          <div className="lg:col-span-2 md:col-span-2 group bg-white rounded-[24px] md:rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col md:flex-row border border-slate-100/60 relative">

            {/* Subtle internal gradient for loveliness */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-orange-50/40 pointer-events-none"></div>

            <div className="p-7 md:p-10 lg:p-12 flex-1 flex flex-col justify-center relative z-10">
              <div className="flex justify-between items-start mb-5 md:mb-6">
                <span className="px-3 py-1 bg-orange-50 text-orange-600 border border-orange-100 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-lg shadow-sm">
                  Business
                </span>
                {/* Mobile visual flair since main image was removed */}
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center border border-orange-200/50 shadow-sm text-orange-500">
                  <span className="material-symbols-outlined text-[20px] md:text-[24px]">storefront</span>
                </div>
              </div>

              <h3 className="text-[26px] md:text-3xl font-extrabold text-slate-900 mb-3 leading-[1.15] tracking-tight">
                Empowering Indian Entrepreneurs
              </h3>

              <p className="text-[15px] md:text-base text-slate-500 mb-6 md:mb-8 leading-relaxed font-medium">
                Get up to ₹30 lakhs in just 5 minutes. Trusted by over 3 million businesses nationwide to fuel their growth without collateral.
              </p>

              <ul className="space-y-3.5 mb-8">
                <li className="flex items-center gap-3.5 text-slate-700 text-[15px] md:text-base font-semibold">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-600 shadow-sm border border-green-100/50">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </span>
                  Zero Collateral Required
                </li>
                <li className="flex items-center gap-3.5 text-slate-700 text-[15px] md:text-base font-semibold">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-600 shadow-sm border border-green-100/50">
                    <span className="material-symbols-outlined text-[14px]">check</span>
                  </span>
                  100% Digital Process
                </li>
              </ul>

              <div className="mt-auto pt-2">
                <a href="https://app.udhary.com/loan-application" className="flex w-full md:w-fit items-center justify-center px-8 py-4 md:py-3.5 bg-slate-900 hover:bg-orange-500 text-white font-semibold rounded-2xl shadow-lg shadow-slate-900/10 hover:shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 active:shadow-sm text-[15px]">
                  Apply For Growth <span className="material-symbols-outlined ml-2 text-[20px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Home Loan (Compact Card on Desktop, Tall on Mobile/Tablet) */}
          <div className="lg:col-span-1 md:col-span-1 group rounded-[24px] md:rounded-[2rem] overflow-hidden relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500 border border-slate-800/50 flex flex-col bg-[#061124]">
            <div className="h-[140px] md:h-[160px] relative overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#061124] z-10"></div>
              <Image
                alt="A high-resolution 3D render of a luxury modern suburban house"
                src="/home.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute top-5 left-5 right-5 md:top-6 md:left-6 md:right-6 z-20 flex justify-between items-center">
                <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg shadow-sm">
                  Housing
                </span>
                <div className="w-8 h-8 md:w-9 md:h-9 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 shadow-sm text-emerald-400">
                  <span className="material-symbols-outlined text-[16px] md:text-[18px]">home</span>
                </div>
              </div>
            </div>
            <div className="p-6 md:p-7 pt-0 relative z-20 flex-1 flex flex-col">
              <h3 className="text-[20px] md:text-2xl font-bold text-white mb-2 tracking-tight">Unlock Your Dream Home</h3>
              <div className="flex items-baseline gap-1.5 mb-5">
                <span className="text-[11px] text-blue-300/80 font-bold uppercase tracking-wider">Starts at</span>
                <span className="text-[34px] md:text-[38px] font-black text-emerald-400 leading-none tracking-tighter">11.9%</span>
                <span className="text-emerald-400 font-bold">*</span>
              </div>
              <p className="text-blue-100/60 text-[14px] leading-relaxed mb-8 font-medium">
                Simple eligibility for Indian residents and salaried professionals aged 22-62 years.
              </p>
              <div className="mt-auto">
                <a href="/emi-calculator" className="flex w-full justify-center items-center px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold rounded-2xl backdrop-blur-md transition-all duration-300 active:scale-[0.98] text-[15px]">
                  Check EMI
                </a>
              </div>
            </div>
          </div>

          {/* Credit Card Card */}
          <div className="lg:col-span-3 md:col-span-1 group relative overflow-hidden rounded-[24px] md:rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-700 flex flex-col lg:flex-row items-center">
            {/* Ambient glowing orb */}
            <div className="absolute right-0 top-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-gradient-to-bl from-blue-100 via-indigo-50/50 to-transparent rounded-full blur-[60px] opacity-60 md:opacity-40 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none"></div>

            <div className="p-7 md:p-10 lg:p-14 flex-1 relative z-10 w-full flex flex-col h-full">
              <div className="flex justify-between items-start mb-5 md:mb-6">
                <span className="px-3 py-1 bg-blue-50 text-blue-600 border border-blue-100 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-lg shadow-sm">
                  Exclusive Access
                </span>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center border border-blue-200/50 shadow-sm text-blue-500">
                  <span className="material-symbols-outlined text-[20px] md:text-[24px]">credit_card</span>
                </div>
              </div>

              <h3 className="text-[28px] md:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-3 md:mb-4 leading-[1.1] tracking-tight">
                The Smart Way To Spend
              </h3>

              <p className="text-[15px] md:text-base text-slate-500 mb-8 lg:mb-10 max-w-lg leading-relaxed font-medium">
                Experience unmatched privileges with zero foreclosure charges and 100% secure transactions anywhere in the world.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6 md:mb-8">
                <div className="flex items-center gap-3.5 bg-slate-50/80 p-3 md:p-0 md:bg-transparent rounded-2xl md:rounded-none border border-slate-100 md:border-none">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100/50 shadow-sm shrink-0">
                    <span className="material-symbols-outlined text-[20px] md:text-[22px]">security</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-[14px] md:text-[15px] leading-tight">Bank-Grade</h4>
                    <p className="text-[12px] md:text-[13px] text-slate-500 font-medium">100% Secure</p>
                  </div>
                </div>
                <div className="flex items-center gap-3.5 bg-slate-50/80 p-3 md:p-0 md:bg-transparent rounded-2xl md:rounded-none border border-slate-100 md:border-none">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100/50 shadow-sm shrink-0">
                    <span className="material-symbols-outlined text-[20px] md:text-[22px]">percent</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-[14px] md:text-[15px] leading-tight">Zero Fees</h4>
                    <p className="text-[12px] md:text-[13px] text-slate-500 font-medium">No Foreclosure</p>
                  </div>
                </div>
              </div>

              <div>
                <a href="https://app.udhary.com/apply-credit-card" className="flex w-full md:w-fit items-center justify-center px-8 py-4 md:py-4 bg-slate-900 text-white font-semibold rounded-2xl shadow-lg shadow-slate-900/10 hover:shadow-slate-900/20 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 text-[15px] group/btn">
                  Claim Your Card <span className="material-symbols-outlined ml-2 text-[20px] group-hover/btn:translate-x-1.5 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Visual Side (Stacked on Mobile, Right on Desktop) */}
            <div className="px-4 pb-8 pt-4 md:p-8 lg:p-12 flex-1 flex items-center justify-center relative z-10 w-full min-h-[300px] md:min-h-[400px] perspective-1000 overflow-visible">
              <div className="relative w-[220px] sm:w-[250px] md:w-[280px] lg:w-[320px] group">

                {/* Ambient glow behind everything */}
                <div className="absolute inset-0 bg-blue-500/20 blur-[60px] rounded-full scale-110 translate-y-6 opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* ELITE SECONDARY CARD (Using the exact same image with filters) */}
                <div className="absolute inset-0 z-0 origin-bottom-right transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] 
                  translate-x-4 translate-y-6 rotate-[6deg] scale-[0.90] opacity-60 blur-[1px] saturate-[1.5] hue-rotate-[25deg]
                  group-hover:translate-x-8 group-hover:translate-y-2 group-hover:rotate-[12deg] group-hover:scale-[0.95] group-hover:opacity-80 group-hover:blur-0"
                >
                  <Image
                    alt="Premium virtual card backing"
                    src="/credit-card.png"
                    width={500}
                    height={315}
                    className="w-full h-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)]"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>

                {/* PRIMARY FOREGROUND CARD */}
                <div className="relative z-10 origin-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
                  group-hover:-translate-y-4 group-hover:-translate-x-2 group-hover:scale-[1.05] group-hover:-rotate-2"
                >
                  <Image
                    alt="A sleek modern premium credit card design"
                    src="/credit-card.png"
                    width={500}
                    height={315}
                    className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                    sizes="(max-width: 768px) 100vw, 500px"
                    priority
                  />

                  {/* Glossy Reflection Overlay on Primary Card */}
                  <div className="absolute inset-0 z-20 rounded-2xl md:rounded-3xl bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none transform -translate-x-full group-hover:translate-x-full overflow-hidden ease-in-out"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
