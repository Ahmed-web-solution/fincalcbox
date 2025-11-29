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

export default function VATCalculator() {
  const [netPrice, setNetPrice] = useState("");
  const [vatRate, setVatRate] = useState("");
  const [calculationType, setCalculationType] = useState<"forward" | "reverse">("forward");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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

  // ✅ FAQ data with professional, SEO-rich answers
  const faqs = [
    {
      question: "What is VAT and how is it different from sales tax?",
      answer: "VAT (Value Added Tax) is a consumption tax applied at each stage of the supply chain based on the value added at that stage, whereas sales tax is typically applied only at the final point of sale to the consumer. VAT is common in the European Union, UK, and over 160 countries worldwide, while sales tax is primarily used in the United States. Businesses registered for VAT can reclaim the tax paid on their inputs, creating a self-policing system that reduces tax evasion. The multi-stage collection mechanism of VAT makes it more transparent and efficient compared to single-stage sales tax systems."
    },
    {
      question: "How do I calculate VAT on a product?",
      answer: "To calculate VAT on a product using forward calculation, multiply the net price (excluding VAT) by the VAT rate to get the VAT amount, then add it to the net price for the gross price. Formula: VAT Amount = Net Price × VAT Rate, Gross Price = Net Price + VAT Amount. For example, with a £1,000 net price and 20% VAT: VAT = £1,000 × 0.20 = £200, Gross = £1,000 + £200 = £1,200. For reverse VAT calculation (when you have the gross price including VAT), divide the gross price by (1 + VAT rate) to get the net price, then subtract to find the VAT portion. Formula: Net Price = Gross Price ÷ (1 + VAT Rate)."
    },
    {
      question: "What are the standard VAT rates in Europe?",
      answer: "VAT rates vary across European countries but typically include standard, reduced, and zero rates. The UK has a standard VAT rate of 20%, a reduced rate of 5% for certain goods like children's car seats and home energy, and a 0% zero rate for items like most food and children's clothing. Germany applies a standard rate of 19% and a reduced rate of 7% for essential items. France uses a 20% standard rate with reduced rates of 10%, 5.5%, and 2.1% depending on the product category. EU regulations require member states to have a minimum standard VAT rate of 15%, though actual rates range from 17% to 27% across different countries."
    },
    {
      question: "Who needs to register for VAT?",
      answer: "Businesses must register for VAT when their taxable turnover exceeds the registration threshold in their country. In the UK, the threshold is £85,000 in any 12-month period, while in other EU countries it varies significantly (Germany has no threshold, Ireland is €37,500). Even if you're below the threshold, you can voluntarily register for VAT to reclaim tax on business expenses, which is beneficial if you make significant purchases or serve other VAT-registered businesses. Certain businesses must register regardless of turnover, including those selling goods to EU countries or providing digital services across borders under the VAT MOSS (Mini One Stop Shop) scheme."
    },
    {
      question: "Can I reclaim VAT on business expenses?",
      answer: "Yes, VAT-registered businesses can reclaim VAT paid on goods and services purchased for business use, known as input VAT, and offset it against the VAT they charge customers (output VAT). This is done through regular VAT returns submitted to the tax authority, typically quarterly or monthly depending on your turnover. You can only reclaim VAT on purchases that are genuinely for business purposes and where you have valid VAT invoices. Some items have restrictions, such as cars (typically only 50% reclaimable unless it's a commercial vehicle) and entertainment expenses (usually non-reclaimable). The ability to reclaim input VAT is one of the key advantages of VAT registration for businesses."
    }
  ];

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
