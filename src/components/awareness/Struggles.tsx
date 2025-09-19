import { Card, CardContent } from "@/components/ui/card";
import { Clock, UserX, Wrench, TrendingDown } from "lucide-react";

const Struggles = () => {
  const struggles = [
    {
      icon: Clock,
      title: "Manual Overload",
      description: "Our team spends hours on manual, repetitive work.",
      impact: "Lost productivity every single day"
    },
    {
      icon: UserX,
      title: "AI Fear & Resistance",
      description: "Employees fear AI will replace them, instead of learning to use it.",
      impact: "Missed opportunities for growth"
    },
    {
      icon: Wrench,
      title: "Underutilized Software",
      description: "We invest in software, but staff don't use it effectively.",
      impact: "Wasted investments and potential"
    },
    {
      icon: TrendingDown,
      title: "Falling Behind Competitors",
      description: "Competitors look more efficient and professional because their teams adapt faster.",
      impact: "Lost market advantage"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              🔎 Struggles Businesses Face
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              While your competitors embrace AI, these challenges keep your business stuck in the past
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {struggles.map((struggle, index) => {
              const IconComponent = struggle.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-red-400 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3 text-gray-900">{struggle.title}</h3>
                        <p className="text-gray-700 text-lg mb-3 leading-relaxed">
                          "{struggle.description}"
                        </p>
                        <div className="text-sm text-red-600 font-medium bg-red-50 px-3 py-2 rounded-md">
                          Impact: {struggle.impact}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-orange-200">
              <p className="text-lg text-gray-700 mb-4">
                <span className="font-semibold text-red-600">The Real Cost:</span> Every day without AI awareness, 
                your team works harder while competitors work smarter.
              </p>
              <p className="text-xl font-bold text-orange-600">
                But this can change in just 2 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Struggles;