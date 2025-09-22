import { Award, TrendingUp, Target, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const WhatIsCAIO = () => {
  return (
    <section id="what-is-caio" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What is the{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Certified AI Officer Pathway?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A structured 3-level journey that builds leaders who can use AI,
            apply AI, and lead AI inside businesses
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="bg-card border border-border rounded-xl p-6 shadow-card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Structured Journey</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Instead of scattered skills, it creates a clear role "The AI
                Officer" who keeps the organisation future-ready.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Clear Role Definition</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Creates dedicated "AI Officers" who bridge the gap between AI
                tools and business outcomes.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">
                  Business-Aligned Growth
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Every step connects directly to measurable business outcomes and
                strategic objectives.
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="animate-fade-in">
            <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <Badge
                    variant="destructive"
                    className="mb-3 text-lg px-4 py-2"
                  >
                    Before CAIO
                  </Badge>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Random usage.</p>
                    <p>Scattered tools.</p>
                    <p>Confusion.</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-12 h-12 text-purple-500" />
                </div>

                <div className="text-center">
                  <Badge
                    variant="default"
                    className="mb-3 text-lg px-4 py-2 bg-purple-600"
                  >
                    After CAIO
                  </Badge>
                  <div className="space-y-2 text-foreground font-semibold">
                    <p>Certified clarity.</p>
                    <p>Aligned systems.</p>
                    <p>Strategic advantage.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsCAIO;
