import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IndianRupee, Clock, Users } from "lucide-react";
import { useState } from "react";
import BookingModal from "@/components/ui/booking-modal";

const CareerPricingSection = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
  };
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pricing</h2>
          </div>

          <Card className="hover:shadow-xl transition-all duration-300 border-2 border-green-200">
            <CardHeader className="text-center bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-t-lg">
              <CardTitle className="text-2xl mb-2">
                AI for Career Readiness
              </CardTitle>
              <Badge
                variant="secondary"
                className="text-lg px-4 py-2 bg-white text-green-600"
              >
                Product Code: AIFRESHER
              </Badge>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <IndianRupee className="w-8 h-8 text-green-600" />
                    <span className="text-4xl font-bold text-green-600">
                      1,000
                    </span>
                    <span className="text-xl text-muted-foreground">
                      / student
                    </span>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-lg px-4 py-2 mb-6 border-green-500 text-green-600"
                  >
                    Per Student
                  </Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Clock className="w-5 h-5 text-green-600" />
                      <span className="font-semibold text-green-600">
                        Duration
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      2 hours interactive session
                    </p>
                  </div>

                  <div className="bg-teal-50 rounded-lg p-4 text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Users className="w-5 h-5 text-teal-600" />
                      <span className="font-semibold text-teal-600">
                        Format
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Hands-on & Interactive
                    </p>
                  </div>
                </div>

                <div className="text-center pt-6">
                  <Button
                    variant="gradient"
                    size="lg"
                    className="text-lg px-8 py-6 w-full sm:w-auto bg-gradient-to-r from-green-600 to-teal-600"
                    onClick={handleBookingClick}
                  >
                    Book Your Career Session
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
};

export default CareerPricingSection;
