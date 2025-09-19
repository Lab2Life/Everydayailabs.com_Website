import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutHeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Heart className="w-4 h-4" />
            About EverydayAiLabs
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
            AI that gives you your life back
          </h1>

          {/* Core Message */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-12 shadow-lg border border-purple-100">
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              At EverydayAiLabs, we believe AI shouldn't feel{" "}
              <span className="text-red-500 line-through">
                distant, complex, or overwhelming
              </span>
              .
              <br className="hidden md:block" />
              It should be{" "}
              <span className="font-semibold text-purple-600">
                simple, practical, and part of your daily life
              </span>
              , helping you save time, money, and effort, so you can focus on
              what truly matters.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white mb-12 shadow-xl">
            <div className="flex items-center justify-center gap-4 mb-4">
              <Lightbulb className="w-8 h-8" />
              <span className="text-2xl font-bold">Our Purpose</span>
            </div>
            <p className="text-xl leading-relaxed">
              We exist to make AI{" "}
              <span className="font-bold">
                human-friendly and useful every day
              </span>
              .
              <br className="hidden md:block" />
              No jargon. No overload. Just the right tools, applied the right
              way, so every task feels lighter, smarter, faster.
            </p>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-6 text-lg group"
              asChild
            >
              <Link to="/services">
                Explore Our Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
    </section>
  );
};

export default AboutHeroSection;
