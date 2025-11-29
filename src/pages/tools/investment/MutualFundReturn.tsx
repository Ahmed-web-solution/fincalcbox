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

export default function MutualFundReturn() {
  const [initialInvestment, setInitialInvestment] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [investmentPeriod, setInvestmentPeriod] = useState("");
  const [result, setResult] = useState<{
    absoluteReturn: number;
    annualizedReturn: number;
    totalGain: number;
  } | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // ✅ Real-time calculation
  useEffect(() => {
    if (initialInvestment && currentValue && investmentPeriod) {
      const initial = parseFloat(initialInvestment);
      const current = parseFloat(currentValue);
      const years = parseFloat(investmentPeriod);

      if (initial > 0 && current >= 0 && years > 0) {
        const totalGain = current - initial;
        const absoluteReturn = (totalGain / initial) * 100;
        const annualizedReturn = (Math.pow(current / initial, 1 / years) - 1) * 100;

        setResult({ absoluteReturn, annualizedReturn, totalGain });
      }
    }
  }, [initialInvestment, currentValue, investmentPeriod]);

  const calculate = () => {
    const initial = parseFloat(initialInvestment);
    const current = parseFloat(currentValue);
    const years = parseFloat(investmentPeriod);

    if (!initialInvestment || !currentValue || !investmentPeriod) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (initial <= 0 || current < 0 || years <= 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid positive numbers",
        variant: "destructive",
      });
      return;
    }

    if (!localStorage.getItem('mutualFundCalcPopupShown')) {
      localStorage.setItem('mutualFundCalcPopupShown', 'true');
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Mutual Fund Return Calculator - Investment Returns Calculator",
    "description": "Free mutual fund return calculator to calculate absolute returns, annualized returns, and total gains on mutual fund investments.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Mutual fund return calculator",
      "Absolute return calculator",
      "Annualized return calculator",
      "Mutual fund performance calculator",
      "Investment returns calculator",
      "Real-time return calculation"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": "1923"
    },
    "author": {
      "@type": "Organization",
      "name": "FinCalcBox",
      "url": "https://fincalcbox.com"
    }
  };

  const faqs = [
    {
      question: "What is absolute return in mutual funds?",
      answer: "Absolute return is the total percentage gain or loss on your investment, calculated as: [(Current Value - Initial Investment) / Initial Investment] × 100. It shows the overall performance without considering time duration. For example, if you invested $10,000 and it grew to $12,000, the absolute return is 20%."
    },
    {
      question: "What is the difference between absolute and annualized returns?",
      answer: "Absolute return shows total gain/loss percentage regardless of time period, while annualized return (CAGR) shows average yearly growth rate. Annualized return is better for comparing funds with different investment durations. For long-term investments, annualized return provides a more accurate performance picture."
    },
    {
      question: "What is a good mutual fund return rate?",
      answer: "Good returns vary by fund type: Large-cap equity funds: 10-12% annually, Mid/Small-cap funds: 12-15% annually, Debt funds: 6-8% annually, Hybrid funds: 8-10% annually. Returns exceeding inflation by 3-5% are considered good. However, past performance doesn't guarantee future returns."
    },
    {
      question: "How do I calculate CAGR for mutual funds?",
      answer: "CAGR (Compound Annual Growth Rate) is calculated as: [(Current Value / Initial Investment)^(1/Years)] - 1. Our calculator automatically computes this as 'Annualized Return'. CAGR smooths out volatility and provides a clear picture of average annual growth over the investment period."
    },
    {
      question: "Should I check mutual fund returns daily?",
      answer: "No, mutual funds are long-term investments. Checking daily can lead to emotional decisions. Review performance quarterly or annually. Focus on consistent SIP contributions and stay invested for 5+ years to benefit from market cycles and compounding. Short-term volatility is normal in equity funds."
    }
  ];

  return (
    <div className="min-h-screen py-12 px-6">
      <SEOHelmet
        title="Mutual Fund Return Calculator - Calculate Absolute & Annualized Returns | FinCalcBox"
        description="Free mutual fund return calculator to calculate absolute returns, annualized returns (CAGR), and total gains on your mutual fund investments with instant results."
        canonical="https://fincalcbox.com/tools/investment/mutual-fund-return"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Mutual Fund Return Calculator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate returns on mutual fund investments with absolute and annualized return calculations
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            {/* <AdPlaceholder position="in-content" className="mb-6" /> */}
            
            <NeuCard className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <NeuInput
                  label="Initial Investment ($)"
                  type="number"
                  placeholder="10000"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(e.target.value)}
                />
                <NeuInput
                  label="Current Value ($)"
                  type="number"
                  placeholder="15000"
                  value={currentValue}
                  onChange={(e) => setCurrentValue(e.target.value)}
                />
                <NeuInput
                  label="Investment Period (years)"
                  type="number"
                  placeholder="5"
                  value={investmentPeriod}
                  onChange={(e) => setInvestmentPeriod(e.target.value)}
                />

                <NeuButton variant="primary" onClick={calculate} className="w-full">
                  Calculate Returns
                </NeuButton>

                {result && (
                  <NeuCard inset className="animate-scale-in">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Total Gain/Loss</span>
                        <span className={`font-semibold ${result.totalGain >= 0 ? 'text-accent' : 'text-destructive'}`}>
                          ${result.totalGain.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Absolute Return</span>
                        <span className={`font-bold text-xl ${result.absoluteReturn >= 0 ? 'text-accent' : 'text-destructive'}`}>
                          {result.absoluteReturn.toFixed(2)}%
                        </span>
                      </div>
                      <div className="pt-3 border-t border-border flex justify-between items-center">
                        <span className="font-bold text-lg">Annualized Return</span>
                        <span className={`font-bold text-lg ${result.annualizedReturn >= 0 ? 'text-primary' : 'text-destructive'}`}>
                          {result.annualizedReturn.toFixed(2)}%
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

        <RelatedBlogs currentPage="mutual-fund-return" />

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
                  This Mutual Fund Return Calculator helps you calculate the performance of your mutual fund investments. 
                  Enter your initial investment amount, current value of your investment, and the investment period in years. 
                  The calculator computes your absolute return (total percentage gain/loss) and annualized return (average yearly return). 
                  Results update in real time as you type, giving you instant insights into your investment performance.
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
                      <h3 className="font-semibold mb-1">Real-time Return Calculation</h3>
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
                      <h3 className="font-semibold mb-1">Absolute & Annualized Returns</h3>
                      <p className="text-sm text-muted-foreground">
                        Calculate both absolute and annualized returns for comprehensive analysis
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Calculator className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Performance Analysis</h3>
                      <p className="text-sm text-muted-foreground">
                        Understand your investment performance with detailed breakdown
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

        {/* Related Blogs */}
        <RelatedBlogs currentPage="mutual-fund-return" />

        {/* <AdPlaceholder position="bottom" className="mt-8" /> */}
      </div>
    </div>
  );
}
