import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, FileText, Clock } from "lucide-react";

const HowWeDifferAudit = () => {
  const differentiators = [
    {
      icon: Building,
      title: "On-the-ground Experience",
      description: "We've run businesses for a decade, we know the founder's and employee's lens."
    },
    {
      icon: FileText,
      title: "Simple, Friendly Reporting",
      description: "Only actionable points, no fluff."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <Building className="w-8 h-8 text-blue-600" />
              How We Differ
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Unlike agencies that pitch solutions upfront, we start with clarity first:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {differentiators.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-blue-100">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-bold mb-4 text-xl text-blue-600">{diff.title}</h3>
                    <p className="text-muted-foreground text-lg">{diff.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
              <Badge variant="outline" className="text-lg px-4 py-2 border-blue-500 text-blue-600">
                Our Promise
              </Badge>
            </div>
            <p className="text-xl font-bold text-blue-700">
              Clarity first, solutions second. No sales pressure, only actionable insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDifferAudit;