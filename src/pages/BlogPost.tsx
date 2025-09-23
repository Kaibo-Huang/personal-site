import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/blogData";
import Footer from "@/components/footer";
import WavyDivider from "@/components/wavy-divider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <Link to="/blog" className="text-primary underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 sm:px-0">
      <WavyDivider />
      <div className="max-w-2xl mx-auto pt-4 pb-0">
        <Button asChild variant="outline" size="sm" className="mb-2">
          <Link to="/blog">← Back to Blog</Link>
        </Button>
      </div>
      <section className="max-w-2xl mx-auto pt-4 pb-8">
        <Card className="bg-background/80 border-line-primary shadow-lg overflow-hidden">
          <CardHeader className="px-4 sm:px-6">
            <CardTitle className="text-3xl mb-2 break-words">{post.title}</CardTitle>
            <div className="text-xs text-muted-foreground mb-2">
              {post.date} &middot; {post.author}
            </div>
          </CardHeader>
          <CardContent className="px-4 sm:px-6 overflow-x-hidden">
            <div className="prose prose-invert max-w-none text-foreground break-words">
              {post.content.split('\n').map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPost;
