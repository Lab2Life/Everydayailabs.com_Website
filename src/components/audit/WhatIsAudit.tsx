import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileSearch, Target, Users, Clock } from "lucide-react";

const WhatIsAudit = () => {
  const features = [
    {
      icon: Target,
      title: "Practical Assessment",
      description: "We use hands-on approach to evaluate your business."
    },
    {
      icon: Users,
      title: "Tailored Insights",
      description: "We provide specific, relevant insights, not generic advice."
    },
    {
      icon: FileSearch,
      title: "No Sales Pitches",
      description: "We avoid sales pitches and standard checklists."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <FileSearch className="w-8 h-8 text-blue-600" />
              What is AI Digital Audit?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              A 1–2 hour structured review of your business's digital presence, workflows, and tools, 
              followed by a clear PDF report on where you stand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-blue-100">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-bold mb-3 text-lg text-blue-600">{feature.title}</h4>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
              <Badge variant="outline" className="text-lg px-4 py-2 border-blue-500 text-blue-600">
                Quick & Comprehensive
              </Badge>
            </div>
            <p className="text-lg font-medium text-blue-700">
              Get a complete digital health check in just 1-2 hours + professional report delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsAudit;