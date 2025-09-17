import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import WavyDivider from "@/components/wavy-divider";
import { ExternalLink, Github } from "lucide-react";
import Footer from "@/components/footer";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const Projects = () => {

  const featuredProject: Project[] = [
    {
      id: 1,
      title: "My Nodes",
      description: "Obsidian Graph Organizer: A tool that imports your documents, extracts and labels topics with NLP, and builds an interactive graph of conceptual connections. The graph reveals recurring ideas across multiple notes, helping you see patterns and relationships hidden within your documents.",
      image: "/obsidian.jpeg",
      technologies: ["Django", "Hugging Face", "AWS", "MongoDB", "React", ],
      githubUrl: "https://github.com/Blynkosaur/My-Nodes",
      featured: true
    },
  ];
  const projects: Project[] = [

    {
      id: 1,
      title: "API Proxy Deployment & Management @ RBC",
      description: "Engineered a proxy deployment and built RESTful APIs in Go to power a dashboard for SREs to monitor and manage API proxy deployments within the RBC Developer Portal",
      image: "/rbc.jpg",
      technologies: ["PostgresSQL", "Go", "Google Apigee", "MongoDB", "Jest", "React"],
      liveUrl: "https://www.linkedin.com/posts/kaibo88_i-helped-create-the-%F0%9D%90%8C%F0%9D%90%8E%F0%9D%90%92%F0%9D%90%93-%F0%9D%90%88%F0%9D%90%8D%F0%9D%90%8D%F0%9D%90%8E%F0%9D%90%95%F0%9D%90%80-activity-7365204287515267072-z8jN?utm_source=share&utm_medium=member_desktop&rcm=ACoAADrQLZ8Bmx5fRT8Dz5R4YjnsVbgzE-Wo0g4",
      featured: false
    },
    {
      id: 2,
      title: "IOGarden (Hack the 6ix Winner)",
      description: "AI Plant Sustainability: Track plants, identify species from images, generate AI-powered care guides, explore 560,000+ preset plants from across the globe, and more",
      image: "/IMG_project1.jpg",
      technologies: ["Python", "MongoDB", "React", "Gemini API", "Flask"],
      githubUrl: "#",
      liveUrl: "https://devpost.com/software/iogarden",
      featured: false
    },
    {
      id: 3,
      title: "TickleMahPickle (Jamhacks 9)",
      description: "In a pickle? Just tickle loan. TickleMahPickle makes splitting expenses easy by using graph theory to minimize the number of transactions within a friend group",
      image: "/pickle.png",
      technologies: ["NodeJS", "MongoDB", "React", "Vercel"],
      githubUrl: "#",
      liveUrl: "https://dorahacks.io/buidl/26374/",
      featured: false
    },
    {
      id: 4,
      title: "Osu!",
      description: "Java Swing rhythm game inspired by Osu! featuring four difficulty levels, a leaderboard, and a guided tutorial. Built custom graphics from scratch with Java Swing",
      image: "/osu1.png",
      technologies: ["Java"],
      githubUrl: "https://github.com/Kaibo-Huang/OSU",
    },
    {
      id: 5,
      title: "Collection of Arduino Projects",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat facilisis egestas. Nam ultricies, diam nec convallis cursus.",
      image: "/arduino.webp",
      technologies: ["C++", "Arduino", "Robotics"],
      githubUrl: "https://docs.google.com/document/d/1FebrJY8UgfnYXnMcGgiJh62A-JAHltgnmvRX2ptKpD0/edit?usp=sharing"
    },
    {
      id: 6,
      title: "Email Automation Script for ",
      description: "Google Apps Script that automates email notifications for my high school",
      image: "/StudentSuccess.png",
      technologies: ["Javascript"],
      githubUrl: "https://github.com/Kaibo-Huang/Email-Automation"
    },
    {
      id: 7,
      title: "Pong",
      description: `A modern implementation of Pong built using Java Swing. This project recreates the arcade experience with two-player gameplay, smooth animations, and pong ball momentum that responds realistically to paddle movements.`,
      image: "/Pong.png",
      technologies: ["C++", "Arduino", "Robotics"],
      githubUrl: "https://docs.google.com/document/d/1FebrJY8UgfnYXnMcGgiJh62A-JAHltgnmvRX2ptKpD0/edit?usp=sharing"
    }
  ];

  return (
    <div className="min-h-screen px-4 sm:px-0">
      <WavyDivider />

      <section className="max-w-4xl mx-auto pt-16 pb-8">
        <h2 className="text-2xl font-semibold mb-8 text-foreground group cursor-pointer">
          <span className="relative
            before:absolute before:left-0 before:-bottom-1 before:h-0.5 before:bg-primary before:w-0 before:transition-all before:duration-300 group-hover:before:w-full">
            Currently Building
          </span>
        </h2>
        <div className="grid md:grid-cols-1 gap-8 mb-12">
          {featuredProject.filter(project => project.featured).map((project) => (
            <Card key={project.id} className="group overflow-hidden border-line-primary hover:shadow-lg transition-all duration-300">
              <div className="aspect-[3/1] bg-muted overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-line-secondary to-line-primary flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs text-accent">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <WavyDivider />

      {/* All Projects */}
      <section className="max-w-4xl mx-auto pb-8">
        <h2 className="text-2xl font-semibold mb-8 text-foreground group cursor-pointer">
          <span className="relative
            before:absolute before:left-0 before:-bottom-1 before:h-0.5 before:bg-primary before:w-0 before:transition-all before:duration-300 group-hover:before:w-full">
            All Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="group overflow-hidden border-line-primary hover:shadow-md transition-all duration-300">
              <div className="aspect-video bg-muted overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-line-secondary to-line-primary flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-accent transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs text-accent">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs text-accent border-accent">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2 pt-1">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3" />
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;