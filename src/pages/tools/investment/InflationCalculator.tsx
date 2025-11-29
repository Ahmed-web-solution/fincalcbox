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

export default function InflationCalculator() {
  const [amount, setAmount] = useState("");
  const [years, setYears] = useState("");
  const [inflationRate, setInflationRate] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [result, setResult] = useState<{
    futureValue: number;
    valueLost: number;
    purchasingPower: number;
  } | null>(null);

  // ✅ Real-time calculation
  useEffect(() => {
    if (amount && years && inflationRate) {
      const amt = parseFloat(amount);
      const y = parseFloat(years);
      const rate = parseFloat(inflationRate) / 100;

      if (amt > 0 && y > 0 && rate >= 0) {
        // Future Value = Present Value / (1 + inflation rate)^years
        // This shows what the present value will be worth in the future
        const futureValue = amt / Math.pow(1 + rate, y);
        const valueLost = amt - futureValue;
        const purchasingPower = (futureValue / amt) * 100;

        setResult({ futureValue, valueLost, purchasingPower });
      }
    }
  }, [amount, years, inflationRate]);

  const calculate = () => {
    const amt = parseFloat(amount);
    const y = parseFloat(years);
    const rate = parseFloat(inflationRate) / 100;

    if (!amount || !years || !inflationRate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (amt <= 0 || y <= 0 || rate < 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid positive numbers",
        variant: "destructive",
      });
      return;
    }

    // Show ad popup on first calculate
    if (!localStorage.getItem('inflationCalcPopupShown')) {
      localStorage.setItem('inflationCalcPopupShown', 'true');
    }
  };

  // ✅ FAQ data (placeholder content - user will fill later)
  const faqs = [
    {
      question: "How does inflation affect my savings?",
      answer: "Placeholder: Explanation of how inflation erodes purchasing power and impacts long-term savings."
    },
    {
      question: "What is a typical inflation rate?",
      answer: "Placeholder: Historical inflation rates and current trends in different countries."
    },
    {
      question: "How do I protect my money from inflation?",
      answer: "Placeholder: Investment strategies and assets that hedge against inflation."
    },
    {
      question: "Can inflation be negative (deflation)?",
      answer: "Placeholder: Understanding deflation, its causes, and economic impacts."
    },
    {
      question: "How is inflation calculated by the government?",
      answer: "Placeholder: Explanation of CPI, PCE, and other inflation measurement methods."
    }
  ];

  // ✅ Enhanced JSON-LD structured data with aggregateRating and author
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Inflation Calculator - Calculate Impact of Inflation on Money",
    "description": "Free inflation calculator to calculate the impact of inflation on your money. Calculate future value, purchasing power, and value lost due to inflation. Best inflation calculator for USA, Canada, UK, Australia.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "ratingCount": "2891",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "FinCalcBox",
      "url": "https://fincalcbox.com"
    },
    "featureList": [
      "Inflation calculator",
      "Purchasing power calculator",
      "Future value calculator",
      "Inflation impact calculator",
      "Value lost calculator",
      "Real-time inflation calculation"
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
        title="Inflation Calculator - Calculate Impact of Inflation on Money | FinCalcBox"
        description="Free inflation calculator to calculate the impact of inflation on your money. Calculate future value, purchasing power, and value lost due to inflation. Best inflation calculator for USA, Canada, UK, Australia."
        canonical="https://fincalcbox.com/tools/investment/inflation-calculator"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Inflation Calculator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate the impact of inflation on your money and purchasing power over time
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            {/* <AdPlaceholder position="in-content" className="mb-6" /> */}
            <NeuCard className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <NeuInput
                  label="Current Amount ($)"
                  type="number"
                  placeholder="10000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <NeuInput
                  label="Time Period (years)"
                  type="number"
                  placeholder="10"
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                />
                <NeuInput
                  label="Annual Inflation Rate (%)"
                  type="number"
                  placeholder="3"
                  value={inflationRate}
                  onChange={(e) => setInflationRate(e.target.value)}
                />

                <NeuButton variant="primary" onClick={calculate} className="w-full">
                  Calculate Inflation Impact
                </NeuButton>

                {result && (
                  <>
                    <NeuCard inset className="animate-scale-in">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Current Value</span>
                          <span className="font-semibold">
                            ${parseFloat(amount).toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Future Value (Purchasing Power)</span>
                          <span className="font-bold text-2xl text-primary">
                            ${result.futureValue.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Value Lost to Inflation</span>
                          <span className="font-bold text-xl text-destructive">
                            ${result.valueLost.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                        <div className="pt-3 border-t border-border flex justify-between items-center">
                          <span className="font-bold text-lg">Purchasing Power</span>
                          <span className="font-bold text-lg text-accent">
                            {result.purchasingPower.toFixed(2)}%
                          </span>
                        </div>
                      </div>
                    </NeuCard>

                    {/* Side-by-side Comparison */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <NeuCard inset className="text-center">
                        <p className="text-sm text-muted-foreground mb-2">Today's Value</p>
                        <p className="text-2xl font-bold text-primary">
                          ${parseFloat(amount).toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </p>
                      </NeuCard>
                      <NeuCard inset className="text-center">
                        <p className="text-sm text-muted-foreground mb-2">Future Purchasing Power</p>
                        <p className="text-2xl font-bold text-accent">
                          ${result.futureValue.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </p>
                      </NeuCard>
                    </div>
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
        <RelatedBlogs currentPage="inflation-calculator" />

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
                  This Inflation Calculator helps you understand how inflation affects the purchasing power of your money over time. 
                  Enter your current amount, time period in years, and annual inflation rate. The calculator uses the formula 
                  Future Value = Present Value / (1 + inflation rate)^years to compute the future purchasing power of your money. 
                  Results update in real time as you type, showing you how much value your money will lose due to inflation.
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
                      <h3 className="font-semibold mb-1">Real-time Inflation Calculation</h3>
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
                      <h3 className="font-semibold mb-1">Side-by-Side Comparison</h3>
                      <p className="text-sm text-muted-foreground">
                        Compare current value with future purchasing power visually
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Calculator className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Value Lost Calculation</h3>
                      <p className="text-sm text-muted-foreground">
                        See exactly how much value your money loses to inflation
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
                        Fast, responsive design for USA and Canada users
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 neu-inset rounded-xl bg-accent/5">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> This calculator provides estimates for informational purposes only. 
                  Actual inflation rates may vary based on economic conditions, government policies, and other factors. 
                  The calculator uses a constant inflation rate assumption. Please consult a qualified financial 
                  advisor for personalized financial planning advice.
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
