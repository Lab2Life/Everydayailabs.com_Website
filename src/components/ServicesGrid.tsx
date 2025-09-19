import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  Users,
  GraduationCap,
  Globe,
  Briefcase,
  UserCheck,
} from "lucide-react";

const ServicesGrid = () => {
  const serviceCategories = [
    {
      title: "Businesses",
      icon: Building2,
      description:
        "Transform your business with AI-powered solutions and digital survival strategies.",
      services: [
        "DS365 – Digital Survival",
        "AI Digital Audit",
        "WhatsApp Automation (WA365)",
        "Customised AI Software",
      ],
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "AI Officer",
      icon: UserCheck,
      description:
        "Specialized certification pathway for AI leadership and strategic implementation.",
      services: ["Certified AI Officer Pathway (CAIO)"],
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Employees",
      icon: Users,
      description:
        "Empower your workforce with essential AI knowledge and skills.",
      services: ["AI Awareness Sessions", "AI Doubt Clearance Clinics"],
      color: "from-green-500 to-teal-600",
    },
    {
      title: "Freshers",
      icon: GraduationCap,
      description: "Launch your career with AI readiness and practical skills.",
      services: ["AI for Career Readiness"],
      color: "from-orange-500 to-red-600",
    },
    {
      title: "General Public",
      icon: Globe,
      description: "AI education for everyone - parents and seniors.",
      services: [
        "AI Awareness Sessions",
        "Certified AI Officer Pathway (CAIO)",
        "AI for Parents with School Kids",
        "AI for Seniors (50+)",
      ],
      color: "from-cyan-500 to-blue-600",
    },
    {
      title: "Professionals",
      icon: Briefcase,
      description: "Specialized AI training for various professional domains.",
      services: [
        "AI for Business Owners",
        "AI for Managers",
        "AI for Teaching Professionals",
        "AI for Marketing",
        "AI for Sales",
        "AI for Content Creation",
        "AI for Aspiring Entrepreneurs",
      ],
      color: "from-indigo-500 to-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Training for{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Every Need
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of AI education programs designed
            for different audiences and skill levels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <p className="text-muted-foreground">
                    {category.description}
                  </p>

                  <div className="space-y-2">
                    {category.services.map((service) => (
                      <div
                        key={service}
                        className="flex items-center space-x-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{service}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group mt-6">
                    Explore Programs
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
