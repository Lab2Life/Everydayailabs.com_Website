import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Rocket, Lightbulb, TrendingUp, DollarSign, Users, Globe, Phone } from "lucide-react";

const EntrepreneursPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Rocket className="w-4 h-4" />
                AI for Aspiring Entrepreneurs
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent leading-tight">
                From Business Idea to Market Leader
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                <span className="font-semibold text-orange-600">Let AI validate ideas, automate operations, and scale your startup faster than ever.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-8 py-6 text-lg group">
                  Launch Your AI-Powered Business
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
                ❌ Daily Entrepreneurial Struggles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Uncertain about business idea validation and market demand",
                  "Overwhelmed by the complexity of starting a business",
                  "Limited resources for market research and analysis",
                  "Struggling to create professional business plans and presentations",
                  "Manual processes eating up time for strategic thinking",
                  "Difficulty scaling operations without massive investment"
                ].map((struggle, index) => (
                  <Card key={index} className="bg-white border-red-200 hover:shadow-md transition-all duration-300">
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
                    <Badge variant="destructive" className="mb-3 text-lg px-4 py-2">
                      Before AI
                    </Badge>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Guesswork decisions.</p>
                      <p>Resource constraints.</p>
                      <p>Slow scaling.</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <ArrowRight className="w-12 h-12 text-orange-500" />
                  </div>
                  
                  <div className="text-center">
                    <Badge variant="default" className="mb-3 text-lg px-4 py-2 bg-green-600">
                      After AI
                    </Badge>
                    <div className="space-y-2 text-foreground font-semibold">
                      <p>Data-driven strategy.</p>
                      <p>Automated efficiency.</p>
                      <p>Rapid growth.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 bg-gradient-to-b from-orange-50 to-amber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What You Get</h2>
                <p className="text-xl text-muted-foreground">"Validate → Launch → Scale"</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Lightbulb, title: "AI for Idea Validation", description: "Market research, competitor analysis, and demand forecasting." },
                  { icon: DollarSign, title: "AI for Business Planning", description: "Financial models, business plans, and investor presentations." },
                  { icon: Users, title: "AI for Customer Research", description: "Target audience insights and persona development." },
                  { icon: TrendingUp, title: "AI for Marketing & Sales", description: "Automated lead generation and conversion optimization." },
                  { icon: Rocket, title: "AI for Operations", description: "Process automation and scalable business systems." }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg flex items-center justify-center mb-4">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-orange-600">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* How We Differ */}
        <section className="py-16 bg-gradient-to-b from-amber-50 to-yellow-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-amber-600">
                🔶 How We Differ
              </h2>
              
              <div className="bg-white rounded-xl p-8 shadow-lg border border-amber-200">
                <h4 className="text-xl font-bold text-amber-600 mb-4">
                  Startup-Focused AI Strategy
                </h4>
                <p className="text-lg text-gray-700 mb-4">
                  We understand the entrepreneurial journey. Our AI training is designed specifically for 
                  <span className="font-semibold text-amber-600"> lean startups and resource-constrained entrepreneurs</span>, 
                  giving you enterprise-level capabilities on a startup budget.
                </p>
                <p className="text-amber-600 font-semibold">
                  Idea → Validation → MVP → Growth → Scale
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 bg-gradient-to-b from-orange-900 to-amber-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Next Step</h2>
              <p className="text-xl text-orange-100 mb-8">
                Stop waiting for the "perfect moment." Start building your AI-powered business today.
              </p>
              
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-6 text-lg group mb-12">
                Start Your Entrepreneurial Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg">
                  <Globe className="w-6 h-6 text-orange-300" />
                  <div className="text-left">
                    <p className="font-semibold">Visit</p>
                    <p className="text-sm">EverydayAiLabs.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg">
                  <Phone className="w-6 h-6 text-amber-300" />
                  <div className="text-left">
                    <p className="font-semibold">Call</p>
                    <p className="text-sm">+91-9159007007</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-orange-200 text-lg">
                  The future belongs to AI-powered entrepreneurs. Join the revolution.
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

export default EntrepreneursPage;