import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";
import { useState } from "react";
import BookingModal from "@/components/ui/booking-modal";

const Footer = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleBookingClick = () => {
    setIsBookingModalOpen(true);
  };
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                EverydayAiLabs
              </span>
            </div>
            <p className="text-muted-foreground">
              Building a thriving AI ecosystem where individuals, businesses,
              and communities collaborate to harness artificial intelligence for
              collective growth and innovation.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="/"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Home
              </a>
              <a
                href="/about"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                About Us
              </a>
              <a
                href="/services"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                All Services
              </a>
              <a
                href="/contact"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Contact
              </a>
              <a
                href="/custom-ai-software"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Custom AI Software
              </a>
            </div>
          </div>

          {/* Popular Programs */}
          <div className="space-y-4">
            <h3 className="font-semibold">Popular Programs</h3>
            <div className="space-y-2">
              <a
                href="/caio"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                CAIO Certification
              </a>
              <a
                href="/marketing"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                AI for Marketing
              </a>
              <a
                href="/ds365"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Digital Survival
              </a>
              <a
                href="/awareness"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                AI Awareness Sessions
              </a>
              <a
                href="/career"
                className="block text-muted-foreground hover:text-primary transition-smooth"
              >
                Career Readiness
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              <a
                href="mailto:hello@everydayailabs.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@everydayailabs.com</span>
              </a>
              <a
                href="tel:+919159007007"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 9159007007</span>
              </a>
              <a
                href="https://maps.google.com/?q=39,+Chinnaiya+Pillai+St,+Maravaneri,+Salem,+Tamil+Nadu+636007"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-smooth cursor-pointer"
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm">
                  39, Chinnaiya Pillai St, Maravaneri, Salem, Tamil Nadu 636007
                </span>
              </a>
            </div>
            <Button
              variant="gradient"
              className="w-full"
              onClick={handleBookingClick}
            >
              Book a Session
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>
            &copy; 2025 EverydayAiLabs. All rights reserved. Everyday AI, for
            everyone, everywhere.
          </p>
        </div>
      </div>
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </footer>
  );
};

export default Footer;
