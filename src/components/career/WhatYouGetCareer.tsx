import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, MessageSquare, Code, Users, Briefcase, Download } from "lucide-react";

const WhatYouGetCareer = () => {
  const sessionItems = [
    {
      icon: FileText,
      title: "Resume Building with AI",
      description: "Convert projects into strong resume points (Overleaf templates + AI prompts)."
    },
    {
      icon: MessageSquare,
      title: "Mock Interview Practice",
      description: "Use AI to generate and practice real interview Q&A."
    },
    {
      icon: Code,
      title: "2 Strong Projects",
      description: "Beginner-friendly projects guided by AI to showcase in resumes."
    },
    {
      icon: Users,
      title: "Aptitude + GD Practice",
      description: "AI-generated practice questions and GD simulations."
    },
    {
      icon: Briefcase,
      title: "Job Portal Strategy",
      description: "Apply smartly on LinkedIn, Foundit, Naukri with AI-assisted applications."
    },
    {
      icon: Download,
      title: "Takeaway PDF",
      description: "\"5 AI Prompts Every Fresher Must Try Today\" for immediate action."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <FileText className="w-8 h-8 text-green-600" />
              What you get in the session
            </h2>
            <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-lg p-6 text-white mb-8">
              <p className="text-xl font-medium">
                Complete Career Readiness Toolkit with AI Integration
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {sessionItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full border-green-100">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-bold mb-3 text-lg text-green-600">{item.title}</h3>
                    <p className="text-muted-foreground flex-grow">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetCareer;