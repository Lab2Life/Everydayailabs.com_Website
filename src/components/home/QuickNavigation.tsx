import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import BookingModal from "@/components/ui/booking-modal";
import {
  Building2,
  Users,
  GraduationCap,
  Heart,
  Briefcase,
  ArrowRight,
  Info,
} from "lucide-react";

const QuickNavigation = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Handle booking modal for "Book Consultation" link
  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
  };
  const quickLinks = [
    {
      icon: Building2,
      title: "I'm a Business Owner",
      subtitle: "Digital transformation & AI automation",
      links: [
        { name: "DS365 - Digital Survival", href: "/ds365" },
        { name: "AI Digital Audit", href: "/audit" },
        { name: "WhatsApp Automation", href: "/wa365" },
        { name: "AI for Business Owners", href: "/business-owners" },
      ],
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Users,
      title: "I'm an Employee/Manager",
      subtitle: "AI skills & productivity tools",
      links: [
        { name: "AI Awareness Training", href: "/awareness" },
        { name: "AI for Managers", href: "/managers" },
        { name: "AI Doubt Clearance", href: "/doubt-clearance" },
        { name: "Certified AI Officer", href: "/caio" },
      ],
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: GraduationCap,
      title: "I'm a Student/Fresher",
      subtitle: "Career readiness & skill building",
      links: [
        { name: "AI Career Readiness", href: "/career" },
        { name: "Certified AI Officer", href: "/caio" },
        { name: "AI for Content Creation", href: "/content-creation" },
        { name: "AI for Entrepreneurs", href: "/entrepreneurs" },
      ],
      color: "from-purple-500 to-violet-600",
    },
    {
      icon: Heart,
      title: "I'm from General Public",
      subtitle: "AI education for everyday life",
      links: [
        { name: "AI Awareness (Public)", href: "/public-awareness" },
        { name: "AI for Parents", href: "/parents" },
        { name: "AI for Seniors (50+)", href: "/seniors" },
        { name: "Certified AI Officer", href: "/caio" },
      ],
      color: "from-rose-500 to-pink-600",
    },
    {
      icon: Briefcase,
      title: "I'm a Professional",
      subtitle: "Specialized AI for your field",
      links: [
        { name: "AI for Marketing", href: "/marketing" },
        { name: "AI for Sales", href: "/sales" },
        { name: "AI for Content Creation", href: "/content-creation" },
        { name: "AI for Managers", href: "/managers" },
        { name: "AI for Teaching", href: "/teaching" },
      ],
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Info,
      title: "I Want to Learn More",
      subtitle: "About EverydayAiLabs",
      links: [
        { name: "About Us", href: "/about" },
        { name: "All Services", href: "/services" },
        { name: "Book Consultation", href: "#booking", isModal: true },
        { name: "Contact Us", href: "/contact" },
      ],
      color: "from-teal-500 to-cyan-600",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              🎯 Find Your Perfect AI Solution
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Tell us who you are, and we'll show you exactly what you need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quickLinks.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full"
                >
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="text-center mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-primary">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {category.subtitle}
                      </p>
                    </div>

                    <div className="flex-grow space-y-2">
                      {category.links.map((link, linkIndex) => (
                        <Button
                          key={linkIndex}
                          variant="ghost"
                          size="sm"
                          className="w-full justify-start text-left hover:bg-accent/50"
                          asChild={!link.isModal}
                          onClick={
                            link.isModal ? handleBookingClick : undefined
                          }
                        >
                          {link.isModal ? (
                            <div className="flex items-center w-full">
                              <ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" />
                              <span className="truncate">{link.name}</span>
                            </div>
                          ) : (
                            <Link to={link.href}>
                              <ArrowRight className="w-4 h-4 mr-2 flex-shrink-0" />
                              <span className="truncate">{link.name}</span>
                            </Link>
                          )}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Still Not Sure?</h3>
              <p className="text-lg mb-6">
                Book a free consultation and we'll help you find the perfect AI
                solution for your needs.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                onClick={handleBookingClick}
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </section>
  );
};

export default QuickNavigation;
