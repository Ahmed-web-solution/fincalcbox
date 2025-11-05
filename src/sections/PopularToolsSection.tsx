import { useNavigate, NavLink } from "react-router-dom";
import NeuButton from "@/components/NeuButton";
import NeuCard from "@/components/NeuCard";
import { toolsData } from "@/data/toolsData";
import {ArrowRight, iconMap as lazyIconMap } from "@/components/icons";
import { useEffect, useState } from "react";

export default function PopularToolsSection() {
  const navigate = useNavigate();
  const [icons, setIcons] = useState<Record<string, any>>({});

  useEffect(() => {
    // Lazy-load the few icons we need only after mount
    (async () => {
      const entries = await Promise.all(
        toolsData.slice(0, 5).map(async (t) => {
          const loader = (lazyIconMap as any)[t.icon];
          if (!loader) return [t.icon, null] as const;
          const mod = await loader();
          return [t.icon, mod.default] as const;
        })
      );
      const map: Record<string, any> = {};
      for (const [k, v] of entries) map[k] = v;
      setIcons(map);
    })();
  }, []);

  return (
    <section className="py-20 md:py-28 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Finance Tools</h2>
          <p className="text-lg text-muted-foreground">Quick access to our most used calculators</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolsData.slice(0, 5).map((tool, index) => {
            const Icon = icons[tool.icon];
            return (
              <NeuCard
                key={tool.id}
                hover
                className="text-center cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => navigate(tool.route)}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-white mb-4">
                  {Icon ? <Icon className="h-8 w-8" /> : <span className="h-8 w-8" />}
                </div>
                <h3 className="text-xl font-semibold mb-3">{tool.title}</h3>
                <p className="text-muted-foreground mb-4">{tool.description}</p>
                <button className="text-primary font-medium hover:underline">Open Tool →</button>
              </NeuCard>
            );
          })}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="text-center mt-12">
            <NavLink to="/tools">
              <NeuButton
                variant="primary"
                size="lg"
                className="flex items-center justify-center gap-2 group transition-all duration-200"
              >
                <span>Explore Tools</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
              </NeuButton>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}


