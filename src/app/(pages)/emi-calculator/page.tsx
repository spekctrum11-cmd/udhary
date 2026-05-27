import EmiCalculator from "@/components/EmiCalculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EMI Calculator | Udhary",
  description: "Calculate your loan EMI, total interest, and payment break-up instantly with our beautiful and interactive EMI Calculator.",
};

export default function EmiCalculatorPage() {
  return (
    <main className="flex-1 bg-slate-50">
      {/* Elegant Ambient Background */}
      <section className="bg-slate-50 pt-20 pb-2 relative overflow-hidden">
        {/* Ambient Aurora Glows (Highly Visible) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[150px] -left-[100px] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[80px]"></div>
          <div className="absolute -bottom-[150px] -right-[100px] w-[500px] h-[500px] bg-orange-500/15 rounded-full blur-[80px]"></div>
        </div>

        {/* Crisp Top Highlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>

        <div className="max-w-container-max mx-auto px-gutter text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-blue-500/10 text-primary font-bold text-xs tracking-widest uppercase rounded-full mb-6 border border-blue-500/20 shadow-sm backdrop-blur-sm">
            Smart Planner
          </span>
          <h1 className="text-display-lg font-display-lg text-primary mb-4">
            EMI <span className="text-secondary">Calculator</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Design your perfect loan. Adjust the parameters below to instantly visualize your payments, interest, and total outlay in beautiful detail.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="pb-24 pt-0">
        <div className="max-w-5xl mx-auto">
          <EmiCalculator />
        </div>
      </section>
    </main>
  );
}
