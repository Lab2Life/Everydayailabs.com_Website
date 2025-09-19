import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gem, ArrowRight, Infinity, FileText, Star, Settings, BarChart } from "lucide-react";

const WhatYouGet = () => {
  const features = [
    {
      icon: Settings,
      title: "Understand Your Business",
      description: "Authentic content from your values and legacy."
    },
    {
      icon: FileText,
      title: "Daily Text Posts (365 days)",
      description: "Fresh, sharp, timely, Google-friendly content."
    },
    {
      icon: Star,
      title: "Turn Reviews Into Trust",
      description: "Customer words converted into daily trust and visibility."
    },
    {
      icon: Settings,
      title: "Google Profile Structuring",
      description: "Categories, services, keywords optimised."
    },
    {
      icon: BarChart,
      title: "Monthly Visibility Report",
      description: "Transparent proof your profile never goes silent."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <Gem className="w-8 h-8 text-primary" />
              What you get?
            </h2>
            <div className="bg-gradient-primary rounded-lg p-6 text-white mb-8">
              <p className="text-xl font-medium flex items-center justify-center gap-3">
                "Simple Process + Powerful Execution 
                <ArrowRight className="w-6 h-6" />
                <span className="flex items-center gap-2">
                  <Infinity className="w-6 h-6" />
                  Infinite Results
                  <Infinity className="w-6 h-6" />
                </span>
                "
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold mb-3 text-lg text-primary">{feature.title}</h3>
                    <p className="text-muted-foreground flex-grow">{feature.description}</p>
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

export default WhatYouGet;