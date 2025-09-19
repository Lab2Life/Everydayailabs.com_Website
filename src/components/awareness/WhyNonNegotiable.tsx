import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Heart, Zap, Lightbulb } from "lucide-react";

const WhyNonNegotiable = () => {
  const reasons = [
    {
      icon: TrendingUp,
      title: "Productivity = Profit",
      description: "Employees save 1–2 hours a day, directly improving output.",
      benefit: "More work done, higher revenue"
    },
    {
      icon: Heart,
      title: "Retention = Confidence",
      description: "Teams see AI as a helper, not a threat.",
      benefit: "Happier employees, lower turnover"
    },
    {
      icon: Zap,
      title: "Competitiveness = Survival",
      description: "Businesses with AI-ready staff outpace those stuck in manual mode.",
      benefit: "Market leadership, not following"
    },
    {
      icon: Lightbulb,
      title: "Culture = Growth",
      description: "Creates a mindset of innovation and adaptability across the company.",
      benefit: "Future-ready organization"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              🌍 Why AI Awareness is Non-Negotiable for Businesses
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In today's competitive landscape, AI literacy isn't optional — it's survival
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-400 bg-white">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3 text-blue-600">{reason.title}</h3>
                        <p className="text-gray-700 text-lg mb-3 leading-relaxed">
                          {reason.description}
                        </p>
                        <div className="text-sm text-blue-700 font-medium bg-blue-50 px-3 py-2 rounded-md">
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
            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-200">
              <p className="text-lg text-gray-700 mb-4">
                <span className="font-semibold text-blue-600">The Bottom Line:</span> Companies with AI-aware employees 
                don't just survive in the digital age — they thrive.
              </p>
              <p className="text-xl font-bold text-indigo-600">
                Your competition is already moving. Are you?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNonNegotiable;