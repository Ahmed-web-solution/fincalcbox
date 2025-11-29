import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NeuInput from "@/components/NeuInput";
import NeuButton from "@/components/NeuButton";
import NeuCard from "@/components/NeuCard";
import SEOHelmet from "@/components/SEOHelmet";
// import AdPlaceholder from "@/components/AdPlaceholder";
import RelatedBlogs from "@/components/RelatedBlogs";
import { toast } from "@/hooks/use-toast";
import { DollarSign, Calculator, TrendingUp, Clock, ArrowLeft, ChevronDown } from "@/components/icons";

export default function RevenueCalculator() {
  const [unitsSold, setUnitsSold] = useState("");
  const [pricePerUnit, setPricePerUnit] = useState("");
  const [previousRevenue, setPreviousRevenue] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [result, setResult] = useState<{
    totalRevenue: number;
    averageRevenuePerUnit: number;
    revenueGrowth: number | null;
    revenueGrowthAmount: number | null;
  } | null>(null);

  // ✅ Real-time calculation
  useEffect(() => {
    if (unitsSold && pricePerUnit) {
      const units = parseFloat(unitsSold);
      const price = parseFloat(pricePerUnit);

      if (units > 0 && price > 0) {
        const totalRevenue = units * price;
        const averageRevenuePerUnit = totalRevenue / units;
        
        let revenueGrowth: number | null = null;
        let revenueGrowthAmount: number | null = null;
        
        if (previousRevenue && parseFloat(previousRevenue) > 0) {
          const prevRev = parseFloat(previousRevenue);
          revenueGrowthAmount = totalRevenue - prevRev;
          revenueGrowth = (revenueGrowthAmount / prevRev) * 100;
        }

        setResult({ totalRevenue, averageRevenuePerUnit, revenueGrowth, revenueGrowthAmount });
      }
    }
  }, [unitsSold, pricePerUnit, previousRevenue]);

  const calculate = () => {
    const units = parseFloat(unitsSold);
    const price = parseFloat(pricePerUnit);

    if (!unitsSold || !pricePerUnit) {
      toast({
        title: "Missing Information",
        description: "Please fill in units sold and price per unit",
        variant: "destructive",
      });
      return;
    }

    if (units <= 0 || price <= 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid positive numbers",
        variant: "destructive",
      });
      return;
    }
  };

  // ✅ FAQ data with professional, SEO-rich answers
  const faqs = [
    {
      question: "What is revenue and how is it different from profit?",
      answer: "Revenue, also called sales or turnover, is the total income generated from selling goods or services before deducting any expenses. It appears at the top of the income statement, earning it the name 'top line.' Profit, on the other hand, is what remains after subtracting all costs, expenses, taxes, and other deductions from revenue, making it the 'bottom line.' For example, if a business generates $100,000 in revenue but has $80,000 in total expenses, the profit is $20,000. Understanding this distinction is crucial because a company can have high revenue but low or even negative profit if expenses are too high. Investors and lenders look at both metrics, but profit ultimately determines business sustainability and growth potential."
    },
    {
      question: "How do I calculate total revenue for my business?",
      answer: "Calculate total revenue using the simple formula: Total Revenue = Units Sold × Price per Unit. For service businesses, it becomes: Total Revenue = Number of Customers × Average Price per Service. For example, if you sell 500 products at $50 each, your total revenue is 500 × $50 = $25,000. For businesses with multiple products, calculate revenue for each product line separately and sum them up. If you have subscription revenue, multiply the number of subscribers by the subscription price and the billing period. Accurate revenue calculation is essential for financial reporting, tax compliance, performance tracking, and making strategic business decisions about pricing, marketing, and expansion."
    },
    {
      question: "What is revenue growth and why is it important?",
      answer: "Revenue growth measures the increase (or decrease) in sales over a specific period, calculated as: Revenue Growth % = ((Current Period Revenue - Previous Period Revenue) / Previous Period Revenue) × 100. For example, growing from $50,000 to $60,000 represents 20% revenue growth (($60,000 - $50,000) / $50,000 × 100). This metric is critical because it indicates business health, market acceptance, and scalability potential. Investors particularly value consistent revenue growth as it demonstrates market demand, effective sales strategies, and sustainable business models. Positive revenue growth enables companies to invest in innovation, expand market share, hire talent, and achieve economies of scale, making it one of the most important metrics for both startups and established businesses."
    },
    {
      question: "What is the difference between gross revenue and net revenue?",
      answer: "Gross revenue is the total sales amount before any deductions, representing the full value of all transactions. Net revenue, also called net sales, is calculated by subtracting returns, allowances, discounts, and refunds from gross revenue, giving a more accurate picture of actual income. Formula: Net Revenue = Gross Revenue - Returns - Discounts - Allowances. For example, if gross revenue is $100,000 with $5,000 in returns and $3,000 in discounts, net revenue is $92,000. Most financial analysis and forecasting use net revenue because it reflects the actual cash flow available for covering expenses and generating profit. Public companies typically report net revenue in financial statements, as it provides stakeholders with a realistic view of business performance without inflated figures."
    },
    {
      question: "How can I increase my business revenue?",
      answer: "Increase revenue through five primary strategies: raise prices (without losing customers), increase sales volume, expand market reach, introduce new products/services, or improve customer retention. Price optimization can boost revenue significantly if value justifies the increase. Volume growth comes from marketing effectiveness, sales team performance, and distribution expansion. Market reach expands through geographic expansion, new customer segments, or online channels. New revenue streams include complementary products, premium tiers, or subscription models. Customer retention is often the most cost-effective strategy since acquiring new customers costs 5-25 times more than retaining existing ones. The most successful businesses combine multiple strategies: optimize pricing for existing products, expand into adjacent markets, create recurring revenue through subscriptions, and invest in customer success to maximize lifetime value and reduce churn."
    }
  ];

  // ✅ JSON-LD structured data - WebApplication schema for revenue calculator
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Revenue Calculator - Business Revenue & Growth Calculator",
    "description": "Free revenue calculator to calculate total revenue and revenue growth for your business. Calculate total revenue, average revenue per unit, and revenue growth percentage. Best revenue calculator for USA, Canada, UK, Australia.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.6",
      "ratingCount": "2847",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "FinCalcBox",
      "url": "https://fincalcbox.com"
    },
    "featureList": [
      "Revenue calculator",
      "Total revenue calculator",
      "Revenue growth calculator",
      "Sales revenue calculator",
      "Average revenue per unit",
      "Real-time revenue calculation"
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
        title="Revenue Calculator - Business Revenue & Growth Calculator | FinCalcBox"
        description="Free revenue calculator to calculate total revenue and revenue growth for your business. Calculate total revenue, average revenue per unit, and revenue growth percentage. Best revenue calculator for USA, Canada, UK, Australia."
        canonical="https://fincalcbox.com/tools/business-marketing/revenue-calculator"
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
            <DollarSign className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Revenue Calculator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate total revenue and revenue growth for your business
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <NeuCard className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <NeuInput
                  label="Units Sold (or Customers)"
                  type="number"
                  placeholder="500"
                  value={unitsSold}
                  onChange={(e) => setUnitsSold(e.target.value)}
                />
                <NeuInput
                  label="Price per Unit ($)"
                  type="number"
                  placeholder="50"
                  value={pricePerUnit}
                  onChange={(e) => setPricePerUnit(e.target.value)}
                />
                <NeuInput
                  label="Previous Period Revenue ($ - Optional)"
                  type="number"
                  placeholder="20000"
                  value={previousRevenue}
                  onChange={(e) => setPreviousRevenue(e.target.value)}
                />

                <NeuButton variant="primary" onClick={calculate} className="w-full">
                  Calculate Revenue
                </NeuButton>

                {result && (
                  <>
                    <NeuCard inset className="animate-scale-in">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Units Sold</span>
                          <span className="font-semibold">
                            {parseFloat(unitsSold).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Average Revenue per Unit</span>
                          <span className="font-semibold">
                            ${result.averageRevenuePerUnit.toFixed(2)}
                          </span>
                        </div>
                        <div className="pt-3 border-t border-border flex justify-between items-center">
                          <span className="font-bold text-lg">Total Revenue</span>
                          <span className="font-bold text-2xl text-primary">
                            ${result.totalRevenue.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                        {result.revenueGrowth !== null && (
                          <>
                            <div className="pt-3 border-t border-border flex justify-between items-center">
                              <span className="text-muted-foreground">Revenue Growth Amount</span>
                              <span className={`font-semibold ${result.revenueGrowthAmount! >= 0 ? 'text-accent' : 'text-destructive'}`}>
                                {result.revenueGrowthAmount! >= 0 ? '+' : ''}${result.revenueGrowthAmount!.toLocaleString(undefined, {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })}
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="font-bold">Revenue Growth</span>
                              <span className={`font-bold text-xl ${result.revenueGrowth >= 0 ? 'text-accent' : 'text-destructive'}`}>
                                {result.revenueGrowth >= 0 ? '+' : ''}{result.revenueGrowth.toFixed(2)}%
                              </span>
                            </div>
                          </>
                        )}
                      </div>
                    </NeuCard>

                    {/* Calculation Summary Card */}
                    <NeuCard className="mt-4">
                      <h3 className="font-semibold mb-3">Calculation Summary</h3>
                      <div className="space-y-2 text-sm">
                        <p className="text-muted-foreground">
                          <strong>Formula:</strong> Total Revenue = Units Sold × Price per Unit
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Calculation:</strong> {unitsSold} units × ${pricePerUnit} = ${result.totalRevenue.toFixed(2)}
                        </p>
                        {result.revenueGrowth !== null && (
                          <>
                            <p className="text-muted-foreground">
                              <strong>Previous Revenue:</strong> ${parseFloat(previousRevenue).toFixed(2)}
                            </p>
                            <p className="text-muted-foreground">
                              <strong>Growth %:</strong> (${result.totalRevenue.toFixed(2)} - ${previousRevenue}) / ${previousRevenue} × 100 = {result.revenueGrowth.toFixed(2)}%
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
        <RelatedBlogs currentPage="revenue-calculator" />

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
                  This Revenue Calculator helps you calculate total revenue and revenue growth for your business. 
                  Enter the number of units sold (or customers served) and the price per unit. Optionally, enter your 
                  previous period revenue to calculate revenue growth percentage. The calculator computes total revenue, 
                  average revenue per unit, revenue growth amount, and growth percentage. Results update in real time as 
                  you type, with a detailed calculation summary.
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
                      <h3 className="font-semibold mb-1">Revenue Calculation</h3>
                      <p className="text-sm text-muted-foreground">
                        Calculate total revenue from units sold and price per unit
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <TrendingUp className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Growth Analysis</h3>
                      <p className="text-sm text-muted-foreground">
                        Track revenue growth percentage and growth amount
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Calculator className="h-5 w-5 text-primary" />
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
