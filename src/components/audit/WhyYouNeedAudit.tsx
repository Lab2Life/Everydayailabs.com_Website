import { Card, CardContent } from "@/components/ui/card";
import { Globe, Cog, IndianRupee, Zap, Shield, Eye } from "lucide-react";

const WhyYouNeedAudit = () => {
  const benefits = [
    {
      icon: Eye,
      title: "Visibility is Trust",
      stat: "85%",
      description: "of customers check online before deciding."
    },
    {
      icon: Cog,
      title: "Systems Save Stress",
      description: "Right tools = smoother workflows, less wasted effort."
    },
    {
      icon: IndianRupee,
      title: "Low-Cost Clarity",
      description: "For just ₹1000, you avoid blind digital spending."
    },
    {
      icon: Zap,
      title: "Future Readiness",
      description: "AI-driven businesses outperform others in cost and efficiency."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <Globe className="w-8 h-8 text-blue-600" />
              Why You Need It Today
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-blue-100">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-bold mb-3 text-lg text-blue-600">
                      {benefit.title}
                      {benefit.stat && <span className="block text-2xl mt-1">{benefit.stat}</span>}
                    </h4>
                    <p className="text-muted-foreground">{benefit.description}</p>
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

export default WhyYouNeedAudit;