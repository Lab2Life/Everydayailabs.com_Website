import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Diamond, Users, Target, Zap, Settings, Clock } from "lucide-react";

const HowWeDifferHome = () => {
  const differentiators = [
    {
      icon: Target,
      title: "Simplicity, Not Jargon",
      description: "We focus on clear, understandable AI applications."
    },
    {
      icon: Zap,
      title: "Everyday Results",
      description: "We deliver everyday results, not one-time events."
    },
    {
      icon: Users,
      title: "Segment-Based Models",
      description: "MSMEs, employees, freshers, individuals - tailored for each."
    },
    {
      icon: Settings,
      title: "Complete Ecosystem",
      description: "We blend awareness + application + consistency in one place."
    },
    {
      icon: Diamond,
      title: "Low Effort, High Impact",
      description: "AI tools that work daily, not complex implementations."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-4">
              <Diamond className="w-10 h-10 text-primary" />
              How We Differ
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Unlike agencies, trainers, or tool-sellers...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {differentiators.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold mb-3 text-lg text-primary">{diff.title}</h3>
                    <p className="text-muted-foreground flex-grow">{diff.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center border-2 border-primary/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-primary" />
              <Badge variant="outline" className="text-lg px-4 py-2 border-primary text-primary">
                Our Benchmark
              </Badge>
            </div>
            <p className="text-2xl font-bold text-primary">
              "One session with us = years ahead in AI clarity."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDifferHome;