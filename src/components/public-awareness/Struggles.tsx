import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle, AlertTriangle, Clock, BrainCircuit } from "lucide-react";

const Struggles = () => {
  const struggles = [
    {
      icon: HelpCircle,
      title: "Overwhelming Complexity",
      description: "AI looks too complex, I don't know where to start.",
      impact: "Staying stuck while others move forward"
    },
    {
      icon: BrainCircuit,
      title: "Unclear Applications",
      description: "I keep hearing about AI, but I don't know how it applies to my life.",
      impact: "Missing daily opportunities to save time"
    },
    {
      icon: AlertTriangle,
      title: "Fear of Being Left Behind",
      description: "I fear being left behind in jobs and opportunities.",
      impact: "Career and personal growth anxiety"
    },
    {
      icon: Clock,
      title: "Time Wasted on Repetitive Tasks",
      description: "I want to save time daily, but don't know the right tools.",
      impact: "Hours lost every day on manual work"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              🔎 Struggles People Face
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              You're not alone in feeling overwhelmed by AI — but you don't have to stay confused
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
                          Result: {struggle.impact}
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
                <span className="font-semibold text-red-600">The Reality:</span> AI isn't going away — 
                it's becoming part of everyday life, work, and opportunities.
              </p>
              <p className="text-xl font-bold text-orange-600">
                You can either learn it simply, or watch others get ahead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Struggles;