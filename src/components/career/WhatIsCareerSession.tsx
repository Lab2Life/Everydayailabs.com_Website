import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Target, Users, Clock } from "lucide-react";

const WhatIsCareerSession = () => {
  const features = [
    {
      icon: Target,
      title: "Real-World Practice",
      description: "Resume, interviews, projects, and confidence building."
    },
    {
      icon: Users,
      title: "Industry Gap Bridge",
      description: "Connect college learning to industry expectations."
    },
    {
      icon: GraduationCap,
      title: "Hands-On Learning",
      description: "Not theory, it's practical application."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <GraduationCap className="w-8 h-8 text-green-600" />
              What is the AI Awareness Session for Freshers?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              A 2-hour, hands-on session designed to show graduates and final-year students how to use AI 
              to bridge the gap between college learning and industry expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-green-100">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold mb-3 text-lg text-green-600">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-green-600" />
              <Badge variant="outline" className="text-lg px-4 py-2 border-green-500 text-green-600">
                Interactive & Practical
              </Badge>
            </div>
            <p className="text-lg font-medium text-green-700">
              This is not theory, it's real-world practice: resume, interviews, projects, and confidence building.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsCareerSession;