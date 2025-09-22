import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart } from "lucide-react";

const HeroSection = () => {
  const scrollToPricing = () => {
    const pricingElement = document.querySelector("#pricing-section");
    if (pricingElement) {
      pricingElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Heart className="w-4 h-4" />
            AI Awareness Session (Public)
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
            AI Made Simple for Your Everyday Life
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            <span className="font-semibold text-emerald-600">
              Learn how to save time, money, and effort
            </span>{" "}
            — every single day.
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            A 2-hour practical group session that transforms AI from confusing
            tech-talk into simple, everyday tools you can use immediately.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 text-lg group"
              onClick={scrollToPricing}
            >
              Join the Next Session
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-emerald-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                2 Hours
              </div>
              <div className="text-muted-foreground">
                From confusion to confidence
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">
                10+ Tools
              </div>
              <div className="text-muted-foreground">
                Practical daily applications
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">
                Save 2 Hours
              </div>
              <div className="text-muted-foreground">Every single day</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-teal-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;
