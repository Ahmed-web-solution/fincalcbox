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
import { TrendingUp, Calculator, DollarSign, Clock, ArrowLeft } from "@/components/icons";

interface YearlyBreakdown {
  year: number;
  principal: number;
  interest: number;
  total: number;
}

export default function AdvancedCompoundInterest() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [compoundingType, setCompoundingType] = useState<"yearly" | "monthly">("yearly");
  const [result, setResult] = useState<{
    finalAmount: number;
    totalInterest: number;
    breakdown: YearlyBreakdown[];
  } | null>(null);

  // ✅ Real-time calculation
  useEffect(() => {
    if (principal && rate && time) {
      const p = parseFloat(principal);
      const r = parseFloat(rate) / 100;
      const t = parseFloat(time);
      const n = compoundingType === "yearly" ? 1 : 12;

      if (p > 0 && r >= 0 && t > 0) {
        // Compound Interest Formula: A = P(1 + r/n)^(nt)
        const finalAmount = p * Math.pow(1 + r / n, n * t);
        const totalInterest = finalAmount - p;

        // Generate yearly breakdown
        const breakdown: YearlyBreakdown[] = [];
        let currentPrincipal = p;
        for (let year = 1; year <= Math.floor(t); year++) {
          const yearAmount = p * Math.pow(1 + r / n, n * year);
          const yearInterest = yearAmount - currentPrincipal;
          breakdown.push({
            year,
            principal: currentPrincipal,
            interest: yearInterest,
            total: yearAmount,
          });
          currentPrincipal = yearAmount;
        }
        // Add final year if there's a partial year
        if (t > Math.floor(t)) {
          const finalYearAmount = p * Math.pow(1 + r / n, n * t);
          breakdown.push({
            year: t,
            principal: currentPrincipal,
            interest: finalYearAmount - currentPrincipal,
            total: finalYearAmount,
          });
        }

        setResult({ finalAmount, totalInterest, breakdown });
      }
    }
  }, [principal, rate, time, compoundingType]);

  const calculate = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(time);

    if (!principal || !rate || !time) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (p <= 0 || r < 0 || t <= 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid positive numbers",
        variant: "destructive",
      });
      return;
    }

    // Show ad popup on first calculate
    if (!localStorage.getItem('advancedCompoundCalcPopupShown')) {
      localStorage.setItem('advancedCompoundCalcPopupShown', 'true');
    }
  };

  // ✅ JSON-LD structured data - WebApplication schema for advanced compound interest calculator
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Advanced Compound Interest Calculator - Investment Growth Calculator",
    "description": "Free advanced compound interest calculator with yearly and monthly compounding, breakdown table, and growth visualization. Calculate compound returns with detailed year-by-year breakdown. Best compound interest calculator for USA, Canada, UK, Australia.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Advanced compound interest calculator",
      "Yearly and monthly compounding",
      "Year-by-year breakdown table",
      "Investment growth visualization",
      "Compound interest calculator with breakdown",
      "Real-time compound calculation"
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
        title="Advanced Compound Interest Calculator - Investment Growth with Breakdown | FinCalcBox"
        description="Free advanced compound interest calculator with yearly and monthly compounding, breakdown table, and growth visualization. Calculate compound returns with detailed year-by-year breakdown. Best compound interest calculator for USA, Canada, UK, Australia."
        keywords="advanced compound interest calculator, compound interest calculator with breakdown, yearly compound interest, monthly compound interest, investment growth calculator, compound interest table, compound interest breakdown"
        canonical="https://www.fincalcbox.com/tools/investment/advanced-compound-interest"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Advanced Compound Interest Calculator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate compound returns with yearly or monthly compounding, breakdown table, and growth visualization
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
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
                    Compounding Type
                  </label>
                  <select
                    className="neu-inset w-full px-4 py-3 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all rounded-xl"
                    value={compoundingType}
                    onChange={(e) => setCompoundingType(e.target.value as "yearly" | "monthly")}
                  >
                    <option value="yearly">Yearly Compounding</option>
                    <option value="monthly">Monthly Compounding</option>
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
                        <span className="font-semibold">
                          ${parseFloat(principal).toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Total Interest Earned</span>
                        <span className="font-bold text-2xl text-accent">
                          ${result.totalInterest.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      <div className="pt-3 border-t border-border flex justify-between items-center">
                        <span className="font-bold text-lg">Final Amount</span>
                        <span className="font-bold text-2xl text-primary">
                          ${result.finalAmount.toLocaleString(undefined, {
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

            {/* Breakdown Table */}
            {result && result.breakdown.length > 0 && (
              <NeuCard className="max-w-2xl mx-auto mt-8">
                <h3 className="text-xl font-bold mb-4">Year-by-Year Breakdown</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 px-3">Year</th>
                        <th className="text-right py-2 px-3">Principal</th>
                        <th className="text-right py-2 px-3">Interest</th>
                        <th className="text-right py-2 px-3">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.breakdown.map((row, index) => (
                        <tr key={index} className="border-b border-border/50">
                          <td className="py-2 px-3">{row.year.toFixed(1)}</td>
                          <td className="text-right py-2 px-3">
                            ${row.principal.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </td>
                          <td className="text-right py-2 px-3 text-accent">
                            ${row.interest.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </td>
                          <td className="text-right py-2 px-3 font-semibold">
                            ${row.total.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </NeuCard>
            )}

            {/* Growth Chart Visualization */}
            {result && result.breakdown.length > 0 && (
              <NeuCard className="max-w-2xl mx-auto mt-8">
                <h3 className="text-xl font-bold mb-4">Growth Visualization</h3>
                <div className="space-y-2">
                  {result.breakdown.slice(0, 10).map((row, index) => {
                    const maxValue = result.finalAmount;
                    const percentage = (row.total / maxValue) * 100;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <span className="text-xs text-muted-foreground w-12">
                          Y{row.year.toFixed(0)}
                        </span>
                        <div className="flex-1 bg-muted rounded-full h-4 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                        <span className="text-xs font-semibold w-24 text-right">
                          ${row.total.toLocaleString(undefined, {
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                          })}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </NeuCard>
            )}
          </div>

          <aside className="lg:block hidden">
            {/* <AdPlaceholder position="sidebar" /> */}
          </aside>
        </div>

        {/* Related Blogs */}
        <RelatedBlogs currentPage="compound-interest-calculator" />

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
                  This Advanced Compound Interest Calculator helps you understand how your investments grow over time with compound returns. 
                  Enter your principal amount, annual interest rate, time period, and choose between yearly or monthly compounding. 
                  The calculator uses the formula A = P(1 + r/n)^(nt) to compute your final amount and provides a detailed year-by-year 
                  breakdown table showing principal, interest, and total for each year. Results update in real time as you type.
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
                      <h3 className="font-semibold mb-1">Yearly & Monthly Compounding</h3>
                      <p className="text-sm text-muted-foreground">
                        Choose between yearly or monthly compounding frequencies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <TrendingUp className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Year-by-Year Breakdown Table</h3>
                      <p className="text-sm text-muted-foreground">
                        See detailed breakdown of principal, interest, and total for each year
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Calculator className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Growth Visualization</h3>
                      <p className="text-sm text-muted-foreground">
                        Visual chart showing investment growth over time
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

              <div className="mt-6 p-4 neu-inset rounded-xl bg-accent/5">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> This calculator provides estimates for informational purposes only. 
                  Actual returns may vary based on market conditions, investment performance, and other factors. 
                  The breakdown table shows approximate values and may have slight rounding differences. Please 
                  consult a qualified financial advisor before making investment decisions.
                </p>
              </div>
            </div>
          </NeuCard>
        </section>

        {/* <AdPlaceholder position="bottom" className="mt-8" /> */}
      </div>
    </div>
  );
}

