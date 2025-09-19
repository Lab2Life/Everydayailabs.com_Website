import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/public-awareness/HeroSection";
import Struggles from "@/components/public-awareness/Struggles";
import WhatIsPublicAwareness from "@/components/public-awareness/WhatIsPublicAwareness";
import WhyNonNegotiable from "@/components/public-awareness/WhyNonNegotiable";
import WhatYouGet from "@/components/public-awareness/WhatYouGet";
import PricingSection from "@/components/public-awareness/PricingSection";
import HowWeDiffer from "@/components/public-awareness/HowWeDiffer";
import NextSteps from "@/components/public-awareness/NextSteps";

const PublicAwarenessPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <Struggles />
        <WhatIsPublicAwareness />
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

export default PublicAwarenessPage;