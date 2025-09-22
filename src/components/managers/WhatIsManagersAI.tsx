import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Zap, ArrowRight } from "lucide-react";

const WhatIsManagersAI = () => {
  const features = [
    {
      icon: Target,
      title: "No Coding Required",
      description:
        "Simple, practical tools that work with your existing management style and systems.",
    },
    {
      icon: Users,
      title: "No Complex Dashboards",
      description:
        "Straightforward solutions that integrate seamlessly into your daily workflow.",
    },
    {
      icon: Zap,
      title: "Operational Partnership",
      description:
        "AI becomes your daily assistant for coordination, automation, and team leadership.",
    },
  ];

  return (
    <section id="what-is-managers" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ✨ What is AI for Managers?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              A{" "}
              <span className="font-semibold text-amber-600">
                hands-on program
              </span>{" "}
              showing managers how to use AI as a daily operational partner.
              <br />
              It's about{" "}
              <span className="font-semibold text-amber-600">
                simplifying coordination, automating repetitive tasks, and
                leading teams more effectively.
              </span>
            </p>
          </div>

          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold mb-3 text-lg text-amber-600">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
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
                  <p>Confusion.</p>
                  <p>Bottlenecks.</p>
                  <p>Stress.</p>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-12 h-12 text-amber-500" />
              </div>

              <div className="text-center">
                <Badge
                  variant="default"
                  className="mb-3 text-lg px-4 py-2 bg-green-600"
                >
                  After AI
                </Badge>
                <div className="space-y-2 text-foreground font-semibold">
                  <p>Clarity.</p>
                  <p>Speed.</p>
                  <p>Influence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsManagersAI;
