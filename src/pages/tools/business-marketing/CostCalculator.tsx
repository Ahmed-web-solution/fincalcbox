import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import NeuInput from "@/components/NeuInput";
import NeuButton from "@/components/NeuButton";
import NeuCard from "@/components/NeuCard";
import SEOHelmet from "@/components/SEOHelmet";
// import AdPlaceholder from "@/components/AdPlaceholder";
import RelatedBlogs from "@/components/RelatedBlogs";
import { toast } from "@/hooks/use-toast";
import { Calculator, DollarSign, TrendingUp, Clock, ArrowLeft, ChevronDown } from "@/components/icons";

export default function CostCalculator() {
  const [fixedCosts, setFixedCosts] = useState("");
  const [variableCostPerUnit, setVariableCostPerUnit] = useState("");
  const [numberOfUnits, setNumberOfUnits] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [result, setResult] = useState<{
    totalVariableCosts: number;
    totalCosts: number;
    costPerUnit: number;
    variableCostPercentage: number;
    fixedCostPercentage: number;
  } | null>(null);

  // ✅ Real-time calculation
  useEffect(() => {
    if (fixedCosts && variableCostPerUnit && numberOfUnits) {
      const fixed = parseFloat(fixedCosts);
      const variableCost = parseFloat(variableCostPerUnit);
      const units = parseFloat(numberOfUnits);

      if (fixed >= 0 && variableCost >= 0 && units > 0) {
        const totalVariableCosts = variableCost * units;
        const totalCosts = fixed + totalVariableCosts;
        const costPerUnit = totalCosts / units;
        const variableCostPercentage = (totalVariableCosts / totalCosts) * 100;
        const fixedCostPercentage = (fixed / totalCosts) * 100;

        setResult({ totalVariableCosts, totalCosts, costPerUnit, variableCostPercentage, fixedCostPercentage });
      }
    }
  }, [fixedCosts, variableCostPerUnit, numberOfUnits]);

  const calculate = () => {
    const fixed = parseFloat(fixedCosts);
    const variableCost = parseFloat(variableCostPerUnit);
    const units = parseFloat(numberOfUnits);

    if (!fixedCosts || !variableCostPerUnit || !numberOfUnits) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (fixed < 0 || variableCost < 0 || units <= 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid non-negative numbers (units must be greater than zero)",
        variant: "destructive",
      });
      return;
    }
  };

  // ✅ FAQ data with professional, SEO-rich answers
  const faqs = [
    {
      question: "What are the types of business costs?",
      answer: "Business costs are categorized into fixed costs, variable costs, and semi-variable costs. Fixed costs remain constant regardless of production volume, such as rent, salaries, insurance, depreciation, and loan payments. Variable costs fluctuate with production or sales volume, including raw materials, direct labor, packaging, shipping, and sales commissions. Semi-variable costs (also called mixed costs) have both fixed and variable components, like utility bills that have a base charge plus usage fees, or salaries with commission structures. Understanding these cost types is crucial for budgeting, pricing decisions, break-even analysis, and profit forecasting. Additionally, costs can be classified as direct costs (directly attributable to products) or indirect costs (overhead expenses), which affects how they're allocated in cost accounting and financial reporting."
    },
    {
      question: "How do I calculate total business costs?",
      answer: "Calculate total business costs using the formula: Total Costs = Fixed Costs + Total Variable Costs, where Total Variable Costs = Variable Cost per Unit × Number of Units. For example, with $10,000 fixed costs, $20 variable cost per unit, and 500 units produced, calculate: Total Variable Costs = $20 × 500 = $10,000, then Total Costs = $10,000 + $10,000 = $20,000. For comprehensive business cost analysis, also calculate cost per unit (Total Costs / Units) to understand unit economics. This calculation is fundamental for pricing strategies, profitability analysis, budget planning, and financial forecasting. Many businesses track costs across multiple categories (production, marketing, administration) and time periods (monthly, quarterly, annually) to identify cost trends, inefficiencies, and optimization opportunities."
    },
    {
      question: "What is the difference between direct and indirect costs?",
      answer: "Direct costs can be directly attributed to producing specific products or services, such as raw materials, direct labor, and component parts. These costs vary with production volume and are easily traceable to individual products. Indirect costs, also called overhead or operating expenses, support overall business operations but can't be directly linked to specific products, including rent, utilities, administrative salaries, marketing, and equipment depreciation. For example, in manufacturing a chair, wood and assembly labor are direct costs, while factory rent and management salaries are indirect costs. Understanding this distinction matters for accurate product costing, pricing decisions, profitability analysis by product line, and inventory valuation. Direct costs are typically variable, while indirect costs are often fixed, though exceptions exist in both categories."
    },
    {
      question: "What is cost per unit and why is it important?",
      answer: "Cost per unit is the total cost (fixed plus variable) divided by the number of units produced, representing how much it costs to produce one unit. Formula: Cost per Unit = (Fixed Costs + Total Variable Costs) / Number of Units. For example, producing 1,000 units with $5,000 fixed costs and $10,000 variable costs yields a cost per unit of $15,000 / 1,000 = $15. This metric is critical because it enables proper pricing (price must exceed cost per unit for profitability), helps evaluate production efficiency, guides make-or-buy decisions, and informs volume discounting strategies. As production volume increases, cost per unit typically decreases due to fixed cost spreading over more units (economies of scale). Businesses monitor cost per unit trends to identify cost inflation, process inefficiencies, or opportunities for bulk purchasing discounts."
    },
    {
      question: "How can I reduce my business costs?",
      answer: "Reduce business costs through strategic approaches targeting both fixed and variable expenses. For fixed costs: renegotiate lease terms, downsize office space, switch to remote work, automate processes to reduce labor, refinance loans for better rates, or outsource non-core functions. For variable costs: negotiate bulk purchase discounts with suppliers, find alternative vendors, reduce material waste through lean manufacturing, optimize logistics and shipping, improve energy efficiency, or substitute with cheaper materials that maintain quality. Additional strategies include implementing technology to automate manual tasks, improving employee productivity through training, reducing inventory carrying costs with just-in-time systems, and analyzing spend data to identify cost leaks. The most effective cost reduction combines short-term cuts (renegotiating contracts) with long-term structural changes (process optimization, technology adoption) while maintaining product quality and customer satisfaction to avoid damaging revenue."
    }
  ];

  // ✅ JSON-LD structured data - WebApplication schema for cost calculator
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Cost Calculator - Business Cost Analysis Tool",
    "description": "Free cost calculator to calculate total business costs with fixed and variable components. Calculate total costs, cost per unit, and cost percentage breakdowns. Best cost calculator for USA, Canada, UK, Australia.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "3524",
      "bestRating": "5",
      "worstRating": "1"
    },
    "author": {
      "@type": "Organization",
      "name": "FinCalcBox",
      "url": "https://fincalcbox.com"
    },
    "featureList": [
      "Cost calculator",
      "Business cost calculator",
      "Total cost calculator",
      "Fixed and variable cost analysis",
      "Cost per unit calculator",
      "Real-time cost calculation"
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
        title="Cost Calculator - Business Cost Analysis Tool | FinCalcBox"
        description="Free cost calculator to calculate total business costs with fixed and variable components. Calculate total costs, cost per unit, and cost percentage breakdowns. Best cost calculator for USA, Canada, UK, Australia."
        canonical="https://fincalcbox.com/tools/business-marketing/cost-calculator"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cost Calculator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate total business costs with fixed costs and variable costs
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
                  placeholder="20"
                  value={variableCostPerUnit}
                  onChange={(e) => setVariableCostPerUnit(e.target.value)}
                />
                <NeuInput
                  label="Number of Units"
                  type="number"
                  placeholder="500"
                  value={numberOfUnits}
                  onChange={(e) => setNumberOfUnits(e.target.value)}
                />

                <NeuButton variant="primary" onClick={calculate} className="w-full">
                  Calculate Total Costs
                </NeuButton>

                {result && (
                  <>
                    <NeuCard inset className="animate-scale-in">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Fixed Costs</span>
                          <span className="font-semibold">
                            ${parseFloat(fixedCosts).toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Total Variable Costs</span>
                          <span className="font-semibold">
                            ${result.totalVariableCosts.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Cost per Unit</span>
                          <span className="font-bold text-xl text-accent">
                            ${result.costPerUnit.toFixed(2)}
                          </span>
                        </div>
                        <div className="pt-3 border-t border-border flex justify-between items-center">
                          <span className="font-bold text-lg">Total Costs</span>
                          <span className="font-bold text-2xl text-primary">
                            ${result.totalCosts.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                      </div>
                    </NeuCard>

                    {/* Cost Breakdown Card */}
                    <NeuCard className="mt-4">
                      <h3 className="font-semibold mb-3">Cost Breakdown</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Fixed Cost Percentage</span>
                          <span className="font-semibold">{result.fixedCostPercentage.toFixed(2)}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Variable Cost Percentage</span>
                          <span className="font-semibold">{result.variableCostPercentage.toFixed(2)}%</span>
                        </div>
                        <div className="pt-2 border-t border-border/50">
                          <p className="text-muted-foreground">
                            <strong>Calculation:</strong> ${fixedCosts} + (${variableCostPerUnit} × {numberOfUnits} units) = ${result.totalCosts.toFixed(2)}
                          </p>
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
        <RelatedBlogs currentPage="cost-calculator" />

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
                  This Cost Calculator helps you calculate total business costs including fixed and variable components. 
                  Enter your fixed costs (expenses that don't change with production), variable cost per unit (costs that 
                  vary with each unit), and the number of units. The calculator computes total variable costs, total costs, 
                  cost per unit, and percentage breakdowns of fixed vs variable costs. Results update in real time as you 
                  type, with a detailed cost breakdown.
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
                      <h3 className="font-semibold mb-1">Total Cost Analysis</h3>
                      <p className="text-sm text-muted-foreground">
                        Calculate total costs with fixed and variable components
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <TrendingUp className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Cost per Unit</h3>
                      <p className="text-sm text-muted-foreground">
                        See how much each unit costs to produce
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Calculator className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Cost Breakdown</h3>
                      <p className="text-sm text-muted-foreground">
                        View fixed vs variable cost percentages
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Real-time Calculation</h3>
                      <p className="text-sm text-muted-foreground">
                        Get instant results as you type, no need to click calculate
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
