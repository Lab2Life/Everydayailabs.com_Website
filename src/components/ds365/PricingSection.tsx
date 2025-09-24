import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IndianRupee, Coffee } from "lucide-react";
import BookingModal from "@/components/ui/booking-modal";

const PricingSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section id="pricing-section" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pricing</h2>
          </div>

          <Card className="hover:shadow-xl transition-all duration-300 border-2 border-primary/20">
            <CardHeader className="text-center bg-gradient-primary text-white rounded-t-lg">
              <CardTitle className="text-2xl mb-2">
                DS365 - Digital Survival
              </CardTitle>
              <Badge
                variant="secondary"
                className="text-lg px-4 py-2 bg-white text-primary"
              >
                Product Code: DS365
              </Badge>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-lg text-muted-foreground line-through">
                      Actual Price: ₹1,20,000 / year
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <IndianRupee className="w-8 h-8 text-primary" />
                    <span className="text-4xl font-bold text-primary">
                      36,500
                    </span>
                    <span className="text-xl text-muted-foreground">
                      / year
                    </span>
                  </div>
                  <Badge variant="outline" className="text-lg px-4 py-2 mb-6">
                    ≈ ₹100/day
                  </Badge>
                </div>

                <div className="bg-primary/10 rounded-lg p-6 text-center">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <Coffee className="w-6 h-6 text-primary" />
                    <span className="text-lg font-medium">
                      ₹100/day is less than tea + snack for two
                    </span>
                  </div>
                  <p className="text-primary font-semibold">
                    but it keeps your business alive online.
                  </p>
                </div>

                <div className="text-center pt-6">
                  <Button
                    variant="gradient"
                    size="lg"
                    className="text-lg px-8 py-6 w-full sm:w-auto"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Get Started with DS365
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default PricingSection;
