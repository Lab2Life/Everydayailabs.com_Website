import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Briefcase, Heart, TrendingUp, Settings } from "lucide-react";

const WhatYouLearnAwareness = () => {
  const learningAreas = [
    {
      icon: Settings,
      title: "Everyday AI Hacks",
      description: "Save time on mails, planning, routine work."
    },
    {
      icon: Briefcase,
      title: "AI at Work",
      description: "Smart docs, presentations, and reports in minutes."
    },
    {
      icon: Heart,
      title: "AI in Life",
      description: "Language, travel, cooking, shopping, and finance use cases."
    },
    {
      icon: TrendingUp,
      title: "AI for Growth",
      description: "Build trust, create content, and stay relevant."
    },
    {
      icon: Mail,
      title: "Your First 5 Tools",
      description: "Start today with step-by-step guidance."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <Mail className="w-8 h-8 text-cyan-600" />
              What You Learn (in 2 hours)
            </h2>
            <div className="bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-lg p-6 text-white mb-8">
              <p className="text-xl font-medium">
                Comprehensive AI Learning in Just 2 Hours
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {learningAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full border-cyan-100">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-cyan-600" />
                    </div>
                    <h3 className="font-bold mb-3 text-lg text-cyan-600">{area.title}</h3>
                    <p className="text-muted-foreground flex-grow">{area.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearnAwareness;