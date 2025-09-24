import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Zap, Users, TrendingUp } from "lucide-react";

const HowWeDiffer = () => {
  const differentiators = [
    {
      icon: Target,
      title: "Pain-Driven Design",
      description: "Sessions built on real employee challenges, not generic AI theory.",
      traditional: "Generic workshops with slides",
      ours: "Targeted solutions for actual problems"
    },
    {
      icon: TrendingUp,
      title: "Business-First Approach",
      description: "Directly linked to efficiency, growth, and competitiveness.",
      traditional: "Technical focus without business context",
      ours: "ROI-driven practical implementation"
    },
    {
      icon: Users,
      title: "Hands-On Demos",
      description: "Teams see AI in action, not just presentations.",
      traditional: "PowerPoint presentations",
      ours: "Live demonstrations and practice"
    },
    {
      icon: Zap,
      title: "Immediate ROI",
      description: "One session = 20 employees saving 2 hours daily = 40 hours saved every single day.",
      traditional: "Vague promises of future benefits",
      ours: "Measurable impact from day one"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              🔶 How We Differ
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlike generic AI workshops, <span className="font-semibold text-purple-600">EverydayAiLabs focuses on business impact 
              through employee empowerment.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((diff, index) => {
              const IconComponent = diff.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 text-white">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-semibold">{diff.title}</h3>
                      </div>
                      <p className="text-blue-100">{diff.description}</p>
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
            <div className="bg-white rounded-xl p-8 shadow-lg border border-purple-200">
              <h4 className="text-xl font-bold text-purple-600 mb-4">
                The EverydayAiLabs Difference
              </h4>
              <p className="text-lg text-gray-700 mb-4">
                We don't just teach AI tools - we transform business operations through empowered employees.
              </p>
              <p className="text-purple-600 font-semibold">
                Real problems → Practical solutions → Immediate results
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDiffer;