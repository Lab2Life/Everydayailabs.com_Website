import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, Mail, Building } from "lucide-react";
import { useState } from "react";
import BookingModal from "@/components/ui/booking-modal";

const NextSteps = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
  };
  return (
    <section className="py-16 bg-gradient-to-b from-green-900 to-emerald-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Next Step</h2>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              One decision today can shift you from{" "}
              <span className="text-red-300">firefighting daily tasks</span> to
              <span className="text-green-300">
                {" "}
                driving long-term business growth with AI
              </span>
              .
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-12">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Building className="w-8 h-8 text-green-300" />
                <h3 className="text-2xl font-bold">
                  Transform Your Business Today
                </h3>
              </div>
              <p className="text-lg text-green-100 mb-6">
                Stop being busy. Start being productive. AI gives you the time
                and clarity to focus on what truly grows your business.
              </p>
              <p className="text-emerald-200 italic text-lg">
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
              Transform Your Business
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
              <Mail className="w-6 h-6 text-green-300" />
              <div className="text-left">
                <p className="font-semibold">Email Us</p>
                <p className="text-sm text-green-200">
                  hello@everydayailabs.com
                </p>
              </div>
            </a>
            <a href="tel:+917314851888">
              <Button
                variant="gradient"
                size="xl"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 group"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +91-7314851888
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-green-200 text-lg font-medium">
              Your business growth depends on your ability to focus on strategy,
              not operations.
            </p>
            <p className="text-sm text-emerald-300 mt-2">
              The best business owners use AI to lead, not just manage daily
              tasks.
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
