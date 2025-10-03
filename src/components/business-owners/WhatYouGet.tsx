import { Card, CardContent } from "@/components/ui/card";
import { Mail, Eye, Settings, BarChart, Users } from "lucide-react";

const WhatYouGet = () => {
  const capabilities = [
    {
      icon: Mail,
      title: "AI for Communication",
      description:
        "Write messages, proposals, and replies in minutes, not hours.",
      benefit: "Professional communication at scale",
    },
    {
      icon: Eye,
      title: "AI for Visibility",
      description: "Daily posts, content ideas, and customer touchpoints.",
      benefit: "Consistent online presence without effort",
    },
    {
      icon: Settings,
      title: "AI for Productivity",
      description: "Automate reminders, reports, and follow-ups.",
      benefit: "Time freedom for strategic work",
    },
    {
      icon: BarChart,
      title: "AI for Decision Making",
      description: "Analyse sales, market trends, and risks instantly.",
      benefit: "Data-driven business insights",
    },
    {
      icon: Users,
      title: "AI for Team Empowerment",
      description: "Train staffs to effectively use AI for their roles.",
      benefit: "Multiplied team productivity",
    },
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
              <span className="font-semibold text-green-600">"Simple Tools → Smarter Decisions → Stronger Growth"</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {capabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-green-600">{capability.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {capability.description}
                    </p>
                    <div className="text-sm font-medium text-emerald-600 bg-emerald-50 px-3 py-2 rounded-md">
                      {capability.benefit}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
              <h4 className="text-xl font-bold text-green-700 mb-4">
                Business Transformation
              </h4>
              <p className="text-lg text-gray-700 mb-4">
                <span className="font-semibold">Our benchmark: One session = one year ahead in digital clarity.</span>
              </p>
              <p className="text-green-600 font-semibold">
                Move from firefighting daily tasks to driving long-term business growth with AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;