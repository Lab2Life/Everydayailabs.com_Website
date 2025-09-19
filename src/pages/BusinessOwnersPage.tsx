import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/business-owners/HeroSection";
import Struggles from "@/components/business-owners/Struggles";
import WhatIsBusinessOwnersAI from "@/components/business-owners/WhatIsBusinessOwnersAI";
import WhyNonNegotiable from "@/components/business-owners/WhyNonNegotiable";
import WhatYouGet from "@/components/business-owners/WhatYouGet";
import HowWeDiffer from "@/components/business-owners/HowWeDiffer";
import NextSteps from "@/components/business-owners/NextSteps";

const BusinessOwnersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <Struggles />
        <WhatIsBusinessOwnersAI />
        <WhyNonNegotiable />
        <WhatYouGet />
        <HowWeDiffer />
        <NextSteps />
      </main>
      <Footer />
    </div>
  );
};

export default BusinessOwnersPage;