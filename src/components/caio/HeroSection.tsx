import { Button } from "@/components/ui/button";
import { ArrowRight, Award, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-blue-600/5 to-indigo-600/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 text-purple-600 rounded-full text-sm font-medium border border-purple-200">
              <Award className="w-4 h-4 mr-2" />
              Certified AI Officer Pathway
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              From <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">using AI</span> to 
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">leading AI</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A capability pathway for tomorrow's leaders.
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just learn AI. Become the one who drives it.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="xl" className="bg-gradient-to-r from-purple-600 to-blue-600 group">
              Start Your CAIO Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="xl" className="border-purple-300 text-purple-600 hover:bg-purple-50">
              <TrendingUp className="w-5 h-5 mr-2" />
              View Pathway Levels
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">3 Levels</div>
              <div className="text-sm text-muted-foreground">Foundation → Practitioner → Strategist</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Certified</div>
              <div className="text-sm text-muted-foreground">Industry-recognized credentials</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">3 Years</div>
              <div className="text-sm text-muted-foreground">Ahead in workplace readiness</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
