import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart, Users, BookOpen, BarChart, Home, Phone, Globe } from "lucide-react";

const ParentsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Heart className="w-4 h-4" />
                AI for Parents with School Kids
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent leading-tight">
                From Stressed Parent to Empowered Guide
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                <span className="font-semibold text-purple-600">Let AI assist your kids' learning, while you focus on nurturing curiosity.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg group">
                  Support Your Child's Learning
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
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
                      <p>Stress.</p>
                      <p>Confusion.</p>
                      <p>Overwhelm.</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <ArrowRight className="w-12 h-12 text-purple-500" />
                  </div>
                  
                  <div className="text-center">
                    <Badge variant="default" className="mb-3 text-lg px-4 py-2 bg-green-600">
                      After AI
                    </Badge>
                    <div className="space-y-2 text-foreground font-semibold">
                      <p>Clarity.</p>
                      <p>Support.</p>
                      <p>Growth.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 bg-gradient-to-b from-purple-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What You Get</h2>
                <p className="text-xl text-muted-foreground">"Assist → Track → Enhance Learning"</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: BookOpen, title: "AI for Homework Help", description: "Instant explanations and guidance for assignments." },
                  { icon: Users, title: "AI for Learning Support", description: "Generate practice exercises and learning games." },
                  { icon: BarChart, title: "AI for Tracking Progress", description: "Understand areas of strength and improvement." },
                  { icon: Home, title: "AI for Engagement", description: "Make learning interactive, fun, and personalized." },
                  { icon: Heart, title: "AI for Parent Empowerment", description: "Support your child confidently without stress." }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-purple-600">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 bg-gradient-to-b from-purple-900 to-pink-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Next Step</h2>
              <p className="text-xl text-purple-100 mb-8">
                Shift from homework stress to confident learning guidance with AI.
              </p>
              
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-6 text-lg group mb-12">
                Support Your Child's Success
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg">
                  <Globe className="w-6 h-6 text-purple-300" />
                  <div className="text-left">
                    <p className="font-semibold">Visit</p>
                    <p className="text-sm">EverydayAiLabs.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg">
                  <Phone className="w-6 h-6 text-pink-300" />
                  <div className="text-left">
                    <p className="font-semibold">Call</p>
                    <p className="text-sm">+91-9159007007</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ParentsPage;