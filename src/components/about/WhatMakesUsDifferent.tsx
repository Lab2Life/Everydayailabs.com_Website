import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Users, Zap } from "lucide-react";

const WhatMakesUsDifferent = () => {
  const differentiators = [
    {
      icon: Target,
      title: "Simple, not complex",
      description: "Plain language, easy steps.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Practical, not theoretical",
      description: "Tools you can use immediately.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: CheckCircle,
      title: "Consistent, not one-time",
      description: "Everyday improvements, not hype.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: Users,
      title: "For everyone",
      description: "Businesses, employees, freshers, and individuals.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another AI company. We're your everyday AI companion, 
              making technology work for real people in real situations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-100">
              <h3 className="text-2xl font-bold text-purple-700 mb-4">
                Our Philosophy
              </h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Technology should adapt to humans, not the other way around. 
                We bridge the gap between complex AI capabilities and everyday needs, 
                making sure everyone can benefit from this revolution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;