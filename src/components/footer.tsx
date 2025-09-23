import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/Kaibo-Huang", color: "hover:text-gray-900 dark:hover:text-gray-100" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/kaibo88/", color: "hover:text-blue-600" },
  { name: "Email", icon: Mail, href: "mailto:kaibo.huang@outlook.com", color: "hover:text-red-500" },
  { name: "Twitter", icon: Twitter, href: "https://x.com/kaibo_huang", color: "hover:text-blue-400" },
];

const Footer = () => (
  <footer className="pb-10 px-5 sm:px-6 lg:px-0 max-w-4xl mx-auto overflow-hidden">
    <div className="text-center space-y-6 sm:space-y-8 overflow-hidden">
      <div className="w-full flex justify-center">
        <div className="h-0.5 w-28 sm:w-32 bg-primary/40 rounded" />
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
        <p className="text-base sm:text-lg text-foreground whitespace-normal sm:whitespace-nowrap mb-2 sm:mb-0">
          feel free to reach out about anything
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className={`p-2.5 sm:p-3 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110
                bg-[hsl(40,40%,60%)] dark:bg-secondary
                ${social.color}`}
              aria-label={social.name}
            >
              <social.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[hsl(25,15%,25%)] dark:text-primary" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
