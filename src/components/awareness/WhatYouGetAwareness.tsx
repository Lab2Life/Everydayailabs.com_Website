import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, FileText, Navigation } from "lucide-react";

const WhatYouGetAwareness = () => {
  const deliverables = [
    {
      icon: Play,
      title: "Practical Demo",
      description: "Practical demo of 10+ real AI use cases."
    },
    {
      icon: FileText,
      title: "Simple Worksheets",
      description: "Simple worksheets for your own action plan."
    },
    {
      icon: Navigation,
      title: "Next Step Guidance",
      description: "Guidance on choosing the right next step."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <FileText className="w-8 h-8 text-cyan-600" />
              What You Get
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {deliverables.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full border-cyan-100">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-bold mb-4 text-xl text-cyan-600">{item.title}</h3>
                    <p className="text-muted-foreground flex-grow text-lg">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-indigo-50 rounded-lg p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Play className="w-8 h-8 text-cyan-600" />
              <Badge variant="outline" className="text-lg px-4 py-2 border-cyan-500 text-cyan-600">
                Immediate Value
              </Badge>
            </div>
            <p className="text-xl font-bold text-cyan-700">
              Walk away with practical knowledge you can apply immediately
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetAwareness;