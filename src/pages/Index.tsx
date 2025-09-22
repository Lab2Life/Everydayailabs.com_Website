import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BrandHeroSection from "@/components/home/BrandHeroSection";
import QuickNavigation from "@/components/home/QuickNavigation";
import PeopleStruggles from "@/components/home/PeopleStruggles";
import WhatIsEverydayAI from "@/components/home/WhatIsEverydayAI";
import WhyAINonNegotiable from "@/components/home/WhyAINonNegotiable";
import OurServicesSpectrum from "@/components/home/OurServicesSpectrum";
import HowWeDifferHome from "@/components/home/HowWeDifferHome";
import ProofAndTrust from "@/components/home/ProofAndTrust";
import HomeNextStepSection from "@/components/home/HomeNextStepSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <BrandHeroSection />
        <QuickNavigation />
        <PeopleStruggles />
        <WhatIsEverydayAI />
        <WhyAINonNegotiable />
        <OurServicesSpectrum />
        <HowWeDifferHome />
        <ProofAndTrust />
        <HomeNextStepSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
