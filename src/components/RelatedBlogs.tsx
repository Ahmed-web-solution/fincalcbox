import { NavLink } from "react-router-dom";
import NeuCard from "@/components/NeuCard";
import { Calendar, TrendingUp } from "@/components/icons";
import { getBlogsForTool, Blog } from "@/data/blogsData";

interface RelatedBlogsProps {
  currentPage?: string;
  limit?: number;
  customBlogs?: Blog[];
}

export default function RelatedBlogs({ 
  currentPage, 
  limit = 3,
  customBlogs 
}: RelatedBlogsProps) {
  // Get blogs based on current page or use provided custom blogs
  const blogs = customBlogs || getBlogsForTool(currentPage || '');
  
  if (blogs.length === 0) return null;

  return (
    <section className="mt-12 max-w-6xl mx-auto">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold">Related Articles</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <NavLink
            key={blog.id}
            to={`/blogs/${blog.id}`}
            aria-label={`Read blog: ${blog.title}`}
          >
            <NeuCard
              hover
              className="h-full cursor-pointer transition-transform hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Blog Thumbnail */}
              <div className="neu-inset rounded-xl h-40 mb-4 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <img
                  src={blog.image}
                  alt={`${blog.title} - Related ${blog.category} article`}
                  className="w-full h-full object-cover opacity-70"
                  loading="lazy"
                  width="350"
                  height="160"
                />
              </div>

              {/* Blog Info */}
              <div className="px-1">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {blog.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>{blog.date}</span>
                </div>
              </div>
            </NeuCard>
          </NavLink>
        ))}
      </div>
    </section>
  );
}

