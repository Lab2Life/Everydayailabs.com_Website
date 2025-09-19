import { AlertTriangle, Users, Target, TrendingDown } from "lucide-react";

const Struggles = () => {
  const struggles = [
    {
      icon: Users,
      title: "Random AI usage without business alignment",
      description: "My employees use tools randomly but can't connect them to business goals",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: AlertTriangle,
      title: "Lack of AI leadership",
      description: "We lack someone who can guide the team on AI usage",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: TrendingDown,
      title: "Falling behind competitors",
      description: "I feel left out when competitors are scaling with AI-driven systems",
      color: "from-yellow-500 to-red-500"
    },
    {
      icon: Target,
      title: "No AI ownership in organization",
      description: "Everyone talks about AI, but nobody in my company knows how to own it",
      color: "from-red-600 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Struggles <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Professionals & Businesses</span> Face
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The gap between AI awareness and AI leadership is costing businesses their competitive edge
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {struggles.map((struggle, index) => {
            const IconComponent = struggle.icon;
            return (
              <div 
                key={struggle.title}
                className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${struggle.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{struggle.title}</h3>
                    <p className="text-muted-foreground leading-relaxed italic">
                      "{struggle.description}"
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-8 shadow-card max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-red-600">
              The Cost of AI Leadership Gap
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Without dedicated AI officers, organizations struggle with scattered tools, unclear strategies, 
              and missed opportunities while competitors gain strategic advantages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Struggles;