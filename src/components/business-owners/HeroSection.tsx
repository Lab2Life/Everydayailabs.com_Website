import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building,
  Crown,
  Clock,
  Brain,
  Settings,
} from "lucide-react";

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
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 group">
            <Crown className="w-4 h-4 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
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
          </p>

          {/* Visual Representation of Key Concepts */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center text-center w-32">
              <div className="bg-green-100 p-3 rounded-full mb-2">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Time Back
              </span>
            </div>

            <div className="flex flex-col items-center text-center w-32">
              <div className="bg-teal-100 p-3 rounded-full mb-2">
                <Brain className="w-6 h-6 text-teal-600" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Clarity
              </span>
            </div>

            <div className="flex flex-col items-center text-center w-32">
              <div className="bg-emerald-100 p-3 rounded-full mb-2">
                <Settings className="w-6 h-6 text-emerald-600" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">
                Control
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            A practical program that shows business owners how to use AI as a
            daily assistant. It's about simplifying decisions, saving time, and
            multiplying your business impact.
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
