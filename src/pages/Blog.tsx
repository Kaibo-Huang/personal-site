

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import WavyDivider from "@/components/wavy-divider";
import { Calendar, ArrowRight } from "lucide-react";
import Footer from "@/components/footer";
import { blogPosts } from "@/blogData";

const Blog = () => {
  // For scalability, use blogPosts from central data
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-transparent px-4 sm:px-0">
      <WavyDivider />
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
          {blogPosts.map((post, idx) => (
            <Card key={post.slug} className="group border-primary hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2">
                      {post.content.split("\n")[0]}
                    </p>
                  </div>
                  <Button variant="ghost" asChild>
                    <a href={`/blog/${post.slug}`} className="flex items-center">
                      <span className="text-foreground">Read more</span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 text-foreground" />
                    </a>
                  </Button>
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

export default Blog;