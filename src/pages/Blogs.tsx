import { useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import NeuCard from "@/components/NeuCard";
import SEOHelmet from "@/components/SEOHelmet";
// import AdPlaceholder from "@/components/AdPlaceholder";
// import AdPopup from "@/components/AdPopup";
import BlogCard from "@/components/BlogCard";
import { blogsData, Blog } from "@/data/blogsData";
import { Search, Filter } from "@/components/icons";

const categories = ["All", "Loan", "EMI", "Tax", "Currency", "Investment", "General"];

export default function Blogs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter blogs based on search and category
  const filteredBlogs = useMemo(() => {
    return blogsData.filter((blog) => {
      const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           blog.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Financial Insights & Tips Blog",
    "description": "Expert financial advice, investment tips, and money management strategies for USA and Canada",
    "itemListElement": blogsData.map((blog, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": blog.title,
      "description": blog.description,
      "url": `https://www.fincalcbox.com/blogs/${blog.id}`
    }))
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <SEOHelmet
        title="Financial Insights & Tips - Expert Advice Blog | FinCalcBox"
        description="Read expert financial advice, investment tips, and money management strategies on the FinCalcBox blog. Stay informed with our latest insights for USA and Canada."
        keywords="financial blog, investment tips, money management, finance advice, loan blogs, tax blogs, investment blogs"
        canonical="https://www.fincalcbox.com/blogs"
        jsonLd={jsonLd}
      />

      {/* <AdPopup showCloseButton={true} /> */}

      <div className="mx-auto max-w-7xl">
        {/* <AdPlaceholder position="top" className="mb-8" /> */}

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Financial Insights
          </h1>
          <p className="text-xl text-muted-foreground">
            Expert advice and tips to help you master your finances
          </p>
        </div>

        {/* Search and Filter */}
        <NeuCard className="mb-8 p-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="neu-inset w-full pl-10 pr-4 py-3 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all rounded-xl"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              <Filter className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-3" />
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                    selectedCategory === category
                      ? "neu-button-pressed text-primary bg-primary/10"
                      : "neu-button text-muted-foreground hover:text-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </NeuCard>

        {/* Results Count */}
        <div className="mb-6 text-muted-foreground">
          {filteredBlogs.length > 0 ? (
            <p>
              Found {filteredBlogs.length} {filteredBlogs.length === 1 ? "article" : "articles"}
              {selectedCategory !== "All" && ` in "${selectedCategory}"`}
            </p>
          ) : (
            <p>No articles found matching your search.</p>
          )}
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>

        {/* <AdPlaceholder position="bottom" className="mt-12" /> */}
      </div>
    </div>
  );
}
