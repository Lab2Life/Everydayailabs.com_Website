import { Card, CardContent } from "@/components/ui/card";
import { Mail, Eye, Settings, BarChart, Users } from "lucide-react";

const WhatYouGet = () => {
  const capabilities = [
    {
      icon: Mail,
      title: "AI for Communication",
      description: "Draft updates, emails, and meeting notes instantly.",
      benefit: "Clear, consistent team communication"
    },
    {
      icon: Eye,
      title: "AI for Visibility",
      description: "Track progress, milestones, and deadlines without constant reminders.",
      benefit: "Real-time project oversight"
    },
    {
      icon: Settings,
      title: "AI for Productivity",
      description: "Automate recurring tasks, reminders, and reports.",
      benefit: "Time for strategic thinking"
    },
    {
      icon: BarChart,
      title: "AI for Decision Making",
      description: "Evaluate performance, risks, and priorities in real-time.",
      benefit: "Data-driven leadership"
    },
    {
      icon: Users,
      title: "AI for Team Empowerment",
      description: "Train staff to use AI for efficiency, accountability, and collaboration.",
      benefit: "Autonomous, high-performing teams"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              💎 What You Get
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              <span className="font-semibold text-amber-600">"Automate → Analyse → Lead with Impact"</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-amber-600">{capability.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {capability.description}
                    </p>
                    <div className="text-sm font-medium text-orange-600 bg-orange-50 px-3 py-2 rounded-md">
                      {capability.benefit}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
              <h4 className="text-xl font-bold text-amber-700 mb-4">
                Management Transformation
              </h4>
              <p className="text-lg text-gray-700 mb-4">
                <span className="font-semibold">Our benchmark: One session = one year ahead in team clarity and efficiency.</span>
              </p>
              <p className="text-amber-600 font-semibold">
                Move from managing bottlenecks to leading high-performing teams with AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;