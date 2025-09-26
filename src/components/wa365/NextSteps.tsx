import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MessageCircle } from "lucide-react";

const NextSteps = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              365 days
            </span>{" "}
            of automated success?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            One decision today gives you the 365 days of consistentand the most
            stress-free WhatsApp communication
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 md:p-12 shadow-elegant">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Next Step</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Let's make your business alive and trusted where it matters most
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="tel:+917314851888">
                  <Button
                    variant="gradient"
                    size="xl"
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 group"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +91-7314851888
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>

                <a href="mailto:hello@everydayailabs.com">
                  <Button
                    variant="gradient"
                    size="xl"
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 group"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Connect with us: hello@everydayailabs.com
                  </Button>
                </a>
              </div>
            </div>

            <div className="border-t border-green-200 pt-8 text-center">
              <p className="text-lg font-medium text-gray-700 mb-4">
                "This is just one way AI can help. If you ever wonder, 'Can AI
                solve my problem?', think of EverydayAiLabs.com first."
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12 animate-fade-in">
          <div className="bg-card border border-border rounded-xl p-6 shadow-card text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">1</span>
            </div>
            <h4 className="text-lg font-semibold mb-2">Map Your Needs</h4>
            <p className="text-muted-foreground text-sm">
              20-minute business workflow analysis
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 shadow-card text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">2</span>
            </div>
            <h4 className="text-lg font-semibold mb-2">Setup Automation</h4>
            <p className="text-muted-foreground text-sm">
              Custom WhatsApp workflows deployed
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 shadow-card text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">3</span>
            </div>
            <h4 className="text-lg font-semibold mb-2">Scale Confidently</h4>
            <p className="text-muted-foreground text-sm">
              365 days of automated reliability
            </p>
          </div>
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <div className="bg-card border border-border rounded-xl p-6 shadow-card max-w-2xl mx-auto">
            <h4 className="text-lg font-semibold mb-2 text-green-600">
              Why Choose WA365 Today?
            </h4>
            <p className="text-muted-foreground">
              Every day without automation means missed opportunities,
              inconsistent communication, and customers moving to more organized
              competitors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
