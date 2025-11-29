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

export default function LoanCalculatorPage() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [loadingRate, setLoadingRate] = useState(false);
  const [apiRate, setApiRate] = useState<number | null>(null);
  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalPayment: number;
    totalInterest: number;
  } | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchLiveRate = async () => {
      setLoadingRate(true);
      try {
        const response = await fetch(
          "https://loan-calculator.ahmed-dev-solutions.workers.dev/"
        );

        if (!response.ok) throw new Error("Failed to fetch rates");
        
        const data = await response.json();

        // From API Ninjas v2/interestrate
        const liveRate =
          data.federal_funds_rate ||
          data.central_bank_rate ||
          data.personal_loan_rate ||
          data.prime_rate ||
          6.5;

        setApiRate(liveRate);
        setInterestRate(liveRate.toString());

        toast({
          title: "✅ Live Rate Loaded",
          description: `Fetched current average loan rate: ${liveRate.toFixed(
            2
          )}%`,
        });
      } catch (error) {
        // Live rate fetch failed - fallback to manual input
        toast({
          title: "Live Rate Unavailable",
          description: "Using manual input instead.",
          variant: "destructive",
        });
      } finally {
        setLoadingRate(false);
      }
    };

    fetchLiveRate();
  }, []);

  // ✅ Real-time calculation
  useEffect(() => {
    if (loanAmount && interestRate && loanTerm) {
      const p = parseFloat(loanAmount);
      const r = parseFloat(interestRate) / 100 / 12;
      const n = parseFloat(loanTerm) * 12;

      if (p > 0 && r >= 0 && n > 0) {
        const monthlyPayment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalPayment = monthlyPayment * n;
        const totalInterest = totalPayment - p;
        setResult({ monthlyPayment, totalPayment, totalInterest });
      }
    }
  }, [loanAmount, interestRate, loanTerm]);

  const calculate = () => {
    const p = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;

    if (!loanAmount || !interestRate || !loanTerm) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (p <= 0 || r < 0 || n <= 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid positive numbers",
        variant: "destructive",
      });
      return;
    }

    const monthlyPayment =
      (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const totalPayment = monthlyPayment * n;
    const totalInterest = totalPayment - p;

    setResult({ monthlyPayment, totalPayment, totalInterest });
    
    // Show ad popup on first calculate
    if (!localStorage.getItem('loanCalcPopupShown')) {
      setShowPopup(true);
      localStorage.setItem('loanCalcPopupShown', 'true');
    }
  };

  // ✅ JSON-LD structured data - WebApplication schema for loan calculator
  // 📊 High-CPC vertical: Loan calculators attract mortgage, auto, and personal loan advertisers
  // 💡 Target Keywords: loan calculator, mortgage calculator, auto loan, personal loan
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Loan Calculator - Mortgage, Auto & Personal Loans",
    "description": "Free loan calculator with live market interest rates. Calculate monthly payments for mortgage, auto, personal, and home loans. Instant loan payment calculator for USA, Canada, UK, Australia.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Real-time loan payment calculation",
      "Live market interest rates",
      "Mortgage calculator with amortization",
      "Auto loan calculator",
      "Personal loan payment estimator",
      "Total interest and principal breakdown"
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
      {/* ✅ SEO Meta Tags optimized for ULTRA HIGH-CPC loan keywords
          📊 Target Regions: USA, Canada, UK, Australia (premium lending markets)
          💰 HIGH-CPC Keywords: 
              - "mortgage calculator" ($8-15 CPC) 
              - "loan calculator" ($5-12 CPC)
              - "auto loan calculator" ($6-10 CPC)
              - "home loan calculator" ($7-14 CPC)
              - "personal loan calculator" ($4-9 CPC)
          🎯 Focus: Mortgage and lending keywords = HIGHEST AdSense CPCs in finance
          📈 Recommended additional keywords: "refinance calculator", "home equity loan", 
              "loan amortization calculator", "debt consolidation calculator"
          💡 Strategy: Target home buyers, auto buyers, and borrowers - premium advertiser segment
      */}
      <SEOHelmet
        title="Loan Calculator - Mortgage, Auto & Personal Loan Payment Calculator | FinCalcBox"
        description="Free loan calculator with live interest rates. Calculate monthly payments for mortgage, auto, home, and personal loans instantly. Best loan payment calculator for USA, Canada, UK, Australia with real-time rates."
        keywords="loan calculator, mortgage calculator, auto loan calculator, home loan calculator, personal loan calculator, loan payment calculator, mortgage payment calculator, car loan calculator, home equity loan calculator, loan amortization calculator, monthly payment calculator, interest rate calculator"
        canonical="https://www.fincalcbox.com/loan-calculator"
        jsonLd={jsonLd}
      />
      {/* 💬 This page optimized for ULTRA high-CPC lending keywords targeting premium markets.
          Focus on mortgage and auto loan searches = highest-paying advertisers in finance sector. */}

      {/* <AdPopup 
        showCloseButton={true}
        onClose={() => setShowPopup(false)}
      /> */}

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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Loan Calculator
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate loan interest, duration, and total payable amount with live or manual rates
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <NeuCard className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <NeuInput
                  label="Loan Amount ($)"
                  type="number"
                  placeholder="50000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                />

                <NeuInput
                  label={
                    loadingRate
                      ? "Fetching Live Interest Rate..."
                      : apiRate
                      ? `Annual Interest Rate (%) — Live: ${apiRate.toFixed(2)}`
                      : "Annual Interest Rate (%)"
                  }
                  type="number"
                  placeholder="5.5"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                />

                <NeuInput
                  label="Loan Term (years)"
                  type="number"
                  placeholder="10"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(e.target.value)}
                />

                <NeuButton
                  variant="primary"
                  onClick={calculate}
                  className="w-full"
                >
                  Calculate
                </NeuButton>

                {result && (
                  <NeuCard inset className="animate-scale-in">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">
                          Monthly Payment
                        </span>
                        <span className="font-bold text-2xl text-primary">
                          $
                          {result.monthlyPayment.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">
                          Principal Amount
                        </span>
                        <span className="font-semibold">
                          $
                          {parseFloat(loanAmount).toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">
                          Total Interest
                        </span>
                        <span className="font-semibold text-destructive">
                          $
                          {result.totalInterest.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      <div className="pt-3 border-t border-border flex justify-between items-center">
                        <span className="font-bold text-lg">Total Payment</span>
                        <span className="font-bold text-lg text-accent">
                          $
                          {result.totalPayment.toLocaleString(undefined, {
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
        <RelatedBlogs currentPage="loan-calculator" />

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
                  This Loan Calculator helps you compute monthly payments, total interest, and loan duration in real time. 
                  Simply enter your loan amount, interest rate (or use our live market rates), and loan term. 
                  Our calculator uses the standard amortization formula to provide accurate results instantly.
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
                      <h3 className="font-semibold mb-1">Real-time EMI Calculation</h3>
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
                      <h3 className="font-semibold mb-1">Live Market Rates</h3>
                      <p className="text-sm text-muted-foreground">
                        Automatically fetch current interest rates or use manual input
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Calculator className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Customizable Parameters</h3>
                      <p className="text-sm text-muted-foreground">
                        Adjust loan amount, rate, and term to fit your needs
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
            </div>
          </NeuCard>
        </section>

        {/* <AdPlaceholder position="bottom" className="mt-8" /> */}
      </div>
    </div>
  );
}
