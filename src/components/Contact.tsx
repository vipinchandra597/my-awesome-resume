import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/resume";
import { Mail, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="section-subheading max-w-2xl mx-auto">
            Ready to collaborate on your next project? Get in touch!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border/50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 grid md:grid-cols-2 gap-10">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <p className="text-muted-foreground mb-8">
                  Feel free to reach out through any of the channels below. I'm always excited to discuss new opportunities and ideas.
                </p>

                <div className="space-y-5">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
                      <Mail className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium group-hover:text-primary transition-colors">{personalInfo.email}</p>
                    </div>
                  </a>

                  {/* <a
                    href={`tel:${personalInfo.phone}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-glow transition-all duration-300">
                      <Phone className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium group-hover:text-primary transition-colors">{personalInfo.phone}</p>
                    </div>
                  </a> */}

                  {/* <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium">{personalInfo.location}</p>
                    </div>
                  </div> */}
                </div>
              </div>

              {/* Quick Action */}
              <div className="flex flex-col justify-center items-center text-center bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-glow">
                  <Send className="w-10 h-10 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Ready to Start?</h4>
                <p className="text-muted-foreground mb-6">
                  Drop me an email and let's bring your ideas to life.
                </p>
                <Button
                  variant="gradient"
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a href={`mailto:${personalInfo.email}?subject=Let's Work Together`}>
                    Send Email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
