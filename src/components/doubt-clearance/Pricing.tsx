import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, Monitor } from "lucide-react";
import { useState } from "react";
import BookingModal from "@/components/ui/booking-modal";

const Pricing = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
  };
  const features = [
    "2–3 hour deep-dive session",
    "Personalized Q&A for every employee",
    "Industry-specific use cases",
    "Implementation support",
    "Clarity notes PDF",
    "Online or in-person format",
  ];

  return (
    <section id="pricing-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Investment in{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Clarity
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform confusion into confidence with one focused session
          </p>
        </div>

        <div className="max-w-md mx-auto animate-fade-in">
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl p-8 shadow-elegant hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full text-sm font-medium mb-4">
                AI-DOUBT
              </div>
              <h3 className="text-2xl font-bold mb-2">
                AI Doubt Clearance Session
              </h3>
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent mb-2">
                ₹10,000
              </div>
              <p className="text-muted-foreground">per session</p>
            </div>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={feature} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              variant="gradient"
              className="w-full mb-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
              onClick={handleBookingClick}
            >
              Book Your Session
            </Button>

            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-orange-200">
              <div className="text-center">
                <Clock className="w-6 h-6 text-orange-500 mx-auto mb-1" />
                <div className="text-xs text-muted-foreground">2-3 Hours</div>
              </div>
              <div className="text-center">
                <Users className="w-6 h-6 text-orange-500 mx-auto mb-1" />
                <div className="text-xs text-muted-foreground">Team Focus</div>
              </div>
              <div className="text-center">
                <Monitor className="w-6 h-6 text-orange-500 mx-auto mb-1" />
                <div className="text-xs text-muted-foreground">Any Format</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't let confusion stall AI adoption. One focused session can boost
            your team's confidence and accelerate results.
          </p>
        </div>
      </div>
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
};

export default Pricing;
