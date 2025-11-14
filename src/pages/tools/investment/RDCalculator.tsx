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
import { PiggyBank, Calculator, DollarSign, Clock, ArrowLeft } from "@/components/icons";

export default function RDCalculator() {
  const [monthlyDeposit, setMonthlyDeposit] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [result, setResult] = useState<{
    totalDeposit: number;
    maturityAmount: number;
    totalInterest: number;
  } | null>(null);

  // ✅ Real-time calculation
  useEffect(() => {
    if (monthlyDeposit && interestRate && tenure) {
      const P = parseFloat(monthlyDeposit);
      const r = parseFloat(interestRate) / 100 / 12; // Monthly rate
      const n = parseFloat(tenure) * 12; // Total months

      if (P > 0 && r >= 0 && n > 0) {
        // RD Formula: M = P × [{(1 + r)^n - 1} / r]
        // Where M = Maturity amount, P = Monthly deposit, r = Monthly interest rate, n = Number of months
        const maturityAmount = P * ((Math.pow(1 + r, n) - 1) / r);
        const totalDeposit = P * n;
        const totalInterest = maturityAmount - totalDeposit;

        setResult({ totalDeposit, maturityAmount, totalInterest });
      }
    }
  }, [monthlyDeposit, interestRate, tenure]);

  const calculate = () => {
    const P = parseFloat(monthlyDeposit);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(tenure) * 12;

    if (!monthlyDeposit || !interestRate || !tenure) {
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
    if (!localStorage.getItem('rdCalcPopupShown')) {
      localStorage.setItem('rdCalcPopupShown', 'true');
    }
  };

  // ✅ JSON-LD structured data - WebApplication schema for RD calculator
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "RD Calculator - Recurring Deposit Returns Calculator",
    "description": "Free RD calculator to calculate recurring deposit returns and maturity amount. Calculate RD interest, maturity value, and total returns on monthly deposits. Best recurring deposit calculator for USA, Canada, UK, Australia.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Recurring deposit calculator",
      "RD maturity calculator",
      "RD interest calculator",
      "Monthly deposit calculator",
      "RD returns calculator",
      "Real-time RD calculation"
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
        title="RD Calculator - Recurring Deposit Returns & Maturity Calculator | FinCalcBox"
        description="Free RD calculator to calculate recurring deposit returns and maturity amount. Calculate RD interest, maturity value, and total returns on monthly deposits. Best recurring deposit calculator for USA, Canada, UK, Australia."
        keywords="RD calculator, recurring deposit calculator, RD maturity calculator, RD interest calculator, recurring deposit returns calculator, monthly deposit calculator, RD returns calculator, savings deposit calculator"
        canonical="https://www.fincalcbox.com/tools/investment/rd-calculator"
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
            <PiggyBank className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">RD Calculator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate recurring deposit returns and maturity amount with monthly deposits
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <NeuCard className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <NeuInput
                  label="Monthly Deposit ($)"
                  type="number"
                  placeholder="1000"
                  value={monthlyDeposit}
                  onChange={(e) => setMonthlyDeposit(e.target.value)}
                />
                <NeuInput
                  label="Annual Interest Rate (%)"
                  type="number"
                  placeholder="6.5"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                />
                <NeuInput
                  label="Tenure (years)"
                  type="number"
                  placeholder="5"
                  value={tenure}
                  onChange={(e) => setTenure(e.target.value)}
                />

                <NeuButton variant="primary" onClick={calculate} className="w-full">
                  Calculate RD Returns
                </NeuButton>

                {result && (
                  <NeuCard inset className="animate-scale-in">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Total Deposit</span>
                        <span className="font-semibold">
                          ${result.totalDeposit.toLocaleString(undefined, {
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
                        <span className="font-bold text-lg">Maturity Amount</span>
                        <span className="font-bold text-lg text-primary">
                          ${result.maturityAmount.toLocaleString(undefined, {
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
        <RelatedBlogs currentPage="rd-calculator" />

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
                  This RD Calculator helps you calculate the returns on your recurring deposit investments. 
                  Enter your monthly deposit amount, annual interest rate, and tenure in years. 
                  The calculator uses the recurring deposit formula to compute your total deposit, total interest earned, 
                  and maturity amount. Results update in real time as you type, giving you instant insights into your 
                  recurring deposit returns.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <PiggyBank className="h-6 w-6 text-accent" />
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <DollarSign className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Real-time RD Calculation</h3>
                      <p className="text-sm text-muted-foreground">
                        Get instant results as you type, no need to click calculate
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <PiggyBank className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Monthly Deposit Planning</h3>
                      <p className="text-sm text-muted-foreground">
                        Plan your monthly savings and see how they grow over time
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Calculator className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Accurate RD Formula</h3>
                      <p className="text-sm text-muted-foreground">
                        Uses standard recurring deposit calculation formula for precise results
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
                  Actual returns may vary based on bank policies, interest rate changes, and other factors. 
                  Please consult with your bank or financial institution for current RD rates and terms. 
                  This calculator is suitable for recurring deposits, savings deposits, and similar monthly investment plans.
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
