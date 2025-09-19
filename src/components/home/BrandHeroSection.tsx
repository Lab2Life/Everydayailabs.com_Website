import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Heart, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const BrandHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <Badge
            variant="outline"
            className="mb-8 text-lg px-6 py-3 border-primary/30"
          >
            EverydayAiLabs
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Everyday AI. For everyone, everywhere.
          </h1>

          <p className="text-2xl md:text-3xl text-muted-foreground mb-8 font-medium">
            AI is no longer a luxury. It's{" "}
            <span className="text-primary font-bold">
              survival, growth, and peace of mind
            </span>
            ,
            <br className="hidden md:block" />
            in business and in life.
          </p>

          <div className="bg-gradient-primary rounded-2xl p-8 text-white mb-12 shadow-2xl">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Heart className="w-8 h-8" />
              <span className="text-2xl font-bold">Our Promise</span>
            </div>
            <p className="text-xl">
              Save time. Save money. Save resources.{" "}
              <span className="font-bold">Live more. Love more.</span>
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            <Button
              variant="gradient"
              size="xl"
              className="text-xl px-10 py-6 group"
              asChild
            >
              <Link to="/about">
                Start Your AI Journey
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="text-xl px-10 py-6"
              asChild
            >
              <Link to="/services">Explore Our Services</Link>
            </Button>
          </div>

          {/* Key stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-border/30">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">40%</div>
              <div className="text-muted-foreground">
                Employee time AI can handle better
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">
                2 Years
              </div>
              <div className="text-muted-foreground">
                Risk timeline for non-AI skilled freshers
              </div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">Growth</div>
              <div className="text-muted-foreground">
                MSMEs gain with AI visibility & efficiency
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandHeroSection;
