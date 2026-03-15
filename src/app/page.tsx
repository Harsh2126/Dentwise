import Headers from "@/components/landing/Headers";  
import Hero from "@/components/landing/Hero"; 
import HowItWorks from "@/components/landing/HowItWorks";
import WhatToAsk from "@/components/landing/WhatToAsk";
import PricingSection from "@/components/landing/PricingSection";
import CAT from "@/components/landing/CAT";
import Footer from "@/components/landing/Footer";


export default async function Home() {
  

  return (
    <div className="min-h-screen bg-background">
      <Headers />
      <Hero />
      <HowItWorks />
      <WhatToAsk />
      <PricingSection />
      <CAT />
      <Footer />
    </div>
    
  );
}