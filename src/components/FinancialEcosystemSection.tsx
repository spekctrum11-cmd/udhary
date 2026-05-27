import Link from "next/link";

export function FinancialEcosystemSection() {
  const ecosystemItems = [
    { icon: 'account_balance', label: 'Personal Loan', href: "https://app.udhary.com/loan-application?_gl=1*10jgv0m*_ga*MTQ3NTA3ODg0MC4xNzc5MjcyNTkz*_ga_W44M2VB8CN*czE3Nzk0MjUyNDYkbzUkZzAkdDE3Nzk0MjUyNDYkajYwJGwwJGgw" },
    { icon: 'credit_card', label: 'Credit Card', href: "https://app.udhary.com/apply-credit-card?_gl=1*1n4nhtf*_ga*MTQ3NTA3ODg0MC4xNzc5MjcyNTkz*_ga_W44M2VB8CN*czE3Nzk0MjUyNDYkbzUkZzEkdDE3Nzk0MjUzOTAkajgkbDAkaDA." },
    { icon: 'home', label: 'Home Loan', href: "https://app.udhary.com/loan-application?_gl=1*10jgv0m*_ga*MTQ3NTA3ODg0MC4xNzc5MjcyNTkz*_ga_W44M2VB8CN*czE3Nzk0MjUyNDYkbzUkZzAkdDE3Nzk0MjUyNDYkajYwJGwwJGgw" },
    { icon: 'directions_car', label: 'Car Loan', href: "https://app.udhary.com/loan-application?_gl=1*10jgv0m*_ga*MTQ3NTA3ODg0MC4xNzc5MjcyNTkz*_ga_W44M2VB8CN*czE3Nzk0MjUyNDYkbzUkZzAkdDE3Nzk0MjUyNDYkajYwJGwwJGgw" },
    { icon: 'health_and_safety', label: 'Insurance', href: "https://beemaaa.com/" },
    { icon: 'flight_takeoff', label: 'Travel Booking', href: "https://www.spectrumtravel.in/" },
  ];

  return (
    <section className="py-12 bg-transparent relative overflow-hidden">
      {/* Subtle Ambient Glow for the Dock */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[120px] bg-blue-500/5 rounded-full blur-[60px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        {/* Minimalist Heading Inline with Dock */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 bg-white border border-slate-200 text-slate-500 font-medium text-[11px] tracking-widest uppercase rounded-full mb-4 shadow-[0_2px_10px_rgb(0,0,0,0.02)]">
            Ecosystem
          </span>
          <h2 className="text-xl md:text-2xl font-normal text-slate-800 tracking-tight">
            One platform for all your <span className="font-medium text-blue-600">financial needs</span>.
          </h2>
        </div>

        {/* Floating Glass Dock Container */}
        <div className="relative mx-auto w-full max-w-max">
          {/* Glass Container */}
          <div className="flex flex-wrap justify-center items-center gap-1 p-2 bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[2rem] shadow-[0_15px_40px_rgb(0,0,0,0.06)]">
              {ecosystemItems.map((item, idx) => {
                const content = (
                  <div className="flex flex-col items-center justify-center gap-2 px-4 py-3 sm:px-7 sm:py-5 rounded-3xl hover:bg-white hover:shadow-[0_8px_25px_rgb(0,0,0,0.04)] transition-all duration-500 group min-w-[100px]">
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-blue-500 group-hover:-translate-y-1 transition-all duration-500 text-[26px] sm:text-[32px]" style={{ fontVariationSettings: "'wght' 300" }}>
                    {item.icon}
                  </span>
                  <span className="text-[12px] sm:text-[13px] font-medium text-slate-500 group-hover:text-slate-800 whitespace-nowrap transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
              );

              return item.href === "#" ? (
                <div key={idx} className="cursor-default outline-none">
                  {content}
                </div>
              ) : (
                <Link href={item.href} key={idx} className="outline-none block">
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}
