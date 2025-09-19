import { CheckCircle, Zap, Clock, TrendingUp } from "lucide-react";

const WhyNonNegotiable = () => {
  const reasons = [
    {
      icon: CheckCircle,
      title: "Always Consistent",
      description: "Messages go out without fail, even if your team forgets",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Instant Trust",
      description: "Professional, structured communication builds credibility",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Clock,
      title: "Save Hours Daily",
      description: "Automations replace repetitive manual reminders",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: Zap,
      title: "Seamless Growth",
      description: "More customers handled without hiring more staff",
      color: "from-green-600 to-emerald-600"
    }
  ];

  const expectations = [
    "Customers expect instant replies, reminders, and clear communication",
    "Staff need simple, structured updates without confusion",
    "Payments, follow-ups, and tasks should never rely on memory",
    "Business owners want peace of mind, knowing WhatsApp runs on autopilot"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why WhatsApp Automation is <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Non-Negotiable Today</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            "Your customers live on WhatsApp. If your business isn't systematic there, you risk being forgotten. Automation today ensures every message strengthens your brand tomorrow."
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
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 shadow-elegant max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              What Today's Customers & Teams Expect:
            </h3>
            
            <div className="space-y-4">
              {expectations.map((expectation, index) => (
                <div key={expectation} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">{expectation}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-white/50 rounded-lg border border-green-200">
              <p className="text-center text-lg font-medium text-green-700">
                WA365 automation meets all these expectations automatically, 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNonNegotiable;