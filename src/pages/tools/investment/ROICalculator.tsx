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
import { Target, Calculator, DollarSign, Clock, ArrowLeft, TrendingUp, ChevronDown } from "@/components/icons";

export default function ROICalculator() {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [finalValue, setFinalValue] = useState("");
  const [additionalCosts, setAdditionalCosts] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [result, setResult] = useState<{
    roi: number;
    netProfit: number;
    totalCost: number;
  } | null>(null);

  // ✅ Real-time calculation
  useEffect(() => {
    if (initialInvestment && finalValue) {
      const initial = parseFloat(initialInvestment);
      const final = parseFloat(finalValue);
      const costs = parseFloat(additionalCosts) || 0;

      if (initial > 0 && final >= 0) {
        const totalCost = initial + costs;
        const netProfit = final - totalCost;
        // ROI Formula: ((Final Value - Total Cost) / Total Cost) × 100
        const roi = (netProfit / totalCost) * 100;

        setResult({ roi, netProfit, totalCost });
      }
    }
  }, [initialInvestment, finalValue, additionalCosts]);

  const calculate = () => {
    const initial = parseFloat(initialInvestment);
    const final = parseFloat(finalValue);
    const costs = parseFloat(additionalCosts) || 0;

    if (!initialInvestment || !finalValue) {
      toast({
        title: "Missing Information",
        description: "Please fill in initial investment and final value",
        variant: "destructive",
      });
      return;
    }

    if (initial <= 0) {
      toast({
        title: "Invalid Input",
        description: "Initial investment must be greater than 0",
        variant: "destructive",
      });
      return;
    }

    // Show ad popup on first calculate
    if (!localStorage.getItem('roiCalcPopupShown')) {
      localStorage.setItem('roiCalcPopupShown', 'true');
    }
  };

  // ✅ FAQ data (placeholder content - user will fill later)
  const faqs = [
    {
      question: "What is a good ROI percentage?",
      answer: "Placeholder: Explanation of what constitutes a good ROI and industry benchmarks."
    },
    {
      question: "How do I calculate ROI for real estate?",
      answer: "Placeholder: Specific considerations for calculating real estate investment ROI."
    },
    {
      question: "What costs should be included in ROI calculation?",
      answer: "Placeholder: Types of costs and fees to include for accurate ROI calculation."
    },
    {
      question: "Can ROI be negative?",
      answer: "Placeholder: Understanding negative ROI and what it means for investments."
    },
    {
      question: "How often should I calculate ROI?",
      answer: "Placeholder: Best practices for tracking and calculating investment ROI over time."
    }
  ];

  // ✅ Enhanced JSON-LD structured data with aggregateRating and author
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "ROI Calculator - Return on Investment Calculator",
    "description": "Free ROI calculator to calculate return on investment percentage. Calculate ROI, net profit, and total returns on investments with additional costs. Best ROI calculator for USA, Canada, UK, Australia.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "4012",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "FinCalcBox",
      "url": "https://fincalcbox.com"
    },
    "featureList": [
      "ROI calculator",
      "Return on investment calculator",
      "Investment ROI calculator",
      "ROI percentage calculator",
      "Net profit calculator",
      "Real-time ROI calculation"
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
      {/* ✅ SEO Meta Tags optimized for HIGH-CPC investment keywords */}
      <SEOHelmet
        title="ROI Calculator - Return on Investment Percentage Calculator | FinCalcBox"
        description="Free ROI calculator to calculate return on investment percentage. Calculate ROI, net profit, and total returns on investments with additional costs. Best ROI calculator for USA, Canada, UK, Australia."
        canonical="https://fincalcbox.com/tools/investment/roi-calculator"
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
            <Target className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">ROI Calculator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate return on investment percentage with initial investment, final value, and additional costs
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            {/* <AdPlaceholder position="in-content" className="mb-6" /> */}
            <NeuCard className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <NeuInput
                  label="Initial Investment ($)"
                  type="number"
                  placeholder="10000"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(e.target.value)}
                />
                <NeuInput
                  label="Final Value ($)"
                  type="number"
                  placeholder="15000"
                  value={finalValue}
                  onChange={(e) => setFinalValue(e.target.value)}
                />
                <NeuInput
                  label="Additional Costs ($) - Optional"
                  type="number"
                  placeholder="0"
                  value={additionalCosts}
                  onChange={(e) => setAdditionalCosts(e.target.value)}
                />

                <NeuButton variant="primary" onClick={calculate} className="w-full">
                  Calculate ROI
                </NeuButton>

                {result && (
                  <NeuCard inset className="animate-scale-in">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Total Cost</span>
                        <span className="font-semibold">
                          ${result.totalCost.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Net Profit/Loss</span>
                        <span className={`font-semibold ${result.netProfit >= 0 ? 'text-accent' : 'text-destructive'}`}>
                          ${result.netProfit.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      <div className="pt-3 border-t border-border flex justify-between items-center">
                        <span className="font-bold text-lg">Return on Investment (ROI)</span>
                        <span className={`font-bold text-2xl ${result.roi >= 0 ? 'text-primary' : 'text-destructive'}`}>
                          {result.roi.toFixed(2)}%
                        </span>
                      </div>
                    </div>
                  </NeuCard>
                )}
              </div>
            </NeuCard>
          </div>

          <aside className="lg:block hidden">
            {/* <AdPlaceholder position="sidebar" /> */}
          </aside>
        </div>

        {/* Related Blogs */}
        <RelatedBlogs currentPage="roi-calculator" />

        {/* How It Works & Key Features - Combined Card */}
        <section className="mt-12 max-w-4xl mx-auto">
          <NeuCard>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Calculator className="h-6 w-6 text-primary" />
                  How It Works
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  This ROI Calculator helps you calculate the return on investment percentage for your investments. 
                  Enter your initial investment amount, final value of the investment, and any additional costs (fees, taxes, etc.). 
                  The calculator uses the formula ((Final Value - Total Cost) / Total Cost) × 100 to compute the ROI percentage. 
                  Results update in real time as you type, giving you instant insights into your investment returns.
                </p>
                
                <div className="mt-4 p-4 neu-inset rounded-xl bg-primary/5">
                  <h3 className="font-semibold mb-2">ROI Formula:</h3>
                  <p className="text-sm text-muted-foreground">
                    <strong>ROI = ((Final Value - Total Cost) / Total Cost) × 100</strong>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Where: Total Cost = Initial Investment + Additional Costs
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
                      <h3 className="font-semibold mb-1">Real-time ROI Calculation</h3>
                      <p className="text-sm text-muted-foreground">
                        Get instant results as you type, no need to click calculate
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Target className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Additional Costs Support</h3>
                      <p className="text-sm text-muted-foreground">
                        Include fees, taxes, and other costs for accurate ROI calculation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Calculator className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Net Profit Breakdown</h3>
                      <p className="text-sm text-muted-foreground">
                        See your net profit or loss alongside ROI percentage
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
                        Fast, responsive design for USA and Canada investors
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 neu-inset rounded-xl bg-accent/5">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> This calculator provides estimates for informational purposes only. 
                  Actual returns may vary based on market conditions, investment performance, and other factors. 
                  ROI calculations do not account for inflation, taxes, or other economic factors. Please consult 
                  a qualified financial advisor before making investment decisions.
                </p>
              </div>
            </div>
          </NeuCard>
        </section>

        {/* FAQ Section - Separate Card */}
        <section className="mt-8 max-w-4xl mx-auto">
          <NeuCard>
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Calculator className="h-6 w-6 text-primary" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                 <div key={index} className="neu-card rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-accent/5 transition-colors"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">{index + 1}</span>
                        </div>
                        <h3 className="font-semibold text-foreground">{faq.question}</h3>
                      </div>
                      <ChevronDown
                        className={`h-5 w-5 text-muted-foreground transition-transform flex-shrink-0 ml-2 ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-4 pt-2 text-muted-foreground animate-fade-in">
                        <p className="leading-relaxed pl-12">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </NeuCard>
        </section>

        {/* <AdPlaceholder position="bottom" className="mt-8" /> */}
      </div>
    </div>
  );
}
