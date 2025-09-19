import { Shield, Users, Target, TrendingUp } from "lucide-react";

const WhyNonNegotiable = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Future-Proof Roles",
      description: "AI is rewriting job descriptions. Having certified AI Officers ensures relevance",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: Users,
      title: "In-House Champions",
      description: "Instead of external dependency, companies build internal capability",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Target,
      title: "Business-Aligned AI",
      description: "Certification connects AI usage directly to measurable outcomes",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Clear Growth Journey",
      description: "From beginner to strategist, every step is mapped",
      color: "from-purple-600 to-blue-600"
    }
  ];

  const expectations = [
    "Employees who can do the work faster with AI",
    "Officers who can apply AI to projects and departments",
    "Leaders who can strategise AI adoption across the business"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why This Pathway is <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Non-Negotiable Today</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            "AI won't replace people. But people who know AI will replace those who don't. The AI Officer pathway creates leaders who thrive in this shift."
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div 
                key={reason.title}
                className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${reason.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="animate-fade-in">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-2xl p-8 shadow-elegant max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              What Today's Companies Expect:
            </h3>
            
            <div className="space-y-4">
              {expectations.map((expectation, index) => (
                <div key={expectation} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-lg text-gray-700">{expectation}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-white/50 rounded-lg border border-purple-200">
              <p className="text-center text-lg font-medium text-purple-700">
                The CAIO pathway prepares professionals for all three levels of AI leadership
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNonNegotiable;