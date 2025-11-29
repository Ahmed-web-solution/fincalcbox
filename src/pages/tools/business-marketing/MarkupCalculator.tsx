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
import { Calculator, DollarSign, TrendingUp, Clock, ArrowLeft, ChevronDown } from "@/components/icons";

export default function MarkupCalculator() {
  const [costPrice, setCostPrice] = useState("");
  const [markupRate, setMarkupRate] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [result, setResult] = useState<{
    sellingPrice: number;
    markupAmount: number;
    profitPercentage: number;
  } | null>(null);

  // ✅ Real-time calculation
  useEffect(() => {
    if (costPrice && markupRate) {
      const cost = parseFloat(costPrice);
      const markup = parseFloat(markupRate) / 100;

      if (cost > 0 && markup >= 0) {
        // Markup Formula: Selling Price = Cost Price × (1 + Markup Rate)
        const sellingPrice = cost * (1 + markup);
        const markupAmount = sellingPrice - cost;
        // Profit % = (Markup Amount / Selling Price) × 100
        const profitPercentage = (markupAmount / sellingPrice) * 100;

        setResult({ sellingPrice, markupAmount, profitPercentage });
      }
    }
  }, [costPrice, markupRate]);

  const calculate = () => {
    const cost = parseFloat(costPrice);
    const markup = parseFloat(markupRate) / 100;

    if (!costPrice || !markupRate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (cost <= 0 || markup < 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid positive numbers",
        variant: "destructive",
      });
      return;
    }

    // Show ad popup on first calculate
    if (!localStorage.getItem('markupCalcPopupShown')) {
      localStorage.setItem('markupCalcPopupShown', 'true');
    }
  };

  // ✅ FAQ data with professional, SEO-rich answers
  const faqs = [
    {
      question: "What is markup and how is it calculated?",
      answer: "Markup is the amount added to the cost price of a product or service to determine the selling price, typically expressed as a percentage of the cost. The formula is: Markup Percentage = ((Selling Price - Cost Price) / Cost Price) × 100, or equivalently, Selling Price = Cost Price × (1 + Markup Rate). For example, if a product costs $100 and you apply a 50% markup, the selling price is $100 × 1.50 = $150. Markup is essential for covering overhead costs, operational expenses, and generating profit. Businesses use markup to ensure consistent profitability across product lines while remaining competitive in their market."
    },
    {
      question: "What is the difference between markup and margin?",
      answer: "Markup and margin are both profitability metrics but calculated differently and serve different purposes. Markup is based on cost price: Markup = (Profit / Cost) × 100, while margin is based on selling price: Margin = (Profit / Selling Price) × 100. For the same dollar profit, markup percentage is always higher than margin percentage. For example, a $100 cost and $150 selling price yields $50 profit, which is a 50% markup ($50/$100) but only a 33.3% margin ($50/$150). Understanding this distinction is critical because pricing errors can significantly impact profitability. Use markup for setting prices from cost, and use margin for analyzing profitability relative to sales."
    },
    {
      question: "What is a standard markup percentage?",
      answer: "Standard markup percentages vary widely by industry, product type, and business model. Retail clothing typically uses 100-200% markup (keystone pricing or higher), while grocery stores operate on 15-30% markup due to high volume and low margins. Wholesale businesses use 15-30% markup, restaurants apply 200-400% markup on food items (especially beverages), and service-based businesses can range from 50% to over 300% depending on expertise level. Luxury goods and jewelry often exceed 300% markup. These industry standards exist due to factors like overhead costs, competition, perceived value, demand elasticity, and expected sales volume. Always research your specific industry benchmarks before setting markup rates."
    },
    {
      question: "How do I convert markup to margin?",
      answer: "Converting between markup and margin is essential for pricing and financial analysis. To convert markup to margin, use: Margin = Markup / (1 + Markup). For example, 50% markup (0.50) converts to 33.3% margin: 0.50 / 1.50 = 0.333. To convert margin to markup, use: Markup = Margin / (1 - Margin). For example, 33.3% margin (0.333) converts to 50% markup: 0.333 / 0.667 = 0.50. This conversion is crucial when comparing pricing strategies or when suppliers provide cost-plus pricing but you need to understand margin impact. Many businesses make costly errors by confusing the two metrics, so always verify which metric you're using when making pricing decisions."
    },
    {
      question: "Should I use markup or margin for pricing?",
      answer: "The choice between markup and margin depends on your pricing strategy and business needs. Use markup pricing (cost-plus pricing) when you want simple, straightforward pricing based on product costs, when negotiating with B2B customers who expect transparent cost structures, or when entering new markets where competitive pricing isn't well-established. Use margin pricing when analyzing overall business profitability, comparing product performance, setting revenue targets, or when margins are industry-standard metrics (like software or services). Most businesses should understand both: use markup for setting prices from costs, but track margins for financial analysis and profitability goals. Many successful retailers use markup for daily pricing decisions but evaluate business health through margin analysis."
    }
  ];

  // ✅ JSON-LD structured data - WebApplication schema for markup calculator
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Markup Calculator - Product Markup Calculator",
    "description": "Free markup calculator to calculate markup percentage on products. Calculate selling price, markup amount, and profit percentage based on cost price and markup rate. Best markup calculator for USA, Canada, UK, Australia.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Markup calculator",
      "Product markup calculator",
      "Markup percentage calculator",
      "Selling price calculator",
      "Profit percentage calculator",
      "Real-time markup calculation"
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
      {/* ✅ SEO Meta Tags optimized for HIGH-CPC business keywords */}
      <SEOHelmet
        title="Markup Calculator - Product Markup & Profit Calculator | FinCalcBox"
        description="Free markup calculator to calculate markup percentage on products. Calculate selling price, markup amount, and profit percentage based on cost price and markup rate. Best markup calculator for USA, Canada, UK, Australia."
        keywords="markup calculator, product markup calculator, markup percentage calculator, selling price calculator, profit percentage calculator, business markup calculator, retail markup calculator, wholesale markup calculator"
        canonical="https://www.fincalcbox.com/tools/business-marketing/markup-calculator"
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
            <Calculator className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Markup Calculator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate markup percentage on products based on cost price and markup rate
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <NeuCard className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <NeuInput
                  label="Cost Price ($)"
                  type="number"
                  placeholder="100"
                  value={costPrice}
                  onChange={(e) => setCostPrice(e.target.value)}
                />
                <NeuInput
                  label="Markup Rate (%)"
                  type="number"
                  placeholder="25"
                  value={markupRate}
                  onChange={(e) => setMarkupRate(e.target.value)}
                />

                <NeuButton variant="primary" onClick={calculate} className="w-full">
                  Calculate Markup
                </NeuButton>

                {result && (
                  <>
                    <NeuCard inset className="animate-scale-in">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Cost Price</span>
                          <span className="font-semibold">
                            ${parseFloat(costPrice).toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Markup Amount</span>
                          <span className="font-bold text-xl text-accent">
                            ${result.markupAmount.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Profit Percentage</span>
                          <span className="font-semibold">
                            {result.profitPercentage.toFixed(2)}%
                          </span>
                        </div>
                        <div className="pt-3 border-t border-border flex justify-between items-center">
                          <span className="font-bold text-lg">Selling Price</span>
                          <span className="font-bold text-2xl text-primary">
                            ${result.sellingPrice.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                      </div>
                    </NeuCard>

                    {/* Result Summary Card */}
                    <NeuCard className="mt-4">
                      <h3 className="font-semibold mb-3">Calculation Summary</h3>
                      <div className="space-y-2 text-sm">
                        <p className="text-muted-foreground">
                          <strong>Cost Price:</strong> ${parseFloat(costPrice).toFixed(2)}
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Markup Rate:</strong> {markupRate}%
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Markup Amount:</strong> ${parseFloat(costPrice).toFixed(2)} × {markupRate}% = ${result.markupAmount.toFixed(2)}
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Selling Price:</strong> ${parseFloat(costPrice).toFixed(2)} + ${result.markupAmount.toFixed(2)} = ${result.sellingPrice.toFixed(2)}
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Profit Margin:</strong> {result.profitPercentage.toFixed(2)}% of selling price
                        </p>
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
        <RelatedBlogs currentPage="markup-calculator" />

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
                  This Markup Calculator helps you calculate the markup percentage on your products. 
                  Enter your cost price and desired markup rate percentage. The calculator uses the formula 
                  Selling Price = Cost Price × (1 + Markup Rate) to compute the selling price, markup amount, 
                  and profit percentage. Results update in real time as you type, with a detailed calculation 
                  summary showing all the steps.
                </p>
                
                <div className="mt-4 p-4 neu-inset rounded-xl bg-primary/5">
                  <h3 className="font-semibold mb-2">Markup Formula:</h3>
                  <p className="text-sm text-muted-foreground">
                    <strong>Selling Price = Cost Price × (1 + Markup Rate)</strong>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>Markup Amount = Cost Price × Markup Rate</strong>
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    <strong>Profit Percentage = (Markup Amount / Selling Price) × 100</strong>
                  </p>
                </div>
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
                      <h3 className="font-semibold mb-1">Real-time Markup Calculation</h3>
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
                      <h3 className="font-semibold mb-1">Detailed Explanation</h3>
                      <p className="text-sm text-muted-foreground">
                        See step-by-step calculation breakdown with formulas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Calculator className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Profit Percentage</h3>
                      <p className="text-sm text-muted-foreground">
                        Calculate profit percentage based on selling price
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
