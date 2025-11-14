import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NeuButton from "@/components/NeuButton";
import NeuCard from "@/components/NeuCard";
import { toolsData, sectionMetadata, getAllSections, type ToolSection } from "@/data/toolsData";
import { ArrowRight, iconMap as lazyIconMap } from "@/components/icons";

export default function PopularToolsSection() {
  const navigate = useNavigate();
  const [icons, setIcons] = useState<Record<string, any>>({});

  useEffect(() => {
    // Lazy-load icons for all tools
    (async () => {
      const iconNames = new Set(toolsData.map((t) => t.icon));
      const entries = await Promise.all(
        Array.from(iconNames).map(async (iconName) => {
          const loader = (lazyIconMap as any)[iconName];
          if (!loader) return [iconName, null] as const;
          const mod = await loader();
          return [iconName, mod.default] as const;
        })
      );
      const map: Record<string, any> = {};
      for (const [k, v] of entries) map[k] = v;
      setIcons(map);
    })();
  }, []);

  const sections = getAllSections();

  // Helper function to get section slug for hash routing
  const getSectionSlug = (section: ToolSection): string => {
    return section; // section keys already match the desired slugs
  };

  const handleSectionClick = (section: ToolSection) => {
    const slug = getSectionSlug(section);
    navigate(`/tools#${slug}`);
  };

  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Finance Tools</h2>
          <p className="text-lg text-muted-foreground">
            Explore our comprehensive collection of financial calculators and tools
          </p>
        </div>

        {/* Section Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {sections.map((section, index) => {
            const metadata = sectionMetadata[section];
            const sectionTools = toolsData.filter((tool) => tool.section === section);
            const Icon = icons[metadata.icon];
            
            return (
              <NeuCard
                key={section}
                hover
                className="text-center cursor-pointer animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleSectionClick(section)}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-white mb-4 shadow-lg transition-transform duration-200 group-hover:scale-110">
                  {Icon ? <Icon className="h-8 w-8" /> : <span className="h-8 w-8" />}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">{metadata.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {metadata.description}
                </p>
                <div className="mt-4">
                  <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all duration-200">
                    Go to Tools
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </NeuCard>
            );
          })}
        </div>

        {/* Explore All Tools Button */}
        <div className="text-center mt-12">
          <NeuButton
            variant="primary"
            size="lg"
            className="flex items-center justify-center gap-2 group transition-all duration-200 mx-auto"
            onClick={() => navigate("/tools")}
          >
            <span>Explore All Tools</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </NeuButton>
        </div>
      </div>
    </section>
  );
}
