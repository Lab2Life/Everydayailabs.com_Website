import { Users, Bell, Zap, ArrowRight, UserCheck, Settings } from "lucide-react";

const WhatYouGet = () => {
  const features = [
    {
      icon: Users,
      title: "Onboarding Journeys",
      description: "Step-by-step customer or employee guidance",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Bell,
      title: "Daily Updates & Reminders",
      description: "For staff, clients, or events",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Zap,
      title: "Event-Based Messaging",
      description: "Auto triggers based on customer actions",
      color: "from-teal-500 to-green-500"
    },
    {
      icon: ArrowRight,
      title: "Follow-ups Made Easy",
      description: "Payments, renewals, or inquiries all handled",
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: UserCheck,
      title: "Attendance Solutions",
      description: "Staff can mark presence with one WhatsApp message",
      color: "from-emerald-600 to-teal-600"
    },
    {
      icon: Settings,
      title: "Tool Integrations",
      description: "Connect WhatsApp with CRMs, billing, HR, or support",
      color: "from-teal-600 to-green-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What you <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">get?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-2">
            "Simple Setup + Smart Automations → ∞Infinite Consistency∞"
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete WhatsApp automation suite tailored for your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={feature.title}
                className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 shadow-elegant max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Complete Business Communication Ecosystem
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              WA365 transforms your WhatsApp into a powerful business automation hub that works around the clock, 
              ensuring every customer interaction is timely, professional, and conversion-focused.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/50 rounded-lg p-4 border border-green-200">
                <div className="text-2xl font-bold text-green-600 mb-2">Setup</div>
                <div className="text-sm text-muted-foreground">Quick 20-minute mapping</div>
              </div>
              <div className="bg-white/50 rounded-lg p-4 border border-emerald-200">
                <div className="text-2xl font-bold text-emerald-600 mb-2">Automate</div>
                <div className="text-sm text-muted-foreground">Smart workflows activated</div>
              </div>
              <div className="bg-white/50 rounded-lg p-4 border border-teal-200">
                <div className="text-2xl font-bold text-teal-600 mb-2">Scale</div>
                <div className="text-sm text-muted-foreground">Infinite consistency achieved</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;