import { education } from "@/data/resume";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Academic foundation that drives my technical excellence
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border/50 card-hover flex flex-col md:flex-row gap-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 shadow-md">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    <p className="text-primary font-medium">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm md:text-right flex-shrink-0">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                </div>
                {edu.status && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {edu.status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
