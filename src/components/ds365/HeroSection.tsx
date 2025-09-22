import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const DS365HeroSection = () => {
  const scrollToPricing = () => {
    const pricingElement = document.querySelector("#pricing-section");
    if (pricingElement) {
      pricingElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 text-lg px-4 py-2">
            DS365 - Digital Survival 365
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Your daily oxygen for staying DIGITALLY visible online
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 italic">
            "Be the first business they see. Be the last they forget"
          </p>

          <div className="flex justify-center">
            <Button
              variant="gradient"
              size="lg"
              className="text-lg px-8 py-6"
              onClick={scrollToPricing}
            >
              Start Your Digital Survival
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DS365HeroSection;
