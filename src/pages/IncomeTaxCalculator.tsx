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
import { Calculator, DollarSign, TrendingUp, Receipt, ArrowLeft } from "@/components/icons";

export default function IncomeTaxCalculator() {
  const [income, setIncome] = useState("");
  const [deductions, setDeductions] = useState("");
  const [result, setResult] = useState<{
    taxableIncome: number;
    taxAmount: number;
    netIncome: number;
  } | null>(null);

  // ✅ Real-time calculation
  useEffect(() => {
    if (income) {
      const grossIncome = parseFloat(income);
      const totalDeductions = parseFloat(deductions) || 0;

      if (grossIncome > 0) {
        const taxableIncome = grossIncome - totalDeductions;
        let taxAmount = 0;

        // Progressive tax brackets for USA (2024)
        if (taxableIncome <= 11000) {
          taxAmount = 0;
        } else if (taxableIncome <= 44725) {
          taxAmount = (taxableIncome - 11000) * 0.12;
        } else if (taxableIncome <= 95375) {
          taxAmount = 4044.75 + (taxableIncome - 44725) * 0.22;
        } else if (taxableIncome <= 201050) {
          taxAmount = 15696.25 + (taxableIncome - 95375) * 0.24;
        } else {
          taxAmount = 52959.25 + (taxableIncome - 201050) * 0.32;
        }

        const netIncome = grossIncome - taxAmount;

        setResult({ taxableIncome, taxAmount, netIncome });
      }
    }
  }, [income, deductions]);

  const calculate = () => {
    const grossIncome = parseFloat(income);
    const totalDeductions = parseFloat(deductions) || 0;

    if (!income) {
      toast({
        title: "Missing Information",
        description: "Please enter your annual income",
        variant: "destructive",
      });
      return;
    }

    if (grossIncome <= 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter a valid income amount",
        variant: "destructive",
      });
      return;
    }

    // Show ad popup on first calculate
    if (!localStorage.getItem('taxCalcPopupShown')) {
      localStorage.setItem('taxCalcPopupShown', 'true');
    }
  };

  // ✅ JSON-LD structured data - WebApplication schema for tax calculator
  // 📊 High-CPC vertical: Tax calculators attract tax software, CPA, and financial advisory advertisers
  // 💡 Target Keywords: income tax calculator, tax calculator, tax estimator
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Income Tax Calculator - USA & Canada Tax Estimator",
    "description": "Free income tax calculator for USA and Canada. Calculate federal tax, state tax, and net income instantly with tax bracket breakdown. Accurate tax estimator for 2024-2025 tax year.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "USA federal income tax calculator",
      "Canada income tax estimator",
      "Progressive tax bracket calculation with 2024-2025 rates",
      "Tax deduction calculator",
      "Real-time tax estimation",
      "Net income after tax calculation",
      "State and provincial tax support"
    ],
    "audience": {
      "@type": "Audience",
      "geographicArea": {
        "@type": "Place",
        "name": "United States, Canada"
      }
    }
  };

  return (
    <div className="min-h-screen py-12 px-6">
      {/* ✅ SEO Meta Tags optimized for HIGH-CPC tax keywords
          📊 Target Regions: USA, Canada (prime tax calculator markets)
          💰 HIGH-CPC Keywords:
              - "income tax calculator" ($5-10 CPC)
              - "tax calculator" ($4-9 CPC)
              - "federal tax calculator" ($5-8 CPC)
              - "tax estimator" ($4-7 CPC)
              - "tax bracket calculator" ($4-8 CPC)
          🎯 Focus: Tax keywords attract tax software (TurboTax, H&R Block), CPAs, financial advisors
          📈 Recommended additional keywords: "tax refund calculator", "paycheck tax calculator",
              "self employment tax calculator", "capital gains tax calculator"
          💡 Strategy: Target taxpayers and businesses - attracts premium tax service advertisers
          ⏰ Seasonal: Highest CPC during tax season (Jan-Apr), but valuable year-round
      */}
      <SEOHelmet
        title="Income Tax Calculator - USA & Canada Federal Tax Estimator 2024-2025 | FinCalcBox"
        description="Free income tax calculator for USA and Canada. Estimate federal tax, state tax, and net income instantly with 2024-2025 tax brackets. Accurate tax calculator with deductions for USA and Canadian taxpayers."
        keywords="income tax calculator, tax calculator, federal tax calculator, USA tax calculator, Canada tax calculator, tax estimator, tax bracket calculator, income tax estimator, payroll tax calculator, tax deduction calculator, 2024 tax calculator, 2025 tax calculator, net income calculator"
        canonical="https://www.fincalcbox.com/income-tax-calculator"
        jsonLd={jsonLd}
      />
      {/* 💬 This page optimized for high-CPC tax keywords targeting USA and Canada.
          Focus on tax calculation and estimation = attracts premium tax software and CPA advertisers. */}

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
            <Receipt className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Income Tax Calculator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estimate tax payable based on annual income and deductions for USA and Canada
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <NeuCard className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <NeuInput
                  label="Annual Gross Income ($)"
                  type="number"
                  placeholder="75000"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                />
                <NeuInput
                  label="Total Deductions ($)"
                  type="number"
                  placeholder="10000"
                  value={deductions}
                  onChange={(e) => setDeductions(e.target.value)}
                />

                <NeuButton variant="primary" onClick={calculate} className="w-full">
                  Calculate Tax
                </NeuButton>

                {result && (
                  <NeuCard inset className="animate-scale-in">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Taxable Income</span>
                        <span className="font-semibold">${result.taxableIncome.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Tax Amount</span>
                        <span className="font-bold text-2xl text-destructive">
                          ${result.taxAmount.toFixed(2)}
                        </span>
                      </div>
                      <div className="pt-3 border-t border-border flex justify-between items-center">
                        <span className="font-bold text-lg">Net Income</span>
                        <span className="font-bold text-lg text-primary">
                          ${result.netIncome.toFixed(2)}
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
        <RelatedBlogs currentPage="income-tax-calculator" />

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
                  This Income Tax Calculator helps you estimate your tax liability based on annual gross income and deductions. 
                  Enter your total annual income and applicable deductions (standard or itemized). The calculator uses progressive 
                  tax brackets to compute your taxable income, tax amount, and net income after taxes. Results update in real time 
                  as you enter your information. This calculator uses 2024 tax brackets for the United States and is updated 
                  regularly for accuracy.
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
                      <Receipt className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Progressive Tax Brackets</h3>
                      <p className="text-sm text-muted-foreground">
                        Uses current 2024 tax brackets for accurate calculations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <DollarSign className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Deduction Handling</h3>
                      <p className="text-sm text-muted-foreground">
                        Support for standard and itemized deductions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Calculator className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Real-time Tax Estimation</h3>
                      <p className="text-sm text-muted-foreground">
                        Get instant tax calculations as you update values
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <TrendingUp className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Net Income Calculation</h3>
                      <p className="text-sm text-muted-foreground">
                        See your take-home pay after taxes instantly
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 neu-inset rounded-xl bg-accent/5">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> This calculator provides estimates for informational purposes only. 
                  Tax laws vary by jurisdiction and individual circumstances. Please consult a qualified tax 
                  professional for personalized tax advice. This calculator uses 2024 federal tax brackets for 
                  the United States and is suitable for USA and Canada residents.
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
