import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Zap, Clock } from "lucide-react";

const WhatIsAwarenessSession = () => {
  const features = [
    {
      icon: Target,
      title: "Practical. Not theoretical.",
      description: "Real-world applications you can use immediately."
    },
    {
      icon: Zap,
      title: "Real. Not hype.",
      description: "Genuine AI tools and use cases, no marketing fluff."
    },
    {
      icon: Users,
      title: "AI for life, work, and growth.",
      description: "Comprehensive coverage of all life areas."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <Users className="w-8 h-8 text-cyan-600" />
              What is AI Awareness Session?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              A 2-hour, practical group session that introduces real-world AI tools, daily use cases, 
              and simple applications anyone can adopt immediately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-cyan-100">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold mb-3 text-lg text-cyan-600">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-indigo-50 rounded-lg p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-cyan-600" />
              <Badge variant="outline" className="text-lg px-4 py-2 border-cyan-500 text-cyan-600">
                Group Session
              </Badge>
            </div>
            <p className="text-lg font-medium text-cyan-700">
              It's AI for life, work, and growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsAwarenessSession;