// ✅ path: src/pages/Tools.tsx
import { Link, useNavigate, useLocation } from "react-router-dom";
import NeuCard from "@/components/NeuCard";
import SEOHelmet from "@/components/SEOHelmet";
import { toolsData, sectionMetadata, getAllSections } from "@/data/toolsData";
import { useEffect, useState } from "react";
import { iconMap as lazyIconMap } from "@/components/icons";

export default function Tools() {
  const navigate = useNavigate();
  const location = useLocation();
  const [icons, setIcons] = useState<Record<string, any>>({});
  const sections = getAllSections();

  useEffect(() => {
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

  useEffect(() => {
    if (location.hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Financial Calculators & Tools",
    "description": "Free online financial calculators for USA and Canada users",
    "itemListElement": toolsData.map((tool, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": tool.title,
      "description": tool.description,
      "url": `https://www.fincalcbox.com${tool.route}`,
    })),
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <SEOHelmet
        title="Financial Calculators & Tools - FinCalcBox"
        description="Free online financial calculators including currency converter, loan calculator, EMI calculator, income tax calculator, and compound interest calculator. Make smarter money decisions for USA and Canada."
        keywords="financial calculators, currency converter, loan calculator, EMI calculator, tax calculator, compound interest calculator, mortgage calculator, investment calculator"
        canonical="https://www.fincalcbox.com/tools"
        jsonLd={jsonLd}
      />

      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            All Finance Tools
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore powerful financial calculators designed to help you make smart money decisions in FinCalcBox.
          </p>
        </div>

        {sections.map((section, sectionIndex) => {
          const sectionTools = toolsData.filter(
            (tool) => tool.section === section
          );
          const metadata = sectionMetadata[section];
          const SectionIcon = icons[metadata.icon];

          if (sectionTools.length === 0) return null;

          return (
            <section
              key={section}
              id={section}
              className="mb-20 md:mb-24 lg:mb-28 animate-fade-in scroll-mt-20"
              style={{ animationDelay: `${sectionIndex * 0.1}s` }}
            >
              <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16">
                {SectionIcon && (
                  <div className="inline-flex items-center justify-center 
                  w-16 h-16 md:w-20 md:h-20 
                  rounded-2xl bg-gradient-to-br from-primary to-accent 
                  text-white mb-6 shadow-lg">

                    <SectionIcon className="h-12 w-12 md:h-14 md:w-14" />
                  </div>

                )}

<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-foreground">
  {metadata.title}
</h2>

<p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl md:max-w-2xl mx-auto leading-relaxed">
  {metadata.description}
</p>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {sectionTools.map((tool, index) => {
                  const Icon = icons[tool.icon];

                  return (
                    <NeuCard
                      key={tool.id}
                      hover
                      className="text-center cursor-pointer animate-fade-in flex flex-col h-full transition-all duration-200"
                      style={{
                        animationDelay: `${(sectionIndex * 10 + index) * 0.05}s`,
                      }}
                      onClick={() => navigate(tool.route)}
                      aria-label={`Open ${tool.title} tool`}
                    >
                      <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-primary to-accent text-white mb-5 shadow-lg mx-auto">
                        {Icon ? (
                          <Icon
                            className="h-8 w-8 md:h-7 md:w-7"
                            aria-hidden="true"
                          />
                        ) : (
                          <span className="h-6 w-6 md:h-7 md:w-7" />
                        )}
                      </div>

                      <h3 className="text-lg md:text-xl font-bold mb-3 text-foreground leading-tight">
                        {tool.title}
                      </h3>

                      <p className="text-sm md:text-[0.95rem] text-muted-foreground mb-6 flex-grow leading-relaxed">
                        {tool.description}
                      </p>

                      <Link
                        to={tool.route}
                        className="inline-flex items-center justify-center gap-2 text-primary font-semibold hover:underline rounded transition-all duration-200 group"
                        aria-label={`Open ${tool.title} tool`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Open Tool</span>
                        <span className="transition-transform duration-200 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>

                    </NeuCard>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
