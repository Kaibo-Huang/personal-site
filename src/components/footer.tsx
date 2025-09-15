import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "#", color: "hover:text-gray-900 dark:hover:text-gray-100" },
  { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-600" },
  { name: "Email", icon: Mail, href: "mailto:your.email@example.com", color: "hover:text-red-500" },
  { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
];

const Footer = () => (
  <footer className="section-container-tight pb-10">
    <div className="text-center space-y-8">
      <div className="w-full flex justify-center">
        <div className="h-0.5 w-32 bg-primary/40 rounded" />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
        <p className="text-lg text-muted-foreground whitespace-nowrap mb-2 sm:mb-0">
          feel free to reach out about anything
        </p>
        <div className="flex gap-2">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className={`p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 hover:scale-110 flex items-center justify-center ${social.color}`}
              aria-label={social.name}
            >
              <social.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
