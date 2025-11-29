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
import { Receipt, Calculator, DollarSign, TrendingUp, Clock, ArrowLeft, ChevronDown } from "@/components/icons";

export default function GSTCalculator() {
  const [originalAmount, setOriginalAmount] = useState("");
  const [gstRate, setGstRate] = useState("");
  const [gstType, setGstType] = useState<"exclusive" | "inclusive">("exclusive");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [result, setResult] = useState<{
    gstAmount: number;
    finalAmount: number;
    baseAmount: number;
  } | null>(null);

  // ✅ Real-time calculation
  useEffect(() => {
    if (originalAmount && gstRate) {
      const amount = parseFloat(originalAmount);
      const rate = parseFloat(gstRate) / 100;

      if (amount > 0 && rate >= 0) {
        let gstAmount: number;
        let finalAmount: number;
        let baseAmount: number;

        if (gstType === "exclusive") {
          // GST Exclusive: GST is added to the base amount
          baseAmount = amount;
          gstAmount = amount * rate;
          finalAmount = baseAmount + gstAmount;
        } else {
          // GST Inclusive: GST is included in the amount
          finalAmount = amount;
          baseAmount = amount / (1 + rate);
          gstAmount = finalAmount - baseAmount;
        }

        setResult({ gstAmount, finalAmount, baseAmount });
      }
    }
  }, [originalAmount, gstRate, gstType]);

  const calculate = () => {
    const amount = parseFloat(originalAmount);
    const rate = parseFloat(gstRate) / 100;

    if (!originalAmount || !gstRate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (amount <= 0 || rate < 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid positive numbers",
        variant: "destructive",
      });
      return;
    }

    // Show ad popup on first calculate
    if (!localStorage.getItem('gstCalcPopupShown')) {
      localStorage.setItem('gstCalcPopupShown', 'true');
    }
  };

  // ✅ FAQ data with professional, SEO-rich answers
  const faqs = [
    {
      question: "What is GST and how does it work?",
      answer: "GST (Goods and Services Tax) is an indirect consumption tax applied to the supply of goods and services in many countries including Canada, Australia, India, and New Zealand. It is a value-added tax collected at each stage of the supply chain, with businesses able to claim credits for GST paid on their inputs. In the UK and EU, a similar system called VAT (Value Added Tax) is used. GST replaces multiple indirect taxes with a single unified tax system, making compliance simpler for businesses and creating a transparent tax structure for consumers."
    },
    {
      question: "What is the difference between GST inclusive and GST exclusive?",
      answer: "GST exclusive means the tax is added on top of the base price, so the final price equals the base price plus GST. For example, a $100 item with 10% GST exclusive would cost $110 total. GST inclusive means the tax is already included in the displayed price, so you need to calculate backwards to find the base amount. Using the same example, a $110 GST-inclusive price with 10% GST has a base price of $100 and includes $10 of GST. Retailers typically use GST-inclusive pricing for consumer-facing prices, while B2B transactions often quote GST-exclusive prices."
    },
    {
      question: "How do I calculate GST manually?",
      answer: "For GST exclusive calculations, multiply the base price by the GST rate to get the GST amount, then add it to the base price for the total. Formula: GST Amount = Base Price × GST Rate, Final Price = Base Price + GST Amount. For example, $1,000 with 18% GST: GST = $1,000 × 0.18 = $180, Final = $1,000 + $180 = $1,180. For GST inclusive (reverse calculation), divide the final price by (1 + GST rate) to get the base price, then subtract the base from final to get GST. Formula: Base Price = Final Price ÷ (1 + GST Rate), GST Amount = Final Price - Base Price. For example, $1,180 with 18% GST inclusive: Base = $1,180 ÷ 1.18 = $1,000, GST = $1,180 - $1,000 = $180."
    },
    {
      question: "What are common GST rates in different countries?",
      answer: "GST rates vary significantly by country and jurisdiction. Canada has a federal GST of 5%, with some provinces adding provincial sales tax (PST) or harmonized sales tax (HST) ranging from 13-15% combined. Australia has a standard GST rate of 10% on most goods and services. India uses a multi-slab GST system with rates of 5%, 12%, 18%, and 28% depending on the product category, plus a special rate of 0.25% for precious stones. New Zealand has a GST of 15%, while Singapore charges 9% GST. The UK uses VAT (equivalent to GST) at 20% standard rate, with reduced rates of 5% and 0% for certain items."
    },
    {
      question: "Can I use this calculator for reverse GST calculation?",
      answer: "Yes, this calculator fully supports reverse GST calculations through the 'GST Inclusive' option. Reverse GST calculation is essential when you have the final price (including GST) and need to determine the base price and GST component separately. This is commonly needed for accounting, invoice preparation, tax filing, and reconciliation purposes. Simply select 'GST Inclusive' from the dropdown, enter the total amount that includes GST, input the applicable GST rate, and the calculator will automatically extract the base amount and GST portion with a detailed breakdown of the calculation steps."
    }
  ];

  // ✅ JSON-LD structured data - WebApplication schema for GST calculator
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "GST Calculator - Goods and Services Tax Calculator",
    "description": "Free GST calculator to calculate Goods and Services Tax. Calculate GST amount, final price, and base price with GST inclusive and exclusive options. Best GST calculator for USA, Canada, UK, Australia.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "GST calculator",
      "Goods and Services Tax calculator",
      "GST inclusive calculator",
      "GST exclusive calculator",
      "Reverse GST calculator",
      "Real-time GST calculation"
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
      {/* ✅ SEO Meta Tags optimized for HIGH-CPC business and tax keywords */}
      <SEOHelmet
        title="GST Calculator - Goods and Services Tax Calculator | FinCalcBox"
        description="Free GST calculator to calculate Goods and Services Tax. Calculate GST amount, final price, and base price with GST inclusive and exclusive options. Best GST calculator for USA, Canada, UK, Australia."
        keywords="GST calculator, goods and services tax calculator, GST inclusive calculator, GST exclusive calculator, reverse GST calculator, sales tax calculator, tax calculator, business tax calculator, GST rate calculator"
        canonical="https://www.fincalcbox.com/tools/business-marketing/gst-calculator"
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
            <Receipt className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">GST Calculator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate Goods and Services Tax with inclusive and exclusive options
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <NeuCard className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-foreground">
                    GST Type
                  </label>
                  <select
                    className="neu-inset w-full px-4 py-3 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all rounded-xl"
                    value={gstType}
                    onChange={(e) => setGstType(e.target.value as "exclusive" | "inclusive")}
                  >
                    <option value="exclusive">GST Exclusive (GST added to price)</option>
                    <option value="inclusive">GST Inclusive (GST included in price)</option>
                  </select>
                </div>

                <NeuInput
                  label={gstType === "exclusive" ? "Base Amount ($)" : "Amount with GST ($)"}
                  type="number"
                  placeholder="1000"
                  value={originalAmount}
                  onChange={(e) => setOriginalAmount(e.target.value)}
                />
                <NeuInput
                  label="GST Rate (%)"
                  type="number"
                  placeholder="18"
                  value={gstRate}
                  onChange={(e) => setGstRate(e.target.value)}
                />

                <NeuButton variant="primary" onClick={calculate} className="w-full">
                  Calculate GST
                </NeuButton>

                {result && (
                  <>
                    <NeuCard inset className="animate-scale-in">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">
                            {gstType === "exclusive" ? "Base Amount" : "Base Amount (Excluding GST)"}
                          </span>
                          <span className="font-semibold">
                            ${result.baseAmount.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">GST Amount</span>
                          <span className="font-bold text-2xl text-primary">
                            ${result.gstAmount.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                        <div className="pt-3 border-t border-border flex justify-between items-center">
                          <span className="font-bold text-lg">
                            {gstType === "exclusive" ? "Final Amount (Including GST)" : "Final Amount"}
                          </span>
                          <span className="font-bold text-lg text-accent">
                            ${result.finalAmount.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                      </div>
                    </NeuCard>

                    {/* Reverse GST Breakdown */}
                    <NeuCard className="mt-4">
                      <h3 className="font-semibold mb-3">Calculation Breakdown</h3>
                      <div className="space-y-2 text-sm">
                        {gstType === "exclusive" ? (
                          <>
                            <p className="text-muted-foreground">
                              <strong>Base Amount:</strong> ${result.baseAmount.toFixed(2)}
                            </p>
                            <p className="text-muted-foreground">
                              <strong>GST ({gstRate}%):</strong> ${result.baseAmount.toFixed(2)} × {gstRate}% = ${result.gstAmount.toFixed(2)}
                            </p>
                            <p className="text-muted-foreground">
                              <strong>Final Amount:</strong> ${result.baseAmount.toFixed(2)} + ${result.gstAmount.toFixed(2)} = ${result.finalAmount.toFixed(2)}
                            </p>
                          </>
                        ) : (
                          <>
                            <p className="text-muted-foreground">
                              <strong>Amount with GST:</strong> ${result.finalAmount.toFixed(2)}
                            </p>
                            <p className="text-muted-foreground">
                              <strong>Base Amount:</strong> ${result.finalAmount.toFixed(2)} ÷ (1 + {gstRate}%) = ${result.baseAmount.toFixed(2)}
                            </p>
                            <p className="text-muted-foreground">
                              <strong>GST Amount:</strong> ${result.finalAmount.toFixed(2)} - ${result.baseAmount.toFixed(2)} = ${result.gstAmount.toFixed(2)}
                            </p>
                          </>
                        )}
                      </div>
                    </NeuCard>
                  </>
                )}
              </div>
            </NeuCard>
          </div>

          <aside className="lg:block hidden">
            {/* <AdPlaceholder position="sidebar" /> */}
          </aside>
        </div>

        {/* Related Blogs */}
        <RelatedBlogs currentPage="gst-calculator" />

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
                  This GST Calculator helps you calculate Goods and Services Tax (GST) on your transactions. 
                  Choose between GST Exclusive (GST added to the base price) or GST Inclusive (GST included in the price). 
                  Enter the amount and GST rate percentage. The calculator computes the GST amount, base amount, and final amount. 
                  Results update in real time as you type, with a detailed breakdown showing the calculation steps.
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
                      <h3 className="font-semibold mb-1">GST Inclusive & Exclusive</h3>
                      <p className="text-sm text-muted-foreground">
                        Calculate GST for both inclusive and exclusive pricing models
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <TrendingUp className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Real-time Calculation</h3>
                      <p className="text-sm text-muted-foreground">
                        Get instant results as you type, no need to click calculate
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Calculator className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Calculation Breakdown</h3>
                      <p className="text-sm text-muted-foreground">
                        See detailed step-by-step calculation breakdown for transparency
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
                        Fast, responsive design for USA and Canada businesses
                      </p>
                    </div>
                  </div>
                </div>
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

        {/* <AdPlaceholder position="bottom" className="mt-8" /> */}
      </div>
    </div>
  );
}
