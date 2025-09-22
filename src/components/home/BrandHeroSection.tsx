import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Heart } from "lucide-react";
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
        </div>
      </div>
    </section>
  );
};

export default BrandHeroSection;
