import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IndianRupee, Clock, Users, Monitor } from "lucide-react";

const PricingSection = () => {
  return (
    <section
      id="pricing-section"
      className="py-16 bg-gradient-to-b from-green-50 to-emerald-50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">💰 Pricing</h2>
            <p className="text-xl text-muted-foreground">
              Affordable AI education for everyone
            </p>
          </div>

          <Card className="hover:shadow-xl transition-all duration-300 border-2 border-emerald-200">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <Badge className="mb-4 text-lg px-4 py-2 bg-emerald-600">
                  Product Code: AI-AWARE
                </Badge>
                <div className="text-4xl font-bold text-emerald-600 mb-2">
                  ₹1,000
                </div>
                <p className="text-lg text-muted-foreground">per person</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Duration</h4>
                    <p className="text-muted-foreground">2 hours session</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Format</h4>
                    <p className="text-muted-foreground">Group session</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Mode</h4>
                    <p className="text-muted-foreground">Offline or online</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <IndianRupee className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Value</h4>
                    <p className="text-muted-foreground">Lifetime skills</p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 rounded-lg p-6 border border-emerald-200">
                <h4 className="text-lg font-semibold text-emerald-700 mb-3">
                  💡 Value Calculation
                </h4>
                <div className="space-y-2 text-sm text-emerald-600">
                  <p>• Investment: ₹1,000 (one-time)</p>
                  <p>
                    • Daily time savings: 2 hours × ₹500/hour value = ₹1,000/day
                  </p>
                  <p>• Monthly value: ₹30,000</p>
                  <p className="font-semibold text-emerald-700 text-base pt-2">
                    ROI: Your investment back in just one day
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Join group sessions with like-minded learners
            </p>
            <p className="text-sm text-gray-500">
              Early bird discounts available. Family packages on request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
