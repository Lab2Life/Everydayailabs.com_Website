import { Card, CardContent } from "@/components/ui/card";
import { Search, UserX, MessageCircle, FileX } from "lucide-react";

const CareerStruggles = () => {
  const struggles = [
    {
      icon: UserX,
      title: "Interview Rejections",
      description: "I studied for years, but interviews still reject me."
    },
    {
      icon: Search,
      title: "Unfair Competition",
      description: "Friends with average marks get jobs faster than me."
    },
    {
      icon: MessageCircle,
      title: "Interview Skills Gap",
      description: "I don't know how to answer real interview questions."
    },
    {
      icon: FileX,
      title: "No Response",
      description: "I applied to 50+ jobs but didn't get responses."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Search className="w-8 h-8 text-green-600" />
            Struggles Freshers Face
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {struggles.map((struggle, index) => {
            const Icon = struggle.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-green-100">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-green-600" />
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

export default CareerStruggles;