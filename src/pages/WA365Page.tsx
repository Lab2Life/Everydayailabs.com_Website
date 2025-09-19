import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/wa365/HeroSection";
import Struggles from "@/components/wa365/Struggles";
import WhatIsWA365 from "@/components/wa365/WhatIsWA365";
import WhyNonNegotiable from "@/components/wa365/WhyNonNegotiable";
import WhatYouGet from "@/components/wa365/WhatYouGet";
import HowWeDiffer from "@/components/wa365/HowWeDiffer";
import NextSteps from "@/components/wa365/NextSteps";

const WA365Page = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <Struggles />
        <WhatIsWA365 />
        <WhyNonNegotiable />
        <WhatYouGet />
        <HowWeDiffer />
        <NextSteps />
      </main>
      <Footer />
    </div>
  );
};

export default WA365Page;