import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, TrendingUp, IndianRupee } from "lucide-react";

const WhyThisMatters = () => {
  const reasons = [
    {
      icon: ArrowRight,
      title: "Awareness is the first step",
      description: "but clarity in decisive action drives lasting results.",
    },
    {
      icon: Shield,
      title: "Employee Support",
      description:
        "Employees feel supported, not left alone after the first workshop.",
    },
    {
      icon: TrendingUp,
      title: "Instant Confidence Boost",
      description: "When doubts vanish, confidence and adoption increases.",
    },
    {
      icon: IndianRupee,
      title: "Compounded ROI",
      description:
        "You get compounded ROI from the first AI awareness investment.",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <TrendingUp className="w-8 h-8 text-orange-600" />
              Why this matters
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-orange-100">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <h4 className="font-bold mb-3 text-lg text-orange-600">{reason.title}</h4>
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

export default WhyThisMatters;