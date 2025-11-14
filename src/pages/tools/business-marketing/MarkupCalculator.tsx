import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NeuInput from "@/components/NeuInput";
import NeuButton from "@/components/NeuButton";
import NeuCard from "@/components/NeuCard";
import SEOHelmet from "@/components/SEOHelmet";
// import AdPlaceholder from "@/components/AdPlaceholder";
// import AdPopup from "@/components/AdPopup";
import RelatedBlogs from "@/components/RelatedBlogs";
import { toast } from "@/hooks/use-toast";
import { Calculator, DollarSign, TrendingUp, Clock, ArrowLeft } from "@/components/icons";

export default function MarkupCalculator() {
  const [costPrice, setCostPrice] = useState("");
  const [markupRate, setMarkupRate] = useState("");
  const [result, setResult] = useState<{
    sellingPrice: number;
    markupAmount: number;
    profitPercentage: number;
  } | null>(null);

  // ✅ Real-time calculation
  useEffect(() => {
    if (costPrice && markupRate) {
      const cost = parseFloat(costPrice);
      const markup = parseFloat(markupRate) / 100;

      if (cost > 0 && markup >= 0) {
        // Markup Formula: Selling Price = Cost Price × (1 + Markup Rate)
        const sellingPrice = cost * (1 + markup);
        const markupAmount = sellingPrice - cost;
        // Profit % = (Markup Amount / Selling Price) × 100
        const profitPercentage = (markupAmount / sellingPrice) * 100;

        setResult({ sellingPrice, markupAmount, profitPercentage });
      }
    }
  }, [costPrice, markupRate]);

  const calculate = () => {
    const cost = parseFloat(costPrice);
    const markup = parseFloat(markupRate) / 100;

    if (!costPrice || !markupRate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (cost <= 0 || markup < 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid positive numbers",
        variant: "destructive",
      });
      return;
    }

    // Show ad popup on first calculate
    if (!localStorage.getItem('markupCalcPopupShown')) {
      localStorage.setItem('markupCalcPopupShown', 'true');
    }
  };

  // ✅ JSON-LD structured data - WebApplication schema for markup calculator
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Markup Calculator - Product Markup Calculator",
    "description": "Free markup calculator to calculate markup percentage on products. Calculate selling price, markup amount, and profit percentage based on cost price and markup rate. Best markup calculator for USA, Canada, UK, Australia.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Markup calculator",
      "Product markup calculator",
      "Markup percentage calculator",
      "Selling price calculator",
      "Profit percentage calculator",
      "Real-time markup calculation"
    ],
    "audience": {
      "@type": "Audience",
      "geographicArea": {
        "@type": "Place",
        "name": "United States, Canada, United Kingdom, Australia"
      }
    }
  };

  return (
    <div className="min-h-screen py-12 px-6">
      {/* ✅ SEO Meta Tags optimized for HIGH-CPC business keywords */}
      <SEOHelmet
        title="Markup Calculator - Product Markup & Profit Calculator | FinCalcBox"
        description="Free markup calculator to calculate markup percentage on products. Calculate selling price, markup amount, and profit percentage based on cost price and markup rate. Best markup calculator for USA, Canada, UK, Australia."
        keywords="markup calculator, product markup calculator, markup percentage calculator, selling price calculator, profit percentage calculator, business markup calculator, retail markup calculator, wholesale markup calculator"
        canonical="https://www.fincalcbox.com/tools/business-marketing/markup-calculator"
        jsonLd={jsonLd}
      />

      <div className="mx-auto max-w-7xl">
        {/* Back to Tools */}
        <div className="mb-6">
          <NavLink to="/tools">
            <NeuButton className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Tools
            </NeuButton>
          </NavLink>
        </div>
        {/* <AdPlaceholder position="top" className="mb-8" /> */}

        {/* Page Header with Icon */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent text-white mb-4 shadow-lg">
            <Calculator className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Markup Calculator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate markup percentage on products based on cost price and markup rate
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <NeuCard className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <NeuInput
                  label="Cost Price ($)"
                  type="number"
                  placeholder="100"
                  value={costPrice}
                  onChange={(e) => setCostPrice(e.target.value)}
                />
                <NeuInput
                  label="Markup Rate (%)"
                  type="number"
                  placeholder="25"
                  value={markupRate}
                  onChange={(e) => setMarkupRate(e.target.value)}
                />

                <NeuButton variant="primary" onClick={calculate} className="w-full">
                  Calculate Markup
                </NeuButton>

                {result && (
                  <>
                    <NeuCard inset className="animate-scale-in">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Cost Price</span>
                          <span className="font-semibold">
                            ${parseFloat(costPrice).toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Markup Amount</span>
                          <span className="font-bold text-xl text-accent">
                            ${result.markupAmount.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Profit Percentage</span>
                          <span className="font-semibold">
                            {result.profitPercentage.toFixed(2)}%
                          </span>
                        </div>
                        <div className="pt-3 border-t border-border flex justify-between items-center">
                          <span className="font-bold text-lg">Selling Price</span>
                          <span className="font-bold text-2xl text-primary">
                            ${result.sellingPrice.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                      </div>
                    </NeuCard>

                    {/* Result Summary Card */}
                    <NeuCard className="mt-4">
                      <h3 className="font-semibold mb-3">Calculation Summary</h3>
                      <div className="space-y-2 text-sm">
                        <p className="text-muted-foreground">
                          <strong>Cost Price:</strong> ${parseFloat(costPrice).toFixed(2)}
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Markup Rate:</strong> {markupRate}%
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Markup Amount:</strong> ${parseFloat(costPrice).toFixed(2)} × {markupRate}% = ${result.markupAmount.toFixed(2)}
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Selling Price:</strong> ${parseFloat(costPrice).toFixed(2)} + ${result.markupAmount.toFixed(2)} = ${result.sellingPrice.toFixed(2)}
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Profit Margin:</strong> {result.profitPercentage.toFixed(2)}% of selling price
                        </p>
                      </div>
                    </NeuCard>
                  </>
                )}
              </div>
            </NeuCard>
          </div>

          <aside className="lg:block hidden">
            {/* <AdPlaceholder position="sidebar" /> */}
          </aside>
        </div>

        {/* Related Blogs */}
        <RelatedBlogs currentPage="markup-calculator" />

        {/* "How It Works" and "Key Features" Section */}
        <section className="mt-12 max-w-4xl mx-auto">
          <NeuCard>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Calculator className="h-6 w-6 text-primary" />
                  How It Works
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  This Markup Calculator helps you calculate the markup percentage on your products. 
                  Enter your cost price and desired markup rate percentage. The calculator uses the formula 
                  Selling Price = Cost Price × (1 + Markup Rate) to compute the selling price, markup amount, 
                  and profit percentage. Results update in real time as you type, with a detailed calculation 
                  summary showing all the steps.
                </p>
                
                <div className="mt-4 p-4 neu-inset rounded-xl bg-primary/5">
                  <h3 className="font-semibold mb-2">Markup Formula:</h3>
                  <p className="text-sm text-muted-foreground">
                    <strong>Selling Price = Cost Price × (1 + Markup Rate)</strong>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>Markup Amount = Cost Price × Markup Rate</strong>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>Profit Percentage = (Markup Amount / Selling Price) × 100</strong>
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-accent" />
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Real-time Markup Calculation</h3>
                      <p className="text-sm text-muted-foreground">
                        Get instant results as you type, no need to click calculate
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <TrendingUp className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Detailed Explanation</h3>
                      <p className="text-sm text-muted-foreground">
                        See step-by-step calculation breakdown with formulas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Calculator className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Profit Percentage</h3>
                      <p className="text-sm text-muted-foreground">
                        Calculate profit percentage based on selling price
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Optimized for SEO</h3>
                      <p className="text-sm text-muted-foreground">
                        Fast, responsive design for USA and Canada businesses
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NeuCard>
        </section>

        {/* <AdPlaceholder position="bottom" className="mt-8" /> */}
      </div>
    </div>
  );
}
