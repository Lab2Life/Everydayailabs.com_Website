import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const AuditHeroSection = () => {
  const scrollToPricing = () => {
    const pricingElement = document.querySelector("#pricing-section");
    if (pricingElement) {
      pricingElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge
            variant="outline"
            className="mb-6 text-lg px-4 py-2 border-blue-500 text-blue-600"
          >
            EverydayAiLabs – AI Digital Audit
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Know where you stand digitally before you plan your next step
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 italic">
            "Clarity first. Strategy next."
          </p>

          <div className="flex justify-center">
            <Button
              variant="gradient"
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600"
              onClick={scrollToPricing}
            >
              Get Your Digital Audit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditHeroSection;
