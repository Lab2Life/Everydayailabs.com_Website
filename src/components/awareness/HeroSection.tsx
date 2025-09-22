import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Lightbulb } from "lucide-react";
import { useState } from "react";
import BookingModal from "@/components/ui/booking-modal";

const HeroSection = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
  };

  const scrollToPricing = () => {
    const pricingElement = document.querySelector("#pricing-section");
    if (pricingElement) {
      pricingElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Users className="w-4 h-4" />
            AI Awareness for Businesses
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Empower Your Employees with AI Skills
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            <span className="font-semibold text-blue-600">
              From confusion to confidence
            </span>{" "}
            — equip your team to work smarter, faster, and future-ready.
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            A 2-hour practical training session that transforms your employees
            from AI-anxious to AI-empowered, directly boosting productivity and
            business growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg group"
              onClick={scrollToPricing}
            >
              Book Your Team Session
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-blue-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                2 Hours
              </div>
              <div className="text-muted-foreground">
                Complete transformation
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                10+ Tools
              </div>
              <div className="text-muted-foreground">
                Practical AI solutions
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                Immediate ROI
              </div>
              <div className="text-muted-foreground">
                Save 2 hours daily per employee
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
};

export default HeroSection;
