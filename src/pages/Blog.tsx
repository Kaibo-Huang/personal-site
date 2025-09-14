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
      title: "First Post!",
      excerpt: "Hello World",
      date: "2024-09-14",
      readTime: "1 min read",
      category: "First Post",
      slug: "firstPost",
      featured: true
    },
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
      <WavyDivider />
      {/* 
      Featured Posts
      <section className="max-w-4xl mx-auto pt-16 pb-8">
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
      */}
      <WavyDivider />

      {/* All Posts */}
      <section className="max-w-4xl mx-auto pt-16 pb-8">
        <h2 className="text-2xl font-semibold mb-8 text-foreground group cursor-pointer">
          <span className="relative
            before:absolute before:left-0 before:-bottom-1 before:h-0.5 before:bg-primary before:w-0 before:transition-all before:duration-300 group-hover:before:w-full">
            All Posts
          </span>
        </h2>
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
      </section>
    </div>
  );
};

export default Blog;