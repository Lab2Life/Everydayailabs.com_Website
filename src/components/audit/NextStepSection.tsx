import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, Calendar, Eye } from "lucide-react";

const AuditNextStepSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Next Step</h2>
            <p className="text-xl text-muted-foreground mb-8">
              One decision today gives you a 360° digital snapshot of your
              business.
              <br />
              <span className="font-semibold text-blue-600">
                From there, you choose how to grow, with DS365, automation, or
                an AI Officer.
              </span>
            </p>
          </div>

          <Card className="hover:shadow-xl transition-all duration-300 border-2 border-blue-200 mb-12">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold mb-2">Book Audit</h3>
                  <p className="text-muted-foreground">
                    Schedule your 1-2 hour assessment
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                    <Eye className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold mb-2">Get Clarity</h3>
                  <p className="text-muted-foreground">
                    Receive detailed report in 4 days
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
                    <ArrowRight className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold mb-2">Choose Growth</h3>
                  <p className="text-muted-foreground">
                    Decide your next digital step
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
                  size="xl"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +91-7314851888
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="mailto:hello@everydayailabs.com">
                <Button
                  variant="gradient"
                  size="lg"
                  className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Connect with us: hello@everydayailabs.com
                </Button>
              </a>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <p className="text-lg italic">
                "This is just one way AI can help. If you ever wonder, 'Can AI
                solve my problem?',
                <span className="font-semibold text-blue-600">
                  {" "}
                  think of EverydayAiLabs first."
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditNextStepSection;
