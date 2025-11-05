// ✅ path: src/components/Header.tsx
import { NavLink } from "react-router-dom";
import { Sun, Moon, Menu, X } from "@/components/icons";
import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState, useRef } from "react";
import FinCalcBoxWebp from "../assets/fincalcbox-logo.webp";
import FinCalcBoxPng from "../assets/fincalcbox-logo.png";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/tools", label: "Tools" },
    { to: "/blogs", label: "Blogs" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  // ✅ Prevent scroll when mobile menu open + ESC close
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // ✅ Auto focus first link when menu opens (for screen reader)
  useEffect(() => {
    if (mobileMenuOpen && menuRef.current) {
      const firstLink = menuRef.current.querySelector("a");
      (firstLink as HTMLElement)?.focus();
    }
  }, [mobileMenuOpen]);

  return (
    <header
      role="banner"
      aria-label="Main site header"
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 supports-[backdrop-filter]:bg-background/70 transition-colors"
    >
      <nav
        className="neu-card mx-4 mt-4 px-6 py-4"
        role="navigation"
        aria-label="Primary navigation"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* ✅ Logo with better alt text */}
          <NavLink
            to="/"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
            aria-label="FinCalcBox Home"
          >
            <picture>
              <source srcSet={FinCalcBoxWebp} type="image/webp" />
              <img
                src={FinCalcBoxPng}
                alt="FinCalcBox"
                 width="180" 
                  height="50" 
                loading="eager"
                decoding="async"
                {...{ fetchpriority: 'high' }}
                style={{ display: 'block', maxWidth: '80%', height: 'auto' }}
                // className="transition-transform group-hover:scale-105"
              />
            </picture>

          </NavLink>

          {/* ✅ Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end
                className={({ isActive }) =>
                  `neu-button px-5 py-2 font-medium text-sm transition-all duration-200 motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg ${isActive
                    ? "neu-button-pressed text-primary"
                    : "neu-button text-foreground/70 hover:text-primary hover:scale-105"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* ✅ Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="neu-button p-3 hover:scale-105 transition-transform motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5 text-primary" />
              ) : (
                <Sun className="h-5 w-5 text-accent" />
              )}
            </button>

            {/* ✅ Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen((p) => !p)}
              className="md:hidden neu-button p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* ✅ Mobile Navigation */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            ref={menuRef}
            className="md:hidden mt-4 pt-4 border-t border-border animate-fade-in motion-reduce:animate-none"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `neu-button text-sm text-center font-medium py-4 transition-all duration-200 motion-reduce:transition-none focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg ${isActive
                      ? "neu-button-pressed text-primary"
                      : "neu-button text-foreground/70 hover:text-primary hover:scale-105"
                    }`
                  }
                  role="menuitem"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
