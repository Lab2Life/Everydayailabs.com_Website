import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState } from "react";
import BookingModal from "@/components/ui/booking-modal";
import {
  Shield,
  Search,
  Users,
  HelpCircle,
  GraduationCap,
  MessageSquare,
  Code,
  UserCheck,
  ArrowRight,
  Smartphone,
  Factory,
  Briefcase,
  Home,
  BookOpen,
  Heart,
  TrendingUp,
  Target,
  Trophy,
  Pen,
  Rocket,
} from "lucide-react";

const OurServicesSpectrum = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
  };
  const businessServices = [
    {
      icon: Shield,
      title: "DS365 – Digital Survival",
      description: "Stay visible online, every day.",
      href: "/ds365",
      color: "from-primary to-secondary",
    },
    {
      icon: Search,
      title: "AI Digital Audit",
      description: "Know your gaps, get a clear action plan.",
      href: "/audit",
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Automation (WA365)",
      description: "Save time, scale communication, cut costs.",
      href: "/wa365",
      color: "from-green-600 to-green-800",
    },
    {
      icon: Code,
      title: "Customised AI Software",
      description: "Tailor-made tools for your workflow.",
      href: "/custom-ai-software",
      color: "from-purple-500 to-indigo-600",
    },
  ];

  const employeeServices = [
    {
      icon: Users,
      title: "AI Awareness (Business)",
      description: "Upskill employees with hands-on AI training.",
      href: "/awareness",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: HelpCircle,
      title: "AI Doubt Clearance",
      description: "Safe space to ask, learn, and adapt.",
      href: "/doubt-clearance",
      color: "from-orange-500 to-red-600",
    },
  ];

  const fresherServices = [
    {
      icon: GraduationCap,
      title: "AI for Career Readiness",
      description: "Career-ready skills for the next generation.",
      href: "/career",
      color: "from-green-600 to-teal-600",
    },
    {
      icon: UserCheck,
      title: "Certified AI Officer (CAIO)",
      description: "Build in-house AI talent to drive growth.",
      href: "/caio",
      color: "from-indigo-500 to-purple-600",
    },
  ];

  const publicServices = [
    {
      icon: Heart,
      title: "AI Awareness (Public)",
      description: "Human-centered AI education for everyone.",
      href: "/public-awareness",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: UserCheck,
      title: "Certified AI Officer (CAIO)",
      description: "Build in-house AI talent to drive growth.",
      href: "/caio",
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: Home,
      title: "AI for Parents",
      description: "Support your child's learning journey.",
      href: "/parents",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Users,
      title: "AI for Seniors (50+)",
      description: "Technology made simple, safe, and useful.",
      href: "/seniors",
      color: "from-blue-400 to-indigo-500",
    },
  ];

  const professionalServices = [
    {
      icon: Briefcase,
      title: "AI for Business Owners",
      description: "Strategic growth over daily firefighting.",
      href: "/business-owners",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Users,
      title: "AI for Managers",
      description: "Lead teams, not just manage tasks.",
      href: "/managers",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Target,
      title: "AI for Marketing",
      description: "Automate campaigns, optimize performance.",
      href: "/marketing",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Trophy,
      title: "AI for Sales",
      description: "Smart lead scoring, automated follow-up.",
      href: "/sales",
      color: "from-violet-500 to-purple-600",
    },
    {
      icon: BookOpen,
      title: "AI for Teaching Professionals",
      description: "Automate lesson prep, enhance learning.",
      href: "/teaching",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Pen,
      title: "AI for Content Creation",
      description: "Unleash creativity, automate production.",
      href: "/content-creation",
      color: "from-rose-500 to-pink-600",
    },
    {
      icon: Rocket,
      title: "AI for Entrepreneurs",
      description: "Validate ideas, automate operations.",
      href: "/entrepreneurs",
      color: "from-orange-500 to-amber-600",
    },
  ];

  const ServiceGrid = ({
    services,
    title,
    description,
  }: {
    services: any[];
    title: string;
    description: string;
  }) => (
    <div className="mb-16">
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
          {title}
        </h3>
        <p className="text-muted-foreground text-lg">{description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 h-full group"
            >
              <CardContent className="p-6 text-center h-full flex flex-col">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold mb-3 text-lg text-primary">
                  {service.title}
                </h4>
                <p className="text-muted-foreground flex-grow mb-4">
                  {service.description}
                </p>
                {service.href !== "#" ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-auto hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
                    asChild
                  >
                    <Link to={service.href}>
                      Explore
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-auto"
                    disabled
                  >
                    Coming Soon
                  </Button>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-4">
              <Code className="w-10 h-10 text-primary" />
              Complete AI Solutions Spectrum
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              From startups to enterprises, from students to seniors - we have
              AI solutions for everyone.
            </p>
            <div className="bg-gradient-primary rounded-2xl p-6 text-white inline-block">
              <p className="text-lg font-semibold">
                25+ Specialized AI Services | All Audiences Covered | Real
                Results
              </p>
            </div>
          </div>

          <ServiceGrid
            services={businessServices}
            title="🏢 For Businesses"
            description="Digital transformation and AI automation for enterprises"
          />

          <ServiceGrid
            services={employeeServices}
            title="👥 For Employees"
            description="AI training and skill development for workforce"
          />

          <ServiceGrid
            services={fresherServices}
            title="🎓 For Freshers & Students"
            description="Career readiness and professional AI certification"
          />

          <ServiceGrid
            services={publicServices}
            title="👨‍👩‍👧‍👦 For General Public"
            description="AI education for families, educators, and seniors"
          />

          <ServiceGrid
            services={professionalServices}
            title="💼 For Professionals"
            description="Specialized AI solutions for different career paths"
          />

          <div className="bg-gradient-primary rounded-2xl p-8 text-white text-center mt-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Smartphone className="w-8 h-8" />
              <span className="text-2xl font-bold">Complete AI Ecosystem</span>
              <Factory className="w-8 h-8" />
            </div>
            <p className="text-xl mb-4">
              "From your phone to your factory, from your inbox to your
              industry, EverydayAiLabs has a solution."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/about">
                  Learn About Us
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300"
                onClick={handleBookingClick}
              >
                Book a Consultation
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

export default OurServicesSpectrum;
