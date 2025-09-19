import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/doubt-clearance/HeroSection";
import Struggles from "@/components/doubt-clearance/Struggles";
import WhatIsDoubtClearance from "@/components/doubt-clearance/WhatIsDoubtClearance";
import WhyThisMatters from "@/components/doubt-clearance/WhyThisMatters";
import BeforeAfterDoubt from "@/components/doubt-clearance/BeforeAfterDoubt";
import WhatYouGet from "@/components/doubt-clearance/WhatYouGet";
import Pricing from "@/components/doubt-clearance/Pricing";
import HowWeDiffer from "@/components/doubt-clearance/HowWeDiffer";
import NextSteps from "@/components/doubt-clearance/NextSteps";

const DoubtClearancePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <Struggles />
        <WhatIsDoubtClearance />
        <WhyThisMatters />
        <BeforeAfterDoubt />
        <WhatYouGet />
        <Pricing />
        <HowWeDiffer />
        <NextSteps />
      </main>
      <Footer />
    </div>
  );
};

export default DoubtClearancePage;