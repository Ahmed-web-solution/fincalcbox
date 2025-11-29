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

export default function ProfitMargin() {
  const [costPrice, setCostPrice] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [result, setResult] = useState<{
    profitAmount: number;
    profitPercentage: number;
    costPercentage: number;
    marginPercentage: number;
  } | null>(null);

  // ✅ Real-time calculation
  useEffect(() => {
    if (costPrice && sellingPrice) {
      const cost = parseFloat(costPrice);
      const selling = parseFloat(sellingPrice);

      if (cost > 0 && selling >= 0) {
        const profitAmount = selling - cost;
        // Profit % = (Profit / Cost Price) × 100
        const profitPercentage = (profitAmount / cost) * 100;
        // Cost % = (Cost Price / Selling Price) × 100
        const costPercentage = (cost / selling) * 100;
        // Margin % = (Profit / Selling Price) × 100
        const marginPercentage = selling > 0 ? (profitAmount / selling) * 100 : 0;

        setResult({ profitAmount, profitPercentage, costPercentage, marginPercentage });
      }
    }
  }, [costPrice, sellingPrice]);

  const calculate = () => {
    const cost = parseFloat(costPrice);
    const selling = parseFloat(sellingPrice);

    if (!costPrice || !sellingPrice) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (cost <= 0) {
      toast({
        title: "Invalid Input",
        description: "Cost price must be greater than 0",
        variant: "destructive",
      });
      return;
    }

    // Show ad popup on first calculate
    if (!localStorage.getItem('profitMarginCalcPopupShown')) {
      localStorage.setItem('profitMarginCalcPopupShown', 'true');
    }
  };

  // ✅ FAQ data with professional, SEO-rich answers
  const faqs = [
    {
      question: "What is profit margin and why is it important?",
      answer: "Profit margin is a key financial metric that measures how much profit a business makes for every dollar of revenue, expressed as a percentage of total sales. It's calculated by dividing net profit by revenue and multiplying by 100. Profit margin is crucial because it indicates business efficiency, pricing strategy effectiveness, and overall financial health. Investors and lenders use profit margin to assess a company's profitability and compare it against industry benchmarks. Higher profit margins generally indicate better cost control, strong pricing power, and effective business operations, making them essential for long-term sustainability and growth."
    },
    {
      question: "How do I calculate profit margin percentage?",
      answer: "To calculate profit margin percentage, use the formula: Profit Margin = ((Revenue - Cost) / Revenue) × 100. For example, if you sell a product for $150 (revenue) that costs $100 to make, the profit is $50, and the profit margin is ($50 / $150) × 100 = 33.33%. This means you make $0.33 profit for every dollar of sales. Alternatively, you can calculate it as: Profit Margin = (1 - Cost Percentage) × 100. It's important to distinguish this from markup percentage, which is based on cost rather than selling price. Consistent margin tracking helps businesses monitor pricing effectiveness and profitability trends over time."
    },
    {
      question: "What is the difference between gross profit margin and net profit margin?",
      answer: "Gross profit margin measures profitability after deducting only the cost of goods sold (COGS) from revenue, focusing on production efficiency. Formula: Gross Margin = (Revenue - COGS) / Revenue × 100. Net profit margin, on the other hand, accounts for all expenses including operating costs, taxes, interest, and depreciation, showing overall business profitability. Formula: Net Margin = Net Profit / Revenue × 100. For example, a company might have a 60% gross margin but only a 15% net margin after all expenses. Gross margin is useful for manufacturing and product pricing decisions, while net margin provides a complete picture of financial health and is what investors typically focus on."
    },
    {
      question: "What is a good profit margin for my business?",
      answer: "A 'good' profit margin varies significantly by industry and business model. Retail businesses typically have net margins of 2-5%, while software companies often achieve 15-30% or higher due to low variable costs. Restaurants average 3-5% net margins, professional services range from 10-20%, and luxury goods can exceed 25%. Comparing your margin to industry benchmarks is more relevant than using a universal standard. Additionally, factors like business maturity, market conditions, and growth strategy affect what's considered good. Startups may accept lower margins while scaling, whereas established businesses should target industry averages or higher to ensure profitability and competitiveness."
    },
    {
      question: "How can I improve my profit margin?",
      answer: "Improving profit margin requires a multi-faceted approach focusing on both revenue and cost sides. Increase revenue by raising prices strategically (without losing customers), introducing premium product lines, upselling and cross-selling, and entering higher-margin market segments. Reduce costs by negotiating better supplier rates, improving operational efficiency, reducing waste, automating processes, and optimizing inventory management to avoid dead stock. Additionally, focus on high-margin products or services, eliminate unprofitable offerings, and improve customer retention (which reduces acquisition costs). Even small improvements in margin can significantly impact bottom-line profitability; for instance, a 1% margin increase on $1M revenue equals $10,000 extra profit annually."
    }
  ];

  // ✅ JSON-LD structured data - WebApplication schema for profit margin calculator
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Profit Margin Calculator - Business Profit Calculator",
    "description": "Free profit margin calculator to calculate profit margins for your business. Calculate profit amount, profit percentage, cost percentage, and margin percentage. Best profit margin calculator for USA, Canada, UK, Australia.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Profit margin calculator",
      "Business profit calculator",
      "Profit percentage calculator",
      "Margin calculator",
      "Cost percentage calculator",
      "Real-time profit calculation"
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
        title="Profit Margin Calculator - Business Profit & Margin Calculator | FinCalcBox"
        description="Free profit margin calculator to calculate profit margins for your business. Calculate profit amount, profit percentage, cost percentage, and margin percentage. Best profit margin calculator for USA, Canada, UK, Australia."
        keywords="profit margin calculator, business profit calculator, profit percentage calculator, margin calculator, cost percentage calculator, gross profit calculator, net profit calculator, business margin calculator, profit calculator"
        canonical="https://www.fincalcbox.com/tools/business-marketing/profit-margin"
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
            <TrendingUp className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Profit Margin Calculator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate profit margins for your business with cost price and selling price
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
                  label="Selling Price ($)"
                  type="number"
                  placeholder="150"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(e.target.value)}
                />

                <NeuButton variant="primary" onClick={calculate} className="w-full">
                  Calculate Profit Margin
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
                          <span className="text-muted-foreground">Selling Price</span>
                          <span className="font-semibold">
                            ${parseFloat(sellingPrice).toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Profit/Loss Amount</span>
                          <span className={`font-bold text-xl ${result.profitAmount >= 0 ? 'text-accent' : 'text-destructive'}`}>
                            ${result.profitAmount.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                        <div className="pt-3 border-t border-border flex justify-between items-center">
                          <span className="font-bold text-lg">Profit Percentage</span>
                          <span className={`font-bold text-2xl ${result.profitPercentage >= 0 ? 'text-primary' : 'text-destructive'}`}>
                            {result.profitPercentage.toFixed(2)}%
                          </span>
                        </div>
                      </div>
                    </NeuCard>

                    {/* Detailed Profit Breakdown Card */}
                    <NeuCard className="mt-4">
                      <h3 className="font-semibold mb-3">Detailed Profit Breakdown</h3>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 border-b border-border/50">
                          <span className="text-sm text-muted-foreground">Cost Percentage</span>
                          <span className="text-sm font-semibold">
                            {result.costPercentage.toFixed(2)}%
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-border/50">
                          <span className="text-sm text-muted-foreground">Margin Percentage</span>
                          <span className={`text-sm font-semibold ${result.marginPercentage >= 0 ? 'text-accent' : 'text-destructive'}`}>
                            {result.marginPercentage.toFixed(2)}%
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-sm font-bold">Profit Status</span>
                          <span className={`text-sm font-bold ${result.profitAmount >= 0 ? 'text-accent' : 'text-destructive'}`}>
                            {result.profitAmount >= 0 ? '✓ Profit' : '✗ Loss'}
                          </span>
                        </div>
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
        <RelatedBlogs currentPage="profit-margin" />

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
                  This Profit Margin Calculator helps you calculate profit margins for your business. 
                  Enter your cost price and selling price. The calculator computes the profit amount, 
                  profit percentage (based on cost), cost percentage, and margin percentage (profit as 
                  percentage of selling price). Results update in real time as you type, with color-coded 
                  indicators showing profit (green) or loss (red) status.
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
                      <h3 className="font-semibold mb-1">Real-time Profit Calculation</h3>
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
                      <h3 className="font-semibold mb-1">Color-Coded Results</h3>
                      <p className="text-sm text-muted-foreground">
                        Visual indicators for profit (green) and loss (red) status
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Calculator className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Detailed Breakdown</h3>
                      <p className="text-sm text-muted-foreground">
                        See profit percentage, margin percentage, and cost percentage
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
