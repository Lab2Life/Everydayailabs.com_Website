import { Target, Users, MessageCircle, Award } from "lucide-react";

const HowWeDiffer = () => {
  const differentiators = [
    {
      icon: Target,
      title: "Not generic",
      description: "Every session is customised to your industry and employee objectives",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: MessageCircle,
      title: "We don't just \"show tools\"",
      description: "We clear roadblocks for your exact tasks",
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: Award,
      title: "Real-world experience",
      description: "More than a decade of business experience → we speak the language of employees and owners",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Supportive delivery",
      description: "Simple, friendly approach that builds confidence, not intimidation",
      color: "from-orange-600 to-amber-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How we <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">differ</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond generic training - personalized clarity that drives real results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {differentiators.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={item.title}
                className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-card border border-border rounded-xl p-8 shadow-card max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Our Promise
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We don't just teach AI tools - we transform confusion into confidence through personalized, 
              industry-specific guidance that speaks your team's language.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDiffer;