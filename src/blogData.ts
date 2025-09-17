// Central blog post data for scalability
export interface BlogPostData {
  slug: string;
  title: string;
  date: string;
  author: string;
  content: string; // For now, simple string. Can be markdown or JSX in future.
}

export const blogPosts: BlogPostData[] = [
  {
    slug: "first-post",
    title: "First Post",
    date: "2025-09-16",
    author: "Kaibo Huang",
    content: `
Hello World! This is my first blog post. 
    `
  }
];
