import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  Target,
  Workflow,
  Phone,
  Mail,
  MessageSquare,
  DollarSign,
  Clock,
  Wrench,
  BarChart3,
  Bot,
  Shield,
  Sparkles,
} from "lucide-react";

const CustomAISoftwarePage = () => {
  const struggles = [
    "We're paying for too many SaaS subscriptions, but still wasting time.",
    "Our team is confused switching between multiple software dashboards.",
    "Generic tools don't fit our workflow, leaving gaps and inefficiency.",
    "Recurring costs keep rising, but we're not getting value.",
    "We need personalisation, but ready-made tools don't offer it.",
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Save Costs",
      description: "Replace multiple tools with one-time build.",
    },
    {
      icon: Workflow,
      title: "Simplify Operations",
      description: "One system, not ten.",
    },
    {
      icon: Target,
      title: "Tailored Fit",
      description: "Software matches your business, not the other way.",
    },
    {
      icon: Bot,
      title: "AI-Powered",
      description: "Automations, dashboards, assistants, all built-in.",
    },
    {
      icon: Sparkles,
      title: "Future-Proof",
      description: "Scales with your growth, integrates with any API.",
    },
  ];

  const deliverables = [
    "Custom workflow management software.",
    "Dashboards with real-time insights.",
    "AI-powered assistants and chatbots.",
    "End-to-end builds or integrations with your existing tools.",
    "A working MVP demo fast — so you see progress from Day 1.",
  ];

  const processSteps = [
    "Understand your workflow in detail.",
    "Build a quick MVP demo for clarity.",
    "Develop the full solution in collaboration with you.",
    "Deliver a one-time build + handover (or managed support if needed).",
  ];

  const differentiators = [
    {
      title: "Pain-driven design",
      description: "built from your real workflows.",
    },
    {
      title: "Speed",
      description: "live MVP demo within days.",
    },
    {
      title: "Flexibility",
      description: "custom integrations with any API.",
    },
    {
      title: "Cost clarity",
      description: "no endless subscriptions, just one solution.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                EverydayAiLabs –{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Customised AI Software
                </span>{" "}
                for Businesses
              </h1>
              <p className="text-2xl text-primary font-semibold mb-4">
                "Software that adapts to your workflow, not the other way
                around."
              </p>
              <p className="text-xl text-muted-foreground mb-8">
                "From juggling tools to one simple system - streamline your
                business with AI."
              </p>
              <div className="flex justify-center">
                <Button variant="gradient" size="lg" asChild>
                  <Link to="/contact">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Get Your Custom Solution
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Struggles Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 flex items-center justify-center">
                  <Target className="w-10 h-10 mr-4 text-primary" />
                  Struggles Businesses Face
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {struggles.map((struggle, index) => (
                  <Card key={index} className="p-6 border-l-4 border-l-red-500">
                    <p className="text-muted-foreground italic">"{struggle}"</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What is Custom AI Software */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 flex items-center justify-center">
                  <Wrench className="w-10 h-10 mr-4 text-primary" />
                  What is Customised AI Software?
                </h2>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
                  Instead of forcing your team to adjust to generic tools, we
                  build software designed around your exact workflow.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="p-6 text-center">
                  <Workflow className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Central System</h3>
                  <p className="text-muted-foreground">
                    A central system that manages tasks, data, and
                    communication.
                  </p>
                </Card>
                <Card className="p-6 text-center">
                  <Bot className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">AI Assistants</h3>
                  <p className="text-muted-foreground">
                    AI chatbots and assistants tailored to your customer needs.
                  </p>
                </Card>
                <Card className="p-6 text-center">
                  <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Custom Dashboards</h3>
                  <p className="text-muted-foreground">
                    Dashboards that show insights the way you want them.
                  </p>
                </Card>
              </div>

              <div className="text-center mt-12">
                <p className="text-lg font-semibold text-primary">
                  Practical. Collaborative. Built fast.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Custom AI Software is a Game-Changer */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 flex items-center justify-center">
                  <Zap className="w-10 h-10 mr-4 text-primary" />
                  Why Custom AI Software is a Game-Changer
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <Card
                      key={index}
                      className="p-6 hover:shadow-lg transition-shadow"
                    >
                      <Icon className="w-12 h-12 text-primary mb-4" />
                      <h3 className="text-lg font-bold mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </Card>
                  );
                })}
              </div>

              <div className="bg-gradient-primary/10 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-red-600 mb-2">
                      Before:
                    </h3>
                    <p className="text-muted-foreground">
                      Too many logins, wasted hours, high costs.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-green-600 mb-2">
                      After:
                    </h3>
                    <p className="text-muted-foreground">
                      One clear system, faster workflows, reduced expenses.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Your Business Gets */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 mr-4 text-primary" />
                  What Your Business Gets
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {deliverables.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-lg">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 flex items-center justify-center">
                  <Workflow className="w-10 h-10 mr-4 text-primary" />
                  How We Work
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step, index) => (
                  <Card key={index} className="p-6 text-center relative">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <p className="text-sm">{step}</p>
                    {index < processSteps.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-primary absolute -right-3 top-1/2 transform -translate-y-1/2 hidden lg:block" />
                    )}
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Proven Example */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 flex items-center justify-center">
                  <Shield className="w-10 h-10 mr-4 text-primary" />
                  Proven Example
                </h2>
              </div>

              <Card className="p-8">
                <p className="text-lg mb-6 text-center">
                  We delivered a custom AI chatbot for a business that gave
                  customers instant, personalised responses.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="font-bold text-green-800 mb-2">Result →</h3>
                  <p className="text-green-700">
                    Faster replies, reduced workload, higher customer
                    satisfaction.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6 flex items-center justify-center">
                  <DollarSign className="w-10 h-10 mr-4 text-primary" />
                  Pricing
                </h2>
              </div>

              <Card className="p-8 text-center">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Product Code: AI-CUSTOM-SW
                  </h3>
                  <p className="text-lg mb-2">
                    <strong>Pricing:</strong> Based on workflow scope &
                    resources required.
                  </p>
                  <p className="text-lg">
                    <strong>Model:</strong> One-time build with optional
                    management support.
                  </p>
                </div>
                <Button variant="gradient" size="lg" asChild>
                  <Link to="/contact">
                    Get Custom Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </Card>
            </div>
          </div>
        </section>

        {/* How We Differ */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 flex items-center justify-center">
                  <Users className="w-10 h-10 mr-4 text-primary" />
                  How We Differ
                </h2>
                <p className="text-xl text-muted-foreground">
                  Unlike ready-made SaaS tools, EverydayAiLabs builds your own
                  system:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {differentiators.map((diff, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-lg font-bold text-primary mb-2">
                      {diff.title}
                    </h3>
                    <p className="text-muted-foreground">{diff.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Next Step */}
        <section className="py-20 bg-gradient-primary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Next Step</h2>
              <p className="text-xl mb-8">
                Stop adjusting your business to generic tools.
              </p>
              <p className="text-lg mb-8">
                Let's build your customised AI software that simplifies your
                work, cuts costs, and scales with you.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                  asChild
                >
                  <Link to="/contact">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Start Your Project
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +91-9159007007
                </Button>
              </div>

              <div className="bg-white/10 rounded-2xl p-8">
                <p className="text-lg italic mb-4">
                  "This is just one way AI can help. If you ever wonder, 'Can AI
                  solve my problem?', think of EverydayAiLabs first."
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="mailto:hello@everydayailabs.com"
                    className="flex items-center hover:text-blue-200 transition-colors"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    <span>hello@everydayailabs.com</span>
                  </a>
                  <span className="hidden sm:block">|</span>
                  <a
                    href="tel:+919159007007"
                    className="flex items-center hover:text-blue-200 transition-colors"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    <span>+91-9159007007</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CustomAISoftwarePage;
