import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/managers/HeroSection";
import Struggles from "@/components/managers/Struggles";
import WhatIsManagersAI from "@/components/managers/WhatIsManagersAI";
import WhyNonNegotiable from "@/components/managers/WhyNonNegotiable";
import WhatYouGet from "@/components/managers/WhatYouGet";
import HowWeDiffer from "@/components/managers/HowWeDiffer";
import NextSteps from "@/components/managers/NextSteps";

const ManagersPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <Struggles />
        <WhatIsManagersAI />
        <WhyNonNegotiable />
        <WhatYouGet />
        <HowWeDiffer />
        <NextSteps />
      </main>
      <Footer />
    </div>
  );
};

export default ManagersPage;