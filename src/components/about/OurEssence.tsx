import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Target,
  MessageSquare,
  ArrowRight,
  Star,
  Quote,
} from "lucide-react";
import { useState, useEffect } from "react";

const OurEssence = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sampath Kumar",
      role: "Senior Software Developer",
      company: "Renault Nissan",
      text: "At the early stage of exploring Ai tools, i get to attend Ai Awareness session with EverydayAiLabs, this helped me save lot of time by speeding up my work.",
      rating: 5,
    },
    {
      name: "Suresh Kumar",
      role: "Founder",
      company: "Gadin Meditech",
      text: "Through Ai Doubt Clearance session our team get specific inputs, and we are able to start using it in our work on everyday basis.",
      rating: 5,
    },
    {
      name: "Milton Rajasekar",
      role: "Speaker",
      company: "Trainer",
      text: "In Early 2023, while ai is relatively new, he introduced me to the new world of ai. I feel like a rebirth and today it helped me shape up a lot. Highly recommended.",
      rating: 5,
    },
    {
      name: "Rajarajan",
      role: "CEO",
      company: "MPK Oil",
      text: "I wanted to train my team with Ai. With simple , step by step inputs in Tamil, our team started using gradually. Results are exponential.",
      rating: 5,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);
  const essenceItems = [
    {
      icon: Heart,
      title: "Vision",
      content: "AI that gives you your life back.",
      description:
        "Technology should free you to focus on what matters the most. RELATIONSHIPS ! CREATIVITY !! JOY !!!",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: Target,
      title: "Mission",
      content: "Make every day better with AI - simple, practical, consistent.",
      description:
        "We turn complex AI into everyday tools that genuinely improve your daily experience.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: MessageSquare,
      title: "Tagline",
      content: "Everyday AI. For everyone, everywhere.",
      description:
        "No matter who you are or where you are, AI can make your life better - and we'll show you how.",
      color: "from-purple-500 to-violet-500",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our Essence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These three pillars guide everything we do - from the content we
              create to the way we serve our community.
            </p>
          </div>

          <div className="space-y-8">
            {essenceItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <h3 className="text-2xl font-bold text-gray-900">
                            {item.title}
                          </h3>
                        </div>
                        <blockquote className="text-xl md:text-2xl font-semibold text-gray-700 mb-4 italic">
                          "{item.content}"
                        </blockquote>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Interactive Testimonials */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-white shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Your Life Back?
              </h3>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Join thousands who've discovered that AI isn't about replacing
                humans. it's about giving humans the freedom to be more human !
              </p>

              {/* Testimonial Carousel */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 max-w-4xl mx-auto">
                <div className="relative overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                      transform: `translateX(-${currentTestimonial * 100}%)`,
                    }}
                  >
                    {testimonials.map((testimonial, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <div className="text-center">
                          <Quote className="w-8 h-8 mx-auto mb-4 text-purple-200" />
                          <blockquote className="text-lg md:text-xl mb-6 text-purple-50 italic leading-relaxed">
                            "{testimonial.text}"
                          </blockquote>
                          <div className="flex justify-center mb-3">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-5 h-5 text-yellow-300 fill-current"
                              />
                            ))}
                          </div>
                          <div className="font-semibold text-lg text-white">
                            {testimonial.name}
                          </div>
                          <div className="text-purple-200">
                            {testimonial.role}
                          </div>
                          <div className="text-purple-300 text-sm">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? "bg-white scale-125"
                          : "bg-white/40 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    5000+
                  </div>
                  <div className="text-purple-200 text-sm">
                    Lives Transformed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    95%
                  </div>
                  <div className="text-purple-200 text-sm">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white">
                    50%
                  </div>
                  <div className="text-purple-200 text-sm">Time Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurEssence;
