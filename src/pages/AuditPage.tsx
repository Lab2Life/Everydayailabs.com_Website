import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuditHeroSection from "@/components/audit/HeroSection";
import AuditBusinessStruggles from "@/components/audit/BusinessStruggles";
import WhatIsAudit from "@/components/audit/WhatIsAudit";
import WhyYouNeedAudit from "@/components/audit/WhyYouNeedAudit";
import WhatYouGetAudit from "@/components/audit/WhatYouGetAudit";
import HowItWorksAudit from "@/components/audit/HowItWorksAudit";
import AuditPricingSection from "@/components/audit/PricingSection";
import HowWeDifferAudit from "@/components/audit/HowWeDifferAudit";
import AuditNextStepSection from "@/components/audit/NextStepSection";

const AuditPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <AuditHeroSection />
        <AuditBusinessStruggles />
        <WhatIsAudit />
        <WhyYouNeedAudit />
        <WhatYouGetAudit />
        <HowItWorksAudit />
        <AuditPricingSection />
        <HowWeDifferAudit />
        <AuditNextStepSection />
      </main>
      <Footer />
    </div>
  );
};

export default AuditPage;