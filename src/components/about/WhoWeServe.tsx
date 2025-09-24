import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, GraduationCap, Briefcase, Heart } from "lucide-react";

const WhoWeServe = () => {
  const audiences = [
    {
      icon: Building2,
      title: "MSMEs",
      subtitle: "Small & Medium Enterprises",
      description: "Growth & efficiency through practical AI implementation.",
      color: "from-blue-500 to-blue-600",
      benefits: ["Streamlined operations", "Cost reduction", "Competitive advantage"]
    },
    {
      icon: Users,
      title: "Employees",
      subtitle: "Working Professionals",
      description: "Upskill to stay relevant in an AI-driven workplace.",
      color: "from-green-500 to-green-600",
      benefits: ["Future-proof skills", "Career growth", "Daily productivity"]
    },
    {
      icon: GraduationCap,
      title: "Freshers",
      subtitle: "New Graduates",
      description: "Launch AI-ready careers with confidence and competence.",
      color: "from-purple-500 to-purple-600",
      benefits: ["Job readiness", "Industry relevance", "Competitive edge"]
    },
    {
      icon: Briefcase,
      title: "Business Leaders",
      subtitle: "Decision Makers",
      description: "Build strategy and future-proof teams with AI insights.",
      color: "from-orange-500 to-orange-600",
      benefits: ["Strategic advantage", "Team transformation", "Innovation leadership"]
    },
    {
      icon: Heart,
      title: "General Public",
      subtitle: "Everyone of Us",
      description: "Make life easier, smarter, and stress-free with everyday AI.",
      color: "from-pink-500 to-pink-600",
      benefits: ["Time savings", "Life simplification", "Peace of mind"]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Who We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From Startups to Seniors, from Students to Business Owners - AI has something valuable for everyone. 
              We make sure it reaches you in the right way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {audiences.slice(0, 3).map((audience, index) => {
              const IconComponent = audience.icon;
              return (
                <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className={`w-12 h-12 bg-gradient-to-r ${audience.color} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{audience.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{audience.subtitle}</p>
                    <p className="text-gray-600 mb-4 flex-grow">{audience.description}</p>
                    <div className="space-y-2">
                      {audience.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            {audiences.slice(3).map((audience, index) => {
              const IconComponent = audience.icon;
              return (
                <Card key={index + 3} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className={`w-12 h-12 bg-gradient-to-r ${audience.color} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{audience.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{audience.subtitle}</p>
                    <p className="text-gray-600 mb-4 flex-grow">{audience.description}</p>
                    <div className="space-y-2">
                      {audience.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                One Mission, Many Paths
              </h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Whether you're running a business, climbing the career ladder, or just trying to make 
                daily life easier. we have an AI pathway designed specifically for your journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;