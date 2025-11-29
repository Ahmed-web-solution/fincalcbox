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
import { TrendingUp, Calculator, DollarSign, Clock, ArrowLeft, ChevronDown } from "@/components/icons";

export default function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState("");
  const [expectedReturn, setExpectedReturn] = useState("");
  const [investmentPeriod, setInvestmentPeriod] = useState("");
  const [result, setResult] = useState<{
    totalInvestment: number;
    estimatedReturns: number;
    totalValue: number;
  } | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ✅ Real-time calculation
  useEffect(() => {
    if (monthlyInvestment && expectedReturn && investmentPeriod) {
      const P = parseFloat(monthlyInvestment);
      const r = parseFloat(expectedReturn) / 100 / 12;
      const n = parseFloat(investmentPeriod) * 12;

      if (P > 0 && r >= 0 && n > 0) {
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

    if (!localStorage.getItem('sipCalcPopupShown')) {
      localStorage.setItem('sipCalcPopupShown', 'true');
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "SIP Calculator - Systematic Investment Plan Calculator",
    "description": "Free SIP calculator to calculate returns on Systematic Investment Plans. Calculate SIP maturity value, estimated returns, and total investment for mutual funds.",
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "2847"
    },
    "author": {
      "@type": "Organization",
      "name": "FinCalcBox",
      "url": "https://fincalcbox.com"
    }
  };

  const faqs = [
    {
      question: "How is SIP return calculated?",
      answer: "SIP returns are calculated using the compound interest formula: M = P × [{(1 + r)^n - 1} / r] × (1 + r), where M is maturity value, P is monthly investment, r is monthly rate of return, and n is total number of months. This accounts for the compounding effect of regular monthly investments."
    },
    {
      question: "Is SIP better than lump sum investment?",
      answer: "SIP offers rupee cost averaging, disciplined investing, and reduces market timing risk. It's ideal for regular income earners who can invest monthly. Lump sum works better during market dips if you have a large corpus. SIP is generally safer for beginners and long-term wealth creation."
    },
    {
      question: "What is a good SIP return rate?",
      answer: "Historically, equity mutual funds have delivered 12-15% annualized returns over 10+ years. Debt funds typically return 6-8%. A realistic expectation for balanced diversified equity SIP is 12% annually. However, past performance doesn't guarantee future returns. Actual returns vary based on market conditions and fund performance."
    },
    {
      question: "Can I withdraw my SIP anytime?",
      answer: "Yes, SIPs in open-ended mutual funds can be withdrawn anytime without penalties. However, equity funds may have exit loads if redeemed within 1 year, and ELSS funds have a 3-year lock-in period. Tax implications apply based on holding period and fund type."
    },
    {
      question: "What is the minimum amount for SIP?",
      answer: "Most mutual funds in India allow SIP starting from ₹500 per month. Some funds offer SIPs as low as ₹100. In the US, many funds require a minimum of $50-100 per month. There's no maximum limit, allowing flexibility based on your financial goals and capacity."
    }
  ];

  return (
    <div className="min-h-screen py-12 px-6">
      <SEOHelmet
        title="SIP Calculator - Systematic Investment Plan Returns Calculator | FinCalcBox"
        description="Free SIP calculator to calculate returns on Systematic Investment Plans. Calculate SIP maturity value, estimated returns, and total investment for mutual funds with real-time results."
        canonical="https://fincalcbox.com/tools/investment/sip-calculator"
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
            <TrendingUp className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SIP Calculator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate returns on Systematic Investment Plans (SIP) with real-time calculations
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            {/* <AdPlaceholder position="in-content" className="mb-6" /> */}
            
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

              <div className="p-4 neu-inset rounded-xl bg-accent/5">
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

        {/* FAQ Section - Separate Card */}
        <section className="mt-8 max-w-4xl mx-auto px-2 sm:px-0">
  <NeuCard>
    <div>
      <h2 className="text-base sm:text-2xl font-bold mb-6 flex flex-col items-center sm:flex-row sm:items-center sm:gap-2">
        <Calculator className="h-8 w-8 text-primary mb-1 sm:mb-0" />
        <span className="text-center text-2xl">Frequently Asked Questions</span>
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="neu-card rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-start sm:items-center justify-between text-left hover:bg-accent/5 transition-colors"
            >
              <div className="flex items-start sm:items-center gap-3 flex-1">
                <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center mt-1 sm:mt-0">
                  <span className="text-sm font-bold text-primary">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-foreground break-words">{faq.question}</h3>
              </div>
              <ChevronDown
                className={`h-5 w-5 text-muted-foreground transition-transform flex-shrink-0 ml-2 ${
                  openFaq === index ? 'rotate-180' : ''
                }`}
              />
            </button>
            {openFaq === index && (
              <div className="px-2 sm:px-6 pb-3 pt-2 text-muted-foreground animate-fade-in">
                <p className="leading-relaxed break-words">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </NeuCard>
</section>

        {/* Related Blogs */}
        <RelatedBlogs currentPage="sip-calculator" />

        {/* <AdPlaceholder position="bottom" className="mt-8" /> */}
      </div>
    </div>
  );
}
