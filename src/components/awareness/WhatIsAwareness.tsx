import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Zap, ArrowRight } from "lucide-react";

const WhatIsAwareness = () => {
  const features = [
    {
      icon: Target,
      title: "Practical & Role-Based",
      description: "Real-world AI tools that simplify daily work - communication, reports, planning, customer interactions."
    },
    {
      icon: Users,
      title: "Team-Focused",
      description: "Designed for your key employees, not just tech teams. Everyone walks away with confidence."
    },
    {
      icon: Zap,
      title: "Immediate Skills",
      description: "Not only theoretical and technical. Your team gains practical skills they can use the same day."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              💡 What is AI Awareness for Businesses?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              A <span className="font-semibold text-blue-600">2-hour, practical training session</span> for your key employees.
              <br />
              <span className="font-semibold text-blue-600">It's not technical. It's practical, role-based, and business-focused.</span>
            </p>
          </div>

          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold mb-3 text-lg text-blue-600">{feature.title}</h4>
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
                  Before AI
                </Badge>
                <div className="space-y-2 text-muted-foreground">
                  <p>Dependence on managers.</p>
                  <p>Missed deadlines.</p>
                  <p>Wasted effort.</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <ArrowRight className="w-12 h-12 text-blue-500" />
              </div>
              
              <div className="text-center">
                <Badge variant="default" className="mb-3 text-lg px-4 py-2 bg-green-600">
                  After AI
                </Badge>
                <div className="space-y-2 text-foreground font-semibold">
                  <p>Independent teams.</p>
                  <p>Faster delivery.</p>
                  <p>Growth mindset.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsAwareness;