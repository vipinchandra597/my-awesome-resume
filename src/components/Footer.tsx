import { personalInfo } from "@/data/resume";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold gradient-text">VC</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-muted-foreground text-sm">
              {personalInfo.name}
            </span>
          </div>

          <p className="text-muted-foreground text-sm text-center md:text-right">
            © {currentYear}
             {/* All rights reserved. Built with React & Tailwind CSS */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
