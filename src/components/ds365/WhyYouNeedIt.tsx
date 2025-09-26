import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Percent, Search, Target } from "lucide-react";

const WhyYouNeedIt = () => {
  const expectations = [
    {
      stat: "85%",
      description: "of potential customers check Google before making a decision."
    },
    {
      stat: "Instant Trust",
      description: "If your profile looks alive and active, customers trust you instantly."
    },
    {
      stat: "Better ROI",
      description: "Ads and promotions work better when backed by an active profile."
    },
    {
      stat: "Best Impression", 
      description: "For new customers, an active Google profile creates the best impression."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center justify-center gap-3">
              <Lightbulb className="w-8 h-8 text-primary" />
              Why you need it?
            </h2>
            <div className="bg-primary/10 rounded-lg p-6 mb-8">
              <p className="text-lg text-center italic font-medium">
                "The next generation of customers won't search streets, they'll search Google. 
                If you're not visible, you don't exist. Daily consistency today secures their trust tomorrow."
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-8 text-center">
              What Today's Customers Expect:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {expectations.map((expectation, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      {index === 0 && <Percent className="w-8 h-8 text-primary" />}
                      {index === 1 && <Target className="w-8 h-8 text-primary" />}
                      {index === 2 && <Search className="w-8 h-8 text-primary" />}
                      {index === 3 && <Lightbulb className="w-8 h-8 text-primary" />}
                    </div>
                    <h4 className="font-bold mb-3 text-lg text-primary">{expectation.stat}</h4>
                    <p className="text-muted-foreground">{expectation.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyYouNeedIt;