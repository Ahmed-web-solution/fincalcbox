import { NavLink } from "react-router-dom";
import NeuButton from "@/components/NeuButton";
import SEOHelmet from "@/components/SEOHelmet";
// import AdPlaceholder from "@/components/AdPlaceholder";
import { ArrowRight, TrendingUp, Calculator, Globe, Receipt } from "@/components/icons";
import { lazy, Suspense } from "react";

// Lazily load heavy below-the-fold sections to reduce LCP and JS on initial route
const FeaturesSection = lazy(() => import("@/sections/FeaturesSection"));
const CtaSection = lazy(() => import("@/sections/CtaSection"));
const PopularToolsSection = lazy(() => import("@/sections/PopularToolsSection"));
const BlogPreviewSection = lazy(() => import("@/sections/BlogPreviewSection"));
const NewsletterSection = lazy(() => import("@/sections/NewsletterSection"));
// CTA section temporarily disabled to keep initial route minimal

export default function Home() {


  // ✅ JSON-LD structured data - Combined WebSite + Organization schema for maximum SERP visibility
  // 📊 This dual schema helps Google understand both the website AND the business entity
  // 💡 Critical for brand searches and sitelinks searchbox in Google results
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "FinCalcBox - Financial Calculators & Tools",
      "alternateName": "FinCalcBox",
      "description": "Free financial calculators for loans, mortgages, EMI, income tax, currency conversion, and investments. Professional finance tools for USA, Canada, UK, and Australia.",
      "url": "https://www.fincalcbox.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.fincalcbox.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      },
      "sameAs": [
        "https://twitter.com/FinCalcBox",
        "https://www.facebook.com/FinCalcBox"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "FinCalcBox",
      "url": "https://www.fincalcbox.com",
      "logo": "https://www.fincalcbox.com/icons/icon-512x512.png",
      "description": "FinCalcBox provides free online financial calculators including currency converter, loan calculator, EMI calculator, income tax calculator, and compound interest calculator for users worldwide.",
      "foundingDate": "2024",
      "areaServed": ["US", "CA", "GB", "AU", "Worldwide"],
      "serviceType": ["Financial Calculator", "Currency Converter", "Loan Calculator", "Tax Calculator", "Investment Calculator"],
      "sameAs": [
        "https://twitter.com/FinCalcBox",
        "https://www.facebook.com/FinCalcBox"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* ✅ Homepage SEO Meta Tags optimized for MAXIMUM organic traffic and AdSense revenue
          📊 Target Regions: USA, Canada, UK, Australia (highest RPM regions)
          💰 ULTRA HIGH-CPC Keyword Strategy:
              - "loan calculator" ($8-15 CPC) - Primary money keyword
              - "mortgage calculator" ($10-18 CPC) - Highest CPC keyword
              - "currency converter" ($4-8 CPC) - High volume
              - "EMI calculator" ($6-11 CPC) - Growing demand
              - "income tax calculator" ($5-10 CPC) - Seasonal peaks
              - "compound interest calculator" ($4-8 CPC) - Investment traffic
          🎯 Focus: Homepage targets multiple high-CPC verticals for maximum ad revenue
          📈 Additional profitable keywords: "financial calculator", "online calculator", 
              "free calculator", "finance tools", "money calculator"
          💡 Strategy: Broad finance tool keywords + specific calculators = wide net for premium traffic
          🚀 Expected traffic sources: Direct brand searches + long-tail calculator queries
          💰 Revenue optimization: Multiple ad placements + high-value calculator traffic
      */}
      <SEOHelmet
        title="FinCalcBox - Free Financial Calculators | Loan, Mortgage, EMI, Tax & Currency Tools"
        description="Free financial calculators for smart money decisions. Calculate loans, mortgages, EMI, income tax, currency exchange, and investment returns instantly. Professional finance tools for USA, Canada, UK, Australia."
        keywords="financial calculator, loan calculator, mortgage calculator, currency converter, EMI calculator, income tax calculator, compound interest calculator, finance tools, online calculator, money calculator, investment calculator, loan payment calculator, mortgage payment calculator, tax calculator"
        canonical="https://www.fincalcbox.com"
        jsonLd={jsonLd}
      />
      {/* 💬 Homepage optimized for HIGH-CPC finance keywords targeting premium global markets.
          Multi-vertical approach captures diverse high-value traffic = maximum AdSense potential. */}

      {/* Hero Section with Background - keep minimal for fast LCP */}
      <section className="relative overflow-hidden py-20 md:py-28 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute inset-0 opacity-30" />

        <div className="mx-auto max-w-7xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Smart Finance Tools
                </span>
                <br />
                <span className="text-2xl md:text-4xl">for Better Decisions</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Track, Analyze, and Grow your wealth effortlessly with our comprehensive suite of financial calculators and tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-scale-in">

                <NavLink to="/tools" className="btn-primary" aria-label="Explore all financial tools at FinCalcBox"><NeuButton
                  variant="primary"
                  size="lg"
                  className="flex items-center justify-center gap-2 group transition-all duration-200"
                >
                  <span>Explore Tools</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </NeuButton></NavLink>
                <NavLink
                  to="/about"
                  aria-label="Learn more about FinCalcBox and our financial tools"
                >
                  <NeuButton size="lg">
                    Learn More
                  </NeuButton>
                </NavLink>

              </div>
            </div>
            <div className="hidden lg:block animate-scale-in">
              <div className="neu-card p-8 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="neu-inset p-6 rounded-xl text-center">
                    <TrendingUp className="h-10 w-10 text-primary mx-auto mb-2" />
                    <p className="font-semibold">Investment</p>
                  </div>
                  <div className="neu-inset p-6 rounded-xl text-center">
                    <Calculator className="h-10 w-10 text-accent mx-auto mb-2" />
                    <p className="font-semibold">Calculate</p>
                  </div>
                  <div className="neu-inset p-6 rounded-xl text-center">
                    <Globe className="h-10 w-10 text-primary mx-auto mb-2" />
                    <p className="font-semibold">Convert</p>
                  </div>
                  <div className="neu-inset p-6 rounded-xl text-center">
                    <Receipt className="h-10 w-10 text-accent mx-auto mb-2" />
                    <p className="font-semibold">Track</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* <AdPlaceholder position="top" className="mx-6" /> */}

      <Suspense fallback={<div style={{ height: 400 }} />}>
        <FeaturesSection />
      </Suspense>

      <Suspense fallback={<div style={{ height: 500 }} />}>
        <PopularToolsSection />
      </Suspense>

      <Suspense fallback={<div style={{ height: 600 }} />}>
        <BlogPreviewSection />
      </Suspense>

      <Suspense fallback={<div style={{ height: 380 }} />}>
        <NewsletterSection />
      </Suspense>

      {/* <AdPlaceholder position="bottom" className="mx-6 mb-8" /> */}

      {/* CTA section intentionally omitted here */}
      <Suspense fallback={<div style={{ height: 380 }} />}>
        <CtaSection />
      </Suspense>
    </div>
  );
}
