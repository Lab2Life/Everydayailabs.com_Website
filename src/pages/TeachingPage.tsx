import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BookOpen, Clock, Users, Target, GraduationCap, MessageSquare, BarChart, Settings, Phone, Globe } from "lucide-react";

const TeachingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <GraduationCap className="w-4 h-4" />
                AI for Teaching Professionals
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent leading-tight">
                From Overwhelmed Teacher to Empowered Facilitator
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                <span className="font-semibold text-blue-600">Let AI handle routine prep, while you focus on inspiring students.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg group">
                  Transform Your Teaching
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
                      <p>Overload.</p>
                      <p>Delays.</p>
                      <p>Student gaps.</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <ArrowRight className="w-12 h-12 text-blue-500" />
                  </div>
                  
                  <div className="text-center">
                    <Badge variant="default" className="mb-3 text-lg px-4 py-2 bg-green-600">
                      After AI
                    </Badge>
                    <div className="space-y-2 text-foreground font-semibold">
                      <p>Focus.</p>
                      <p>Efficiency.</p>
                      <p>Impact.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-indigo-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">What You Get</h2>
                <p className="text-xl text-muted-foreground">"Automate → Enhance → Inspire"</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { icon: BookOpen, title: "AI for Lesson Prep", description: "Generate content, quizzes, and teaching materials in minutes." },
                  { icon: MessageSquare, title: "AI for Feedback", description: "Grade assignments and provide personalized comments quickly." },
                  { icon: Users, title: "AI for Engagement", description: "Create interactive exercises and discussion prompts effortlessly." },
                  { icon: BarChart, title: "AI for Insight", description: "Analyze student performance and learning gaps instantly." },
                  { icon: Settings, title: "AI for Admin", description: "Manage tasks and focus on high-impact teaching." }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-blue-600">{item.title}</h3>
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
        <section className="py-16 bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Next Step</h2>
              <p className="text-xl text-blue-100 mb-8">
                Transform from administrative overwhelm to teaching excellence with AI.
              </p>
              
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-6 text-lg group mb-12">
                Start Your Teaching Transformation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg">
                  <Globe className="w-6 h-6 text-blue-300" />
                  <div className="text-left">
                    <p className="font-semibold">Visit</p>
                    <p className="text-sm">EverydayAiLabs.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg">
                  <Phone className="w-6 h-6 text-indigo-300" />
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

export default TeachingPage;