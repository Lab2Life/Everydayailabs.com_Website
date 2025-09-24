import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Shield, Zap, TrendingUp } from "lucide-react";

const HowWeDiffer = () => {
  const differentiators = [
    {
      icon: Target,
      title: "Pain-Driven Design",
      description: "Sessions built on your daily struggles.",
      traditional: "Generic business workshops without context",
      ours: "Real business owner challenges and solutions"
    },
    {
      icon: Shield,
      title: "Proven Models",
      description: "Frameworks like DS365 & WhatsApp automation applied to business reality.",
      traditional: "Theoretical frameworks without application",
      ours: "Battle-tested systems for real businesses"
    },
    {
      icon: Zap,
      title: "Scalable",
      description: "Start simple, grow into full systems.",
      traditional: "Complex all-or-nothing implementations",
      ours: "Gradual, manageable business transformation"
    },
    {
      icon: TrendingUp,
      title: "Practical Takeaways",
      description: "You leave with ready-to-use AI workflows, not just theory.",
      traditional: "PowerPoint presentations and concepts",
      ours: "Implemented business workflows ready to use"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-emerald-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              🔶 How We Differ
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlike typical "tech workshops," <span className="font-semibold text-emerald-600">we focus on owner-first clarity.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((diff, index) => {
              const IconComponent = diff.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-r from-emerald-500 to-green-500 p-6 text-white">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-semibold">{diff.title}</h3>
                      </div>
                      <p className="text-green-100">{diff.description}</p>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <Badge variant="destructive" className="text-xs">
                          Others
                        </Badge>
                        <p className="text-sm text-gray-600 flex-1">{diff.traditional}</p>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Badge variant="default" className="text-xs bg-green-600">
                          EverydayAiLabs
                        </Badge>
                        <p className="text-sm text-gray-800 flex-1 font-medium">{diff.ours}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-emerald-200">
              <h4 className="text-xl font-bold text-emerald-600 mb-4">
                Our Edge
              </h4>
              <p className="text-lg text-gray-700 mb-4">
                We don't just teach AI tools - we transform business operations through owner empowerment.
              </p>
              <p className="text-emerald-600 font-semibold">
                Real challenges → Proven solutions → Immediate growth
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDiffer;