import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, Zap, ArrowRight } from "lucide-react";

const WhatIsDS365 = () => {
  const features = [
    {
      icon: Eye,
      title: "Always Alive",
      description: "Seen active every day, your business earns trust and value."
    },
    {
      icon: Shield,
      title: "Top-of-Mind Recall",
      description: "Customers think of you first when they're ready to buy."
    },
    {
      icon: Zap,
      title: "Zero Effort",
      description: "Runs without staff, without stress, without gaps."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is Digital Survival (DS365)?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              A 365-day system that keeps your business alive and visible on Google, every single day. 
              <span className="font-semibold text-primary"> It's not marketing. It's survival.</span>
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8 text-center">
              Why Visibility is Non-Negotiable today:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold mb-3 text-lg text-primary">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <Badge variant="destructive" className="mb-3 text-lg px-4 py-2">
                  Before DS365
                </Badge>
                <div className="space-y-2 text-muted-foreground">
                  <p>Silent.</p>
                  <p>Doubtful.</p>
                  <p>Ignored.</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <ArrowRight className="w-12 h-12 text-primary" />
              </div>
              
              <div className="text-center">
                <Badge variant="default" className="mb-3 text-lg px-4 py-2 bg-green-600">
                  After DS365
                </Badge>
                <div className="space-y-2 text-foreground font-semibold">
                  <p>Active.</p>
                  <p>Trusted.</p>
                  <p>Chosen first.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsDS365;