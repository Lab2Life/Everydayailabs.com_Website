import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/ui/booking-modal";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Clock,
  Send,
  CheckCircle,
  Globe,
  Calendar,
  MessageCircle,
} from "lucide-react";

const ContactPage = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
  };
  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      href: "tel:+917314851888",
      description: "+91 73148 51888",
      isModal: false,
      color: "from-primary/10 to-primary/20",
      info: "Mon-Fri: 9:00 AM - 6:00 PM IST",
      action: "Call Now",
    },
    {
      icon: Mail,
      title: "Email Us",
      href: "mailto:hello@everydayailabs.com",
      description: "hello@everydayailabs.com",
      isModal: false,
      color: "from-blue-500/10 to-blue-500/20",
      info: "We respond within 24 hours",
      action: "Send Email",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Us",
      href: "https://wa.me/917314851888",
      description: "+91 73148 51888",
      isModal: false,
      color: "from-green-500/10 to-green-500/20",
      info: "Available 24/7",
      action: "Chat Now",
    },
    {
      icon: Calendar,
      title: "Book Consultation",
      href: "#",
      description: "Schedule a free consultation",
      isModal: true,
      color: "from-purple-500/10 to-purple-500/20",
      info: "30-minute strategy session",
      action: "Book Now",
    },
  ];

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We offer comprehensive AI solutions including business audits, training sessions, career readiness programs, and custom AI software development.",
    },
    {
      question: "How long does an AI audit take?",
      answer:
        "Our AI Digital Audit typically takes 2-3 business days to complete, with a detailed report and recommendations provided.",
    },
    {
      question: "Do you offer training for teams?",
      answer:
        "Yes, we provide AI awareness sessions and training programs for teams of all sizes, both online and offline.",
    },
    {
      question: "What is the cost of your services?",
      answer:
        "Pricing varies by service. We offer free consultations to understand your needs and provide accurate pricing.",
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
                Get In{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Ready to transform your business or career with AI? Let's start
                the conversation. Our experts are here to help you every step of
                the way.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  How Can We Help You?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Choose the best way to reach us
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center cursor-pointer"
                      onClick={() => {
                        if (method.isModal) {
                          handleBookingClick();
                        } else {
                          window.open(
                            method.href,
                            method.href.startsWith("tel:") ||
                              method.href.startsWith("mailto:")
                              ? "_self"
                              : "_blank"
                          );
                        }
                      }}
                    >
                      <CardContent className="p-6">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-primary">
                          {method.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3">
                          {method.description}
                        </p>
                        <p className="font-semibold mb-4">{method.info}</p>
                        <Button variant="outline" size="sm" className="w-full">
                          {method.action}
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Contact Form and Info */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6 text-primary">
                      Send Us a Message
                    </h3>
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Full Name
                          </label>
                          <Input placeholder="Your full name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Email
                          </label>
                          <Input type="email" placeholder="your@email.com" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Phone
                          </label>
                          <Input placeholder="+91-9876543210" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">
                            Service Interest
                          </label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="audit">
                                AI Digital Audit
                              </SelectItem>
                              <SelectItem value="training">
                                AI Training
                              </SelectItem>
                              <SelectItem value="career">
                                Career Readiness
                              </SelectItem>
                              <SelectItem value="custom">
                                Custom AI Software
                              </SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Message
                        </label>
                        <Textarea
                          placeholder="Tell us about your needs, questions, or how we can help you..."
                          rows={5}
                        />
                      </div>
                      <Button variant="gradient" size="lg" className="w-full">
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Contact Information */}
                <div className="space-y-8">
                  <Card>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-6 text-primary">
                        Contact Information
                      </h3>
                      <div className="space-y-4">
                        <a
                          href="tel:+917314851888"
                          className="flex items-center p-4 bg-card border rounded-lg hover:shadow-md transition-shadow"
                        >
                          <Phone className="w-5 h-5 text-primary" />
                          <span>+91 73148 51888</span>
                        </a>
                        <a
                          href="mailto:hello@everydayailabs.com"
                          className="flex items-center p-4 bg-card border rounded-lg hover:shadow-md transition-shadow"
                        >
                          <Mail className="w-5 h-5 text-primary" />
                          <span>hello@everydayailabs.com</span>
                        </a>
                        <a
                          href="https://maps.google.com/?q=39,+Chinnaiya+Pillai+St,+Maravaneri,+Salem,+Tamil+Nadu+636007"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center p-4 bg-card border rounded-lg hover:shadow-md transition-shadow"
                        >
                          <MapPin className="w-5 h-5 text-primary" />
                          <span>
                            39, Chinnaiya Pillai St, Maravaneri, Salem, Tamil
                            Nadu 636007
                          </span>
                        </a>
                        <div className="flex items-center p-4 bg-card border rounded-lg hover:shadow-md transition-shadow">
                          <Clock className="w-5 h-5 text-primary" />
                          <span>Mon-Fri: 9:00 AM - 6:00 PM IST</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold mb-6 text-primary">
                        Why Choose Us?
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                          <div>
                            <p className="font-semibold">Expert Guidance</p>
                            <p className="text-sm text-muted-foreground">
                              AI specialists with real-world experience
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                          <div>
                            <p className="font-semibold">Practical Solutions</p>
                            <p className="text-sm text-muted-foreground">
                              AI that works in real business scenarios
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                          <div>
                            <p className="font-semibold">Ongoing Support</p>
                            <p className="text-sm text-muted-foreground">
                              We're with you throughout your AI journey
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6">
                  Frequently Asked Questions
                </h2>
                <p className="text-xl text-muted-foreground">
                  Quick answers to common questions
                </p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-2 text-primary">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <p className="text-muted-foreground mb-4">
                  Didn't find what you're looking for?
                </p>
                <Button variant="outline" size="lg">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Ask Your Question
                </Button>
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

export default ContactPage;
