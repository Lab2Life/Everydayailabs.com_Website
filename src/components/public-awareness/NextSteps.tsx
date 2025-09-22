import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Phone, Mail, Users } from "lucide-react";

const NextSteps = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-emerald-900 to-teal-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              🚀 Next Step
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              One decision today gives you{" "}
              <span className="text-green-300">
                clarity and confidence in AI for life
              </span>
              .
            </p>
            <p className="text-lg text-teal-200">
              Be among the first to adopt, not the last to catch up.
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-12">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Users className="w-8 h-8 text-emerald-300" />
                <h3 className="text-2xl font-bold">
                  Join the AI-Confident Community
                </h3>
              </div>
              <p className="text-lg text-emerald-100 mb-6">
                Don't let AI intimidate you. Let it empower you.
              </p>
              <p className="text-teal-200 italic text-lg">
                "This is just one way AI can help. If you ever wonder, 'Can AI
                solve my problem?', think of EverydayAiLabs.com first."
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-6 text-lg group"
            >
              Join the Next Session
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              Ask Questions First
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="mailto:hello@everydayailabs.com"
              className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Mail className="w-6 h-6 text-emerald-300" />
              <div className="text-left">
                <p className="font-semibold">Email Us</p>
                <p className="text-sm text-emerald-200">
                  hello@everydayailabs.com
                </p>
              </div>
            </a>
            <a
              href="tel:+919159007007"
              className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
            >
              <Phone className="w-6 h-6 text-teal-300" />
              <div className="text-left">
                <p className="font-semibold">Call Us</p>
                <p className="text-sm text-emerald-200">+91-9159007007</p>
              </div>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-emerald-200 text-lg font-medium">
              The AI wave is here. You can either ride it or be swept away by
              it.
            </p>
            <p className="text-sm text-teal-300 mt-2">
              Two hours can change your relationship with technology forever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
