import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, Search, FileText, MessageSquare, Clock } from "lucide-react";

const HowItWorksAudit = () => {
  const steps = [
    {
      step: "1",
      icon: Play,
      title: "Session",
      description: "1–2 hour session (online / physical)."
    },
    {
      step: "2", 
      icon: Search,
      title: "Analysis",
      description: "We study your presence, workflow, and tools."
    },
    {
      step: "3",
      icon: FileText,
      title: "Report Delivery",
      description: "Within 4 working days, you get your AI Digital Audit Report PDF."
    },
    {
      step: "4",
      icon: MessageSquare,
      title: "Discussion",
      description: "Optional discussion → decide next action."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <Clock className="w-8 h-8 text-blue-600" />
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative border-blue-100">
                  <CardContent className="p-6 text-center">
                    <Badge variant="default" className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-lg w-8 h-8 rounded-full flex items-center justify-center">
                      {step.step}
                    </Badge>
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 mt-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="font-bold mb-3 text-lg text-blue-600">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
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

export default HowItWorksAudit;