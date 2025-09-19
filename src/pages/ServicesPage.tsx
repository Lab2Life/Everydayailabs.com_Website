import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import BookingModal from "@/components/ui/booking-modal";
import {
  Building2,
  Users,
  GraduationCap,
  Heart,
  Briefcase,
  ArrowRight,
  Search,
  Shield,
  Zap,
  MessageSquare,
} from "lucide-react";

const ServicesPage = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
  };
  const serviceCategories = [
    {
      icon: Building2,
      title: "For Businesses",
      description: "Digital transformation and AI automation solutions",
      color: "from-blue-500 to-indigo-600",
      services: [
        {
          name: "DS365 - Digital Survival",
          href: "/ds365",
          description: "Never go invisible online again",
        },
        {
          name: "AI Digital Audit",
          href: "/audit",
          description: "Get clarity on your digital gaps",
        },
        {
          name: "WhatsApp Automation (WA365)",
          href: "/wa365",
          description: "Automate customer communication",
        },
        {
          name: "Customised AI Software",
          href: "/custom-ai-software",
          description: "Tailored AI solutions for your business",
        },
      ],
    },
    {
      icon: Shield,
      title: "AI Officer Certification",
      description: "Become a certified AI professional",
      color: "from-purple-500 to-violet-600",
      services: [
        {
          name: "Certified AI Officer Pathway (CAIO)",
          href: "/caio",
          description: "Complete AI leadership certification",
        },
      ],
    },
    {
      icon: Users,
      title: "For Employees & Teams",
      description: "AI skills and productivity enhancement",
      color: "from-green-500 to-emerald-600",
      services: [
        {
          name: "AI Awareness Sessions (Business)",
          href: "/awareness",
          description: "Upskill with hands-on sessions",
        },
        {
          name: "AI Doubt Clearance",
          href: "/doubt-clearance",
          description: "Get your AI questions answered",
        },
      ],
    },
    {
      icon: GraduationCap,
      title: "For Students & Freshers",
      description: "Career readiness and skill building",
      color: "from-orange-500 to-red-600",
      services: [
        {
          name: "AI for Career Readiness",
          href: "/career",
          description: "Become job-ready with AI skills",
        },
      ],
    },
    {
      icon: Heart,
      title: "For General Public",
      description: "AI education for everyday life",
      color: "from-rose-500 to-pink-600",
      services: [
        {
          name: "AI Awareness Sessions (Public)",
          href: "/public-awareness",
          description: "AI for everyone",
        },
        {
          name: "Certified AI Officer (CAIO)",
          href: "/caio",
          description: "Build in-house AI talent to drive growth",
        },
        {
          name: "AI for Parents with School Kids",
          href: "/parents",
          description: "Guide your children in AI age",
        },
        {
          name: "AI for Seniors (50+)",
          href: "/seniors",
          description: "AI made simple for seniors",
        },
      ],
    },
    {
      icon: Briefcase,
      title: "For Professionals",
      description: "Specialized AI for your field",
      color: "from-amber-500 to-orange-600",
      services: [
        {
          name: "AI for Business Owners",
          href: "/business-owners",
          description: "Strategic AI implementation",
        },
        {
          name: "AI for Managers",
          href: "/managers",
          description: "Lead teams in the AI era",
        },
        {
          name: "AI for Teaching Professionals",
          href: "/teaching",
          description: "Transform education with AI",
        },
        {
          name: "AI for Marketing",
          href: "/marketing",
          description: "AI-powered marketing strategies",
        },
        {
          name: "AI for Sales",
          href: "/sales",
          description: "Boost sales with AI tools",
        },
        {
          name: "AI for Content Creation",
          href: "/content-creation",
          description: "Create amazing content with AI",
        },
        {
          name: "AI for Aspiring Entrepreneurs",
          href: "/entrepreneurs",
          description: "Start your business with AI",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                All Our{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  AI Services
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive AI solutions for individuals, teams, and
                businesses. Find the perfect service that matches your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="gradient"
                  size="lg"
                  onClick={handleBookingClick}
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Button>
                <Button variant="outline" size="lg">
                  <Search className="w-5 h-5 mr-2" />
                  Find My Service
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">Browse by Category</h2>
                <p className="text-xl text-muted-foreground">
                  Select your category to explore relevant AI services
                </p>
              </div>

              <div className="space-y-16">
                {serviceCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <div key={index} className="space-y-8">
                      {/* Category Header */}
                      <div className="text-center">
                        <div
                          className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                        >
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold mb-2 text-primary">
                          {category.title}
                        </h3>
                        <p className="text-lg text-muted-foreground">
                          {category.description}
                        </p>
                      </div>

                      {/* Services Cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {category.services.map((service, serviceIndex) => (
                          <Card
                            key={serviceIndex}
                            className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                          >
                            <CardContent className="p-6">
                              <h4 className="text-lg font-bold mb-2 text-primary">
                                {service.name}
                              </h4>
                              <p className="text-muted-foreground mb-4">
                                {service.description}
                              </p>
                              <Button
                                variant="outline"
                                size="sm"
                                className="w-full group"
                                asChild
                              >
                                <Link to={service.href}>
                                  Learn More
                                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Call to Action */}
              <div className="text-center mt-20">
                <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                  <h3 className="text-3xl font-bold mb-4">
                    Still Have Questions?
                  </h3>
                  <p className="text-lg mb-6">
                    Not sure which service is right for you? Let's talk and find
                    the perfect AI solution.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                      onClick={handleBookingClick}
                    >
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Book Free Consultation
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                    >
                      Call +91-9159007007
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
};

export default ServicesPage;
