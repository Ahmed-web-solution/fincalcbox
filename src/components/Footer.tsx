// ✅ path: src/components/Footer.tsx
import { NavLink } from "react-router-dom";
import { Github, Linkedin, Twitter, ArrowUp,Mail } from "@/components/icons";
import FinCalcBoxWebp from "../assets/fincalcbox-logo.webp";
import FinCalcBoxPng from "../assets/fincalcbox-logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="mt-20 border-t border-border bg-background/80 backdrop-blur-md"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ✅ Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <NavLink to="/" aria-label="Go to FinCalcBox home">
              <picture>
              <source srcSet={FinCalcBoxWebp} type="image/webp" />
              <img
                src={FinCalcBoxPng}
                alt="FinCalcBox Logo"
                 width="180" 
                height="50"
                loading="eager"
                decoding="async"
                {...{ fetchpriority: 'high' }}
                style={{ display: 'block', maxWidth: '100%', height: 'auto' }}
                className="transition-transform group-hover:scale-105"
              />
            </picture>
              </NavLink>
            </div>
            <p className="text-muted-foreground mb-4 max-w-sm">
              Smarter Financial Decisions. Track, analyze, and grow your wealth effortlessly.
            </p>

            {/* ✅ Social Links */}
            <div
              className="flex gap-4"
              role="navigation"
              aria-label="Social media links"
            >
              {[
                { href: "https://github.com", label: "GitHub", Icon: Github },
                { href: "https://linkedin.com/in/m-ahmed-raza", label: "LinkedIn", Icon: Linkedin },
                { href: "https://twitter.com", label: "Twitter", Icon: Twitter },
                { href: "mailto:contact@ahmed.dev.solutions@gmail.com", label: "Email", Icon: Mail },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="neu-button p-2 hover:scale-110 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none rounded-lg transition-transform motion-reduce:transition-none"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* ✅ Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/tools", label: "Tools" },
                { to: "/blogs", label: "Blogs" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* ✅ Company Links */}
          <nav aria-label="Company links">
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="flex flex-col gap-2">
              {[
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },
                { to: "/privacy-policy", label: "Privacy Policy" },
                { to: "/disclaimer", label: "Disclaimer" },
                { to: "/terms-of-service", label: "Terms of Service" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* ✅ Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-center sm:text-left text-sm">
              © {currentYear} <strong>FinCalcBox</strong>. All rights reserved.{" "}
              <span itemProp="author">Developed by Ahmed Raza</span>
              </p>

            <button
              onClick={scrollToTop}
              onKeyDown={(e) => e.key === "Enter" && scrollToTop()}
              className="neu-button p-3 hover:scale-110 transition-transform group motion-reduce:transition-none"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="h-5 w-5 group-hover:text-primary transition-colors motion-reduce:transition-none" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
