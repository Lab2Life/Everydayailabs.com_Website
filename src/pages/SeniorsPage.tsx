import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Heart,
  Smartphone,
  Shield,
  Users,
  Home,
  Mail,
  Phone,
} from "lucide-react";

const SeniorsPage = () => {
  const scrollToWhatYouGet = () => {
    const whatYouGetElement = document.querySelector("#what-you-get");
    if (whatYouGetElement) {
      whatYouGetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Heart className="w-4 h-4" />
                AI for Seniors (50+)
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                From Technology Confusion to Digital Confidence
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                <span className="font-semibold text-blue-600">
                  Make technology work for you, not against you. AI made simple,
                  safe, and useful.
                </span>
              </p>

              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg group"
                  onClick={scrollToWhatYouGet}
                >
                  Start Your Digital Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Current Struggles */}
        <section className="py-16 bg-gradient-to-b from-red-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-red-600">
                ❌ Daily Technology Struggles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Feeling lost by constantly changing technology",
                  "Worried about online safety and privacy",
                  "Struggling with smartphone features and apps",
                  "Missing out on digital conveniences",
                  "Feeling left behind by the digital world",
                  "Frustrated with customer service chatbots",
                ].map((struggle, index) => (
                  <Card
                    key={index}
                    className="bg-white border-red-200 hover:shadow-md transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <p className="text-red-700 font-medium">{struggle}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before/After */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <Badge
                      variant="destructive"
                      className="mb-3 text-lg px-4 py-2"
                    >
                      Before AI
                    </Badge>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Technology intimidation.</p>
                      <p>Digital isolation.</p>
                      <p>Safety concerns.</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="w-12 h-12 text-blue-500" />
                  </div>

                  <div className="text-center">
                    <Badge
                      variant="default"
                      className="mb-3 text-lg px-4 py-2 bg-green-600"
                    >
                      After AI
                    </Badge>
                    <div className="space-y-2 text-foreground font-semibold">
                      <p>Digital confidence.</p>
                      <p>Connected living.</p>
                      <p>Safe exploration.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section
          id="what-you-get"
          className="py-16 bg-gradient-to-b from-blue-50 to-indigo-50"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  What You Get
                </h2>
                <p className="text-xl text-muted-foreground">
                  "Simple → Safe → Useful"
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Smartphone,
                    title: "AI for Daily Tasks",
                    description:
                      "Voice assistants, photo organization, and simple automation.",
                  },
                  {
                    icon: Shield,
                    title: "AI for Safety",
                    description:
                      "Scam detection, secure browsing, and privacy protection.",
                  },
                  {
                    icon: Users,
                    title: "AI for Connection",
                    description:
                      "Video calls, messaging, and staying connected with family.",
                  },
                  {
                    icon: Heart,
                    title: "AI for Health",
                    description:
                      "Medication reminders, health tracking, and wellness support.",
                  },
                  {
                    icon: Home,
                    title: "AI for Home",
                    description:
                      "Smart home basics, entertainment, and convenience features.",
                  },
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-blue-600">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* How We Differ */}
        <section className="py-16 bg-gradient-to-b from-indigo-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-indigo-600">
                🔶 How We Differ
              </h2>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-indigo-200">
                <h4 className="text-xl font-bold text-indigo-600 mb-4">
                  The EverydayAiLabs Difference for Seniors
                </h4>
                <p className="text-lg text-gray-700 mb-4">
                  We understand that seniors need technology to be{" "}
                  <span className="font-semibold text-indigo-600">
                    gentle, patient, and practical
                  </span>
                  . No technical jargon, no pressure, just helpful guidance.
                </p>
                <p className="text-indigo-600 font-semibold">
                  Patience → Understanding → Confidence → Independence
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Next Step</h2>
              <p className="text-xl text-blue-100 mb-8">
                You deserve to feel confident with technology. Let us show you
                how AI can make your life easier, not harder.
              </p>

              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-6 text-lg group mb-12"
              >
                Begin Your Digital Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <a
                  href="mailto:hello@everydayailabs.com"
                  className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Mail className="w-6 h-6 text-blue-300" />
                  <div className="text-left">
                    <p className="font-semibold">Email Us</p>
                    <p className="text-sm">hello@everydayailabs.com</p>
                  </div>
                </a>
                <a
                  href="tel:+917314851888"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:from-primary/90 hover:to-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-6 h-6 text-indigo-300" />
                  <div className="text-left">
                    <p className="font-semibold">Call Us</p>
                    <p className="text-sm">+91-9159007007</p>
                  </div>
                </a>
              </div>

              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-blue-200 text-lg">
                  Technology should serve you, not stress you. Take the first
                  step towards digital confidence.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SeniorsPage;
