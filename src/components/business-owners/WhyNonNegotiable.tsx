import { Card, CardContent } from "@/components/ui/card";
import { Clock, Eye, BarChart, Users } from "lucide-react";

const WhyNonNegotiable = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Time = Money",
      description: "Reclaim 2–3 hours a day by automating work.",
      benefit: "More time for strategic growth initiatives",
    },
    {
      icon: Eye,
      title: "Visibility = Survival",
      description: "Be present online every day, without effort.",
      benefit: "Consistent brand presence and customer touchpoints",
    },
    {
      icon: BarChart,
      title: "Decisions = Clarity",
      description: "Use AI to plan, analyse, and forecast faster.",
      benefit: "Data-driven business decisions in real-time",
    },
    {
      icon: Users,
      title: "Teams = Empowered",
      description: "Free your staff from low-value tasks.",
      benefit: "Higher productivity and employee satisfaction",
    },
  ];

  const customerExpectations = [
    {
      title: "Fast Responses",
      icon: "⚡",
    },
    {
      title: "Consistency",
      icon: "🔄",
    },
    {
      title: "Professional Presence",
      icon: "💼",
    },
    {
      title: "Quick Adaptation",
      icon: "🚀",
    },
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
              Today's customers expect speed, consistency, and professionalism -
              AI delivers all three
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-400 bg-white"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3 text-green-600">
                          {reason.title}
                        </h3>
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

          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-green-700">
                What Today's Customers Expect
              </h3>
            </div>

            <div className="relative">
              {/* Connecting lines for desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-green-200 transform -translate-y-1/2 z-0"></div>
              <div className="hidden md:block absolute top-1/4 left-1/4 w-1 h-1/2 bg-green-200 z-0"></div>
              <div className="hidden md:block absolute top-1/4 left-2/4 w-1 h-1/2 bg-green-200 z-0"></div>
              <div className="hidden md:block absolute top-1/4 left-3/4 w-1 h-1/2 bg-green-200 z-0"></div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
                {customerExpectations.map((expectation, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-green-100 group"
                  >
                    <CardContent className="p-4 text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:from-green-200 group-hover:to-emerald-200 transition-all duration-300">
                        <span className="text-xl">{expectation.icon}</span>
                      </div>
                      <h4 className="font-bold text-green-700 text-sm tracking-wide uppercase">
                        {expectation.title}
                      </h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNonNegotiable;
