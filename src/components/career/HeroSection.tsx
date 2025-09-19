import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const CareerHeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 text-lg px-4 py-2 border-green-500 text-green-600">
            AI for Career Readiness
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
            Don't just graduate. Get job-ready.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 italic">
            "We help you turn interviews into offers"
          </p>
          
          <div className="bg-green-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-green-700 mb-2">AI Awareness for Freshers</h2>
            <p className="text-green-600">Bridge the gap between college learning and industry expectations</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="gradient" size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-green-600 to-teal-600">
              Start Your Career Journey
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-green-500 text-green-600">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHeroSection;