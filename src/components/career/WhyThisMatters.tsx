import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, TrendingUp, Users, Zap } from "lucide-react";

const WhyThisMatters = () => {
  const stats = [
    {
      icon: AlertTriangle,
      stat: "65%",
      title: "Unemployment Rate",
      description: "of engineering graduates remain unemployed after 6 months."
    },
    {
      icon: TrendingUp,
      stat: "<20%",
      title: "Core Job Employability",
      description: "Less than 20% are employable in core jobs."
    },
    {
      icon: Users,
      title: "What Companies Want",
      description: "Problem-solving, adaptability, and AI familiarity, not just grades."
    },
    {
      icon: Zap,
      title: "AI Advantage",
      description: "A fresher who knows AI tools gains an instant edge in applications and interviews."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <TrendingUp className="w-8 h-8 text-green-600" />
              Why this matters
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-green-100">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-green-600" />
                    </div>
                    {stat.stat && (
                      <div className="text-2xl font-bold text-green-600 mb-2">{stat.stat}</div>
                    )}
                    <h4 className="font-bold mb-3 text-lg text-green-600">{stat.title}</h4>
                    <p className="text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyThisMatters;