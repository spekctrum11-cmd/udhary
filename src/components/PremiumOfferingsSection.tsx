import Image from "next/image";

export function PremiumOfferingsSection() {
  return (
    <section className="py-2 lg:py-8 bg-[#F8FAFC] relative overflow-hidden">
      {/* Subtle background ambient elements */}
      <div className="absolute top-0 left-0 w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-blue-200/30 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-orange-100/40 rounded-full blur-[80px] md:blur-[120px] translate-y-1/3 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-4 lg:mb-8 max-w-xl mx-auto">
          <span className="inline-block px-3 py-1 bg-blue-100/50 text-blue-700 font-bold text-[9px] md:text-[10px] tracking-widest uppercase rounded-full mb-2 shadow-sm border border-blue-200/50 backdrop-blur-sm">
            Premium Offerings
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-2 md:mb-3">
            Tailored for your ambitions
          </h2>
          <p className="text-xs md:text-sm text-slate-600 px-2 md:px-4 leading-relaxed font-medium">
            Experience financial products designed with absolute precision, offering unmatched flexibility and lightning-fast processing.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5">

          {/* Business Loan */}
          <div className="lg:col-span-2 md:col-span-2 group bg-white rounded-[24px] md:rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 flex flex-col md:flex-row border border-slate-100/60 relative">

            {/* Subtle internal gradient for loveliness */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-orange-50/40 pointer-events-none"></div>

            <div className="p-5 md:p-6 lg:p-8 flex-1 flex flex-col justify-center relative z-10">
              <div className="flex justify-between items-start mb-4">
                <span className="px-2.5 py-1 bg-orange-50 text-orange-600 border border-orange-100 text-[9px] md:text-[10px] font-bold uppercase tracking-widest rounded-md shadow-sm">
                  Business
                </span>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-orange-100 to-orange-50 rounded-full flex items-center justify-center border border-orange-200/50 shadow-sm text-orange-500">
                  <span className="material-symbols-outlined text-[18px] md:text-[20px]">storefront</span>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-2 leading-[1.15] tracking-tight">
                Empowering Indian Entrepreneurs
              </h3>

              <p className="text-[13px] md:text-sm text-slate-500 mb-4 md:mb-5 leading-relaxed font-medium">
                Get up to ₹30 lakhs in just 5 minutes. Trusted by over 3 million businesses nationwide.
              </p>

              <ul className="space-y-2 mb-5">
                <li className="flex items-center gap-2.5 text-slate-700 text-[13px] md:text-sm font-semibold">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 shadow-sm border border-slate-100/50">
                    <span className="material-symbols-outlined text-[12px]">check</span>
                  </span>
                  Zero Collateral Required
                </li>
                <li className="flex items-center gap-2.5 text-slate-700 text-[13px] md:text-sm font-semibold">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 shadow-sm border border-slate-100/50">
                    <span className="material-symbols-outlined text-[12px]">check</span>
                  </span>
                  100% Digital Process
                </li>
              </ul>

              <div className="mt-auto pt-2">
                <a href="https://app.udhary.com/loan-application" className="flex w-full md:w-fit items-center justify-center px-6 py-3 bg-slate-900 hover:bg-orange-500 text-white font-semibold rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 text-[13px]">
                  Apply For Growth <span className="material-symbols-outlined ml-2 text-[18px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Home Loan (Compact Card on Desktop, Tall on Mobile/Tablet) */}
          <div className="lg:col-span-1 md:col-span-2 group rounded-[24px] md:rounded-[2rem] overflow-hidden relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500 border border-slate-800/50 flex flex-col bg-[#061124]">
            <div className="h-[100px] md:h-[120px] relative overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#061124] z-10"></div>
              <Image
                alt="A high-resolution 3D render of a luxury modern suburban house"
                src="/home.jpg"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out opacity-80 group-hover:opacity-100"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center">
                <span className="px-2.5 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[9px] font-bold uppercase tracking-widest rounded-md shadow-sm">
                  Housing
                </span>
                <div className="w-7 h-7 bg-white/15 backdrop-blur-md rounded-full flex items-center justify-center border border-white/10 shadow-sm text-blue-400">
                  <span className="material-symbols-outlined text-[16px]">home</span>
                </div>
              </div>
            </div>
            <div className="p-5 relative z-20 flex-1 flex flex-col">
              <h3 className="text-lg md:text-xl font-bold text-white mb-1.5 tracking-tight">Dream Home</h3>
              <div className="flex items-baseline gap-1.5 mb-3">
                <span className="text-[10px] text-blue-300/80 font-bold uppercase tracking-wider">Starts at</span>
                <span className="text-2xl md:text-3xl font-black text-green-500 leading-none tracking-tighter">11.9%</span>
                <span className="text-blue-400 font-bold">*</span>
              </div>
              <p className="text-blue-100/60 text-xs leading-relaxed mb-5 font-medium">
                Simple eligibility for Indian residents and salaried professionals.
              </p>
              <div className="mt-auto bg-orange-700 border-[1px] border-white/40 hover:border-white/70 rounded-xl backdrop-blur-md transition-all duration-300 active:scale-[0.98]">
                <a href="/emi-calculator" className="flex w-full justify-center items-center px-4 py-2  text-white font-semibold text-[16px]">
                  Check EMI
                </a>
              </div>
            </div>
          </div>

          {/* Credit Card Card */}
          <div className="lg:col-span-3 md:col-span-2 group relative overflow-hidden rounded-[24px] md:rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-700 flex flex-col lg:flex-row items-center">
            {/* Ambient glowing orb */}
            <div className="absolute right-0 top-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-gradient-to-bl from-blue-100 via-indigo-50/50 to-transparent rounded-full blur-[60px] opacity-60 md:opacity-40 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none"></div>

            <div className="p-5 md:p-6 lg:p-8 flex-1 relative z-10 w-full flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <span className="px-2.5 py-1 bg-blue-50 text-blue-600 border border-blue-100 text-[9px] md:text-[10px] font-bold uppercase tracking-widest rounded-md shadow-sm">
                  Exclusive Access
                </span>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center border border-blue-200/50 shadow-sm text-blue-500">
                  <span className="material-symbols-outlined text-[18px] md:text-[20px]">credit_card</span>
                </div>
              </div>

              <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2 leading-[1.1] tracking-tight">
                The Smart Way To Spend
              </h3>

              <p className="text-[13px] md:text-sm text-slate-500 mb-5 md:mb-6 max-w-lg leading-relaxed font-medium">
                Experience unmatched privileges with zero foreclosure charges and 100% secure transactions.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-5 md:mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100/50 shadow-sm shrink-0">
                    <span className="material-symbols-outlined text-[16px] md:text-[18px]">security</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-[13px] md:text-[14px] leading-tight">Bank-Grade</h4>
                    <p className="text-[11px] md:text-[12px] text-slate-500 font-medium">100% Secure</p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 border border-indigo-100/50 shadow-sm shrink-0">
                    <span className="material-symbols-outlined text-[16px] md:text-[18px]">percent</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-[13px] md:text-[14px] leading-tight">Zero Fees</h4>
                    <p className="text-[11px] md:text-[12px] text-slate-500 font-medium">No Foreclosure</p>
                  </div>
                </div>
              </div>

              <div>
                <a href="https://app.udhary.com/apply-credit-card" className="flex w-full md:w-fit items-center justify-center px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl shadow-md hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 text-[13px] group/btn">
                  Claim Your Card <span className="material-symbols-outlined ml-2 text-[18px] group-hover/btn:translate-x-1.5 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Visual Side (Stacked on Mobile, Right on Desktop) */}
            <div className="px-4 pb-6 pt-2 md:p-6 lg:p-8 flex-1 flex items-center justify-center relative z-10 w-full min-h-[200px] md:min-h-[300px] perspective-1000 overflow-visible">
              <div className="relative w-[180px] sm:w-[200px] md:w-[240px] lg:w-[280px] group">

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
