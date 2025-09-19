import { MessageCircle, Zap, Shield, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const WhatIsWA365 = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What is <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">WA365?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A system that automates your most important WhatsApp communication
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="bg-card border border-border rounded-xl p-6 shadow-card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Complete Automation</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                From daily updates to advanced workflows, WA365 ensures your business never misses a customer or a task.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 shadow-card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Beyond Basic Automation</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                It's not just automation. It's business survival on the channel your customers use most.
              </p>
            </div>
            
            <div className="bg-card border border-border rounded-xl p-6 shadow-card">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Business Lifeline</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Your reliable communication backbone that works 24/7, ensuring every customer interaction strengthens your brand.
              </p>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="animate-fade-in">
            <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="text-center">
                  <Badge variant="destructive" className="mb-3 text-lg px-4 py-2">
                    Before WA365
                  </Badge>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Missed follow-ups.</p>
                    <p>Silent gaps.</p>
                    <p>Lost trust.</p>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <ArrowRight className="w-12 h-12 text-green-500" />
                </div>
                
                <div className="text-center">
                  <Badge variant="default" className="mb-3 text-lg px-4 py-2 bg-green-600">
                    After WA365
                  </Badge>
                  <div className="space-y-2 text-foreground font-semibold">
                    <p>Consistent.</p>
                    <p>Reliable.</p>
                    <p>Trusted.</p>
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

export default WhatIsWA365;