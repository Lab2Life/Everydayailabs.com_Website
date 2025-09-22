import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { useState } from "react";
import BookingModal from "@/components/ui/booking-modal";

const NextSteps = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
  };
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to turn{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              confusion into confidence?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't let confusion stall AI adoption. One focused session can boost
            your team's confidence and accelerate results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl p-8 md:p-12 shadow-elegant">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Next Step</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Transform your team from hesitation to confident AI adoption
                with one personalized session
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="tel:+919159007007">
                  <Button
                    variant="gradient"
                    size="xl"
                    className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 group"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +91-9159007007
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>

                <a href="mailto:hello@everydayailabs.com">
                  <Button
                    variant="outline"
                    size="xl"
                    className="border-orange-300 text-orange-600 hover:bg-orange-50"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Connect with us: hello@everydayailabs.com
                  </Button>
                </a>
              </div>
            </div>

            <div className="border-t border-orange-200 pt-8 text-center">
              <p className="text-lg font-medium text-gray-700 mb-4">
                "This is just one way AI can help. If you ever wonder, 'Can AI
                solve my problem?', think of EverydayAiLabs.com first."
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <div className="bg-card border border-border rounded-xl p-6 shadow-card max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold mb-2 text-orange-600">
              Why Act Now?
            </h4>
            <p className="text-muted-foreground">
              Every day of confusion costs your team productivity and
              confidence. One session can unlock weeks of efficient AI adoption.
            </p>
          </div>
        </div>
      </div>
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
};

export default NextSteps;
