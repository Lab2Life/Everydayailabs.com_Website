import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DS365HeroSection from "@/components/ds365/HeroSection";
import BusinessStruggles from "@/components/ds365/BusinessStruggles";
import WhatIsDS365 from "@/components/ds365/WhatIsDS365";
import WhyYouNeedIt from "@/components/ds365/WhyYouNeedIt";
import WhatYouGet from "@/components/ds365/WhatYouGet";
import PricingSection from "@/components/ds365/PricingSection";
import HowWeDiffer from "@/components/ds365/HowWeDiffer";
import NextStepSection from "@/components/ds365/NextStepSection";

const DS365 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <DS365HeroSection />
        <BusinessStruggles />
        <WhatIsDS365 />
        <WhyYouNeedIt />
        <WhatYouGet />
        <PricingSection />
        <HowWeDiffer />
        <NextStepSection />
      </main>
      <Footer />
    </div>
  );
};

export default DS365;