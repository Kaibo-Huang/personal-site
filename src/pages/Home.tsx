import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import WavyDivider from "@/components/wavy-divider";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Footer from "@/components/footer";

const Home = () => {
  const BoldUnderline = ({ children }: { children: React.ReactNode }) => (
    <span className="font-bold relative bold-underline text-foreground">
      <span className="relative z-10">{children}</span>
      <span
        className="
          absolute left-0 -bottom-1 h-0.5 w-0
          transition-all duration-300
          group-hover:w-full
          bg-primary dark:bg-white
        "
        aria-hidden="true"
      />
    </span>
  );

  const aboutPoints = [
    <>
      Software Engineering + <BoldUnderline>Schulich Leader</BoldUnderline> (120k) @ <BoldUnderline>UWaterloo</BoldUnderline>
    </>,
    <>
      Interested in <BoldUnderline>big data analytics &amp; LLMs</BoldUnderline>, specifically in analyzing large-scale datasets for trends, predictive modeling, sports analytics, finance, and human behavior
    </>,
    "SPORTS FAN!!! (Liverpool, Toronto Maple Leafs, Milwaukee Bucks)"
  ];

  const previousExperience = [
    <>
      Interned <BoldUnderline>RBC</BoldUnderline>, managing API proxies
    </>,
    <>
      Researched <BoldUnderline>HRI</BoldUnderline> @ McMaster University
    </>
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "#", color: "hover:text-gray-900 dark:hover:text-gray-100" },
    { name: "LinkedIn", icon: Linkedin, href: "#", color: "hover:text-blue-600" },
    { name: "Email", icon: Mail, href: "mailto:your.email@example.com", color: "hover:text-red-500" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-blue-400" },
  ];

  return (
    <div className="min-h-screen bg-transparent px-4 sm:px-0">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto pt-16 pb-8">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start flex-shrink-0">
            <div className="relative">
              <div className="w-72 h-72 rounded-full bg-muted hand-drawn-circle overflow-hidden animate-float">
                <img
                  src="headshot.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    console.error("Image failed to load");
                    e.currentTarget.src = "https://via.placeholder.com/300";
                  }}
                />
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 w-72 h-72 rounded-full bg-line-primary opacity-20 blur-xl -z-10"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6 flex-1 lg:ml-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground group cursor-pointer">
                <span className="relative
                  before:absolute before:left-0 before:-bottom-1 before:h-0.5 before:bg-primary before:w-0 before:transition-all before:duration-300 group-hover:before:w-full">
                  About me:
                </span>
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                {aboutPoints.map((point, index) => (
                  <li 
                    key={index} 
                    className="group text-muted-foreground cursor-pointer align-top"
                  >
                    <span className="inline-block transition-colors transition-transform duration-200 group-hover:text-accent group-hover:translate-x-1 align-top">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 text-foreground group cursor-pointer">
                <span className="relative
                  before:absolute before:left-0 before:-bottom-1 before:h-0.5 before:bg-primary before:w-0 before:transition-all before:duration-300 group-hover:before:w-full">
                  Previously I've:
                </span>
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                {previousExperience.map((experience, index) => (
                  <li 
                    key={index} 
                    className="group text-muted-foreground cursor-pointer"
                  >
                    <span className="inline-block transition-colors transition-transform duration-200 group-hover:text-accent group-hover:translate-x-1">
                      {experience}
                    </span>
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
          <Button 
            className="group relative mx-auto px-14 py-7 text-lg font-semibold rounded-xl border border-line-primary bg-muted text-foreground overflow-hidden"
            size="lg"
            variant="outline"
            asChild
          >
            <a href="/projects" className="relative z-10 transition-colors duration-300 group-hover:text-background">
              I'm always building. Check it out! →
              <span className="absolute inset-0 -z-10 bg-primary scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100"></span>
            </a>
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;