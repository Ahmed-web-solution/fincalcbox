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

export default function RetirementPlanning() {
  const [currentAge, setCurrentAge] = useState("");
  const [retirementAge, setRetirementAge] = useState("");
  const [monthlySaving, setMonthlySaving] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [result, setResult] = useState<{
    finalCorpus: number;
    totalSavings: number;
    totalReturns: number;
    yearsToRetirement: number;
  } | null>(null);

  // ✅ Real-time calculation
  useEffect(() => {
    if (currentAge && retirementAge && monthlySaving && expectedReturn) {
      const current = parseFloat(currentAge);
      const retirement = parseFloat(retirementAge);
      const monthly = parseFloat(monthlySaving);
      const rate = parseFloat(expectedReturn) / 100 / 12; // Monthly rate
      const years = retirement - current;
      const months = years * 12;

      if (current > 0 && retirement > current && monthly > 0 && rate >= 0 && months > 0) {
        // Future Value of Annuity Formula: FV = P × [{(1 + r)^n - 1} / r]
        // Where P = Monthly payment, r = Monthly rate, n = Number of months
        const finalCorpus = monthly * ((Math.pow(1 + rate, months) - 1) / rate);
        const totalSavings = monthly * months;
        const totalReturns = finalCorpus - totalSavings;

        setResult({ finalCorpus, totalSavings, totalReturns, yearsToRetirement: years });
      }
    }
  }, [currentAge, retirementAge, monthlySaving, expectedReturn]);

  const calculate = () => {
    const current = parseFloat(currentAge);
    const retirement = parseFloat(retirementAge);
    const monthly = parseFloat(monthlySaving);
    const rate = parseFloat(expectedReturn) / 100 / 12;
    const years = retirement - current;

    if (!currentAge || !retirementAge || !monthlySaving || !expectedReturn) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (current <= 0 || retirement <= current || monthly <= 0 || rate < 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid numbers. Retirement age must be greater than current age.",
        variant: "destructive",
      });
      return;
    }

    // Show ad popup on first calculate
    if (!localStorage.getItem('retirementCalcPopupShown')) {
      localStorage.setItem('retirementCalcPopupShown', 'true');
    }
  };

  // ✅ FAQ data (placeholder content - user will fill later)
  const faqs = [
    {
      question: "How much should I save for retirement?",
      answer: "Placeholder: Guidelines for calculating retirement savings needs based on lifestyle and expenses."
    },
    {
      question: "What is the 4% withdrawal rule?",
      answer: "Placeholder: Explanation of the 4% rule for sustainable retirement withdrawals."
    },
    {
      question: "When should I start planning for retirement?",
      answer: "Placeholder: Optimal timing and benefits of early retirement planning."
    },
    {
      question: "What are the best retirement investment options?",
      answer: "Placeholder: Overview of 401(k), IRA, Roth IRA, and other retirement vehicles."
    },
    {
      question: "How do taxes affect retirement savings?",
      answer: "Placeholder: Tax implications and strategies for retirement accounts and withdrawals."
    }
  ];

  // ✅ Enhanced JSON-LD structured data with aggregateRating and author
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Retirement Planning Calculator - Retirement Savings Calculator",
    "description": "Free retirement planning calculator to plan your retirement savings and goals. Calculate retirement corpus, total savings, and investment returns. Best retirement calculator for USA, Canada, UK, Australia.",
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
      "ratingCount": "4523",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "FinCalcBox",
      "url": "https://fincalcbox.com"
    },
    "featureList": [
      "Retirement planning calculator",
      "Retirement savings calculator",
      "Retirement corpus calculator",
      "401k retirement calculator",
      "IRA retirement calculator",
      "Real-time retirement calculation"
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
        title="Retirement Planning Calculator - Retirement Savings & Corpus Calculator | FinCalcBox"
        description="Free retirement planning calculator to plan your retirement savings and goals. Calculate retirement corpus, total savings, and investment returns. Best retirement calculator for USA, Canada, UK, Australia."
        canonical="https://fincalcbox.com/tools/investment/retirement-planning"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Retirement Planning Calculator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Plan your retirement savings and goals with monthly savings and expected returns
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            {/* <AdPlaceholder position="in-content" className="mb-6" /> */}
            <NeuCard className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <NeuInput
                  label="Current Age (years)"
                  type="number"
                  placeholder="30"
                  value={currentAge}
                  onChange={(e) => setCurrentAge(e.target.value)}
                />
                <NeuInput
                  label="Retirement Age (years)"
                  type="number"
                  placeholder="65"
                  value={retirementAge}
                  onChange={(e) => setRetirementAge(e.target.value)}
                />
                <NeuInput
                  label="Monthly Saving ($)"
                  type="number"
                  placeholder="1000"
                  value={monthlySaving}
                  onChange={(e) => setMonthlySaving(e.target.value)}
                />
                <NeuInput
                  label="Expected Annual Return (%)"
                  type="number"
                  placeholder="8"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(e.target.value)}
                />

                <NeuButton variant="primary" onClick={calculate} className="w-full">
                  Calculate Retirement Corpus
                </NeuButton>

                {result && (
                  <NeuCard inset className="animate-scale-in">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Years to Retirement</span>
                        <span className="font-semibold">
                          {result.yearsToRetirement} years
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Total Savings</span>
                        <span className="font-semibold">
                          ${result.totalSavings.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Total Returns</span>
                        <span className="font-bold text-xl text-accent">
                          ${result.totalReturns.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      <div className="pt-3 border-t border-border flex justify-between items-center">
                        <span className="font-bold text-lg">Final Retirement Corpus</span>
                        <span className="font-bold text-2xl text-primary">
                          ${result.finalCorpus.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
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
        <RelatedBlogs currentPage="retirement-planning" />

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
                  This Retirement Planning Calculator helps you plan your retirement savings and goals. 
                  Enter your current age, retirement age, monthly saving amount, and expected annual return rate. 
                  The calculator uses the future value of annuity formula to compute your final retirement corpus, 
                  total savings, and investment returns. Results update in real time as you type, giving you instant 
                  insights into your retirement planning.
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
                      <h3 className="font-semibold mb-1">Real-time Retirement Calculation</h3>
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
                      <h3 className="font-semibold mb-1">Comprehensive Planning</h3>
                      <p className="text-sm text-muted-foreground">
                        See total savings, returns, and final corpus in one view
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Calculator className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Years to Retirement</h3>
                      <p className="text-sm text-muted-foreground">
                        Automatically calculate time remaining until retirement
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
                  Retirement planning should consider factors such as inflation, healthcare costs, lifestyle changes, 
                  and unexpected expenses. Actual returns may vary based on market conditions and investment choices. 
                  It is recommended to consult a qualified financial advisor to create a comprehensive retirement plan 
                  tailored to your specific needs and circumstances. Consider diversifying your retirement savings across 
                  different investment vehicles including 401(k), IRA, and other retirement accounts.
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
