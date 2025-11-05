// ✅ path: src/App.tsx
import IdleSonner from "@/components/IdleSonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import LoadingSpinner from "@/components/LoadingSpinner";
import MainLayout from "@/layouts/MainLayout";

// Double-check: no unused direct page imports; all are lazy-loaded. Remove any legacy imports.

const Home = lazy(() => import("./pages/Home"));
const Tools = lazy(() => import("./pages/Tools"));
const CurrencyConverter = lazy(() => import("./pages/CurrencyConverter"));
const LoanCalculatorPage = lazy(() => import("./pages/LoanCalculatorPage"));
const EMICalculator = lazy(() => import("./pages/EMICalculator"));
const IncomeTaxCalculator = lazy(() => import("./pages/IncomeTaxCalculator"));
const CompoundInterestCalculator = lazy(() => import("./pages/CompoundInterestCalculator"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <ThemeProvider>
          <IdleSonner />
          <BrowserRouter>
            <ErrorBoundary>
              <Suspense
                fallback={
                  <div className="flex items-center justify-center h-screen" role="status" aria-live="polite">
                    <LoadingSpinner />
                  </div>
                }
              >
                <Routes>
                  <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/tools" element={<Tools />} />
                    <Route path="/currency-converter" element={<CurrencyConverter />} />
                    <Route path="/loan-calculator" element={<LoanCalculatorPage />} />
                    <Route path="/emi-calculator" element={<EMICalculator />} />
                    <Route path="/income-tax-calculator" element={<IncomeTaxCalculator />} />
                    <Route path="/compound-interest-calculator" element={<CompoundInterestCalculator />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/blogs/:id" element={<BlogDetail />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/disclaimer" element={<Disclaimer />} />
                    <Route path="/terms-of-service" element={<TermsOfService />} />
         
                  </Route>

                  {/* ❌ 404 - No Header/Footer */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
