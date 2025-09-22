import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, Mail, Lightbulb } from "lucide-react";
import { useState } from "react";
import BookingModal from "@/components/ui/booking-modal";

const NextSteps = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
  };
  return (
    <section className="py-16 bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              🚀 Next Step
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              One decision today can shift your workforce from{" "}
              <span className="text-red-300">manual and fearful</span> → to{" "}
              <span className="text-green-300">confident and AI-powered</span>.
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-12">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Lightbulb className="w-8 h-8 text-yellow-300" />
                <h3 className="text-2xl font-bold">
                  Transform Your Team Today
                </h3>
              </div>
              <p className="text-lg text-blue-100 mb-6">
                Give your employees clarity, capability, and confidence in AI.
              </p>
              <p className="text-blue-200 italic">
                "This is just one way AI can help. If you ever wonder, 'Can AI
                solve my problem?', think of EverydayAiLabs.com first."
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-6 text-lg group"
              onClick={handleBookingClick}
            >
              Book Your Team Session Now
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
            <a
              href="mailto:hello@everydayailabs.com"
              className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Mail className="w-6 h-6 text-blue-300" />
              <div className="text-left">
                <p className="font-semibold">Email Us</p>
                <p className="text-sm text-blue-200">
                  hello@everydayailabs.com
                </p>
              </div>
            </a>
            <a
              href="tel:+919159007007"
              className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="w-6 h-6 text-green-300" />
              <div className="text-left">
                <p className="font-semibold">Call Us</p>
                <p className="text-sm text-blue-200">+91-9159007007</p>
              </div>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-blue-200 text-lg font-medium">
              Your competition is already moving. Don't let your team fall
              behind.
            </p>
            <p className="text-sm text-blue-300 mt-2">
              Every day without AI awareness costs you productivity, talent
              retention, and market position.
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
