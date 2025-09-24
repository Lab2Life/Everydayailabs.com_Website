import { Clock, Users, MessageSquare, TrendingDown } from "lucide-react";

const Struggles = () => {
  const struggles = [
    {
      icon: Clock,
      title: "Missed follow-up opportunities",
      description: "I forget to follow up with customers on time",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Inconsistent team messaging",
      description: "My team starts strong but loses consistency in messaging",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: MessageSquare,
      title: "Time-consuming manual tasks",
      description: "Simple reminders like payments or attendance eat up my time",
      color: "from-yellow-500 to-red-500"
    },
    {
      icon: TrendingDown,
      title: "Looking unprofessional vs competitors",
      description: "Competitors look more professional and systemised, I look unorganised",
      color: "from-red-600 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Struggles{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Business Owners
            </span>{" "}
            Face
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Businesses are losing customers, trust, and countless hours every
            day because of WhatsApp communication gaps.
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
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${struggle.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">
                      {struggle.title}
                    </h3>
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
              The Cost of Manual WhatsApp Management
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every missed message, delayed follow-up, and inconsistent
              communication pushes your customers toward competitors who have
              automated, professional WhatsApp systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Struggles;