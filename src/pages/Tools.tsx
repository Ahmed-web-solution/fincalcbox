// ✅ path: src/pages/Tools.tsx
import { Link, useNavigate } from "react-router-dom";
import NeuCard from "@/components/NeuCard";
import SEOHelmet from "@/components/SEOHelmet";
// import AdPlaceholder from "@/components/AdPlaceholder";
import { toolsData } from "@/data/toolsData";
import { Globe, Calculator, Calendar, Receipt, TrendingUp } from "@/components/icons";

const iconMap = {
  Globe: Globe,
  Calculator: Calculator,
  Calendar: Calendar,
  Receipt: Receipt,
  TrendingUp: TrendingUp,
};

export default function Tools() {
  const navigate = useNavigate();

  // JSON-LD structured data
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
      "url": `https://www.fincalcbox.com${tool.route}`
    }))
  };

  return (
    <div className="min-h-screen py-12 px-6">
      {/* ✅ SEO improvements */}
      <SEOHelmet
        title="Financial Calculators & Tools - FinCalcBox"
        description="Free online financial calculators including currency converter, loan calculator, EMI calculator, income tax calculator, and compound interest calculator. Make smarter money decisions for USA and Canada."
        keywords="financial calculators, currency converter, loan calculator, EMI calculator, tax calculator, compound interest calculator, mortgage calculator, investment calculator"
        canonical="https://www.fincalcbox.com/tools"
        jsonLd={jsonLd}
      />

      <div className="mx-auto max-w-7xl">
        {/* <AdPlaceholder position="top" className="mb-8" /> */}

        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            All Finance Tools
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powerful calculators to help you make informed financial decisions.
            From currency conversion to tax estimation, we’ve got you covered
            with accurate, easy-to-use tools.
          </p>
        </div>

        {/* ✅ Tool cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolsData.map((tool, index) => {
            const Icon = iconMap[tool.icon as keyof typeof iconMap];
            return (
              <NeuCard
                key={tool.id}
                hover
                className="text-center cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => navigate(tool.route)}
                aria-label={`Open ${tool.title} tool`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-white mb-4 shadow-lg">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{tool.title}</h3>
                <p className="text-muted-foreground mb-4">{tool.description}</p>

                {/* ✅ Fixed: proper navigation for button */}
                <Link
                  to={tool.route}
                  className="text-primary font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
                  aria-label={`Open ${tool.title} tool`}
                >
                  Open Tool →
                </Link>
              </NeuCard>
            );
          })}
        </div>

        {/* <AdPlaceholder position="bottom" className="mt-12" /> */}
      </div>
    </div>
  );
}
