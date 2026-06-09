import React from "react";
import Link from "next/link";

const ratesData = [
  { lender: "HDFC Bank", badge: "Salaried", type: "Personal Loan", rate: "From 10.50%", fee: "₹1,999", tenure: "5 Years" },
  { lender: "ICICI Bank", badge: "Quick Processing", type: "Personal Loan", rate: "From 10.75%", fee: "₹2,500", tenure: "6 Years" },
  { lender: "Axis Bank", badge: "Self Employed", type: "Business Loan", rate: "From 14.00%", fee: "2%", tenure: "3 Years" },
  { lender: "SBI", badge: "Lowest Rate", type: "Home Loan", rate: "From 8.50%", fee: "₹5,000", tenure: "30 Years" },
  { lender: "Kotak Mahindra", badge: "Low Fee", type: "Personal Loan", rate: "From 10.99%", fee: "₹999", tenure: "5 Years" },
  { lender: "Bajaj Finserv", badge: "High Amount", type: "Business Loan", rate: "From 15.00%", fee: "1.5%", tenure: "4 Years" },
  { lender: "IDFC First", badge: "Pre-approved", type: "Personal Loan", rate: "From 11.25%", fee: "₹1,500", tenure: "5 Years" },
  { lender: "Tata Capital", badge: "High LTV", type: "Loan Against Property", rate: "From 9.75%", fee: "1%", tenure: "15 Years" },
];

export function LenderRatesSection() {
  return (
    <section className="py-8 md:py-10 bg-slate-50/50 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-6 md:mb-8">
          <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 font-medium text-[10px] md:text-[11px] tracking-widest uppercase rounded-[5px] mb-3 border border-blue-100/50 shadow-sm">
            Live Rates
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-slate-900 tracking-tight">
            Compare top lender rates today
          </h2>
          <p className="text-slate-500 text-[14px] md:text-lg font-light leading-relaxed">
            Live interest rates from India's leading banks and NBFCs.
          </p>
        </div>

        {/* =========================================
            MOBILE & TABLET LAYOUT (Ultra Compact Cards)
        ========================================= */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
          {ratesData.map((item, idx) => (
            <div key={`mobile-${idx}`} className="bg-white rounded-[5px] border border-slate-200/80 p-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col gap-1.5">
              {/* Header: Lender & Action */}
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[14px] font-bold text-slate-900 leading-none">{item.lender}</span>
                    <span className="inline-block bg-slate-50 border border-slate-100 rounded-[5px] px-1.5 py-0.5 text-[9px] font-semibold text-slate-500 leading-none">
                      {item.type}
                    </span>
                  </div>
                  <div className="text-[9px] text-slate-400 font-bold uppercase tracking-widest leading-none">{item.badge}</div>
                </div>
                <Link href="/apply" className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white rounded-[5px] px-3 py-1 text-[10px] font-bold uppercase tracking-wide shadow-sm hover:shadow-md transition-all active:scale-95 text-center flex items-center justify-center">
                  Apply
                </Link>
              </div>

              {/* Data Strip */}
              <div className="flex justify-between items-center bg-slate-50/60 rounded-[5px] p-1.5 border border-slate-100/50">
                <div className="flex-1 text-center">
                  <div className="text-[9px] text-slate-400 font-medium uppercase tracking-wider mb-0.5">Interest (p.a.)</div>
                  <div className="font-bold text-blue-600 text-[12px]">{item.rate}</div>
                </div>
                <div className="w-[1px] h-6 bg-slate-200"></div>
                <div className="flex-1 text-center">
                  <div className="text-[9px] text-slate-400 font-medium uppercase tracking-wider mb-0.5">Tenure</div>
                  <div className="font-semibold text-slate-700 text-[11px]">{item.tenure}</div>
                </div>
                <div className="w-[1px] h-6 bg-slate-200"></div>
                <div className="flex-1 text-center">
                  <div className="text-[9px] text-slate-400 font-medium uppercase tracking-wider mb-0.5">Fee</div>
                  <div className="font-semibold text-slate-700 text-[11px]">{item.fee}</div>
                </div>
              </div>
            </div>
          ))}
          <div className="md:col-span-2 text-center text-[9px] text-slate-400 font-medium mt-1 px-4 leading-snug">
            Rates updated daily. Final rate depends on CIBIL and eligibility.
          </div>
        </div>

        {/* =========================================
            DESKTOP LAYOUT (Clean Table)
        ========================================= */}
        <div className="hidden lg:block border border-slate-200/80 rounded-[5px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-white overflow-hidden">
          <div className="overflow-x-auto">
            <div className="relative w-full overflow-auto">
              <table className="w-full text-sm min-w-[800px] text-left">
                <thead className="bg-slate-50/80 sticky top-0 z-10 border-b border-slate-200/80">
                  <tr className="text-slate-500 text-[10px] uppercase tracking-wider">
                    <th className="font-semibold py-3 px-5">Lender</th>
                    <th className="font-semibold py-3 px-3">Loan Type</th>
                    <th className="font-semibold py-3 px-3">Interest (p.a.)</th>
                    <th className="font-semibold py-3 px-3">Processing Fee</th>
                    <th className="font-semibold py-3 px-3">Max Tenure</th>
                    <th className="font-semibold py-3 px-5 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100/80">
                  {ratesData.map((item, idx) => (
                    <tr key={`desktop-${idx}`} className="hover:bg-blue-50/30 transition-colors duration-300 group">
                      <td className="py-2.5 px-5 align-middle">
                        <div className="flex flex-col gap-0">
                          <span className="text-[14px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                            {item.lender}
                          </span>
                          <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">
                            {item.badge}
                          </span>
                        </div>
                      </td>
                      <td className="py-2.5 px-3 align-middle">
                        <div className="inline-flex items-center rounded-[5px] border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                          {item.type}
                        </div>
                      </td>
                      <td className="py-2.5 px-3 align-middle font-bold text-blue-600 text-[13px]">
                        {item.rate}
                      </td>
                      <td className="py-2.5 px-3 align-middle text-slate-600 font-semibold text-[12px]">
                        {item.fee}
                      </td>
                      <td className="py-2.5 px-3 align-middle text-slate-600 font-semibold text-[12px]">
                        {item.tenure}
                      </td>
                      <td className="py-2.5 px-5 align-middle text-right">
                        <Link href="/apply" className="inline-flex items-center justify-center font-bold bg-blue-600 hover:bg-blue-700 text-white min-h-[28px] px-4 text-[10px] uppercase tracking-wide rounded-[5px] shadow-[0_4px_10px_rgba(37,99,235,0.2)] hover:shadow-[0_6px_15px_rgba(37,99,235,0.4)] hover:-translate-y-[1px] transition-all duration-300 active:scale-95">
                          Apply
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-slate-50/80 p-2.5 text-center text-[10px] text-slate-500 font-medium border-t border-slate-200/80">
            Rates updated daily. Final interest rate depends on your CIBIL score and eligibility.
          </div>
        </div>

      </div>
    </section>
  );
}
