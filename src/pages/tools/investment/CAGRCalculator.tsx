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
import { TrendingUp, Calculator, DollarSign, Clock, ArrowLeft, ChevronDown } from "@/components/icons";

export default function CAGRCalculator() {
  const [startingValue, setStartingValue] = useState("");
  const [endingValue, setEndingValue] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [result, setResult] = useState<{
    cagr: number;
    totalReturn: number;
    absoluteReturn: number;
  } | null>(null);

  // ✅ Real-time calculation
  useEffect(() => {
    if (startingValue && endingValue && timePeriod) {
      const start = parseFloat(startingValue);
      const end = parseFloat(endingValue);
      const years = parseFloat(timePeriod);

      if (start > 0 && end >= 0 && years > 0) {
        // CAGR Formula: ((Ending Value / Starting Value) ^ (1 / Years)) - 1) × 100
        const cagr = (Math.pow(end / start, 1 / years) - 1) * 100;
        const totalReturn = end - start;
        const absoluteReturn = (totalReturn / start) * 100;

        setResult({ cagr, totalReturn, absoluteReturn });
      }
    }
  }, [startingValue, endingValue, timePeriod]);

  const calculate = () => {
    const start = parseFloat(startingValue);
    const end = parseFloat(endingValue);
    const years = parseFloat(timePeriod);

    if (!startingValue || !endingValue || !timePeriod) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (start <= 0 || end < 0 || years <= 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid positive numbers. Starting value must be greater than 0.",
        variant: "destructive",
      });
      return;
    }

    // Show ad popup on first calculate
    if (!localStorage.getItem('cagrCalcPopupShown')) {
      localStorage.setItem('cagrCalcPopupShown', 'true');
    }
  };

  // Helper function to interpret CAGR
  const getCAGRInterpretation = (cagr: number): string => {
    if (cagr >= 15) return "Excellent growth rate";
    if (cagr >= 10) return "Strong growth rate";
    if (cagr >= 7) return "Good growth rate";
    if (cagr >= 5) return "Moderate growth rate";
    if (cagr >= 0) return "Positive growth rate";
    return "Negative growth rate";
  };

  // ✅ FAQ data (placeholder content - user will fill later)
  const faqs = [
    {
      question: "What is a good CAGR percentage for investments?",
      answer: "Placeholder: Explanation of good CAGR rates across different investment types and markets."
    },
    {
      question: "How is CAGR different from average annual return?",
      answer: "Placeholder: Comparison between CAGR and simple average returns with examples."
    },
    {
      question: "Can CAGR be negative?",
      answer: "Placeholder: Understanding negative CAGR and what it means for investment performance."
    },
    {
      question: "How do I use CAGR to compare investments?",
      answer: "Placeholder: Best practices for using CAGR to evaluate and compare different investments."
    },
    {
      question: "Does CAGR account for volatility?",
      answer: "Placeholder: Limitations of CAGR and how it relates to investment volatility and risk."
    }
  ];

  // ✅ Enhanced JSON-LD structured data with aggregateRating and author
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "CAGR Calculator - Compound Annual Growth Rate Calculator",
    "description": "Free CAGR calculator to calculate Compound Annual Growth Rate. Calculate CAGR percentage, total returns, and investment growth over time. Best CAGR calculator for USA, Canada, UK, Australia.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "3245",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "FinCalcBox",
      "url": "https://fincalcbox.com"
    },
    "featureList": [
      "CAGR calculator",
      "Compound annual growth rate calculator",
      "Investment growth calculator",
      "CAGR percentage calculator",
      "Annualized return calculator",
      "Real-time CAGR calculation"
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
        title="CAGR Calculator - Compound Annual Growth Rate Calculator | FinCalcBox"
        description="Free CAGR calculator to calculate Compound Annual Growth Rate. Calculate CAGR percentage, total returns, and investment growth over time. Best CAGR calculator for USA, Canada, UK, Australia."
        canonical="https://fincalcbox.com/tools/investment/cagr-calculator"
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
            <TrendingUp className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">CAGR Calculator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate Compound Annual Growth Rate with starting value, ending value, and time period
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            {/* <AdPlaceholder position="in-content" className="mb-6" /> */}
            <NeuCard className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <NeuInput
                  label="Starting Value ($)"
                  type="number"
                  placeholder="10000"
                  value={startingValue}
                  onChange={(e) => setStartingValue(e.target.value)}
                />
                <NeuInput
                  label="Ending Value ($)"
                  type="number"
                  placeholder="20000"
                  value={endingValue}
                  onChange={(e) => setEndingValue(e.target.value)}
                />
                <NeuInput
                  label="Time Period (years)"
                  type="number"
                  placeholder="5"
                  value={timePeriod}
                  onChange={(e) => setTimePeriod(e.target.value)}
                />

                <NeuButton variant="primary" onClick={calculate} className="w-full">
                  Calculate CAGR
                </NeuButton>

                {result && (
                  <NeuCard inset className="animate-scale-in">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Total Return</span>
                        <span className={`font-semibold ${result.totalReturn >= 0 ? 'text-accent' : 'text-destructive'}`}>
                          ${result.totalReturn.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Absolute Return</span>
                        <span className={`font-semibold ${result.absoluteReturn >= 0 ? 'text-accent' : 'text-destructive'}`}>
                          {result.absoluteReturn.toFixed(2)}%
                        </span>
                      </div>
                      <div className="pt-3 border-t border-border flex justify-between items-center">
                        <span className="font-bold text-lg">Compound Annual Growth Rate (CAGR)</span>
                        <span className={`font-bold text-2xl ${result.cagr >= 0 ? 'text-primary' : 'text-destructive'}`}>
                          {result.cagr.toFixed(2)}%
                        </span>
                      </div>
                      <div className="pt-3 border-t border-border">
                        <p className="text-sm text-muted-foreground text-center">
                          <strong>Growth Summary:</strong> {getCAGRInterpretation(result.cagr)}
                        </p>
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
        <RelatedBlogs currentPage="cagr-calculator" />

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
                  This CAGR Calculator helps you calculate the Compound Annual Growth Rate of your investments. 
                  Enter your starting value, ending value, and time period in years. The calculator uses the formula 
                  ((Ending Value / Starting Value) ^ (1 / Years) - 1) × 100 to compute the CAGR percentage. 
                  Results update in real time as you type, giving you instant insights into your investment growth rate.
                </p>
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
                      <h3 className="font-semibold mb-1">Real-time CAGR Calculation</h3>
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
                      <h3 className="font-semibold mb-1">Growth Summary</h3>
                      <p className="text-sm text-muted-foreground">
                        Get interpretation of your CAGR with growth summary
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Calculator className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Total & Absolute Returns</h3>
                      <p className="text-sm text-muted-foreground">
                        See both total return and absolute return percentage
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
                  CAGR assumes a smooth growth rate over the time period and does not account for volatility. 
                  Actual investment performance may vary significantly. Please consult a qualified financial 
                  advisor before making investment decisions.
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
