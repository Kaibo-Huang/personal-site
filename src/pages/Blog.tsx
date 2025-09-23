import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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
    <div className="min-h-screen bg-transparent px-5 sm:px-6 lg:px-0 overflow-hidden">
      <WavyDivider />
      <WavyDivider />
      {/* All Posts */}
      <section className="max-w-4xl mx-auto pt-10 sm:pt-16 pb-8 overflow-x-hidden">
        <h2 className="text-2xl font-semibold mb-6 sm:mb-8 text-foreground group cursor-pointer">
          <span className="relative
            before:absolute before:left-0 before:-bottom-1 before:h-0.5 before:bg-primary before:w-0 before:transition-all before:duration-300 group-hover:before:w-full">
            All Posts
          </span>
        </h2>
        <div className="space-y-6 overflow-hidden">
          {blogPosts.map((post, idx) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="block group focus:outline-none focus:ring-2 focus:ring-primary rounded-lg overflow-hidden"
              tabIndex={0}
            >
              <Card className="border-line-primary hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden">
                <CardContent className="p-5 sm:p-6 overflow-hidden">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 overflow-x-hidden">
                    <div className="flex-1 space-y-3 overflow-hidden">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4 flex-shrink-0" />
                        <span className="truncate">{formatDate(post.date)}</span>
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-accent transition-colors break-words">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground line-clamp-2 break-words">
                        {post.content.split("\n")[0]}
                      </p>
                    </div>
                    <span className="flex items-center px-3 py-1 rounded-md transition-colors duration-200 group-hover:bg-accent/40 group-hover:text-accent-foreground whitespace-nowrap">
                      <span className="transition-colors group-hover:text-accent">Read more</span>
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 group-hover:text-accent flex-shrink-0" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;