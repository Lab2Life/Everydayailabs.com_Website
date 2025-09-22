import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IndianRupee, Clock, FileText } from "lucide-react";

const AuditPricingSection = () => {
  return (
    <section id="pricing-section" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pricing</h2>
          </div>

          <Card className="hover:shadow-xl transition-all duration-300 border-2 border-blue-200">
            <CardHeader className="text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl mb-2">AI Digital Audit</CardTitle>
              <Badge
                variant="secondary"
                className="text-lg px-4 py-2 bg-white text-blue-600"
              >
                Product Code: DIGI-AUDIT
              </Badge>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <IndianRupee className="w-8 h-8 text-blue-600" />
                    <span className="text-4xl font-bold text-blue-600">
                      1,000
                    </span>
                    <span className="text-xl text-muted-foreground">
                      / business
                    </span>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-lg px-4 py-2 mb-6 border-blue-500 text-blue-600"
                  >
                    Entry Price
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span className="font-semibold text-blue-600">
                        Duration
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      1–2 hours session
                    </p>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <FileText className="w-5 h-5 text-purple-600" />
                      <span className="font-semibold text-purple-600">
                        Report
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      4 days delivery
                    </p>
                  </div>
                </div>

                <div className="text-center pt-6">
                  <Button
                    variant="gradient"
                    size="lg"
                    className="text-lg px-8 py-6 w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600"
                  >
                    Book Your Digital Audit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AuditPricingSection;
