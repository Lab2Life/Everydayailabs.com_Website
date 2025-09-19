import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const BeforeAfterDoubt = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Before vs After</h2>
          </div>

          <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <Badge variant="destructive" className="mb-3 text-lg px-4 py-2">
                  Before
                </Badge>
                <div className="space-y-2 text-muted-foreground">
                  <p>Confusion.</p>
                  <p>Hesitation.</p>
                  <p>Tools unused.</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <ArrowRight className="w-12 h-12 text-orange-500" />
              </div>
              
              <div className="text-center">
                <Badge variant="default" className="mb-3 text-lg px-4 py-2 bg-green-600">
                  After
                </Badge>
                <div className="space-y-2 text-foreground font-semibold">
                  <p>Clarity.</p>
                  <p>Confidence.</p>
                  <p>Daily AI wins.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterDoubt;