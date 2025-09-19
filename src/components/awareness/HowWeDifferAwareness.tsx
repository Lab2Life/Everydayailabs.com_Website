import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, Play } from "lucide-react";

const HowWeDifferAwareness = () => {
  const differentiators = [
    {
      icon: Heart,
      title: "Daily Life First",
      description: "Not just for coders or corporates."
    },
    {
      icon: Play,
      title: "Hands-On Demos",
      description: "You see it, try it, apply it."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <Users className="w-8 h-8 text-cyan-600" />
              How We Differ
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Unlike typical "tech talks," EverydayAiLabs makes AI relatable, human, and simple.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {differentiators.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-cyan-100">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-bold mb-4 text-xl text-cyan-600">{diff.title}</h3>
                    <p className="text-muted-foreground text-lg">{diff.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-indigo-50 rounded-lg p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-cyan-600" />
              <Badge variant="outline" className="text-lg px-4 py-2 border-cyan-500 text-cyan-600">
                Our Approach
              </Badge>
            </div>
            <p className="text-xl font-bold text-cyan-700">
              AI made relatable, human, and simple for everyone
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDifferAwareness;