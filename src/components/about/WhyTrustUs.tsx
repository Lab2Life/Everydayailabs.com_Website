import { Card, CardContent } from "@/components/ui/card";
import { Award, Users, Star, TrendingUp } from "lucide-react";

const WhyTrustUs = () => {
  const trustFactors = [
    {
      icon: Users,
      title: "Cross-Industry Experience",
      description: "We've delivered AI workshops across industries, from healthcare to manufacturing, finance to education."
    },
    {
      icon: TrendingUp,
      title: "Business Impact",
      description: "Supported businesses with practical audits that delivered measurable improvements in efficiency and productivity."
    },
    {
      icon: Star,
      title: "Professional Trust",
      description: "Earned the trust of professionals at every level - from fresh graduates to business owners."
    },
    {
      icon: Award,
      title: "Experience-Driven Content",
      description: "Our content, tools, and frameworks are built from real-world experience - not theory."
    }
  ];

  const stats = [
    { number: "1500+", label: "Professionals Trained", color: "text-blue-600" },
    { number: "50+", label: "Businesses Served", color: "text-green-600" },
    { number: "100%", label: "Practical Focus", color: "text-purple-600" },
    { number: "24/7", label: "Support Available", color: "text-orange-600" }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Why Trust Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just talking about AI - we're living it, teaching it, and proving its value 
              every single day across real businesses and real lives.
            </p>
          </div>

          {/* Trust Factors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {trustFactors.map((factor, index) => {
              const IconComponent = factor.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-gray-900">{factor.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{factor.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Trust Statement */}
          <div className="text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-blue-100">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Built on Results, Not Promises
              </h3>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
                Every workshop we deliver, every audit we conduct, and every pathway we design 
                is backed by proven methodologies and real-world success stories.
              </p>
              <p className="text-blue-600 font-semibold">
                We don't just teach AI - we live it and prove its value every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUs;