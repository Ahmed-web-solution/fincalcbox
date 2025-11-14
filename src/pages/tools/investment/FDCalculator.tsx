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

export default function FDCalculator() {
  const [principal, setPrincipal] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [compoundingFrequency, setCompoundingFrequency] = useState("12");
  const [result, setResult] = useState<{
    maturityAmount: number;
    totalInterest: number;
    effectiveRate: number;
  } | null>(null);

  // ✅ Real-time calculation
  useEffect(() => {
    if (principal && interestRate && tenure) {
      const P = parseFloat(principal);
      const r = parseFloat(interestRate) / 100;
      const t = parseFloat(tenure);
      const n = parseFloat(compoundingFrequency);

      if (P > 0 && r >= 0 && t > 0 && n > 0) {
        // FD Formula: A = P(1 + r/n)^(n*t)
        // Where A = Maturity amount, P = Principal, r = Annual rate, n = Compounding frequency per year, t = Time in years
        const maturityAmount = P * Math.pow(1 + r / n, n * t);
        const totalInterest = maturityAmount - P;
        // Effective Annual Rate = (1 + r/n)^n - 1
        const effectiveRate = (Math.pow(1 + r / n, n) - 1) * 100;

        setResult({ maturityAmount, totalInterest, effectiveRate });
      }
    }
  }, [principal, interestRate, tenure, compoundingFrequency]);

  const calculate = () => {
    const P = parseFloat(principal);
    const r = parseFloat(interestRate) / 100;
    const t = parseFloat(tenure);
    const n = parseFloat(compoundingFrequency);

    if (!principal || !interestRate || !tenure) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (P <= 0 || r < 0 || t <= 0 || n <= 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid positive numbers",
        variant: "destructive",
      });
      return;
    }

    // Show ad popup on first calculate
    if (!localStorage.getItem('fdCalcPopupShown')) {
      localStorage.setItem('fdCalcPopupShown', 'true');
    }
  };

  // ✅ JSON-LD structured data - WebApplication schema for FD calculator
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "FD Calculator - Fixed Deposit Returns Calculator",
    "description": "Free FD calculator to calculate fixed deposit returns and maturity amount. Calculate FD interest, maturity value, and effective interest rate with different compounding frequencies. Best fixed deposit calculator for USA, Canada, UK, Australia.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Fixed deposit calculator",
      "FD maturity calculator",
      "FD interest calculator",
      "Fixed deposit returns calculator",
      "Effective interest rate calculator",
      "Real-time FD calculation"
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
        title="FD Calculator - Fixed Deposit Returns & Maturity Calculator | FinCalcBox"
        description="Free FD calculator to calculate fixed deposit returns and maturity amount. Calculate FD interest, maturity value, and effective interest rate with different compounding frequencies. Best fixed deposit calculator for USA, Canada, UK, Australia."
        keywords="FD calculator, fixed deposit calculator, FD maturity calculator, FD interest calculator, fixed deposit returns calculator, FD returns calculator, certificate of deposit calculator, CD calculator, time deposit calculator"
        canonical="https://www.fincalcbox.com/tools/investment/fd-calculator"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">FD Calculator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate fixed deposit returns and maturity amount with different compounding frequencies
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
                  placeholder="5.5"
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

                <div>
                  <label className="block mb-2 text-sm font-medium text-foreground">
                    Compounding Frequency
                  </label>
                  <select
                    className="neu-inset w-full px-4 py-3 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all rounded-xl"
                    value={compoundingFrequency}
                    onChange={(e) => setCompoundingFrequency(e.target.value)}
                  >
                    <option value="1">Annually</option>
                    <option value="2">Semi-Annually</option>
                    <option value="4">Quarterly</option>
                    <option value="12">Monthly</option>
                    <option value="365">Daily</option>
                  </select>
                </div>

                <NeuButton variant="primary" onClick={calculate} className="w-full">
                  Calculate FD Returns
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
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Effective Annual Rate</span>
                        <span className="font-semibold">
                          {result.effectiveRate.toFixed(2)}%
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
        <RelatedBlogs currentPage="fd-calculator" />

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
                  This FD Calculator helps you calculate the returns on your fixed deposit investments. 
                  Enter your principal amount, annual interest rate, tenure in years, and choose a compounding frequency 
                  (annually, semi-annually, quarterly, monthly, or daily). The calculator uses the compound interest formula 
                  to compute your maturity amount, total interest earned, and effective annual rate. Results update in real time 
                  as you type, giving you instant insights into your fixed deposit returns.
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
                      <h3 className="font-semibold mb-1">Real-time FD Calculation</h3>
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
                      <h3 className="font-semibold mb-1">Flexible Compounding</h3>
                      <p className="text-sm text-muted-foreground">
                        Choose from annual, semi-annual, quarterly, monthly, or daily compounding
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Calculator className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Effective Rate Calculation</h3>
                      <p className="text-sm text-muted-foreground">
                        See the effective annual rate based on compounding frequency
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
                  Please consult with your bank or financial institution for current FD rates and terms. 
                  This calculator is suitable for fixed deposits, certificates of deposit (CDs), and time deposits.
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
