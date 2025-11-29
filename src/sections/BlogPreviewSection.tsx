import { NavLink } from "react-router-dom";
import NeuCard from "@/components/NeuCard";
import NeuButton from "@/components/NeuButton";
import { blogsData } from "@/data/blogsData";
import {ArrowRight } from "@/components/icons";

export default function BlogPreviewSection() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From Our Blog</h2>
          <p className="text-lg text-muted-foreground">Latest insights and tips for smarter financial decisions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogsData.slice(0, 3).map((blog, index) => (
            <NavLink key={blog.id} to={`/blogs/${blog.id}`}>
              <NeuCard hover className="h-full animate-fade-in cursor-pointer" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="neu-inset rounded-xl h-48 mb-4 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <img
                    src={blog.image}
                    alt={`${blog.title} - Financial insights and expert advice from FinCalcBox`}
                    className="w-full h-full object-cover opacity-50"
                    loading="lazy"
                    width="400"
                    height="192"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">{blog.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{blog.description}</p>
                <div className="text-primary font-medium hover:underline">Read More →</div>
              </NeuCard>
            </NavLink>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="text-center mt-12">
            <NavLink to="/blogs">
            <NeuButton
                variant="primary"
                size="lg"
                className="flex items-center justify-center gap-2 group transition-all duration-200"
              >
                <span>Explore Blogs</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </NeuButton>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}


