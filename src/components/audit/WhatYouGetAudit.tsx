import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Eye, Workflow, Settings, Zap, ArrowRight } from "lucide-react";

const WhatYouGetAudit = () => {
  const reportItems = [
    {
      icon: Eye,
      title: "Digital Visibility Score",
      description: "How your Google profile, reviews, and presence look."
    },
    {
      icon: Workflow,
      title: "Workflow Snapshot",
      description: "Where your team spends most time, where AI can help."
    },
    {
      icon: Settings,
      title: "Tools & Initiatives Audit",
      description: "What you use today, what's missing."
    },
    {
      icon: Zap,
      title: "Quick Wins",
      description: "2-3 immediate changes you can make."
    },
    {
      icon: ArrowRight,
      title: "Next Digital Step Suggestions",
      description: "Clear roadmap for your digital transformation."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <BarChart className="w-8 h-8 text-blue-600" />
              What You Get (in the report)
            </h2>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white mb-8">
              <p className="text-xl font-medium">
                Comprehensive PDF Report with Actionable Insights
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reportItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full border-blue-100">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-bold mb-3 text-lg text-blue-600">{item.title}</h3>
                    <p className="text-muted-foreground flex-grow">{item.description}</p>
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

export default WhatYouGetAudit;