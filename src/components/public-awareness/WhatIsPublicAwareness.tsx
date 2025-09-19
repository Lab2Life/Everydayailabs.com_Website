import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Zap, ArrowRight } from "lucide-react";

const WhatIsPublicAwareness = () => {
  const features = [
    {
      icon: Target,
      title: "Practical. Not Theoretical.",
      description: "Real-world AI tools and applications you can use immediately, not academic concepts."
    },
    {
      icon: Users,
      title: "Real. Not Hype.",
      description: "Genuine daily use cases without the marketing noise and tech complexity."
    },
    {
      icon: Zap,
      title: "AI for Life, Work, and Growth",
      description: "Simple applications anyone can adopt across all areas of their life."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              💡 What is AI Awareness Session?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              A <span className="font-semibold text-emerald-600">2-hour, practical group session</span> that introduces 
              real-world AI tools, daily use cases, and simple applications anyone can adopt immediately.
            </p>
          </div>

          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold mb-3 text-lg text-emerald-600">{feature.title}</h4>
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
                  Before
                </Badge>
                <div className="space-y-2 text-muted-foreground">
                  <p>Confused.</p>
                  <p>Overwhelmed.</p>
                  <p>Left behind.</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <ArrowRight className="w-12 h-12 text-emerald-500" />
              </div>
              
              <div className="text-center">
                <Badge variant="default" className="mb-3 text-lg px-4 py-2 bg-green-600">
                  After
                </Badge>
                <div className="space-y-2 text-foreground font-semibold">
                  <p>Confident.</p>
                  <p>Empowered.</p>
                  <p>Future-ready.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsPublicAwareness;