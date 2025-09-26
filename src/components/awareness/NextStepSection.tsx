import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  CheckCircle,
  Users,
} from "lucide-react";

const AwarenessNextStepSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Next Step</h2>
            <p className="text-xl text-muted-foreground mb-8">
              One decision today gives you clarity and confidence in AI for
              life.
              <br />
              <span className="font-semibold text-cyan-600">
                Be among the first to adopt, not the last to catch up.
              </span>
            </p>
          </div>

          <Card className="hover:shadow-xl transition-all duration-300 border-2 border-cyan-200 mb-12">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="font-bold mb-2">Book Session</h3>
                  <p className="text-muted-foreground">
                    Join the 2-hour awareness session
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="font-bold mb-2">Learn & Practice</h3>
                  <p className="text-muted-foreground">
                    See demos, try tools, get worksheets
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="font-bold mb-2">Apply Daily</h3>
                  <p className="text-muted-foreground">
                    Start using AI in your everyday life
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+917314851888">
                <Button
                  variant="gradient"
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +91-7314851888
                </Button>
              </a>
              <a href="mailto:hello@everydayailabs.com">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 border-cyan-500 text-cyan-600 hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Connect with us: hello@everydayailabs.com
                </Button>
              </a>
            </div>

            <div className="bg-cyan-50 rounded-lg p-6">
              <p className="text-lg italic">
                "This is just one way AI can help. If you ever wonder, 'Can AI
                solve my problem?',
                <span className="font-semibold text-cyan-600">
                  {" "}
                  think of EverydayAiLabs.com first."
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwarenessNextStepSection;
