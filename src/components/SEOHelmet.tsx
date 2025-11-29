  // ✅ path: src/components/SEOHelmet.tsx
  import { Helmet } from "react-helmet-async";

  interface OpenGraphProps {
    type?: string;
    url?: string;
    title?: string;
    description?: string;
    images?: { url: string; alt?: string }[];
  }

  interface SEOHelmetProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
    openGraph?: OpenGraphProps;
    jsonLd?: Record<string, any>;
  }

  export default function SEOHelmet({
    title,
    description,
    keywords,
    canonical,
    ogImage,
    openGraph,
    jsonLd,
  }: SEOHelmetProps) {
    const siteName = "FinCalcBox";
    const siteUrl = "https://www.fincalcbox.com";
    const defaultTitle = `${siteName} - Smart Financial Tools & Calculators`;
    const defaultDescription =
      "FinCalcBox helps you make smarter money decisions with free calculators, expert blogs, and tools for budgeting, saving, and investing.";

    // ✅ Normalize lengths for SERP best practices
    const clamp = (str: string, min: number, max: number) => {
      if (!str) return str;
      const s = str.trim();
      if (s.length <= max) return s;
      const cut = s.slice(0, max);
      const lastSpace = cut.lastIndexOf(" ");
      return (lastSpace > min ? cut.slice(0, lastSpace) : cut).trim() + "…";
    };
    const defaultImage = `${siteUrl}/icons/icon-512x512.png`;

    const rawTitle = title
      ? title.includes(siteName)
        ? title
        : `${title} | ${siteName}`
      : defaultTitle;
    const fullTitle = clamp(rawTitle, 50, 60);
    const metaDescription = clamp(description || defaultDescription, 120, 155);

    const og = openGraph || {};
    const currentUrl =
      og.url || canonical || (typeof window !== "undefined" ? window.location.href : siteUrl);

    return (
      <Helmet>
        {/* ✅ Basic Meta */}
        <title>{fullTitle}</title>
        <meta name="description" content={metaDescription} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="robots" content="index, follow" />
        <meta name="theme-color" content="#0ea5e9" />

        {/* ✅ Canonical */}
        <link rel="canonical" href={currentUrl} />

        {/* ✅ Open Graph */}
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content={og.type || "website"} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={og.title || fullTitle} />
        <meta
          property="og:description"
          content={og.description || metaDescription}
        />
        <meta
          property="og:image"
          content={og.images?.[0]?.url || ogImage || defaultImage}
        />
        {og.images?.[0]?.alt && (
          <meta property="og:image:alt" content={og.images[0].alt} />
        )}

        {/* ✅ Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@FinCalcBox" />
        <meta name="twitter:creator" content="@FinCalcBox" />
        <meta name="twitter:title" content={og.title || fullTitle} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          name="twitter:image"
          content={og.images?.[0]?.url || ogImage || defaultImage}
        />

        
        <meta
          name="twitter:description"
          content={og.description || metaDescription}
        />

        {/* ✅ JSON-LD Structured Data */}
        {jsonLd && (
          <script type="application/ld+json">
            {JSON.stringify(jsonLd, null, 2)}
          </script>
        )}
      </Helmet>
    );
  }
