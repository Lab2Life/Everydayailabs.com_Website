import { Card, CardContent } from "@/components/ui/card";
import { Flame, Clock, Settings, TrendingDown } from "lucide-react";

const Struggles = () => {
  const struggles = [
    {
      icon: Flame,
      title: "Constant Firefighting",
      description: "I'm always firefighting, there's no time left for growth.",
      impact: "Strategic planning takes backseat to daily crises"
    },
    {
      icon: Clock,
      title: "Team Dependencies",
      description: "My team depends on me for small tasks, I can't delegate everything.",
      impact: "Business bottlenecked by owner availability"
    },
    {
      icon: Settings,
      title: "Manual Operations",
      description: "I spend money on software, but still run things manually.",
      impact: "Wasted investments and inefficient processes"
    },
    {
      icon: TrendingDown,
      title: "Competitive Disadvantage",
      description: "Competitors adopt new tools faster and look more professional.",
      impact: "Lost market position and customer confidence"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              🔎 Struggles Business Owners Face
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              While competitors move forward with AI, these daily struggles keep your business in reactive mode
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
                <span className="font-semibold text-red-600">The Business Reality:</span> Business owners today don't compete with other businesses. 
                They compete with time.
              </p>
              <p className="text-xl font-bold text-orange-600">
                AI gives you back that time, so you can grow without burning out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Struggles;