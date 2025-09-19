import { Target, Route, Briefcase, Award } from "lucide-react";

const HowWeDiffer = () => {
  const differentiators = [
    {
      icon: Target,
      title: "Capability Mapping",
      description: "Skills linked directly to business needs",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: Route,
      title: "Journey Design",
      description: "Foundation → Practitioner → Strategist, no confusion",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Briefcase,
      title: "Practical Application",
      description: "Every level ends with real projects, not just theory",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Certification signals capability, not just participation",
      color: "from-purple-600 to-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How do we <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">differ?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Unlike short courses that teach tools, CAIO is a role-based pathway
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our edge: transforming scattered learning into strategic leadership capability
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
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-2xl p-8 shadow-elegant max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Our Benchmark
            </h3>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Completing the pathway = <span className="font-bold text-purple-600">3 years ahead</span> in workplace readiness
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/50 rounded-lg p-4 border border-purple-200">
                <div className="text-2xl font-bold text-purple-600 mb-2">Role-Based</div>
                <div className="text-sm text-muted-foreground">Not just tools training</div>
              </div>
              <div className="bg-white/50 rounded-lg p-4 border border-blue-200">
                <div className="text-2xl font-bold text-blue-600 mb-2">Strategic</div>
                <div className="text-sm text-muted-foreground">Business-aligned growth</div>
              </div>
              <div className="bg-white/50 rounded-lg p-4 border border-indigo-200">
                <div className="text-2xl font-bold text-indigo-600 mb-2">Certified</div>
                <div className="text-sm text-muted-foreground">Industry recognition</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDiffer;