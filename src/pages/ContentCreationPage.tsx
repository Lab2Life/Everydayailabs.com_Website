import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Pen,
  Image,
  Video,
  Mic,
  Sparkles,
  Mail,
  Phone,
} from "lucide-react";

const ContentCreationPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                AI for Content Creation
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-600 via-pink-600 to-orange-600 bg-clip-text text-transparent leading-tight">
                From Creative Block to Content Mastery
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                <span className="font-semibold text-rose-600">
                  Let AI spark your creativity and handle the heavy lifting
                  while you focus on storytelling.
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-8 py-6 text-lg group"
                >
                  Unleash Your Creativity
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Current Struggles */}
        <section className="py-16 bg-gradient-to-b from-red-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-red-600">
                ❌ Daily Content Creation Struggles
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Staring at blank pages with creative block",
                  "Spending hours on research and ideation",
                  "Struggling to maintain consistent quality across formats",
                  "Manual editing and optimization taking forever",
                  "Difficulty adapting content for different platforms",
                  "Burnout from constant content demands",
                ].map((struggle, index) => (
                  <Card
                    key={index}
                    className="bg-white border-red-200 hover:shadow-md transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <p className="text-red-700 font-medium">{struggle}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Before/After */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-red-50 to-green-50 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <div className="text-center">
                    <Badge
                      variant="destructive"
                      className="mb-3 text-lg px-4 py-2"
                    >
                      Before AI
                    </Badge>
                    <div className="space-y-2 text-muted-foreground">
                      <p>Creative burnout.</p>
                      <p>Manual processes.</p>
                      <p>Inconsistent output.</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <ArrowRight className="w-12 h-12 text-rose-500" />
                  </div>

                  <div className="text-center">
                    <Badge
                      variant="default"
                      className="mb-3 text-lg px-4 py-2 bg-green-600"
                    >
                      After AI
                    </Badge>
                    <div className="space-y-2 text-foreground font-semibold">
                      <p>Infinite inspiration.</p>
                      <p>Automated workflows.</p>
                      <p>Consistent excellence.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-16 bg-gradient-to-b from-rose-50 to-pink-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  What You Get
                </h2>
                <p className="text-xl text-muted-foreground">
                  "Ideate → Create → Optimize"
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: Pen,
                    title: "AI for Writing",
                    description:
                      "Generate articles, scripts, and copy in any style or tone.",
                  },
                  {
                    icon: Image,
                    title: "AI for Visual Content",
                    description:
                      "Create stunning graphics, illustrations, and designs.",
                  },
                  {
                    icon: Video,
                    title: "AI for Video Production",
                    description:
                      "Edit, enhance, and generate video content efficiently.",
                  },
                  {
                    icon: Mic,
                    title: "AI for Audio Content",
                    description:
                      "Podcasts, voiceovers, and music creation made simple.",
                  },
                  {
                    icon: Sparkles,
                    title: "AI for Content Strategy",
                    description:
                      "Data-driven content planning and optimization.",
                  },
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-all duration-300"
                    >
                      <CardContent className="p-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-rose-600">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* How We Differ */}
        <section className="py-16 bg-gradient-to-b from-pink-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-pink-600">
                🔶 How We Differ
              </h2>

              <div className="bg-white rounded-xl p-8 shadow-lg border border-pink-200">
                <h4 className="text-xl font-bold text-pink-600 mb-4">
                  Creator-Focused AI Training
                </h4>
                <p className="text-lg text-gray-700 mb-4">
                  We understand the creative process. Our AI training focuses on{" "}
                  <span className="font-semibold text-pink-600">
                    enhancing creativity, not replacing it
                  </span>{" "}
                  - helping you produce more while maintaining your unique
                  voice.
                </p>
                <p className="text-pink-600 font-semibold">
                  Inspiration → Creation → Refinement → Distribution
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-16 bg-gradient-to-b from-rose-900 to-pink-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Next Step</h2>
              <p className="text-xl text-rose-100 mb-8">
                Stop struggling with creative block. Start creating consistently
                amazing content with AI as your creative partner.
              </p>

              <Button
                size="lg"
                className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 py-6 text-lg group mb-12"
              >
                Transform Your Content Creation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <a
                  href="mailto:hello@everydayailabs.com"
                  className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Mail className="w-6 h-6 text-rose-300" />
                  <div className="text-left">
                    <p className="font-semibold">Email Us</p>
                    <p className="text-sm">hello@everydayailabs.com</p>
                  </div>
                </a>
                <a
                  href="tel:+919159007007"
                  className="flex items-center justify-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-6 h-6 text-pink-300" />
                  <div className="text-left">
                    <p className="font-semibold">Call Us</p>
                    <p className="text-sm">+91-9159007007</p>
                  </div>
                </a>
              </div>

              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-rose-200 text-lg">
                  Your audience deserves amazing content. Give AI the tools,
                  keep the creative vision.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContentCreationPage;
