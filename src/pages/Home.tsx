import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import WavyDivider from "@/components/wavy-divider";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Home = () => {
  const aboutPoints = [
    "Software engineering + Schulich Leader @ UWaterloo",
    "Interested in big data analytics & LLMs, specifically in analyzing large-scale datasets for trends, predictive modeling, sports analytics, finance, and human behavior insights",
    "Huge sports fan (Liverpool FC, Toronto Maple Leafs, Milwaukee Bucks) + chipotle addict"
  ];

  const previousExperience = [
    "Interned @ RBC, managing API proxies",
    "Researched HRI @ McMaster University"
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "#", color: "hover:text-gray-900 dark:hover:text-gray-100" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-600" },
    { name: "Email", icon: Mail, href: "mailto:your.email@example.com", color: "hover:text-red-500" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-container-tight pt-16 pb-8">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-muted hand-drawn-circle overflow-hidden animate-float">
                {/* Placeholder for profile image */}
                <div className="w-full h-full bg-gradient-to-br from-line-secondary to-line-primary flex items-center justify-center">
                  <span className="text-7xl font-light text-white">KH</span>
                </div>
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 w-64 h-64 rounded-full bg-line-primary opacity-20 blur-xl -z-10"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6 flex-1 lg:ml-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">About me:</h2>
              <ul className="space-y-3">
                {aboutPoints.map((point, index) => (
                  <li 
                    key={index} 
                    className="bullet-hover flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-2 h-2 bg-line-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 text-foreground">Previously I've:</h3>
              <ul className="space-y-2">
                {previousExperience.map((experience, index) => (
                  <li 
                    key={index} 
                    className="bullet-hover flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-2 h-2 bg-line-secondary rounded-full mt-2 flex-shrink-0"></span>
                    <span>{experience}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WavyDivider />

      {/* Contact Section */}
      <section className="section-container-tight py-5">
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-semibold text-foreground">Get in Contact</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's connect and explore opportunities together. I'm always excited to discuss technology, sports, or potential collaborations.
          </p>
          
          <Card className="p-8 max-w-md mx-auto border-line-primary bg-card">
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
            <Button 
              className="w-full mt-6" 
              variant="default"
              size="lg"
            >
              Say Hello!
            </Button>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;