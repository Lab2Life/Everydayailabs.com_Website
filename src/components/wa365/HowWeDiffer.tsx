import { Target, Dna, Users, Link } from "lucide-react";

const HowWeDiffer = () => {
  const differentiators = [
    {
      icon: Target,
      title: "Ground Problems",
      description: "Identify where you lose consistency",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Dna,
      title: "Business DNA",
      description: "Automations aligned with your exact workflows",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Users,
      title: "Audience Behaviour",
      description: "Speak in the tone your customers expect",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: Link,
      title: "Smart Integrations",
      description: "Not just messages, but connected systems",
      color: "from-green-600 to-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How do we <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">differ?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Unlike one-size-fits-all bots, WA365 is customised for your business reality
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our approach combines deep business understanding with smart automation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
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
        
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 shadow-elegant max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Our Benchmark
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              A <span className="font-bold text-green-600">20-minute mapping session</span> = <span className="font-bold text-emerald-600">20 months saved</span> in mistakes
            </p>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/50 rounded-lg p-4 border border-green-200">
                <div className="text-lg font-bold text-green-600 mb-1">Custom</div>
                <div className="text-xs text-muted-foreground">Not generic bots</div>
              </div>
              <div className="bg-white/50 rounded-lg p-4 border border-emerald-200">
                <div className="text-lg font-bold text-emerald-600 mb-1">Business DNA</div>
                <div className="text-xs text-muted-foreground">Your exact workflows</div>
              </div>
              <div className="bg-white/50 rounded-lg p-4 border border-teal-200">
                <div className="text-lg font-bold text-teal-600 mb-1">Smart</div>
                <div className="text-xs text-muted-foreground">Connected systems</div>
              </div>
              <div className="bg-white/50 rounded-lg p-4 border border-green-200">
                <div className="text-lg font-bold text-green-600 mb-1">Proven</div>
                <div className="text-xs text-muted-foreground">Real business results</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDiffer;