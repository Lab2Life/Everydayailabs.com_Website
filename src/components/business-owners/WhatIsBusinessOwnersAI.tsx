import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Users, Zap, ArrowRight } from "lucide-react";

const WhatIsBusinessOwnersAI = () => {
  const features = [
    {
      icon: Target,
      title: "Not About Coding",
      description:
        "Simple, practical solutions that work with your existing business operations and mindset.",
    },
    {
      icon: Users,
      title: "Not About Complex Tools",
      description:
        "Straightforward AI applications that integrate seamlessly into your daily workflow.",
    },
    {
      icon: Zap,
      title: "Daily Assistant Partnership",
      description:
        "AI becomes your reliable business partner for decisions, operations, and planning.",
    },
  ];

  return (
    <section id="what-is-business-owners" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is AI for Business Owners?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              A{" "}
              <span className="font-semibold text-green-600">
                practical program
              </span>{" "}
              that shows business owners how to use AI as a daily assistant, not
              a distant tech.
              <br />
              It's about{" "}
              <span className="font-semibold text-green-600">
                simplifying decisions, saving time, and multiplying your
                business impact.
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
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="font-bold mb-3 text-lg text-green-600">
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
                  <p>Stress.</p>
                  <p>Delay.</p>
                  <p>Lost chances.</p>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowRight className="w-12 h-12 text-green-500" />
              </div>

              <div className="text-center">
                <Badge
                  variant="default"
                  className="mb-3 text-lg px-4 py-2 bg-green-600"
                >
                  After AI
                </Badge>
                <div className="space-y-2 text-foreground font-semibold">
                  <p>Focus.</p>
                  <p>Speed.</p>
                  <p>Growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsBusinessOwnersAI;
