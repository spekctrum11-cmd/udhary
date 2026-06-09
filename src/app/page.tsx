import dynamic from "next/dynamic";
import { ServiceSlider } from "@/components/ServiceSlider";
import { HeroSection } from "@/components/HeroSection";
import { FinancialEcosystemSection } from "@/components/FinancialEcosystemSection";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";

// Below-the-fold components lazy loaded to reduce initial TBT and bundle size
const ComparisonEngineSection = dynamic(() => import("@/components/ComparisonEngineSection").then(mod => mod.ComparisonEngineSection));
const PremiumOfferingsSection = dynamic(() => import("@/components/PremiumOfferingsSection").then(mod => mod.PremiumOfferingsSection));
const SimpleProcedure = dynamic(() => import("@/components/SimpleProcedure").then(mod => mod.SimpleProcedure));
const PartnerMarquee = dynamic(() => import("@/components/PartnerMarquee").then(mod => mod.PartnerMarquee));
const UdharyAdvantageSection = dynamic(() => import("@/components/UdharyAdvantageSection").then(mod => mod.UdharyAdvantageSection));
const TestimonialsSection = dynamic(() => import("@/components/TestimonialsSection").then(mod => mod.TestimonialsSection));
const FAQSection = dynamic(() => import("@/components/FAQSection").then(mod => mod.FAQSection));

export default function Home() {
  return (
    <>
      <ServiceSlider />

      <main className="flex-1">
        <HeroSection />
        <FinancialEcosystemSection />
        <ComparisonEngineSection />
        <PremiumOfferingsSection />
        <SimpleProcedure />
        <PartnerMarquee />
        <UdharyAdvantageSection />
        <TestimonialsSection />
        <FAQSection />
      </main>

      <WhatsAppFAB />
    </>
  );
}
