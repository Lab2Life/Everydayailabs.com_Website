import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import BookingModal from "@/components/ui/booking-modal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menuTitle: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenDropdown(menuTitle);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150); // 150ms delay before hiding
  };

  const menuItems = [
    {
      title: "Business",
      items: [
        "DS365 – Digital Survival",
        "AI Digital Audit",
        "WhatsApp Automation (WA365)",
        "Customised AI Software",
      ],
    },
    {
      title: "AI Officer",
      items: ["Certified AI Officer Pathway (CAIO)"],
    },
    {
      title: "Employees",
      items: ["AI Awareness Sessions (Business)", "AI Doubt Clearance"],
    },
    {
      title: "Freshers",
      items: ["AI for Career Readiness"],
    },
    {
      title: "General Public",
      items: [
        "AI Awareness Sessions (Public)",
        "Certified AI Officer Pathway (CAIO)",
        "AI for Parents with School Kids",
        "AI for Seniors (50+)",
      ],
    },
    {
      title: "Professionals",
      items: [
        "AI for Business Owners",
        "AI for Managers",
        "AI for Teaching Professionals",
        "AI for Marketing",
        "AI for Sales",
        "AI for Content Creation",
        "AI for Aspiring Entrepreneurs",
      ],
    },
  ];

  return (
    <header className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-smooth">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              EverydayAiLabs
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-smooth"
            >
              Home
            </Link>

            {menuItems.map((menu) => (
              <div
                key={menu.title}
                className="relative"
                onMouseEnter={() => handleMouseEnter(menu.title)}
                onMouseLeave={handleMouseLeave}
              >
                <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-smooth">
                  <span>{menu.title}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {openDropdown === menu.title && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-card p-2 animate-fade-in"
                    onMouseEnter={() => handleMouseEnter(menu.title)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {menu.items.map((item) => {
                      let href = "#";
                      if (item === "DS365 – Digital Survival") href = "/ds365";
                      if (item === "AI Digital Audit") href = "/audit";
                      if (item === "AI for Career Readiness") href = "/career";
                      if (item === "AI Awareness Sessions (Business)")
                        href = "/awareness";
                      if (item === "AI Awareness Sessions (Public)")
                        href = "/public-awareness";
                      if (item === "Certified AI Officer Pathway (CAIO)")
                        href = "/caio";
                      if (item === "AI Doubt Clearance Clinics")
                        href = "/doubt-clearance";
                      if (item === "AI for Managers") href = "/managers";
                      if (item === "AI for Business Owners")
                        href = "/business-owners";
                      if (item === "AI for Teaching Professionals")
                        href = "/teaching";
                      if (item === "AI for Parents with School Kids")
                        href = "/parents";
                      if (item === "AI for Seniors (50+)") href = "/seniors";
                      if (item === "AI for Marketing") href = "/marketing";
                      if (item === "AI for Sales") href = "/sales";
                      if (item === "AI for Content Creation")
                        href = "/content-creation";
                      if (item === "AI for Aspiring Entrepreneurs")
                        href = "/entrepreneurs";
                      if (item === "WhatsApp Automation (WA365)")
                        href = "/wa365";
                      if (item === "Customised AI Software")
                        href = "/custom-ai-software";

                      return (
                        <Link
                          key={item}
                          to={href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-smooth"
                        >
                          {item}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-smooth"
            >
              About Us
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="gradient"
              size="default"
              onClick={() => setIsBookingModalOpen(true)}
            >
              Book a Session
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="space-y-2">
              <Link
                to="/"
                className="block py-2 text-foreground hover:text-primary transition-smooth"
              >
                Home
              </Link>

              {menuItems.map((menu) => (
                <div key={menu.title} className="space-y-1">
                  <div className="font-semibold text-primary py-2">
                    {menu.title}
                  </div>
                  {menu.items.map((item) => {
                    let href = "#";
                    if (item === "DS365 – Digital Survival") href = "/ds365";
                    if (item === "AI Digital Audit") href = "/audit";
                    if (item === "AI for Career Readiness") href = "/career";
                    if (item === "AI Awareness Sessions (Business)")
                      href = "/awareness";
                    if (item === "AI Awareness Sessions (Public)")
                      href = "/public-awareness";
                    if (item === "Certified AI Officer Pathway (CAIO)")
                      href = "/caio";
                    if (item === "AI Doubt Clearance Clinics")
                      href = "/doubt-clearance";
                    if (item === "AI for Managers") href = "/managers";
                    if (item === "AI for Business Owners")
                      href = "/business-owners";
                    if (item === "AI for Teaching Professionals")
                      href = "/teaching";
                    if (item === "AI for Parents with School Kids")
                      href = "/parents";
                    if (item === "AI for Seniors (50+)") href = "/seniors";
                    if (item === "AI for Marketing") href = "/marketing";
                    if (item === "AI for Sales") href = "/sales";
                    if (item === "AI for Content Creation")
                      href = "/content-creation";
                    if (item === "AI for Aspiring Entrepreneurs")
                      href = "/entrepreneurs";
                    if (item === "WhatsApp Automation (WA365)") href = "/wa365";
                    if (item === "Customised AI Software")
                      href = "/custom-ai-software";

                    return (
                      <Link
                        key={item}
                        to={href}
                        className="block py-1 pl-4 text-sm text-muted-foreground hover:text-primary transition-smooth"
                      >
                        {item}
                      </Link>
                    );
                  })}
                </div>
              ))}

              <Link
                to="/about"
                className="block py-2 text-foreground hover:text-primary transition-smooth"
              >
                About Us
              </Link>

              <div className="pt-4">
                <Button
                  variant="gradient"
                  size="default"
                  className="w-full"
                  onClick={() => setIsBookingModalOpen(true)}
                >
                  Book a Session
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </header>
  );
};

export default Header;
