import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import WavyDivider from "@/components/wavy-divider";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug: string;
  featured?: boolean;
}

const Blog = () => {
  // Sample blog posts - you can replace these with real data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Title",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, a bibendum nulla sapien eget urna.",
      date: "2024-03-15",
      readTime: "8 min read",
      category: "Machine Learning",
      slug: "ml-sports-analytics-nhl",
      featured: true
    },
    {
      id: 2,
      title: "Title",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Mauris dapibus risus quis suscipit vulputate.",
      date: "2024-03-10",
      readTime: "6 min read",
      category: "Data Engineering",
      slug: "scalable-data-pipelines-kafka",
      featured: true
    },
    {
      id: 3,
      title: "Title",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.",
      date: "2024-03-05",
      readTime: "4 min read",
      category: "Career",
      slug: "finance-to-tech-journey"
    },
    {
      id: 4,
      title: "Title",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat facilisis egestas. Nam ultricies, diam nec convallis cursus.",
      date: "2024-02-28",
      readTime: "10 min read",
      category: "AI/ML",
      slug: "understanding-llms-guide"
    },
    {
      id: 5,
      title: "Title",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, a bibendum nulla sapien eget urna.",
      date: "2024-02-20",
      readTime: "7 min read",
      category: "Sports Analytics",
      slug: "psychology-sports-analytics"
    }
  ];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="section-container pt-32 pb-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">My Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
           Title
          </p>
        </div>
      </section>

      <WavyDivider />

      {/* Featured Posts */}
      <section className="section-container py-16">
        <h2 className="text-2xl font-semibold mb-8 text-foreground">Featured Posts</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="group overflow-hidden border-line-primary hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(post.date)}</span>
                  <span>•</span>
                  <Clock className="w-4 h-4" />
                  <span>{post.readTime}</span>
                </div>
                <Badge variant="secondary" className="w-fit mb-3">
                  {post.category}
                </Badge>
                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                
                <Button variant="ghost" className="p-0 h-auto font-medium group-hover:text-primary" asChild>
                  <a href={`/blog/${post.slug}`}>
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <WavyDivider />

      {/* All Posts */}
      <section className="section-container py-16">
        <h2 className="text-2xl font-semibold mb-8 text-foreground">All Posts</h2>
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Card key={post.id} className="group border-line-primary hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                      <span>•</span>
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                  
                  <Button variant="ghost" asChild>
                    <a href={`/blog/${post.slug}`}>
                      Read more
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Posts
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Blog;