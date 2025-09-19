import { Card, CardContent } from "@/components/ui/card";
import { Search, Shield, TrendingDown, Users, Eye } from "lucide-react";

const AuditBusinessStruggles = () => {
  const struggles = [
    {
      icon: Shield,
      title: "Trust Issues",
      description: "I don't know if my business looks trustworthy online."
    },
    {
      icon: Search,
      title: "Inconsistent Tools",
      description: "We try digital tools, but nothing feels consistent."
    },
    {
      icon: TrendingDown,
      title: "Poor Lead Quality",
      description: "I spend on ads, but still don't get quality leads."
    },
    {
      icon: Users,
      title: "Outperformed by Competitors",
      description: "Competitors look more alive and attract better talent and customers."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Search className="w-8 h-8 text-blue-600" />
            Struggles Business Owners Face
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {struggles.map((struggle, index) => {
            const Icon = struggle.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-blue-100">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
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

export default AuditBusinessStruggles;