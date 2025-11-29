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
import { PiggyBank, Calculator, DollarSign, Clock, ArrowLeft, ChevronDown } from "@/components/icons";

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
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ✅ Real-time calculation
  useEffect(() => {
    if (principal && interestRate && tenure) {
      const P = parseFloat(principal);
      const r = parseFloat(interestRate) / 100;
      const t = parseFloat(tenure);
      const n = parseFloat(compoundingFrequency);

      if (P > 0 && r >= 0 && t > 0 && n > 0) {
        const maturityAmount = P * Math.pow(1 + r / n, n * t);
        const totalInterest = maturityAmount - P;
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

    if (!localStorage.getItem('fdCalcPopupShown')) {
      localStorage.setItem('fdCalcPopupShown', 'true');
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "FD Calculator - Fixed Deposit Returns Calculator",
    "description": "Free FD calculator to calculate fixed deposit returns and maturity amount. Calculate FD interest, maturity value, and effective interest rate with different compounding frequencies.",
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "3156"
    },
    "author": {
      "@type": "Organization",
      "name": "FinCalcBox",
      "url": "https://fincalcbox.com"
    }
  };

  const faqs = [
    {
      question: "How is FD interest calculated?",
      answer: "FD interest is calculated using compound interest formula: A = P(1 + r/n)^(n×t), where A is maturity amount, P is principal, r is annual interest rate, n is compounding frequency, and t is tenure in years. Most banks compound interest quarterly (n=4), but some offer monthly compounding for better returns."
    },
    {
      question: "What is the difference between simple and compound interest in FD?",
      answer: "Simple interest is calculated only on principal amount throughout the tenure. Compound interest is calculated on principal plus accumulated interest, earning 'interest on interest'. For a 5-year FD, compound interest yields 5-8% more returns than simple interest at the same rate. All banks use compound interest for FDs."
    },
    {
      question: "Can I withdraw FD before maturity?",
      answer: "Yes, you can prematurely withdraw FDs, but banks charge a penalty (typically 0.5-1% of interest earned). You'll receive reduced interest for the actual period held. Tax-saver FDs have a mandatory 5-year lock-in and cannot be withdrawn early. Check your bank's premature withdrawal terms before investing."
    },
    {
      question: "What is the best compounding frequency for FD?",
      answer: "Higher compounding frequency means better returns. Daily compounding > Monthly > Quarterly > Semi-annual > Annual. For a $10,000 FD at 6% for 5 years: Daily compounding earns ~$3,499, while annual compounding earns ~$3,382. The difference increases with higher amounts and longer tenure."
    },
    {
      question: "Are fixed deposit returns taxable?",
      answer: "Yes, FD interest is fully taxable as per your income tax slab. Banks deduct TDS (Tax Deducted at Source) at 10% if annual interest exceeds $10,000 (₹40,000 in India). Submit Form 15G/15H if your total income is below taxable limit to avoid TDS. Tax-saver FDs offer ₹1.5 lakh Section 80C deduction in India."
    }
  ];

  return (
    <div className="min-h-screen py-12 px-6">
      <SEOHelmet
        title="FD Calculator - Fixed Deposit Returns & Maturity Calculator | FinCalcBox"
        description="Free FD calculator to calculate fixed deposit returns and maturity amount. Calculate FD interest, maturity value, and effective interest rate with multiple compounding options."
        canonical="https://fincalcbox.com/tools/investment/fd-calculator"
        jsonLd={jsonLd}
      />

      <div className="mx-auto max-w-7xl">
        <div className="mb-6">
          <NavLink to="/tools">
            <NeuButton className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Tools
            </NeuButton>
          </NavLink>
        </div>

        {/* <AdPlaceholder position="top" className="mb-8" /> */}

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

        <RelatedBlogs currentPage="fd-calculator" />

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

              <div className="p-4 neu-inset rounded-xl bg-accent/5">
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
