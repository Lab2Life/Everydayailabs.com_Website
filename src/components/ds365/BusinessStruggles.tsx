import { Card, CardContent } from "@/components/ui/card";
import { Search, Clock, Users, TrendingDown } from "lucide-react";

const BusinessStruggles = () => {
  const struggles = [
    {
      icon: Clock,
      title: "Time Constraints",
      description: "I don't have the time to keep posting every day."
    },
    {
      icon: Users,
      title: "Team Struggles",
      description: "My team struggles to maintain a steady flow of content."
    },
    {
      icon: TrendingDown,
      title: "Low Trust",
      description: "I spend on ads, but customers still don't trust my profile."
    },
    {
      icon: Search,
      title: "Competition",
      description: "My competitors look more alive and attract more customers than I do"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Search className="w-8 h-8 text-primary" />
            Struggles Business Owners Face
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {struggles.map((struggle, index) => {
            const Icon = struggle.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
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

export default BusinessStruggles;