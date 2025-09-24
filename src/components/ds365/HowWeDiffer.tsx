import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Diamond, Target, MessageSquare, Users, Clock } from "lucide-react";

const HowWeDiffer = () => {
  const layers = [
    {
      icon: Target,
      title: "Ground Reality",
      description: "Reviews from customers reveal the unfiltered truth.",
    },
    {
      icon: Diamond,
      title: "Business DNA",
      description: "Built on the owner’s core values and legacy.",
    },
    {
      icon: MessageSquare,
      title: "Audience Language",
      description: "We speak to your customers, not just to you.",
    },
    {
      icon: Users,
      title: "Competitor Research",
      description:
        "We study competitors, create content that helps you standout.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <Diamond className="w-8 h-8 text-primary" />
              How do we differ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Unlike agencies that just "post," DS365 is built on four layers that inspires sharper content ideas:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold mb-3 text-lg text-primary">{layer.title}</h3>
                    <p className="text-muted-foreground flex-grow">{layer.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-primary" />
              <Badge variant="outline" className="text-lg px-4 py-2">
                Our Benchmark
              </Badge>
            </div>
            <p className="text-xl font-bold text-primary">
              A 20-minute call with us = 20 months ahead in clarity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDiffer;