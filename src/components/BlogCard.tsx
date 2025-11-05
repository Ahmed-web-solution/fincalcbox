import { NavLink } from "react-router-dom";
import NeuCard from "@/components/NeuCard";
import { Calendar, User } from "@/components/icons";
import { Blog } from "@/data/blogsData";

interface BlogCardProps {
  blog: Blog;
  index: number;
}

export default function BlogCard({ blog, index }: BlogCardProps) {
  return (
    <NavLink
      to={`/blogs/${blog.id}`}
      aria-label={`Read blog: ${blog.title}`}
      className="block h-full"
    >
      <NeuCard
        hover
        className="h-full cursor-pointer transition-transform hover:scale-[1.02] animate-fade-in focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        {/* Blog Thumbnail */}
        <div className="neu-inset rounded-xl h-48 mb-4 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          <img
            src={blog.image}
            alt={`${blog.title} - ${blog.category} blog post thumbnail`}
            className="w-full h-full object-cover opacity-70 transition-opacity duration-300 hover:opacity-80"
            loading="lazy"
            width="400"
            height="192"
          />
        </div>

        {/* Blog Meta Info */}
        <h3 className="text-xl font-semibold mb-3 line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {blog.description}
        </p>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" aria-hidden="true" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            <span>{blog.date}</span>
          </div>
        </div>

        {/* CTA Text */}
        <div className="mt-4 text-primary font-medium hover:underline">
          Read More →
        </div>
      </NeuCard>
    </NavLink>
  );
}

