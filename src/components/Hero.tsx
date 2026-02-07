import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/resume";
import { ArrowDown, Mail } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-muted-foreground mb-4 animate-fade-up opacity-0 stagger-1">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up opacity-0 stagger-2">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-medium mb-8 animate-fade-up opacity-0 stagger-3">
            {personalInfo.title}
          </h2>

          {/* Bio */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up opacity-0 stagger-4">
            {personalInfo.bio}
          </p>

          {/* Contact Info Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-up opacity-0 stagger-5">
            <a
              href={`mailto:${personalInfo.email}`}
              className="skill-tag hover:bg-primary hover:text-primary-foreground"
            >
              <Mail size={16} className="mr-2" />
              {personalInfo.email}
            </a>
            {/* <span className="skill-tag">
              <Phone size={16} className="mr-2" />
              {personalInfo.phone}
            </span> */}
            {/* <span className="skill-tag">
              <MapPin size={16} className="mr-2" />
              {personalInfo.location}
            </span> */}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: "0.6s" }}>
            <Button
              variant="gradient"
              size="xl"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </Button>
            <Button
              variant="hero"
              size="xl"
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        >
          <ArrowDown size={28} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
