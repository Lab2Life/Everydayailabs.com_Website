import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 via-emerald-600/5 to-teal-600/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 rounded-full text-sm font-medium border border-green-200">
              <MessageCircle className="w-4 h-4 mr-2" />
              WA365 – WhatsApp Automation
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your business <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">lifeline</span> on 
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">WhatsApp</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Consistent, reliable, effortless.
            </p>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Never miss a customer. Never miss a moment.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="gradient" size="xl" className="bg-gradient-to-r from-green-600 to-emerald-600 group">
              Start WA365 Setup
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" size="xl" className="border-green-300 text-green-600 hover:bg-green-50">
              <Shield className="w-5 h-5 mr-2" />
              See Automation Demo
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">365 Days</div>
              <div className="text-sm text-muted-foreground">Automated consistency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Zero Miss</div>
              <div className="text-sm text-muted-foreground">Customer follow-ups</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">Hours Saved</div>
              <div className="text-sm text-muted-foreground">Daily automation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;