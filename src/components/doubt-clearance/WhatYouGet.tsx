import { CheckCircle, FileText, Users, Lightbulb, ArrowRight } from "lucide-react";

const WhatYouGet = () => {
  const benefits = [
    {
      icon: Users,
      title: "Personalised Q&A session",
      description: "Every employee can raise doubts from their daily usage",
      color: "from-orange-500 to-amber-500"
    },
    {
      icon: Lightbulb,
      title: "Industry-specific use cases",
      description: "Tailored solutions mapped to your workflows",
      color: "from-amber-500 to-yellow-500"
    },
    {
      icon: ArrowRight,
      title: "Implementation support",
      description: "Clear methods, tool recommendations, and shortcuts",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: FileText,
      title: "Clarity notes PDF",
      description: "Simple documentation of key learnings & answers for team reference",
      color: "from-orange-600 to-amber-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What you get in the <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">session</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive support to transform confusion into confidence and clarity in action
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={benefit.title}
                className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center animate-fade-in bg-card border border-border rounded-xl p-8 shadow-card">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <ArrowRight className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
            Mindset shift: From "Can I?" → "I can."
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform uncertainty into actionable confidence with personalized guidance and clear implementation pathways.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;