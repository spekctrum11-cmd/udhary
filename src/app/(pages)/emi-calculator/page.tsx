import EmiCalculator from "@/components/EmiCalculator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EMI Calculator | Udhary",
  description: "Calculate your loan EMI, total interest, and payment break-up instantly with our beautiful and interactive EMI Calculator.",
};

export default function EmiCalculatorPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header section can be small since the calculator has a title, or we can just let the calculator shine */}
        <div className="mb-8">
          <EmiCalculator />
        </div>
      </div>
    </main>
  );
}
