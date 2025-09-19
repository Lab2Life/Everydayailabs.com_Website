import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CareerHeroSection from "@/components/career/HeroSection";
import CareerStruggles from "@/components/career/Struggles";
import WhatIsCareerSession from "@/components/career/WhatIsCareerSession";
import WhyThisMatters from "@/components/career/WhyThisMatters";
import BeforeAfter from "@/components/career/BeforeAfter";
import WhatYouGetCareer from "@/components/career/WhatYouGetCareer";
import CareerPricingSection from "@/components/career/PricingSection";
import HowWeDifferCareer from "@/components/career/HowWeDifferCareer";
import CareerNextStepSection from "@/components/career/NextStepSection";

const CareerPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <CareerHeroSection />
        <CareerStruggles />
        <WhatIsCareerSession />
        <WhyThisMatters />
        <BeforeAfter />
        <WhatYouGetCareer />
        <CareerPricingSection />
        <HowWeDifferCareer />
        <CareerNextStepSection />
      </main>
      <Footer />
    </div>
  );
};

export default CareerPage;