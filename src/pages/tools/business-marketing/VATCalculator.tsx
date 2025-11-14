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
import { Receipt, Calculator, DollarSign, TrendingUp, Clock, ArrowLeft } from "@/components/icons";

export default function VATCalculator() {
  const [netPrice, setNetPrice] = useState("");
  const [vatRate, setVatRate] = useState("");
  const [calculationType, setCalculationType] = useState<"forward" | "reverse">("forward");
  const [result, setResult] = useState<{
    vatAmount: number;
    grossPrice: number;
    netPrice: number;
  } | null>(null);

  // ✅ Real-time calculation
  useEffect(() => {
    if (netPrice && vatRate) {
      const price = parseFloat(netPrice);
      const rate = parseFloat(vatRate) / 100;

      if (price > 0 && rate >= 0) {
        let vatAmount: number;
        let grossPrice: number;
        let calculatedNetPrice: number;

        if (calculationType === "forward") {
          // Forward VAT: Calculate VAT from net price
          calculatedNetPrice = price;
          vatAmount = price * rate;
          grossPrice = calculatedNetPrice + vatAmount;
        } else {
          // Reverse VAT: Calculate net price from gross price
          grossPrice = price;
          calculatedNetPrice = price / (1 + rate);
          vatAmount = grossPrice - calculatedNetPrice;
        }

        setResult({ vatAmount, grossPrice, netPrice: calculatedNetPrice });
      }
    }
  }, [netPrice, vatRate, calculationType]);

  const calculate = () => {
    const price = parseFloat(netPrice);
    const rate = parseFloat(vatRate) / 100;

    if (!netPrice || !vatRate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (price <= 0 || rate < 0) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid positive numbers",
        variant: "destructive",
      });
      return;
    }

    // Show ad popup on first calculate
    if (!localStorage.getItem('vatCalcPopupShown')) {
      localStorage.setItem('vatCalcPopupShown', 'true');
    }
  };

  // ✅ JSON-LD structured data - WebApplication schema for VAT calculator
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "VAT Calculator - Value Added Tax Calculator",
    "description": "Free VAT calculator to calculate Value Added Tax. Calculate VAT amount, gross price, and net price with forward and reverse VAT calculation. Best VAT calculator for USA, Canada, UK, Australia.",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "VAT calculator",
      "Value Added Tax calculator",
      "Forward VAT calculator",
      "Reverse VAT calculator",
      "VAT inclusive calculator",
      "Real-time VAT calculation"
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
        title="VAT Calculator - Value Added Tax Calculator | FinCalcBox"
        description="Free VAT calculator to calculate Value Added Tax. Calculate VAT amount, gross price, and net price with forward and reverse VAT calculation. Best VAT calculator for USA, Canada, UK, Australia."
        keywords="VAT calculator, value added tax calculator, forward VAT calculator, reverse VAT calculator, VAT inclusive calculator, sales tax calculator, tax calculator, business tax calculator, VAT rate calculator"
        canonical="https://www.fincalcbox.com/tools/business-marketing/vat-calculator"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">VAT Calculator</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Calculate Value Added Tax with forward and reverse calculation options
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <NeuCard className="max-w-2xl mx-auto">
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-foreground">
                    Calculation Type
                  </label>
                  <select
                    className="neu-inset w-full px-4 py-3 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all rounded-xl"
                    value={calculationType}
                    onChange={(e) => setCalculationType(e.target.value as "forward" | "reverse")}
                  >
                    <option value="forward">Forward VAT (Calculate from Net Price)</option>
                    <option value="reverse">Reverse VAT (Calculate from Gross Price)</option>
                  </select>
                </div>

                <NeuInput
                  label={calculationType === "forward" ? "Net Price ($)" : "Gross Price (Including VAT) ($)"}
                  type="number"
                  placeholder="1000"
                  value={netPrice}
                  onChange={(e) => setNetPrice(e.target.value)}
                />
                <NeuInput
                  label="VAT Rate (%)"
                  type="number"
                  placeholder="20"
                  value={vatRate}
                  onChange={(e) => setVatRate(e.target.value)}
                />

                <NeuButton variant="primary" onClick={calculate} className="w-full">
                  Calculate VAT
                </NeuButton>

                {result && (
                  <>
                    <NeuCard inset className="animate-scale-in">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Net Price (Excluding VAT)</span>
                          <span className="font-semibold">
                            ${result.netPrice.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">VAT Amount</span>
                          <span className="font-bold text-2xl text-primary">
                            ${result.vatAmount.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                        <div className="pt-3 border-t border-border flex justify-between items-center">
                          <span className="font-bold text-lg">Gross Price (Including VAT)</span>
                          <span className="font-bold text-lg text-accent">
                            ${result.grossPrice.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                      </div>
                    </NeuCard>

                    {/* Price Breakdown Card */}
                    <NeuCard className="mt-4">
                      <h3 className="font-semibold mb-3">Price Breakdown</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center py-2 border-b border-border/50">
                          <span className="text-sm text-muted-foreground">Base Price</span>
                          <span className="text-sm font-semibold">
                            ${result.netPrice.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2 border-b border-border/50">
                          <span className="text-sm text-muted-foreground">VAT ({vatRate}%)</span>
                          <span className="text-sm font-semibold text-primary">
                            ${result.vatAmount.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </span>
                        </div>
                        <div className="flex justify-between items-center py-2">
                          <span className="text-sm font-bold">Total Price</span>
                          <span className="text-sm font-bold text-accent">
                            ${result.grossPrice.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
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
        <RelatedBlogs currentPage="vat-calculator" />

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
                  This VAT Calculator helps you calculate Value Added Tax (VAT) on your transactions. 
                  Choose between Forward VAT calculation (calculate VAT from net price) or Reverse VAT calculation 
                  (calculate net price from gross price including VAT). Enter the price and VAT rate percentage. 
                  The calculator computes the VAT amount, net price, and gross price. Results update in real time 
                  as you type, with a detailed price breakdown card.
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
                      <h3 className="font-semibold mb-1">Forward & Reverse VAT</h3>
                      <p className="text-sm text-muted-foreground">
                        Calculate VAT forward from net price or reverse from gross price
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
                      <h3 className="font-semibold mb-1">Price Breakdown</h3>
                      <p className="text-sm text-muted-foreground">
                        See detailed price breakdown with base price, VAT, and total
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

        {/* <AdPlaceholder position="bottom" className="mt-8" /> */}
      </div>
    </div>
  );
}
