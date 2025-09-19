import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, Globe, Target } from "lucide-react";
import { useState } from "react";
import BookingModal from "@/components/ui/booking-modal";

const NextSteps = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
  };
  return (
    <section className="py-16 bg-gradient-to-b from-amber-900 to-orange-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ➡️ Next Step
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-3xl mx-auto">
              One decision today can shift you from{" "}
              <span className="text-red-300">managing bottlenecks</span> to
              <span className="text-green-300">
                {" "}
                leading high-performing teams with AI
              </span>
              .
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-12">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Target className="w-8 h-8 text-amber-300" />
                <h3 className="text-2xl font-bold">
                  Transform Your Leadership Today
                </h3>
              </div>
              <p className="text-lg text-amber-100 mb-6">
                Stop managing tasks. Start leading outcomes. AI gives you the
                clarity to focus on what truly matters.
              </p>
              <p className="text-orange-200 italic text-lg">
                "This is just one way AI can help. If you ever wonder, 'Can AI
                solve my problem?', think of EverydayAiLabs.com first."
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-6 text-lg group"
              onClick={handleBookingClick}
            >
              Transform Your Management
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
              onClick={handleBookingClick}
            >
              Schedule a Consultation
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg">
              <Globe className="w-6 h-6 text-amber-300" />
              <div className="text-left">
                <p className="font-semibold">Visit Us</p>
                <p className="text-sm text-amber-200">EverydayAiLabs.com</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg">
              <Phone className="w-6 h-6 text-orange-300" />
              <div className="text-left">
                <p className="font-semibold">Call Us</p>
                <p className="text-sm text-amber-200">+91-9159007007</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-amber-200 text-lg font-medium">
              Your team's productivity depends on your leadership clarity. Don't
              let operational chaos hold you back.
            </p>
            <p className="text-sm text-orange-300 mt-2">
              The best managers use AI to lead, not just manage.
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
