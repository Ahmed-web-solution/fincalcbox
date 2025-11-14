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

export default function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [investmentPeriod, setInvestmentPeriod] = useState("");
  const [result, setResult] = useState<{
    totalInvestment: number;
    estimatedReturns: number;
    totalValue: number;
  } | null>(null);

  // ✅ Real-time calculation
  useEffect(() => {
    if (monthlyInvestment && expectedReturn && investmentPeriod) {
      const P = parseFloat(monthlyInvestment);
      const r = parseFloat(expectedReturn) / 100 / 12; // Monthly rate
      const n = parseFloat(investmentPeriod) * 12; // Total months

      if (P > 0 && r >= 0 && n > 0) {
        // SIP Formula: M = P × [{(1 + r)^n - 1} / r] × (1 + r)
        // Where M = Maturity value, P = Monthly investment, r = Monthly rate, n = Number of months
        const maturityValue = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
        const totalInvestment = P * n;
        const estimatedReturns = maturityValue - totalInvestment;
        const totalValue = maturityValue;

        setResult({ totalInvestment, estimatedReturns, totalValue });
      }
    }
  }, [monthlyInvestment, expectedReturn, investmentPeriod]);

  const calculate = () => {
    const P = parseFloat(monthlyInvestment);
    const r = parseFloat(expectedReturn) / 100 / 12;
    const n = parseFloat(investmentPeriod) * 12;

    if (!monthlyInvestment || !expectedReturn || !investmentPeriod) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (P <= 0 || r < 0 || n <= 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid positive numbers",
        variant: "destructive",
      });
      return;
    }

    // Show ad popup on first calculate
    if (!localStorage.getItem('sipCalcPopupShown')) {
      localStorage.setItem('sipCalcPopupShown', 'true');
    }
  };

  // ✅ JSON-LD structured data - WebApplication schema for SIP calculator
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "SIP Calculator - Systematic Investment Plan Calculator",
    "description": "Free SIP calculator to calculate returns on Systematic Investment Plans (SIP). Calculate SIP maturity value, estimated returns, and total investment for mutual funds. Best SIP calculator for USA, Canada, UK, Australia.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "SIP maturity value calculator",
      "Systematic Investment Plan returns calculator",
      "Mutual fund SIP calculator",
      "Monthly SIP investment calculator",
      "Real-time SIP calculation",
      "Investment growth projection"
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
        title="SIP Calculator - Systematic Investment Plan Returns Calculator | FinCalcBox"
        description="Free SIP calculator to calculate returns on Systematic Investment Plans. Calculate SIP maturity value, estimated returns, and total investment for mutual funds. Best SIP calculator for USA, Canada, UK, Australia."
        keywords="SIP calculator, systematic investment plan calculator, SIP returns calculator, mutual fund SIP calculator, monthly SIP calculator, SIP maturity calculator, SIP investment calculator, SIP return calculator, mutual fund calculator, investment calculator"
        canonical="https://www.fincalcbox.com/tools/investment/sip-calculator"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SIP Calculator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate returns on Systematic Investment Plans (SIP) with real-time calculations
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <NeuCard className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <NeuInput
                  label="Monthly Investment ($)"
                  type="number"
                  placeholder="1000"
                  value={monthlyInvestment}
                  onChange={(e) => setMonthlyInvestment(e.target.value)}
                />
                <NeuInput
                  label="Expected Annual Return (%)"
                  type="number"
                  placeholder="12"
                  value={expectedReturn}
                  onChange={(e) => setExpectedReturn(e.target.value)}
                />
                <NeuInput
                  label="Investment Period (years)"
                  type="number"
                  placeholder="10"
                  value={investmentPeriod}
                  onChange={(e) => setInvestmentPeriod(e.target.value)}
                />

                <NeuButton variant="primary" onClick={calculate} className="w-full">
                  Calculate SIP Returns
                </NeuButton>

                {result && (
                  <NeuCard inset className="animate-scale-in">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Total Investment</span>
                        <span className="font-semibold">
                          ${result.totalInvestment.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Estimated Returns</span>
                        <span className="font-bold text-2xl text-accent">
                          ${result.estimatedReturns.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      <div className="pt-3 border-t border-border flex justify-between items-center">
                        <span className="font-bold text-lg">Maturity Value</span>
                        <span className="font-bold text-lg text-primary">
                          ${result.totalValue.toLocaleString(undefined, {
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
        <RelatedBlogs currentPage="sip-calculator" />

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
                  This SIP Calculator helps you calculate the returns on your Systematic Investment Plan (SIP) investments. 
                  Enter your monthly investment amount, expected annual return rate, and investment period in years. 
                  The calculator uses the SIP formula to compute your total investment, estimated returns, and maturity value. 
                  Results update in real time as you type, giving you instant insights into your investment growth potential.
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
                      <h3 className="font-semibold mb-1">Real-time SIP Calculation</h3>
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
                      <h3 className="font-semibold mb-1">Accurate SIP Formula</h3>
                      <p className="text-sm text-muted-foreground">
                        Uses standard SIP calculation formula for precise results
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Calculator className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Investment Growth Projection</h3>
                      <p className="text-sm text-muted-foreground">
                        See how your monthly investments grow over time
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
                  Actual returns may vary based on market conditions, fund performance, and other factors. 
                  Past performance does not guarantee future results. Please consult a qualified financial 
                  advisor for personalized investment advice.
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
