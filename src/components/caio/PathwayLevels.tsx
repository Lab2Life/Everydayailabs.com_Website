import { Award, Users, Target, TrendingUp } from "lucide-react";

const PathwayLevels = () => {
  const levels = [
    {
      icon: Award,
      level: "Foundation",
      title: "Certified AI Officer - Foundation",
      description: "Learn to use AI confidently for daily tasks, automation, and problem-solving",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200"
    },
    {
      icon: Users,
      level: "Practitioner", 
      title: "Certified AI Officer - Practitioner",
      description: "Learn to apply AI across workflows, optimise systems, and deliver measurable results",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200"
    },
    {
      icon: Target,
      level: "Strategist",
      title: "Certified AI Officer - Strategist", 
      description: "Learn to lead AI adoption, align teams, and build long-term AI strategies",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What you <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">get?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-2">
            "Capability Pathway → Certified Growth → Strategic Leadership"
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each stage sharpens skills, deepens capability, and proves expertise with certification
          </p>
        </div>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          {levels.map((level, index) => {
            const IconComponent = level.icon;
            return (
              <div 
                key={level.level}
                className={`bg-gradient-to-br ${level.bgColor} border-2 ${level.borderColor} rounded-2xl p-8 shadow-elegant hover:shadow-xl transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${level.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-2xl font-bold">{level.title}</h3>
                      <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${level.color} text-white rounded-full text-sm font-medium mt-2 md:mt-0`}>
                        Level {index + 1}: {level.level}
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {level.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-card border border-border rounded-xl p-8 shadow-card max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Progressive Mastery
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each certification level builds upon the previous, ensuring comprehensive AI leadership development 
              from individual proficiency to organizational strategy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathwayLevels;