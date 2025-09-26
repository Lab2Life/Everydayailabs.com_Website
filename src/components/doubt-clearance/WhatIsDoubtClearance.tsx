import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Settings, Clock } from "lucide-react";

const WhatIsDoubtClearance = () => {
  const features = [
    {
      icon: Target,
      title: "Industry-Specific Focus",
      description: "Tailored to your team's daily workflow and challenges."
    },
    {
      icon: Users,
      title: "Team-Oriented Workshop",
      description: "Designed for group learning and collaboration."
    },
    {
      icon: Settings,
      title: "Implementation Focused",
      description: "Clear real everyday roadblocks, not just theory."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <Users className="w-8 h-8 text-orange-600" />
              What is the AI Doubt Clearance Session?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              A focused, industry-specific and team-oriented workshop that is designed to clear real implementation roadblocks.
            </p>
            <p className="text-lg text-muted-foreground">
              Unlike general awareness sessions, this is <span className="font-semibold text-orange-600">personalised to your team's daily workflow, goals, and challenges.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-orange-100">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold mb-3 text-lg text-orange-600">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-orange-600" />
              <Badge variant="outline" className="text-lg px-4 py-2 border-orange-500 text-orange-600">
                Deep-Dive Format
              </Badge>
            </div>
            <p className="text-lg font-medium text-orange-700">
              Focused workshop for implementation success
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsDoubtClearance;