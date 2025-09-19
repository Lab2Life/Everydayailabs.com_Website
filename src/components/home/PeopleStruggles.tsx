import { Card, CardContent } from "@/components/ui/card";
import { XCircle, Clock, Users, GraduationCap, AlertTriangle } from "lucide-react";

const PeopleStruggles = () => {
  const struggles = [
    {
      icon: AlertTriangle,
      title: "Complex AI",
      description: "AI feels too complex, I don't know where to start."
    },
    {
      icon: Clock,
      title: "Time Waste",
      description: "I waste hours on repetitive tasks every week."
    },
    {
      icon: Users,
      title: "Team Fear",
      description: "My team fears AI will replace them, instead of empower them."
    },
    {
      icon: GraduationCap,
      title: "Skills Gap",
      description: "Freshers join us, but lack the right AI skills."
    },
    {
      icon: XCircle,
      title: "No Time",
      description: "I know AI is important, but I don't have time to figure it out."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-4">
            <XCircle className="w-10 h-10 text-red-500" />
            Struggles People & Businesses Face
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {struggles.map((struggle, index) => {
            const Icon = struggle.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-red-100">
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-red-500" />
                  </div>
                  <h3 className="font-bold mb-3 text-lg">{struggle.title}</h3>
                  <p className="text-muted-foreground italic flex-grow">"{struggle.description}"</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PeopleStruggles;