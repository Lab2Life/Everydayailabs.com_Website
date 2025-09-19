import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Calendar, Settings, Star } from "lucide-react";

const HowWeDifferCareer = () => {
  const differentiators = [
    {
      icon: Play,
      title: "Live Demo Approach",
      description:
        "Not just theory, live demo of how AI solves fresher problems in real time.",
    },
    {
      icon: Calendar,
      title: "Roadmap Focus",
      description: "Structured action plan to become job-ready.",
    },
    {
      icon: Settings,
      title: "Right Tools Only",
      description:
        "We don't overload with 100 tools, only the right low-effort, high-impact uses of AI.",
    },
    {
      icon: Star,
      title: "Unique Impression",
      description: "We help you make unique impression beyond the crowd.",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <Star className="w-8 h-8 text-green-600" />
              How we differ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {differentiators.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-green-100"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2 text-lg text-green-600">
                          {diff.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {diff.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calendar className="w-8 h-8 text-green-600" />
              <Badge
                variant="outline"
                className="text-lg px-4 py-2 border-green-500 text-green-600"
              >
                Our Promise
              </Badge>
            </div>
            <p className="text-xl font-bold text-green-700">
              Transform from "degree holder" to "job-ready professional" in just
              one session
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDifferCareer;
