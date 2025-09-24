import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Search, Users, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const OurPath = () => {
  const pathways = [
    {
      icon: Shield,
      title: "Digital Survival 365",
      description: "Everyday AI skills for survival and growth.",
      details:
        "365-day system that keeps your business alive and visible, every single day.",
      color: "from-green-500 to-emerald-500",
      href: "/ds365",
    },
    {
      icon: Search,
      title: "AI Audits for Businesses",
      description: "Spot inefficiencies, unlock productivity.",
      details:
        "Comprehensive analysis of your current operations and AI implementation opportunities.",
      color: "from-blue-500 to-cyan-500",
      href: "/audit",
    },
    {
      icon: Users,
      title: "AI Officer Programs",
      description: "Train champions inside organizations.",
      details:
        "Certified AI Officer pathway to build strategic AI leadership within your company.",
      color: "from-purple-500 to-violet-500",
      href: "/caio",
    },
    {
      icon: Rocket,
      title: "AI for Freshers",
      description: "Turn young talent into AI evangelists.",
      details:
        "Career readiness programs that make graduates job-ready and future-proof.",
      color: "from-orange-500 to-red-500",
      href: "/career",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Path
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              From your phone to your factory, from your inbox to your industry
              -
              <span className="font-semibold text-purple-600">
                {" "}
                We have got an AI path for you
              </span>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pathways.map((pathway, index) => {
              const IconComponent = pathway.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg group"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${pathway.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                          {pathway.title}
                        </h3>
                        <p className="text-purple-600 font-medium mb-3">
                          {pathway.description}
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          {pathway.details}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-purple-50 group-hover:border-purple-200 hover:text-purple-600 transition-all"
                      onClick={() => (window.location.href = pathway.href)}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-4">
                Your Journey Starts Here
              </h3>
              <p className="text-lg text-purple-100 max-w-3xl mx-auto mb-6">
                No matter where you are in your AI journey - complete beginner
                or advanced user - we have a pathway that meets you exactly
                where you are and takes you where you want to go.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-purple-600 px-8 py-3"
                asChild
              >
                <Link to="/">Explore All Pathways</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPath;
