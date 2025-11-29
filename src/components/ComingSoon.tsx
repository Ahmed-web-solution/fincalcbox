import { NavLink, useLocation } from "react-router-dom";
import NeuCard from "@/components/NeuCard";
import SEOHelmet from "@/components/SEOHelmet";
import { ArrowLeft, Clock } from "@/components/icons";

interface ComingSoonProps {
  title: string;
  description?: string;
}

export default function ComingSoon({ title, description }: ComingSoonProps) {
  const location = useLocation();
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": `${title} - FinCalcBox`,
    "description": description || `${title} calculator coming soon`,
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <SEOHelmet
        title={`${title} - FinCalcBox`}
        description={description || `${title} calculator coming soon. Free financial calculator tools.`}
        keywords={`${title}, financial calculator, calculator tool`}
        canonical={`https://www.fincalcbox.com${location.pathname}`}
        jsonLd={jsonLd}
      />

      <div className="mx-auto max-w-4xl">
        <NavLink
          to="/tools"
          className="inline-flex items-center gap-2 text-primary font-medium hover:underline mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Tools
        </NavLink>

        <NeuCard className="text-center py-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-primary mb-6">
            <Clock className="h-10 w-10" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-muted-foreground mb-6">
            This tool is coming soon!
          </p>
          <p className="text-muted-foreground max-w-md mx-auto">
            We're working hard to bring you this calculator. Check back soon for updates.
          </p>
        </NeuCard>
      </div>
    </div>
  );
}

