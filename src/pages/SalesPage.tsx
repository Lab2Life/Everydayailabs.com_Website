import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Trophy, TrendingUp, Users, MessageSquare, BarChart, Globe, Phone } from "lucide-react";

const SalesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Trophy className="w-4 h-4" />
                AI for Sales Professionals
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent leading-tight">
                From Pipeline Pressure to Sales Mastery
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                <span className="font-semibold text-violet-600">Let AI qualify leads, craft proposals, and track opportunities while you close deals.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-6 text-lg group">
                  Accelerate Your Sales
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
                ❌ Daily Sales Struggles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Spending hours on unqualified leads and cold outreach",
                  "Manual CRM updates and pipeline management",
                  "Crafting personalized proposals and follow-up emails",
                  "Tracking customer interactions across multiple channels",
                  "Missing follow-up opportunities and losing warm leads",
                  "Analyzing sales performance and forecasting manually"
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
                      <p>Manual prospecting.</p>
                      <p>Administrative burden.</p>
                      <p>Missed opportunities.</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <ArrowRight className="w-12 h-12 text-violet-500" />
                  </div>
                  
                  <div className="text-center">
                    <Badge variant="default" className="mb-3 text-lg px-4 py-2 bg-green-600">
                      After AI
                    </Badge>
                    <div className="space-y-2 text-foreground font-semibold">
                      <p>Smart lead scoring.</p>
                      <p>Automated workflows.</p>
                      <p>Consistent follow-up.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 bg-gradient-to-b from-violet-50 to-purple-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What You Get</h2>
                <p className="text-xl text-muted-foreground">"Qualify → Engage → Close"</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: Users, title: "AI for Lead Qualification", description: "Automatically score and prioritize prospects." },
                  { icon: MessageSquare, title: "AI for Outreach", description: "Personalized emails and proposals at scale." },
                  { icon: BarChart, title: "AI for Pipeline Management", description: "Smart forecasting and opportunity tracking." },
                  { icon: TrendingUp, title: "AI for Performance Analysis", description: "Identify winning patterns and optimize strategies." },
                  { icon: Trophy, title: "AI for Deal Intelligence", description: "Real-time insights for closing bigger deals." }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-violet-600">{item.title}</h3>
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
        <section className="py-16 bg-gradient-to-b from-purple-50 to-fuchsia-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-purple-600">
                🔶 How We Differ
              </h2>
              
              <div className="bg-white rounded-xl p-8 shadow-lg border border-purple-200">
                <h4 className="text-xl font-bold text-purple-600 mb-4">
                  Sales-Specific AI Mastery
                </h4>
                <p className="text-lg text-gray-700 mb-4">
                  We focus on <span className="font-semibold text-purple-600">sales-specific AI applications</span> that directly impact your 
                  numbers - from lead generation to deal closure.
                </p>
                <p className="text-purple-600 font-semibold">
                  Prospect → Qualify → Engage → Close → Optimize
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 bg-gradient-to-b from-violet-900 to-purple-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Next Step</h2>
              <p className="text-xl text-violet-100 mb-8">
                Stop chasing leads manually. Start closing deals with AI-powered sales intelligence.
              </p>
              
              <Button size="lg" className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white px-8 py-6 text-lg group mb-12">
                Boost Your Sales Performance
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg">
                  <Globe className="w-6 h-6 text-violet-300" />
                  <div className="text-left">
                    <p className="font-semibold">Visit</p>
                    <p className="text-sm">EverydayAiLabs.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg">
                  <Phone className="w-6 h-6 text-purple-300" />
                  <div className="text-left">
                    <p className="font-semibold">Call</p>
                    <p className="text-sm">+91-9159007007</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-violet-200 text-lg">
                  Every deal you miss is revenue lost. Make AI your competitive advantage.
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

export default SalesPage;