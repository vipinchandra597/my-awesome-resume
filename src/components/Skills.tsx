import { skills } from "@/data/resume";
import { Code2, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Front-End",
    icon: Code2,
    skills: skills.frontend,
    gradient: "from-primary to-accent",
  },
  {
    title: "Back-End",
    icon: Database,
    skills: skills.backend,
    gradient: "from-accent to-primary",
  },
  {
    title: "Tools & Build",
    icon: Wrench,
    skills: skills.tools,
    gradient: "from-primary via-accent to-primary",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            A comprehensive toolkit built through years of crafting web applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card rounded-2xl p-8 shadow-lg card-hover border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 shadow-md`}>
                <category.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold mb-6">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
