import { experience } from "@/data/resume";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Building impactful solutions across companies and technologies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary md:-translate-x-px" />

            {experience.map((job, index) => (
              <div
                key={job.company}
                className={`relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary shadow-glow -translate-x-1.5 md:-translate-x-2 mt-1.5" />

                {/* Content */}
                <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <div className={`bg-card rounded-2xl p-6 shadow-lg border border-border/50 card-hover ${index % 2 === 0 ? "" : "md:ml-auto"}`}>
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? "" : "md:justify-end"}`}>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <div className={index % 2 === 0 ? "" : "md:text-right"}>
                        <h3 className="font-semibold text-lg">{job.title}</h3>
                        <p className="text-primary font-medium">{job.company}</p>
                      </div>
                    </div>

                    <div className={`flex items-center gap-2 text-muted-foreground text-sm mb-4 ${index % 2 === 0 ? "" : "md:justify-end"}`}>
                      <Calendar size={14} />
                      {job.period}
                    </div>

                    <ul className={`space-y-2 text-sm text-muted-foreground ${index % 2 === 0 ? "" : "md:text-right"}`}>
                      {job.highlights.slice(0, 4).map((highlight, i) => (
                        <li key={i} className={`flex gap-2 ${index % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                          <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
