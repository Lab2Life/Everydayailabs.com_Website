import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, TrendingUp, CheckCircle } from "lucide-react";

const WhyAwarenessNonNegotiable = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Daily Survival",
      description: "In jobs, businesses, and personal life, AI is no longer optional."
    },
    {
      icon: Clock,
      title: "Save 2 Hours Daily",
      description: "With the right tools, repetitive tasks vanish."
    },
    {
      icon: TrendingUp,
      title: "Future-Proof",
      description: "AI-literate people get chosen first in careers and opportunities."
    },
    {
      icon: CheckCircle,
      title: "Confidence, not confusion",
      description: "You'll know exactly where AI fits for you."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <TrendingUp className="w-8 h-8 text-cyan-600" />
              Why Awareness is Non-Negotiable Today
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-cyan-100">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-cyan-600" />
                    </div>
                    <h4 className="font-bold mb-3 text-lg text-cyan-600">{reason.title}</h4>
                    <p className="text-muted-foreground">{reason.description}</p>
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

export default WhyAwarenessNonNegotiable;