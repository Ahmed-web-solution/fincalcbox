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
import { TrendingUp, Calculator, DollarSign, Clock, ArrowLeft } from "@/components/icons";

export default function StockProfit() {
  const [buyPrice, setBuyPrice] = useState("");
  const [sellPrice, setSellPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [brokerage, setBrokerage] = useState("");
  const [result, setResult] = useState<{
    totalCost: number;
    totalRevenue: number;
    grossProfit: number;
    netProfit: number;
    profitPercentage: number;
  } | null>(null);

  // ✅ Real-time calculation
  useEffect(() => {
    if (buyPrice && sellPrice && quantity) {
      const buy = parseFloat(buyPrice);
      const sell = parseFloat(sellPrice);
      const qty = parseFloat(quantity);
      const broker = parseFloat(brokerage) || 0;

      if (buy > 0 && sell >= 0 && qty > 0) {
        const totalCost = buy * qty + broker;
        const totalRevenue = sell * qty - broker;
        const grossProfit = (sell - buy) * qty;
        const netProfit = totalRevenue - totalCost;
        const profitPercentage = (netProfit / totalCost) * 100;

        setResult({ totalCost, totalRevenue, grossProfit, netProfit, profitPercentage });
      }
    }
  }, [buyPrice, sellPrice, quantity, brokerage]);

  const calculate = () => {
    const buy = parseFloat(buyPrice);
    const sell = parseFloat(sellPrice);
    const qty = parseFloat(quantity);
    const broker = parseFloat(brokerage) || 0;

    if (!buyPrice || !sellPrice || !quantity) {
      toast({
        title: "Missing Information",
        description: "Please fill in buy price, sell price, and quantity",
        variant: "destructive",
      });
      return;
    }

    if (buy <= 0 || sell < 0 || qty <= 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid positive numbers",
        variant: "destructive",
      });
      return;
    }

    // Show ad popup on first calculate
    if (!localStorage.getItem('stockProfitCalcPopupShown')) {
      localStorage.setItem('stockProfitCalcPopupShown', 'true');
    }
  };

  // ✅ JSON-LD structured data - WebApplication schema for stock profit calculator
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Stock Profit Calculator - Stock Trading Profit & Loss Calculator",
    "description": "Free stock profit calculator to calculate profit or loss from stock investments. Calculate stock returns, profit percentage, and net profit after brokerage fees. Best stock trading calculator for USA, Canada, UK, Australia.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Stock profit calculator",
      "Stock loss calculator",
      "Stock trading calculator",
      "Profit and loss calculator",
      "Stock returns calculator",
      "Real-time stock calculation"
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
      {/* ✅ SEO Meta Tags optimized for HIGH-CPC trading keywords */}
      <SEOHelmet
        title="Stock Profit Calculator - Stock Trading Profit & Loss Calculator | FinCalcBox"
        description="Free stock profit calculator to calculate profit or loss from stock investments. Calculate stock returns, profit percentage, and net profit after brokerage fees. Best stock trading calculator for USA, Canada, UK, Australia."
        keywords="stock profit calculator, stock loss calculator, stock trading calculator, profit and loss calculator, stock returns calculator, stock P&L calculator, stock investment calculator, trading profit calculator, stock gains calculator"
        canonical="https://www.fincalcbox.com/tools/investment/stock-profit"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Stock Profit Calculator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate profit or loss from stock investments with brokerage fee calculations
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <NeuCard className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <NeuInput
                  label="Buy Price per Share ($)"
                  type="number"
                  placeholder="100"
                  value={buyPrice}
                  onChange={(e) => setBuyPrice(e.target.value)}
                />
                <NeuInput
                  label="Sell Price per Share ($)"
                  type="number"
                  placeholder="120"
                  value={sellPrice}
                  onChange={(e) => setSellPrice(e.target.value)}
                />
                <NeuInput
                  label="Quantity (shares)"
                  type="number"
                  placeholder="100"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
                <NeuInput
                  label="Brokerage Fees ($) - Optional"
                  type="number"
                  placeholder="0"
                  value={brokerage}
                  onChange={(e) => setBrokerage(e.target.value)}
                />

                <NeuButton variant="primary" onClick={calculate} className="w-full">
                  Calculate Profit/Loss
                </NeuButton>

                {result && (
                  <NeuCard inset className="animate-scale-in">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Total Cost</span>
                        <span className="font-semibold">
                          ${result.totalCost.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Total Revenue</span>
                        <span className="font-semibold">
                          ${result.totalRevenue.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Gross Profit/Loss</span>
                        <span className={`font-semibold ${result.grossProfit >= 0 ? 'text-accent' : 'text-destructive'}`}>
                          ${result.grossProfit.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      <div className="pt-3 border-t border-border flex justify-between items-center">
                        <span className="font-bold text-lg">Net Profit/Loss</span>
                        <span className={`font-bold text-lg ${result.netProfit >= 0 ? 'text-primary' : 'text-destructive'}`}>
                          ${result.netProfit.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Profit/Loss Percentage</span>
                        <span className={`font-bold text-xl ${result.profitPercentage >= 0 ? 'text-accent' : 'text-destructive'}`}>
                          {result.profitPercentage.toFixed(2)}%
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
        <RelatedBlogs currentPage="stock-profit" />

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
                  This Stock Profit Calculator helps you calculate the profit or loss from your stock investments. 
                  Enter your buy price per share, sell price per share, quantity of shares, and optional brokerage fees. 
                  The calculator computes your total cost, total revenue, gross profit/loss, net profit/loss after fees, 
                  and profit/loss percentage. Results update in real time as you type, giving you instant insights into 
                  your stock trading performance.
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
                      <h3 className="font-semibold mb-1">Brokerage Fee Support</h3>
                      <p className="text-sm text-muted-foreground">
                        Include brokerage fees for accurate net profit/loss calculation
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
                        See your profit or loss as a percentage of your investment
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
                        Fast, responsive design for USA and Canada traders
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 neu-inset rounded-xl bg-accent/5">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> This calculator provides estimates for informational purposes only. 
                  Actual trading results may vary based on market conditions, fees, taxes, and other factors. 
                  Stock trading involves risk, and past performance does not guarantee future results. 
                  Please consult a qualified financial advisor before making investment decisions.
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
