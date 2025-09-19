import { Card, CardContent } from "@/components/ui/card";
import { Search, AlertTriangle, Users, Clock } from "lucide-react";

const DoubtClearanceStruggles = () => {
  const struggles = [
    {
      icon: AlertTriangle,
      title: "Tool Confusion",
      description: "We tried AI tools, but we don't know how to use them for our work."
    },
    {
      icon: Search,
      title: "Post-Awareness Gap",
      description: "After the awareness session, we got excited but stuck when applying."
    },
    {
      icon: Users,
      title: "Individual Doubts",
      description: "Each employee has different doubts, no one solution fits all."
    },
    {
      icon: Clock,
      title: "Wasted Testing Time",
      description: "We waste time testing tools without clear direction."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Search className="w-8 h-8 text-orange-600" />
            Struggles Employees Face
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {struggles.map((struggle, index) => {
            const Icon = struggle.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-orange-100">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold mb-3 text-lg">{struggle.title}</h3>
                  <p className="text-muted-foreground italic">"{struggle.description}"</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DoubtClearanceStruggles;