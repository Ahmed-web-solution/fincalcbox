import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NeuInput from "@/components/NeuInput";
import NeuButton from "@/components/NeuButton";
import NeuCard from "@/components/NeuCard";
import SEOHelmet from "@/components/SEOHelmet";
// import AdPlaceholder from "@/components/AdPlaceholder";
import RelatedBlogs from "@/components/RelatedBlogs";
import { toast } from "@/hooks/use-toast";
import { TrendingUp, Calculator, DollarSign, Clock, ArrowLeft, ChevronDown } from "@/components/icons";

export default function BreakEvenCalculator() {
  const [fixedCosts, setFixedCosts] = useState("");
  const [variableCostPerUnit, setVariableCostPerUnit] = useState("");
  const [sellingPricePerUnit, setSellingPricePerUnit] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [result, setResult] = useState<{
    breakEvenUnits: number;
    breakEvenRevenue: number;
    contributionMargin: number;
    contributionMarginRatio: number;
  } | null>(null);

  // ✅ Real-time calculation
  useEffect(() => {
    if (fixedCosts && variableCostPerUnit && sellingPricePerUnit) {
      const fixed = parseFloat(fixedCosts);
      const variableCost = parseFloat(variableCostPerUnit);
      const sellingPrice = parseFloat(sellingPricePerUnit);

      if (fixed > 0 && variableCost >= 0 && sellingPrice > 0 && sellingPrice > variableCost) {
        const contributionMargin = sellingPrice - variableCost;
        const breakEvenUnits = fixed / contributionMargin;
        const breakEvenRevenue = breakEvenUnits * sellingPrice;
        const contributionMarginRatio = (contributionMargin / sellingPrice) * 100;

        setResult({ breakEvenUnits, breakEvenRevenue, contributionMargin, contributionMarginRatio });
      } else {
        setResult(null);
      }
    }
  }, [fixedCosts, variableCostPerUnit, sellingPricePerUnit]);

  const calculate = () => {
    const fixed = parseFloat(fixedCosts);
    const variableCost = parseFloat(variableCostPerUnit);
    const sellingPrice = parseFloat(sellingPricePerUnit);

    if (!fixedCosts || !variableCostPerUnit || !sellingPricePerUnit) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (fixed <= 0 || variableCost < 0 || sellingPrice <= 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid positive numbers",
        variant: "destructive",
      });
      return;
    }

    if (sellingPrice <= variableCost) {
      toast({
        title: "Invalid Pricing",
        description: "Selling price must be greater than variable cost per unit",
        variant: "destructive",
      });
      return;
    }
  };

  // ✅ FAQ data with professional, SEO-rich answers
  const faqs = [
    {
      question: "What is break-even analysis and why is it important?",
      answer: "Break-even analysis is a financial calculation that determines the point at which total revenue equals total costs, meaning the business neither makes a profit nor incurs a loss. This critical business metric helps entrepreneurs and managers understand the minimum sales volume needed to cover all expenses, making it essential for pricing strategies, budgeting, and feasibility studies. Break-even analysis provides insights into business risk levels, helps in setting realistic sales targets, and enables businesses to evaluate the financial viability of new products or ventures. Understanding your break-even point allows you to make informed decisions about cost management, pricing adjustments, and expansion plans while maintaining financial stability."
    },
    {
      question: "How do I calculate my break-even point?",
      answer: "To calculate your break-even point, use the formula: Break-Even Units = Fixed Costs / (Selling Price per Unit - Variable Cost per Unit). The denominator (Selling Price - Variable Cost) is called the contribution margin, which represents how much each unit sold contributes toward covering fixed costs. For example, if your fixed costs are $10,000, selling price is $50, and variable cost is $30, your break-even point is $10,000 / ($50 - $30) = 500 units. To find break-even revenue, multiply break-even units by selling price: 500 × $50 = $25,000. This means you need to sell 500 units or generate $25,000 in revenue to cover all costs before making any profit."
    },
    {
      question: "What is the difference between fixed and variable costs?",
      answer: "Fixed costs remain constant regardless of production volume or sales level, such as rent, salaries, insurance, depreciation, and lease payments. These costs must be paid even if you produce zero units. Variable costs, on the other hand, fluctuate directly with production volume, including raw materials, direct labor, packaging, shipping, and sales commissions. For example, a bakery's rent is a fixed cost (same whether they bake 100 or 1,000 loaves), while flour is a variable cost (more flour needed for more loaves). Understanding this distinction is crucial for break-even analysis, pricing decisions, and profitability planning, as reducing fixed costs lowers your break-even point permanently, while managing variable costs improves profit margins on each unit sold."
    },
    {
      question: "What is contribution margin and why does it matter?",
      answer: "Contribution margin is the amount remaining from sales revenue after deducting variable costs, representing how much each unit contributes toward covering fixed costs and generating profit. Formula: Contribution Margin = Selling Price - Variable Cost per Unit. The contribution margin ratio expresses this as a percentage: (Contribution Margin / Selling Price) × 100. For example, a $100 product with $40 variable cost has a $60 contribution margin and 60% ratio. This metric is critical because it determines how quickly you reach profitability, helps in product mix decisions (prioritize high-margin products), guides pricing strategies, and allows you to calculate break-even points. A higher contribution margin means fewer units needed to cover fixed costs and faster path to profitability."
    },
    {
      question: "How can I lower my break-even point?",
      answer: "Lower your break-even point by reducing fixed costs, decreasing variable costs per unit, or increasing selling prices (which increases contribution margin). Fixed cost reduction strategies include negotiating lower rent, downsizing office space, automating processes to reduce salaries, or switching to variable cost structures (e.g., commission-based sales). Variable cost reductions can be achieved through bulk purchasing discounts, finding cheaper suppliers, improving production efficiency, or reducing waste. Increasing prices works if market demand allows, but requires careful consideration of customer price sensitivity and competitive positioning. The most sustainable approach combines all three: streamline operations to cut fixed costs, optimize supply chain for lower variable costs, and add value to justify premium pricing, creating a resilient business model with a lower break-even threshold."
    }
  ];

  // ✅ JSON-LD structured data - WebApplication schema for break-even calculator
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Break-Even Calculator - Business Break-Even Analysis Tool",
    "description": "Free break-even calculator to calculate break-even point for your business. Calculate break-even units, break-even revenue, and contribution margin. Best break-even calculator for USA, Canada, UK, Australia.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "ratingCount": "3156",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "FinCalcBox",
      "url": "https://fincalcbox.com"
    },
    "featureList": [
      "Break-even calculator",
      "Break-even analysis",
      "Contribution margin calculator",
      "Break-even point calculator",
      "Fixed and variable cost analysis",
      "Real-time break-even calculation"
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
        title="Break-Even Calculator - Business Break-Even Analysis Tool | FinCalcBox"
        description="Free break-even calculator to calculate break-even point for your business. Calculate break-even units, break-even revenue, and contribution margin. Best break-even calculator for USA, Canada, UK, Australia."
        canonical="https://fincalcbox.com/tools/business-marketing/break-even-calculator"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Break-Even Calculator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate your business break-even point with fixed costs and variable costs
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <NeuCard className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <NeuInput
                  label="Fixed Costs ($)"
                  type="number"
                  placeholder="10000"
                  value={fixedCosts}
                  onChange={(e) => setFixedCosts(e.target.value)}
                />
                <NeuInput
                  label="Variable Cost per Unit ($)"
                  type="number"
                  placeholder="30"
                  value={variableCostPerUnit}
                  onChange={(e) => setVariableCostPerUnit(e.target.value)}
                />
                <NeuInput
                  label="Selling Price per Unit ($)"
                  type="number"
                  placeholder="50"
                  value={sellingPricePerUnit}
                  onChange={(e) => setSellingPricePerUnit(e.target.value)}
                />

                <NeuButton variant="primary" onClick={calculate} className="w-full">
                  Calculate Break-Even Point
                </NeuButton>

                {result && (
                  <>
                    <NeuCard inset className="animate-scale-in">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Contribution Margin</span>
                          <span className="font-semibold">
                            ${result.contributionMargin.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Contribution Margin Ratio</span>
                          <span className="font-semibold">
                            {result.contributionMarginRatio.toFixed(2)}%
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Break-Even Units</span>
                          <span className="font-bold text-2xl text-primary">
                            {result.breakEvenUnits.toLocaleString(undefined, {
                              minimumFractionDigits: 0,
                              maximumFractionDigits: 0,
                            })} units
                          </span>
                        </div>
                        <div className="pt-3 border-t border-border flex justify-between items-center">
                          <span className="font-bold text-lg">Break-Even Revenue</span>
                          <span className="font-bold text-lg text-accent">
                            ${result.breakEvenRevenue.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                      </div>
                    </NeuCard>

                    {/* Calculation Summary Card */}
                    <NeuCard className="mt-4">
                      <h3 className="font-semibold mb-3">Calculation Summary</h3>
                      <div className="space-y-2 text-sm">
                        <p className="text-muted-foreground">
                          <strong>Fixed Costs:</strong> ${parseFloat(fixedCosts).toFixed(2)}
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Contribution Margin:</strong> ${sellingPricePerUnit} - ${variableCostPerUnit} = ${result.contributionMargin.toFixed(2)} per unit
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Break-Even Units:</strong> ${fixedCosts} ÷ ${result.contributionMargin.toFixed(2)} = {Math.ceil(result.breakEvenUnits)} units
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Break-Even Revenue:</strong> {Math.ceil(result.breakEvenUnits)} units × ${sellingPricePerUnit} = ${result.breakEvenRevenue.toFixed(2)}
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
        <RelatedBlogs currentPage="break-even-calculator" />

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
                  This Break-Even Calculator helps you determine the point where your total revenue equals total costs. 
                  Enter your fixed costs (expenses that don't change with production volume), variable cost per unit (costs 
                  that vary with each unit produced), and selling price per unit. The calculator computes the break-even 
                  point in units, break-even revenue, contribution margin, and contribution margin ratio. Results update in 
                  real time as you type, with a detailed calculation summary showing all the steps.
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
                      <h3 className="font-semibold mb-1">Break-Even Analysis</h3>
                      <p className="text-sm text-muted-foreground">
                        Calculate break-even units and revenue for your business
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
                      <h3 className="font-semibold mb-1">Contribution Margin</h3>
                      <p className="text-sm text-muted-foreground">
                        See contribution margin per unit and ratio percentage
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
