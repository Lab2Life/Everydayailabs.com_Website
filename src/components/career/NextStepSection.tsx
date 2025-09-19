import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Phone,
  Globe,
  GraduationCap,
  Briefcase,
  Zap,
} from "lucide-react";

const CareerNextStepSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Next Step</h2>
            <p className="text-xl text-muted-foreground mb-8">
              One session today can transform a graduate from "degree holder" to
              "job-ready professional."
              <br />
              <span className="font-semibold text-green-600">
                Start your AI-powered career journey now.
              </span>
            </p>
          </div>

          <Card className="hover:shadow-xl transition-all duration-300 border-2 border-green-200 mb-12">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                    <GraduationCap className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-bold mb-2">Book Session</h3>
                  <p className="text-muted-foreground">
                    Join the 2-hour interactive session
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                    <Zap className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-bold mb-2">Learn AI Tools</h3>
                  <p className="text-muted-foreground">
                    Master career-focused AI applications
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
                    <Briefcase className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-bold mb-2">Get Job Ready</h3>
                  <p className="text-muted-foreground">
                    Start your action plan
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919159007007">
                <Button
                  variant="gradient"
                  size="lg"
                  className="text-lg px-8 py-6 bg-gradient-to-r from-green-600 to-teal-600"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +91-9159007007
                </Button>
              </a>
              <a
                href="https://www.everydayailabs.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 border-green-500 text-green-600"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Visit EverydayAiLabs.com
                </Button>
              </a>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <p className="text-lg italic">
                "This is just one way AI can help. If you ever wonder, 'Can AI
                solve my problem?',
                <span className="font-semibold text-green-600">
                  {" "}
                  think of EverydayAiLabs.com first."
                </span>
              </p>
              <p className="text-green-600 font-semibold mt-2">
                📍 EverydayAiLabs.com | +91-9159007007
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerNextStepSection;
