import Link from "next/link";

export function FinancialEcosystemSection() {
  const ecosystemItems = [
    { icon: 'account_balance', label: 'Personal Loan', href: "https://app.udhary.com/loan-application?_gl=1*10jgv0m*_ga*MTQ3NTA3ODg0MC4xNzc5MjcyNTkz*_ga_W44M2VB8CN*czE3Nzk0MjUyNDYkbzUkZzAkdDE3Nzk0MjUyNDYkajYwJGwwJGgw", bgBase: "bg-blue-50", bgHover: "hover:bg-blue-200", iconColor: "text-blue-600" },
    { icon: 'credit_card', label: 'Credit Card', href: "https://app.udhary.com/apply-credit-card?_gl=1*1n4nhtf*_ga*MTQ3NTA3ODg0MC4xNzc5MjcyNTkz*_ga_W44M2VB8CN*czE3Nzk0MjUyNDYkbzUkZzEkdDE3Nzk0MjUzOTAkajgkbDAkaDA.", bgBase: "bg-emerald-50", bgHover: "hover:bg-emerald-200", iconColor: "text-emerald-600" },
    { icon: 'home', label: 'Home Loan', href: "https://app.udhary.com/loan-application?_gl=1*10jgv0m*_ga*MTQ3NTA3ODg0MC4xNzc5MjcyNTkz*_ga_W44M2VB8CN*czE3Nzk0MjUyNDYkbzUkZzAkdDE3Nzk0MjUyNDYkajYwJGwwJGgw", bgBase: "bg-amber-50", bgHover: "hover:bg-amber-200", iconColor: "text-amber-600" },
    { icon: 'directions_car', label: 'Car Loan', href: "https://app.udhary.com/loan-application?_gl=1*10jgv0m*_ga*MTQ3NTA3ODg0MC4xNzc5MjcyNTkz*_ga_W44M2VB8CN*czE3Nzk0MjUyNDYkbzUkZzAkdDE3Nzk0MjUyNDYkajYwJGwwJGgw", bgBase: "bg-rose-50", bgHover: "hover:bg-rose-200", iconColor: "text-rose-600" },
    { icon: 'health_and_safety', label: 'Insurance', href: "https://beemaaa.com/", bgBase: "bg-violet-50", bgHover: "hover:bg-violet-200", iconColor: "text-violet-600" },
    { icon: 'flight_takeoff', label: 'Travel Booking', href: "https://www.spectrumtravel.in/", bgBase: "bg-orange-50", bgHover: "hover:bg-orange-200", iconColor: "text-orange-600" },
  ];

  return (
    <section className="py-12 bg-white relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Minimalist Heading Inline with Dock */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 bg-slate-100 border border-slate-200 text-slate-600 font-bold text-[11px] tracking-widest uppercase rounded-full mb-4 shadow-sm">
            Core Services
          </span>
          <h2 className="text-xl md:text-2xl font-normal text-slate-800 tracking-tight">
            One platform for all your <span className="font-medium text-blue-600">financial needs</span>.
          </h2>
        </div>

        {/* Floating Solid Dock Container */}
        <div className="relative mx-auto w-full max-w-4xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 items-center gap-2 md:gap-3 p-2 md:p-3 bg-slate-50 border border-slate-200/60 rounded-2xl lg:rounded-3xl shadow-[0_10px_30px_rgb(0,0,0,0.04)]">
            {ecosystemItems.map((item, idx) => {
              const content = (
                <div className={`flex flex-col items-center justify-center gap-1.5 px-2 py-3 lg:py-4 rounded-xl lg:rounded-2xl ${item.bgBase} ${item.bgHover} transition-colors duration-300 group text-center h-full border border-black/5`}>
                  <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white shadow-sm mb-1 group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300 ${item.iconColor}`}>
                    <span className="material-symbols-outlined text-[20px] md:text-[24px]" style={{ fontVariationSettings: "'wght' 400" }}>
                      {item.icon}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-700 group-hover:text-slate-900 transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
              );

              return item.href === "#" ? (
                <div key={idx} className="cursor-default outline-none h-full">
                  {content}
                </div>
              ) : (
                <Link href={item.href} key={idx} className="outline-none block h-full">
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
