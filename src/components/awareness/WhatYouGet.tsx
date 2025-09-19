import { Card, CardContent } from "@/components/ui/card";
import { Mail, Settings, BarChart, Users, Wrench } from "lucide-react";

const WhatYouGet = () => {
  const learningTopics = [
    {
      icon: Mail,
      title: "AI for Workflows",
      description: "Write mails, reports, and presentations in minutes.",
      timeframe: "Learn in 30 mins"
    },
    {
      icon: Settings,
      title: "AI for Productivity",
      description: "Automate reminders, data entry, and follow-ups.",
      timeframe: "Implement same day"
    },
    {
      icon: BarChart,
      title: "AI for Decision Support",
      description: "Quick analysis of sales, operations, and risks.",
      timeframe: "Use immediately"
    },
    {
      icon: Users,
      title: "AI for Collaboration",
      description: "Share updates and track projects with less effort.",
      timeframe: "Team-wide adoption"
    },
    {
      icon: Wrench,
      title: "Your First 5 Workplace Tools",
      description: "Guided demos tailored to business roles.",
      timeframe: "Ready to use"
    }
  ];

  const businessBenefits = [
    {
      title: "Demo of 10+ AI use cases",
      description: "See real business applications in action, not just theory"
    },
    {
      title: "Custom worksheets",
      description: "Map AI tools directly into your employee tasks and workflows"
    },
    {
      title: "Step-by-step adoption plan",
      description: "Clear roadmap for implementing AI across your team"
    },
    {
      title: "Boosted employee morale",
      description: "Remove fear of AI and build excitement for innovation"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              📘 What Your Employees Learn (in 2 hours)
            </h2>
            <p className="text-xl text-muted-foreground">
              Practical, hands-on skills they can use immediately
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {learningTopics.map((topic, index) => {
              const IconComponent = topic.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-blue-600">{topic.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {topic.description}
                    </p>
                    <div className="text-sm font-medium text-purple-600 bg-purple-50 px-3 py-2 rounded-md">
                      {topic.timeframe}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">
              💎 What Your Business Gets
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {businessBenefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-semibold mb-3 text-blue-600">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-green-200">
              <h4 className="text-xl font-bold text-green-700 mb-4">
                Immediate ROI Calculation
              </h4>
              <p className="text-lg text-gray-700">
                <span className="font-semibold">One session = 20 employees saving 2 hours daily = 
                40 hours saved every single day</span>
              </p>
              <p className="text-sm text-green-600 mt-2">
                That's ₹40,000+ value created daily (at ₹1,000/hour employee cost)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;