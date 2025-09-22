import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const DoubtClearanceHeroSection = () => {
  const scrollToPricing = () => {
    const pricingElement = document.querySelector("#pricing-section");
    if (pricingElement) {
      pricingElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge
            variant="outline"
            className="mb-6 text-lg px-4 py-2 border-orange-500 text-orange-600"
          >
            AI Doubt Clearance Session
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
            Turn Confusion into Confidence
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 italic">
            "Make AI work for your team, your industry, your goals."
          </p>

          <div className="flex justify-center">
            <Button
              variant="gradient"
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-orange-600 to-amber-600"
              onClick={scrollToPricing}
            >
              Clear Your AI Doubts
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoubtClearanceHeroSection;
