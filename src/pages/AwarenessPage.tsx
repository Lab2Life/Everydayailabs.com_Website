import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/awareness/HeroSection";
import Struggles from "@/components/awareness/Struggles";
import WhatIsAwareness from "@/components/awareness/WhatIsAwareness";
import WhyNonNegotiable from "@/components/awareness/WhyNonNegotiable";
import WhatYouGet from "@/components/awareness/WhatYouGet";
import PricingSection from "@/components/awareness/PricingSection";
import HowWeDiffer from "@/components/awareness/HowWeDiffer";
import NextSteps from "@/components/awareness/NextSteps";

const AwarenessPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <Struggles />
        <WhatIsAwareness />
        <WhyNonNegotiable />
        <WhatYouGet />
        <PricingSection />
        <HowWeDiffer />
        <NextSteps />
      </main>
      <Footer />
    </div>
  );
};

export default AwarenessPage;