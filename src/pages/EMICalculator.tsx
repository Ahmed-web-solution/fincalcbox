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

export default function EMICalculator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [result, setResult] = useState<{
    emi: number;
    totalAmount: number;
    totalInterest: number;
  } | null>(null);

  // ✅ Real-time calculation
  useEffect(() => {
    if (principal && rate && tenure) {
      const p = parseFloat(principal);
      const r = parseFloat(rate) / 100 / 12;
      const n = parseFloat(tenure);

      if (p > 0 && r >= 0 && n > 0) {
        const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalAmount = emi * n;
        const totalInterest = totalAmount - p;

        setResult({ emi, totalAmount, totalInterest });
      }
    }
  }, [principal, rate, tenure]);

  const calculate = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(tenure);

    if (!principal || !rate || !tenure) {
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

    // Show ad popup on first calculate
    if (!localStorage.getItem('emiCalcPopupShown')) {
      localStorage.setItem('emiCalcPopupShown', 'true');
    }
  };

  // ✅ JSON-LD structured data - WebApplication schema for EMI calculator
  // 📊 High-CPC vertical: EMI/installment calculators for loans and financing
  // 💡 Target Keywords: EMI calculator, monthly installment, loan payment
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "EMI Calculator - Loan Installment Calculator",
    "description": "Free EMI calculator for home loans, car loans, and personal loans. Calculate monthly installments (EMI) instantly with interest breakdown. Best EMI calculator for USA, Canada, UK, Australia.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Instant EMI calculation with amortization",
      "Home loan EMI calculator",
      "Car loan EMI calculator",
      "Personal loan installment calculator",
      "Real-time interest calculation",
      "Total payment breakdown"
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
      {/* ✅ SEO Meta Tags optimized for HIGH-CPC EMI and loan installment keywords
          📊 Target Regions: USA, Canada, UK, Australia (high-value lending markets)
          💰 HIGH-CPC Keywords: 
              - "EMI calculator" ($6-11 CPC)
              - "home loan EMI calculator" ($7-13 CPC)
              - "car loan EMI" ($5-10 CPC)
              - "loan installment calculator" ($5-9 CPC)
              - "monthly payment calculator" ($4-8 CPC)
          🎯 Focus: EMI and installment keywords attract mortgage, auto, and consumer loan advertisers
          📈 Recommended additional keywords: "loan repayment calculator", "installment plan calculator",
              "home loan installment", "vehicle loan EMI", "education loan EMI"
          💡 Strategy: Target borrowers planning purchases - premium financial services advertisers
      */}
      <SEOHelmet
        title="EMI Calculator - Home Loan, Car Loan & Personal Loan Installment Calculator | FinCalcBox"
        description="Free EMI calculator for home loans, car loans, and personal loans. Calculate monthly installments (EMI) instantly with interest and principal breakdown. Best equated monthly installment calculator for USA, Canada, UK, Australia."
        keywords="EMI calculator, home loan EMI calculator, car loan EMI calculator, personal loan EMI, loan installment calculator, monthly installment calculator, equated monthly installment, loan repayment calculator, auto loan EMI, mortgage EMI calculator, loan payment calculator, EMI calculation formula"
        canonical="https://www.fincalcbox.com/emi-calculator"
        jsonLd={jsonLd}
      />
      {/* 💬 This page optimized for high-CPC EMI and loan installment keywords targeting premium lending markets.
          Focus on home loan and auto loan EMI searches = attracts highest-paying mortgage and auto finance advertisers. */}

      {/* <AdPopup 
        showCloseButton={true}
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">EMI Calculator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compute monthly installments for loans or credits with real-time calculations
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <NeuCard className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <NeuInput
                  label="Principal Amount ($)"
                  type="number"
                  placeholder="100000"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                />
                <NeuInput
                  label="Annual Interest Rate (%)"
                  type="number"
                  placeholder="8.5"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                />
                <NeuInput
                  label="Tenure (months)"
                  type="number"
                  placeholder="60"
                  value={tenure}
                  onChange={(e) => setTenure(e.target.value)}
                />

                <NeuButton variant="primary" onClick={calculate} className="w-full">
                  Calculate EMI
                </NeuButton>

                {result && (
                  <NeuCard inset className="animate-scale-in">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Monthly EMI</span>
                        <span className="font-bold text-2xl text-primary">
                          ${result.emi.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Principal Amount</span>
                        <span className="font-semibold">${parseFloat(principal).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Total Interest</span>
                        <span className="font-semibold text-destructive">
                          ${result.totalInterest.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                      </div>
                      <div className="pt-3 border-t border-border flex justify-between items-center">
                        <span className="font-bold text-lg">Total Amount</span>
                        <span className="font-bold text-lg text-accent">
                          ${result.totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
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
        <RelatedBlogs currentPage="emi-calculator" />

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
                  This EMI Calculator helps you compute monthly installments (EMI - Equated Monthly Installments) 
                  for loans and credits in real time. Enter your principal amount, annual interest rate, and tenure in months. 
                  Our calculator uses the amortization formula to provide instant, accurate EMI calculations as you type.
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
                      <h3 className="font-semibold mb-1">Customizable Interest and Term</h3>
                      <p className="text-sm text-muted-foreground">
                        Adjust loan amount, rate, and tenure to fit your needs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Calculator className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Responsive Design</h3>
                      <p className="text-sm text-muted-foreground">
                        Works seamlessly on all devices - mobile, tablet, and desktop
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
                        Fast, responsive design optimized for USA and Canada users
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
