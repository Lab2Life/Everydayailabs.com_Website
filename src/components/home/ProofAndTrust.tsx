import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, MessageSquare, CheckCircle } from "lucide-react";

const ProofAndTrust = () => {
  const proofPoints = [
    {
      icon: Users,
      title: "Workshop Delivery",
      description: "Delivered workshops across industries with proven results."
    },
    {
      icon: Award,
      title: "Productised Services",
      description: "Built comprehensive services like DS365 for real business impact."
    },
    {
      icon: MessageSquare,
      title: "Client Testimonials",
      description: "Positive feedback from satisfied clients across different sectors."
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-4">
              <CheckCircle className="w-10 h-10 text-green-500" />
              Proof & Trust
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {proofPoints.map((proof, index) => {
              const Icon = proof.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-green-100">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-bold mb-4 text-xl text-green-600">{proof.title}</h3>
                    <p className="text-muted-foreground">{proof.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 text-center border-2 border-green-200">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Award className="w-8 h-8 text-green-600" />
              <Badge variant="outline" className="text-lg px-4 py-2 border-green-500 text-green-600">
                Our Anchor
              </Badge>
            </div>
            <p className="text-2xl font-bold text-green-700">
              "We don't just speak AI. We make AI work for you, every day."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofAndTrust;