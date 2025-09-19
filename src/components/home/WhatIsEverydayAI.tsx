import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Globe, Briefcase, GraduationCap, TrendingUp } from "lucide-react";

const WhatIsEverydayAI = () => {
  const features = [
    {
      icon: Globe,
      title: "Multi-Service Ecosystem",
      description: "Comprehensive AI solutions for every aspect of life and business."
    },
    {
      icon: Briefcase,
      title: "Practical Integration",
      description: "We bring AI into your routines, businesses, and careers."
    },
    {
      icon: TrendingUp,
      title: "Real Results",
      description: "Creates time, trust, and growth where it matters most."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-4">
              <CheckCircle className="w-10 h-10 text-green-500" />
              What is EverydayAiLabs?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
              A multi-service AI ecosystem that makes AI <span className="font-bold text-primary">usable, useful, and practical</span> in everyday life.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We don't just teach AI. We bring it into your routines, businesses, and careers, where it creates time, trust, and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-green-100">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold mb-4 text-xl text-green-600">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-gradient-primary rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Our Promise</h3>
            <p className="text-xl">
              Save time. Save money. Save resources. <span className="font-bold">Live more. Love more.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsEverydayAI;