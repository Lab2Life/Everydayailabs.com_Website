import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  Mail,
  Search,
  Users,
  GraduationCap,
  Shield,
} from "lucide-react";

const HomeNextStepSection = () => {
  const pathways = [
    {
      icon: Search,
      title: "Business Owner?",
      description: "Book an AI Audit",
      action: "Get clarity on your digital gaps",
      href: "/audit",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: Users,
      title: "Employee/Team?",
      description: "Join AI Awareness",
      action: "Upskill with hands-on sessions",
      href: "/awareness",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: GraduationCap,
      title: "Starting Career?",
      description: "Explore AI for Freshers",
      action: "Become job-ready with AI skills",
      href: "/career",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: Shield,
      title: "Want Visibility?",
      description: "Start with DS365",
      action: "Never go invisible online again",
      href: "/ds365",
      color: "from-primary to-secondary",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start your next chapter with Us
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              One choice today can shape a brighter tomorrow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {pathways.map((pathway, index) => {
              const Icon = pathway.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group h-full"
                >
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${pathway.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold mb-2 text-lg">{pathway.title}</h3>
                    <p className="font-semibold text-primary mb-2">
                      {pathway.description}
                    </p>
                    <p className="text-muted-foreground text-sm flex-grow mb-4">
                      {pathway.action}
                    </p>
                    {pathway.href !== "#" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-auto group"
                        asChild
                      >
                        <Link to={pathway.href}>
                          Get Started
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mb-12">
            <p className="text-xl font-medium text-primary mb-8">
              EverydayAiLabs is your partner for AI that works in real life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="tel:+917314851888">
                <Button
                  variant="gradient"
                  size="lg"
                  className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +91-7314851888
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="mailto:hello@everydayailabs.com">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Connect with us: hello@everydayailabs.com
                </Button>
              </a>
            </div>
          </div>

          <div className="bg-primary/10 rounded-2xl p-8 text-center">
            <p className="text-lg italic mb-2">
              "This is just one way AI can help."
            </p>
            <p className="text-xl font-bold text-primary">
              If you ever wonder, 'Can AI solve my problem?', think of
              EverydayAiLabs first.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeNextStepSection;
