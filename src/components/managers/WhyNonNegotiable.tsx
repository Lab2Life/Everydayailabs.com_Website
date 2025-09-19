import { Card, CardContent } from "@/components/ui/card";
import { Clock, BarChart, Users, CheckCircle } from "lucide-react";

const WhyNonNegotiable = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Time = Focus",
      description: "Reclaim 2–3 hours a day by automating updates, reminders, and reports.",
      benefit: "Strategic thinking over operational tasks"
    },
    {
      icon: BarChart,
      title: "Data = Decisions",
      description: "Access instant insights to guide performance and outcomes.",
      benefit: "Faster, more informed decision making"
    },
    {
      icon: Users,
      title: "Team = Autonomy",
      description: "Free your team from low-value work so they focus on high-impact contributions.",
      benefit: "Empowered teams, better results"
    },
    {
      icon: CheckCircle,
      title: "Consistency = Credibility",
      description: "Ensure standard workflows, communications, and follow-ups daily.",
      benefit: "Reliable leadership and team trust"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              🚀 Why It's Non-Negotiable Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Modern teams expect speed, clarity, and proactive leadership — AI delivers all three
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-amber-400 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3 text-amber-600">{reason.title}</h3>
                        <p className="text-gray-700 text-lg mb-3 leading-relaxed">
                          {reason.description}
                        </p>
                        <div className="text-sm text-amber-700 font-medium bg-amber-50 px-3 py-2 rounded-md">
                          Result: {reason.benefit}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-amber-200">
              <h4 className="text-xl font-bold text-amber-600 mb-4">
                What Today's Teams Expect
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Quick responses and decisions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Consistent guidance and follow-ups</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Seamless collaboration across tools</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span>Managers who anticipate problems, not react to them</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNonNegotiable;