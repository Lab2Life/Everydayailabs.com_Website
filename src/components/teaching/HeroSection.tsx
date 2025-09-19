import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
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
            <span className="font-semibold text-blue-600">Let AI handle routine prep, while you focus on inspiring and guiding students.</span>
            <br className="hidden md:block" />
            AI isn't about replacing educators. It's about giving you back time, clarity, and impact.
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            A practical program showing educators how to use AI as a daily teaching assistant. 
            No coding. No complex systems. Just better teaching through smart automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-lg group">
              Transform Your Teaching
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg border-blue-200 hover:bg-blue-50">
              See Teaching Tools
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-8 border-t border-blue-100">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2-3 Hours</div>
              <div className="text-muted-foreground">Reclaimed daily</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">Personalized</div>
              <div className="text-muted-foreground">Student engagement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-violet-600 mb-2">Real-time</div>
              <div className="text-muted-foreground">Progress insights</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-indigo-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;