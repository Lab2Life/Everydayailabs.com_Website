import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Globe, Calendar } from "lucide-react";

const NextStepSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Next Step</h2>
            <p className="text-xl text-muted-foreground mb-8">
              One decision today gives you 365 days of digital life. 
              <br />
              <span className="font-semibold text-primary">
                Let's keep your business alive where it matters most.
              </span>
            </p>
          </div>

          <Card className="hover:shadow-xl transition-all duration-300 border-2 border-primary/20 mb-12">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Book Consultation</h3>
                  <p className="text-muted-foreground">Schedule your free strategy call</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <ArrowRight className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Get Custom Plan</h3>
                  <p className="text-muted-foreground">Receive your tailored DS365 strategy</p>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Go Live</h3>
                  <p className="text-muted-foreground">Start your 365-day digital survival</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" className="text-lg px-8 py-6">
                <Phone className="w-5 h-5 mr-2" />
                Call +91-9159007007
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Globe className="w-5 h-5 mr-2" />
                Visit EverydayAiLabs.com
              </Button>
            </div>
            
            <div className="bg-primary/10 rounded-lg p-6">
              <p className="text-lg italic">
                "This is just one way AI can help. If you ever wonder, 'Can AI solve my problem?', 
                <span className="font-semibold text-primary"> think of EverydayAiLabs.com first."</span>
              </p>
              <p className="text-primary font-semibold mt-2">
                EverydayAiLabs.com | +91-9159007007
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextStepSection;