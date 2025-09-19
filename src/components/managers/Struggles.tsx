import { Card, CardContent } from "@/components/ui/card";
import { Clock, FileText, BarChart, AlertTriangle } from "lucide-react";

const Struggles = () => {
  const struggles = [
    {
      icon: Clock,
      title: "Time Drain on Follow-ups",
      description: "I spend more time on follow-ups than actual strategy.",
      impact: "Strategic thinking suffers from operational overload"
    },
    {
      icon: FileText,
      title: "Report & Update Overload",
      description: "Team updates, reports, and reminders consume my day.",
      impact: "Lost focus on high-level decision making"
    },
    {
      icon: BarChart,
      title: "Data Delay Decisions",
      description: "Decisions feel delayed because I lack real-time data.",
      impact: "Missed opportunities and slower responses"
    },
    {
      icon: AlertTriangle,
      title: "Project Derailment",
      description: "Projects derail when small tasks aren't tracked efficiently.",
      impact: "Team productivity and momentum loss"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              🔎 Struggles Managers Face
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern managers are drowning in operational tasks when they should be leading strategically
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
                <span className="font-semibold text-red-600">The Management Reality:</span> Managers today don't compete with other teams — 
                they compete with time, attention, and clarity.
              </p>
              <p className="text-xl font-bold text-orange-600">
                AI gives you all three, so your team performs without micromanaging every task.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Struggles;