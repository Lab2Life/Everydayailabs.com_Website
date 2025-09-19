import { Card, CardContent } from "@/components/ui/card";
import { Clock, Eye, BarChart, Users } from "lucide-react";

const WhyNonNegotiable = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Time = Money",
      description: "Reclaim 2–3 hours a day by automating repetitive work.",
      benefit: "More time for strategic growth initiatives"
    },
    {
      icon: Eye,
      title: "Visibility = Survival",
      description: "Be present online every day, without effort.",
      benefit: "Consistent brand presence and customer touchpoints"
    },
    {
      icon: BarChart,
      title: "Decisions = Clarity",
      description: "Use AI to plan, analyse, and forecast faster.",
      benefit: "Data-driven business decisions in real-time"
    },
    {
      icon: Users,
      title: "Teams = Empowered",
      description: "Free your staff from low-value tasks.",
      benefit: "Higher productivity and employee satisfaction"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Why It's Non-Negotiable Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Today's customers expect speed, consistency, and professionalism — AI delivers all three
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-400 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3 text-green-600">{reason.title}</h3>
                        <p className="text-gray-700 text-lg mb-3 leading-relaxed">
                          {reason.description}
                        </p>
                        <div className="text-sm text-green-700 font-medium bg-green-50 px-3 py-2 rounded-md">
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
            <div className="bg-white rounded-xl p-8 shadow-lg border border-green-200">
              <h4 className="text-xl font-bold text-green-600 mb-4">
                What Today's Customers Expect
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <div>• Fast responses to queries</div>
                <div>• Consistency in communication and service</div>
                <div>• Professional online presence</div>
                <div>• Businesses that adapt quickly, not stuck in old ways</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNonNegotiable;