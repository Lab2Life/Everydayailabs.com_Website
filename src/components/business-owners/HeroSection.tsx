import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Crown } from "lucide-react";

const HeroSection = () => {
  const scrollToWhatIs = () => {
    const whatIsElement = document.querySelector("#what-is-business-owners");
    if (whatIsElement) {
      whatIsElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Crown className="w-4 h-4" />
            AI for Business Owners
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-teal-600 to-emerald-600 bg-clip-text text-transparent leading-tight">
            From Busy Owner to Empowered Leader
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            <span className="font-semibold text-green-600">
              Let AI handle the load, while you focus on growth.
            </span>
            <br className="hidden md:block" />
            AI isn't about replacing people. It's about giving you back time,
            clarity, and control.
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            A practical program that shows business owners how to use AI as a
            daily assistant, not a distant tech. It's about simplifying
            decisions, saving time, and multiplying your business impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-6 text-lg group"
              onClick={scrollToWhatIs}
            >
              Transform Your Business
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-green-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                2-3 Hours
              </div>
              <div className="text-muted-foreground">Reclaimed daily</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">24/7</div>
              <div className="text-muted-foreground">Business visibility</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">
                Growth Focus
              </div>
              <div className="text-muted-foreground">Not firefighting</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;
