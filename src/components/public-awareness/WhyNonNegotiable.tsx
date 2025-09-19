import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, TrendingUp, Brain } from "lucide-react";

const WhyNonNegotiable = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Daily Survival",
      description: "In jobs, businesses, and personal life, AI is no longer optional.",
      benefit: "Stay relevant in every aspect of life"
    },
    {
      icon: Clock,
      title: "Save 2 Hours Daily",
      description: "With the right tools, repetitive tasks vanish.",
      benefit: "More time for what truly matters"
    },
    {
      icon: TrendingUp,
      title: "Future-Proof",
      description: "AI-literate people get chosen first in careers and opportunities.",
      benefit: "Career security and growth"
    },
    {
      icon: Brain,
      title: "Confidence, Not Confusion",
      description: "You'll know exactly where AI fits for you.",
      benefit: "Clear direction and peace of mind"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              🌍 Why Awareness is Non-Negotiable Today
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AI isn't just changing technology — it's transforming how we live, work, and grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-emerald-400 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3 text-emerald-600">{reason.title}</h3>
                        <p className="text-gray-700 text-lg mb-3 leading-relaxed">
                          {reason.description}
                        </p>
                        <div className="text-sm text-emerald-700 font-medium bg-emerald-50 px-3 py-2 rounded-md">
                          Benefit: {reason.benefit}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200">
              <p className="text-lg text-gray-700 mb-4">
                <span className="font-semibold text-emerald-600">The Choice is Clear:</span> Learn AI now with guidance, 
                or struggle to catch up later on your own.
              </p>
              <p className="text-xl font-bold text-teal-600">
                Two hours today can change your entire relationship with technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNonNegotiable;