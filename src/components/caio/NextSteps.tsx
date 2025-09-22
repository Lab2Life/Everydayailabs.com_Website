import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, Award } from "lucide-react";

const NextSteps = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to become a{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Certified AI Officer?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            One decision today can transform you from an AI user to an AI leader
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-2xl p-8 md:p-12 shadow-elegant">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Next Step</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Begin the journey and make "Certified AI Officer" your next
                career milestone
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a href="tel:+919159007007">
                  <Button
                    variant="gradient"
                    size="xl"
                    className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 group"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +91-9159007007
                  </Button>
                </a>

                <a href="mailto:hello@everydayailabs.com">
                  <Button
                    variant="outline"
                    size="xl"
                    className="border-purple-300 text-purple-600 hover:bg-purple-50"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Connect with us: hello@everydayailabs.com
                  </Button>
                </a>
              </div>
            </div>

            <div className="border-t border-purple-200 pt-8 text-center">
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
            <h4 className="text-lg font-semibold mb-2">Foundation</h4>
            <p className="text-muted-foreground text-sm">
              Master AI tools for daily tasks
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 shadow-card text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">2</span>
            </div>
            <h4 className="text-lg font-semibold mb-2">Practitioner</h4>
            <p className="text-muted-foreground text-sm">
              Apply AI across workflows
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6 shadow-card text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">3</span>
            </div>
            <h4 className="text-lg font-semibold mb-2">Strategist</h4>
            <p className="text-muted-foreground text-sm">
              Lead AI adoption strategy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
