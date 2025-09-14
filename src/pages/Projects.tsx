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
  const projects: Project[] = [
    {
      id: 1,
      title: "Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, a bibendum nulla sapien eget urna.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Pandas", "Scikit-learn", "React", "D3.js", "PostgreSQL"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris dapibus risus quis suscipit vulputate.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Apache Kafka", "AWS", "Docker", "PostgreSQL", "Redis"],
      githubUrl: "#",
      featured: false
    },
    {
      id: 3,
      title: "Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
      image: "/api/placeholder/400/250",
      technologies: ["Python", "Transformers", "FastAPI", "Elasticsearch", "Docker"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 4,
      title: "Title",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat facilisis egestas. Nam ultricies, diam nec convallis cursus.",
      image: "/api/placeholder/400/250",
      technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "Grafana"],
      githubUrl: "#"
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
          {projects.filter(project => project.featured).map((project) => (
            <Card key={project.id} className="group overflow-hidden border-line-primary hover:shadow-lg transition-all duration-300">
              <div className="aspect-[3/1] bg-muted overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-line-secondary to-line-primary flex items-center justify-center">
                  <span className="text-white font-medium">Project Image</span>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
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
                  <span className="text-white text-sm">Project Image</span>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
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