import { useParams, NavLink } from "react-router-dom";
import { blogsData, Blog } from "@/data/blogsData";
import NeuCard from "@/components/NeuCard";
import NeuButton from "@/components/NeuButton";
import SEOHelmet from "@/components/SEOHelmet";
// import AdPlaceholder from "@/components/AdPlaceholder";
// import AdPopup from "@/components/AdPopup";
import RelatedBlogs from "@/components/RelatedBlogs";
import { Calendar, User, ArrowLeft, Share2, MessageCircle, TrendingUp } from "@/components/icons";
import { toast } from "@/hooks/use-toast";

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogsData.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
          <NavLink to="/blogs">
            <NeuButton variant="primary">Back to Blogs</NeuButton>
          </NavLink>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link Copied!",
        description: "Blog link has been copied to clipboard.",
      });
    }
  };

  // SEO structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": blog.title,
    "image": `https://www.fincalcbox.com${blog.image}`,
    "author": {
      "@type": "Person",
      "name": blog.author,
    },
    "datePublished": blog.date,
    "dateModified": blog.date,
    "publisher": {
      "@type": "Organization",
      "name": "FinCalcBox",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.fincalcbox.com/icons/icon-512x512.png"
      }
    },
    "description": blog.description,
    "keywords": blog.tags.join(", "),
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <SEOHelmet
        title={`${blog.title} | FinCalcBox Blog`}
        description={blog.description || "Read our latest insights on finance, money management, and investing."}
        keywords={blog.tags.join(", ")}
        canonical={`https://www.fincalcbox.com/blogs/${blog.id}`}
        jsonLd={jsonLd}
      />

      {/* <AdPopup showCloseButton={true} /> */}

      <div className="mx-auto max-w-4xl">
        {/* Back Button */}
        <NavLink to="/blogs" className="inline-block mb-8">
          <NeuButton className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Blogs
          </NeuButton>
        </NavLink>

        {/* Blog Header */}
        <article className="animate-fade-in">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium neu-inset text-primary">
              {blog.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">{blog.title}</h1>

          <div className="flex flex-wrap items-center gap-6 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-5 w-5" aria-hidden="true" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" aria-hidden="true" />
              <span>{blog.date}</span>
            </div>
            <button
              onClick={handleShare}
              className="flex items-center gap-2 hover:text-primary transition-colors"
              aria-label="Share blog"
            >
              <Share2 className="h-5 w-5" />
              <span>Share</span>
            </button>
          </div>

          {/* Featured Image */}
          <div className="neu-inset rounded-2xl h-96 mb-12 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
            <img
              src={blog.image}
              alt={`Featured image for ${blog.title} - ${blog.description}`}
              className="w-full h-full object-cover opacity-70"
              loading="eager"
              width="800"
              height="384"
            />
          </div>

          {/* Blog Content */}
          <NeuCard>
            <div
              className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </NeuCard>

          {/* Tags */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold mb-3">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm rounded-full neu-inset text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>

        {/* Ad Section */}
        {/* <AdPlaceholder position="bottom" className="my-12" /> */}

        {/* Related Blogs */}
        <RelatedBlogs currentPage={id} />

        {/* Comment Section (Placeholder) */}
        <div className="mt-12">
          <NeuCard>
            <div className="flex items-center gap-3 mb-6">
              <MessageCircle className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Comments</h2>
            </div>
            <div className="neu-inset p-6 text-center text-muted-foreground">
              <p>Comments section coming soon!</p>
              <p className="text-sm mt-2">
                Join the conversation and share your thoughts.
              </p>
            </div>
          </NeuCard>
        </div>
      </div>
    </div>
  );
}
