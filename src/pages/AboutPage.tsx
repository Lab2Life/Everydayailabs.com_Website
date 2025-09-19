import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import WhatMakesUsDifferent from "@/components/about/WhatMakesUsDifferent";
import WhoWeServe from "@/components/about/WhoWeServe";
import OurPath from "@/components/about/OurPath";
import WhyTrustUs from "@/components/about/WhyTrustUs";
import OurEssence from "@/components/about/OurEssence";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AboutHeroSection />
        <WhatMakesUsDifferent />
        <WhoWeServe />
        <OurPath />
        <WhyTrustUs />
        <OurEssence />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;