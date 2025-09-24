import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Target,
  TrendingUp,
  Zap,
  BarChart,
  Users,
  Mail,
  Phone,
} from "lucide-react";

const MarketingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Target className="w-4 h-4" />
                AI for Marketing Professionals
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
                From Campaign Chaos to Marketing Mastery
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                <span className="font-semibold text-emerald-600">
                  Let AI handle the repetitive tasks while you focus on strategy
                  and creativity.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 text-lg group"
                >
                  Supercharge Your Marketing
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
                ❌ Daily Marketing Struggles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Spending hours on content creation and copywriting",
                  "Struggling to maintain consistent social media presence",
                  "Drowning in campaign data without clear insights",
                  "Manually segmenting audiences and personalizing messages",
                  "Constantly chasing marketing trends and best practices",
                  "Balancing creativity with performance metrics",
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
                      <p>Campaign overload.</p>
                      <p>Manual processes.</p>
                      <p>Reactive marketing.</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="w-12 h-12 text-emerald-500" />
                  </div>

                  <div className="text-center">
                    <Badge
                      variant="default"
                      className="mb-3 text-lg px-4 py-2 bg-green-600"
                    >
                      After AI
                    </Badge>
                    <div className="space-y-2 text-foreground font-semibold">
                      <p>Strategic focus.</p>
                      <p>Automated efficiency.</p>
                      <p>Predictive insights.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 bg-gradient-to-b from-emerald-50 to-teal-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  What You Get
                </h2>
                <p className="text-xl text-muted-foreground">
                  "Automate → Analyze → Optimize"
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Zap,
                    title: "AI for Content Creation",
                    description:
                      "Generate copy, visuals, and campaign ideas in minutes.",
                  },
                  {
                    icon: Target,
                    title: "AI for Audience Targeting",
                    description:
                      "Smart segmentation and personalized messaging.",
                  },
                  {
                    icon: BarChart,
                    title: "AI for Analytics",
                    description:
                      "Real-time insights and performance optimization.",
                  },
                  {
                    icon: TrendingUp,
                    title: "AI for Trend Analysis",
                    description:
                      "Stay ahead with predictive marketing intelligence.",
                  },
                  {
                    icon: Users,
                    title: "AI for Customer Journey",
                    description:
                      "Map and optimize every touchpoint automatically.",
                  },
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-emerald-600">
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
        <section className="py-16 bg-gradient-to-b from-teal-50 to-cyan-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-teal-600">
                🔶 How We Differ
              </h2>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-teal-200">
                <h4 className="text-xl font-bold text-teal-600 mb-4">
                  Marketing-Focused AI Implementation
                </h4>
                <p className="text-lg text-gray-700 mb-4">
                  We don't just teach AI tools - we show you how to{" "}
                  <span className="font-semibold text-teal-600">
                    integrate AI into your entire marketing workflow
                  </span>
                  for maximum impact and ROI.
                </p>
                <p className="text-teal-600 font-semibold">
                  Strategy → Automation → Optimization → Growth
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 bg-gradient-to-b from-emerald-900 to-teal-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Next Step</h2>
              <p className="text-xl text-emerald-100 mb-8">
                Stop drowning in campaign tasks. Start leading with AI-powered
                marketing strategies.
              </p>

              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-6 text-lg group mb-12"
              >
                Transform Your Marketing
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <a
                  href="mailto:hello@everydayailabs.com"
                  className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Mail className="w-6 h-6 text-emerald-300" />
                  <div className="text-left">
                    <p className="font-semibold">Email Us</p>
                    <p className="text-sm">hello@everydayailabs.com</p>
                  </div>
                </a>
                <a
                  href="tel:+919159007007"
                  className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-6 h-6 text-teal-300" />
                  <div className="text-left">
                    <p className="font-semibold">Call Us</p>
                    <p className="text-sm">+91-9159007007</p>
                  </div>
                </a>
              </div>

              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-emerald-200 text-lg">
                  The future of marketing is AI-powered. Don't get left behind.
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

export default MarketingPage;
