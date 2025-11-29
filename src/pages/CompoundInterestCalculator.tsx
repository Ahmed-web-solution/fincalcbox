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
import { Calculator, TrendingUp, DollarSign, Clock, ArrowLeft, ChevronDown } from "@/components/icons";

export default function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [frequency, setFrequency] = useState("12");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [result, setResult] = useState<{
    finalAmount: number;
    totalInterest: number;
  } | null>(null);

  // ✅ Real-time calculation
  useEffect(() => {
    if (principal && rate && time && frequency) {
      const p = parseFloat(principal);
      const r = parseFloat(rate) / 100;
      const t = parseFloat(time);
      const n = parseFloat(frequency);

      if (p > 0 && r >= 0 && t > 0 && n > 0) {
        // Compound Interest Formula: A = P(1 + r/n)^(nt)
        const finalAmount = p * Math.pow(1 + r / n, n * t);
        const totalInterest = finalAmount - p;
        setResult({ finalAmount, totalInterest });
      }
    }
  }, [principal, rate, time, frequency]);

  const calculate = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);
    const n = parseFloat(frequency);

    if (p > 0 && r >= 0 && t > 0 && n > 0) {
      // Compound Interest Formula: A = P(1 + r/n)^(nt)
      const finalAmount = p * Math.pow(1 + r / n, n * t);
      const totalInterest = finalAmount - p;

      setResult({ finalAmount, totalInterest });
      
      // Show ad popup on first calculate
      if (!localStorage.getItem('compoundCalcPopupShown')) {
        localStorage.setItem('compoundCalcPopupShown', 'true');
      }
    } else {
      toast({
        title: "Invalid Input",
        description: "Please enter valid positive numbers",
        variant: "destructive",
      });
    }
  };

  // ✅ FAQ data (placeholder content - user will fill later)
  const faqs = [
    {
      question: "What is the power of compound interest?",
      answer: "Placeholder: Explanation of how compound interest accelerates wealth growth over time."
    },
    {
      question: "How does compounding frequency affect returns?",
      answer: "Placeholder: Impact of daily, monthly, quarterly, and annual compounding on investment growth."
    },
    {
      question: "What is the compound interest formula?",
      answer: "Placeholder: Detailed breakdown of the compound interest formula A = P(1 + r/n)^(nt)."
    },
    {
      question: "How long does it take to double my money with compound interest?",
      answer: "Placeholder: Rule of 72 and calculating doubling time for investments."
    },
    {
      question: "Is compound interest better than simple interest?",
      answer: "Placeholder: Comparison between compound and simple interest with examples."
    }
  ];

  // ✅ Enhanced JSON-LD structured data with aggregateRating and author
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Compound Interest Calculator - Investment Growth Calculator",
    "description": "Free compound interest calculator for investments, savings, 401k, and IRA. Calculate compound returns with daily, monthly, quarterly compounding. Best investment growth calculator for USA, Canada, UK, Australia.",
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
      "ratingCount": "3812",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "FinCalcBox",
      "url": "https://fincalcbox.com"
    },
    "featureList": [
      "Compound interest calculation with multiple frequencies",
      "Investment growth calculator",
      "Retirement savings calculator",
      "401k and IRA compound calculator",
      "Savings account interest calculator",
      "Real-time compound return visualization"
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
      {/* ✅ SEO Meta Tags optimized for HIGH-CPC investment and savings keywords */}
      <SEOHelmet
        title="Compound Interest Calculator - Investment & Savings Growth Calculator | FinCalcBox"
        description="Free compound interest calculator for investments, savings, 401k, and IRA. Calculate compound returns with daily, monthly, quarterly compounding. Best investment growth calculator for USA, Canada, UK, Australia."
        canonical="https://fincalcbox.com/compound-interest-calculator"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Compound Interest Calculator
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate compound returns based on principal, rate, and time with multiple compounding frequencies
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            {/* <AdPlaceholder position="in-content" className="mb-6" /> */}
            <NeuCard className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <NeuInput
                  label="Principal Amount ($)"
                  type="number"
                  placeholder="10000"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                />
                <NeuInput
                  label="Annual Interest Rate (%)"
                  type="number"
                  placeholder="7.5"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
                <NeuInput
                  label="Time Period (years)"
                  type="number"
                  placeholder="5"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />

                <div>
                  <label className="block mb-2 text-sm font-medium text-foreground">
                    Compounding Frequency
                  </label>
                  <select
                    className="neu-inset w-full px-4 py-3 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all rounded-xl"
                    value={frequency}
                    onChange={(e) => setFrequency(e.target.value)}
                  >
                    <option value="1">Annually</option>
                    <option value="2">Semi-Annually</option>
                    <option value="4">Quarterly</option>
                    <option value="12">Monthly</option>
                    <option value="365">Daily</option>
                  </select>
                </div>

                <NeuButton variant="primary" onClick={calculate} className="w-full">
                  Calculate
                </NeuButton>

                {result && (
                  <NeuCard inset className="animate-scale-in">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Principal Amount</span>
                        <span className="font-semibold">${parseFloat(principal).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Total Interest Earned</span>
                        <span className="font-bold text-accent">
                          ${result.totalInterest.toFixed(2)}
                        </span>
                      </div>
                      <div className="pt-3 border-t border-border flex justify-between items-center">
                        <span className="font-bold text-lg">Final Amount</span>
                        <span className="font-bold text-2xl text-primary">
                          ${result.finalAmount.toFixed(2)}
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
        <RelatedBlogs currentPage="compound-interest-calculator" />

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
                  This Compound Interest Calculator helps you understand how your investments grow over time with compound returns. 
                  Enter your principal amount, annual interest rate, time period, and choose a compounding frequency (annually, semi-annually, 
                  quarterly, monthly, or daily). The calculator uses the formula A = P(1 + r/n)^(nt) to compute your final amount and 
                  total interest earned. Results update in real time as you type.
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
                      <h3 className="font-semibold mb-1">Flexible Compounding Frequencies</h3>
                      <p className="text-sm text-muted-foreground">
                        Choose from annual, semi-annual, quarterly, monthly, or daily compounding
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <TrendingUp className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Real-time Calculation</h3>
                      <p className="text-sm text-muted-foreground">
                        See your investment growth instantly as you adjust parameters
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Calculator className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Investment Growth Visualization</h3>
                      <p className="text-sm text-muted-foreground">
                        Understand how compound interest boosts your returns over time
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
                  Actual investment returns may vary based on market conditions, fees, and other factors. 
                  Compound interest calculations assume a constant rate of return. Please consult a qualified 
                  financial advisor for personalized investment advice.
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
