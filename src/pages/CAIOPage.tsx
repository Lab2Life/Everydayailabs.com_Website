import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/caio/HeroSection";
import Struggles from "@/components/caio/Struggles";
import WhatIsCAIO from "@/components/caio/WhatIsCAIO";
import WhyNonNegotiable from "@/components/caio/WhyNonNegotiable";
import PathwayLevels from "@/components/caio/PathwayLevels";
import HowWeDiffer from "@/components/caio/HowWeDiffer";
import NextSteps from "@/components/caio/NextSteps";

const CAIOPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <Struggles />
        <WhatIsCAIO />
        <WhyNonNegotiable />
        <PathwayLevels />
        <HowWeDiffer />
        <NextSteps />
      </main>
      <Footer />
    </div>
  );
};

export default CAIOPage;