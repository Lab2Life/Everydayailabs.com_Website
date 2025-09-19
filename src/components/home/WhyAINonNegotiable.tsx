import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Clock, TrendingDown, Zap } from "lucide-react";

const WhyAINonNegotiable = () => {
  const facts = [
    {
      icon: Clock,
      stat: "40%",
      title: "Wasted Time",
      description: "of employee time goes into tasks AI can handle better."
    },
    {
      icon: AlertTriangle,
      stat: "2 Years",
      title: "Risk Timeline",
      description: "Freshers without AI skills are at risk of irrelevance in 2 years."
    },
    {
      icon: TrendingDown,
      stat: "Lost Growth",
      title: "MSME Impact",
      description: "MSMEs lose growth by skipping AI-powered visibility and efficiency."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-4">
              <Zap className="w-10 h-10 text-yellow-500" />
              Why AI is Non-Negotiable Today
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {facts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-yellow-100"
                >
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-yellow-600" />
                    </div>
                    <div className="text-3xl font-bold text-yellow-600 mb-2">
                      {fact.stat}
                    </div>
                    <h4 className="font-bold mb-4 text-lg text-yellow-600">
                      {fact.title}
                    </h4>
                    <p className="text-muted-foreground">{fact.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-8 text-center border-2 border-yellow-200">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-yellow-600" />
              <span className="text-2xl font-bold text-yellow-700">
                AI is not optional anymore !
              </span>
            </div>
            <p className="text-xl font-medium text-yellow-700">
              With EverydayAiLabs, you stay ahead, not behind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAINonNegotiable;