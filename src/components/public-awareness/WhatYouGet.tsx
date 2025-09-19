import { Card, CardContent } from "@/components/ui/card";
import { Mail, Briefcase, Home, TrendingUp, Wrench } from "lucide-react";

const WhatYouGet = () => {
  const learningTopics = [
    {
      icon: Mail,
      title: "Everyday AI Hacks",
      description: "Save time on mails, planning, routine work.",
      benefit: "Daily efficiency boost"
    },
    {
      icon: Briefcase,
      title: "AI at Work",
      description: "Smart docs, presentations, and reports in minutes.",
      benefit: "Professional advantage"
    },
    {
      icon: Home,
      title: "AI in Life",
      description: "Language, travel, cooking, shopping, and finance use cases.",
      benefit: "Personal convenience"
    },
    {
      icon: TrendingUp,
      title: "AI for Growth",
      description: "Build trust, create content, and stay relevant.",
      benefit: "Future opportunities"
    },
    {
      icon: Wrench,
      title: "Your First 5 Tools",
      description: "Start today with step-by-step guidance.",
      benefit: "Immediate implementation"
    }
  ];

  const sessionBenefits = [
    {
      title: "Practical demo of 10+ real AI use cases",
      description: "See how AI works in real situations, not just theory"
    },
    {
      title: "Simple worksheets for your own action plan",
      description: "Personalized roadmap for implementing AI in your life"
    },
    {
      title: "Guidance on choosing the right next step",
      description: "Clear direction based on your specific needs and goals"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              📘 What You Learn (in 2 hours)
            </h2>
            <p className="text-xl text-muted-foreground">
              Practical skills you can use the moment you leave the session
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {learningTopics.map((topic, index) => {
              const IconComponent = topic.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-emerald-600">{topic.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      {topic.description}
                    </p>
                    <div className="text-sm font-medium text-cyan-600 bg-cyan-50 px-3 py-2 rounded-md">
                      {topic.benefit}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">
              💎 What You Get
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sessionBenefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-semibold mb-3 text-emerald-600">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
              <h4 className="text-xl font-bold text-green-700 mb-4">
                Time Investment vs. Lifetime Returns
              </h4>
              <p className="text-lg text-gray-700">
                <span className="font-semibold">2 hours of learning = 2 hours saved daily for life</span>
              </p>
              <p className="text-sm text-green-600 mt-2">
                That's 730+ hours saved per year, worth your time and peace of mind
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;