import { NavLink, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

type Crumb = { name: string; href: string };

const TITLE_MAP: Record<string, string> = {
  "": "Home",
  tools: "Tools",
  blogs: "Blogs",
  about: "About",
  contact: "Contact",
  "currency-converter": "Currency Converter",
  "loan-calculator": "Loan Calculator",
  "emi-calculator": "EMI Calculator",
  "income-tax-calculator": "Income Tax Calculator",
  "compound-interest-calculator": "Compound Interest Calculator",
  "privacy-policy": "Privacy Policy",
  disclaimer: "Disclaimer",
  "terms-of-service": "Terms of Service",
};

function buildCrumbs(pathname: string): Crumb[] {
  const parts = pathname.replace(/^\/+|\/+$/g, "").split("/").filter(Boolean);
  const crumbs: Crumb[] = [{ name: "Home", href: "/" }];
  let acc = "";
  for (const part of parts) {
    acc += `/${part}`;
    const title = TITLE_MAP[part] || decodeURIComponent(part).replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
    crumbs.push({ name: title, href: acc });
  }
  return crumbs;
}

export default function Breadcrumbs() {
  const location = useLocation();
  if (location.pathname === "/") return null;

  const crumbs = buildCrumbs(location.pathname);
  const itemListElement = crumbs.map((c, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    name: c.name,
    item: `https://www.fincalcbox.com${c.href}`,
  }));

  return (
    <div className="mx-auto w-full max-w-7xl px-6 mt-4" aria-label="Breadcrumb">
      <nav className="text-sm text-muted-foreground" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2">
          {crumbs.map((c, i) => (
            <li key={c.href} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden>›</span>}
              {i < crumbs.length - 1 ? (
                <NavLink to={c.href} className="hover:text-primary hover:underline">
                  {c.name}
                </NavLink>
              ) : (
                <span aria-current="page" className="text-foreground font-medium">
                  {c.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement,
            },
            null,
            2
          )}
        </script>
      </Helmet>
    </div>
  );
}


