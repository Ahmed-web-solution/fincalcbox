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
import ScrollToTop from "./components/ScrollToTop";


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

// Investment Calculators
const SIPCalculator = lazy(() => import("./pages/tools/investment/SIPCalculator"));
const MutualFundReturn = lazy(() => import("./pages/tools/investment/MutualFundReturn"));
const FDCalculator = lazy(() => import("./pages/tools/investment/FDCalculator"));
const RDCalculator = lazy(() => import("./pages/tools/investment/RDCalculator"));
const StockProfit = lazy(() => import("./pages/tools/investment/StockProfit"));
const DividendYield = lazy(() => import("./pages/tools/investment/DividendYield"));
const ROICalculator = lazy(() => import("./pages/tools/investment/ROICalculator"));
const CAGRCalculator = lazy(() => import("./pages/tools/investment/CAGRCalculator"));
const InflationCalculator = lazy(() => import("./pages/tools/investment/InflationCalculator"));
const RetirementPlanning = lazy(() => import("./pages/tools/investment/RetirementPlanning"));
const AdvancedCompoundInterest = lazy(() => import("./pages/tools/investment/AdvancedCompoundInterest"));

// Business & Marketing Finance Tools
const GSTCalculator = lazy(() => import("./pages/tools/business-marketing/GSTCalculator"));
const VATCalculator = lazy(() => import("./pages/tools/business-marketing/VATCalculator"));
const ProfitMargin = lazy(() => import("./pages/tools/business-marketing/ProfitMargin"));
const MarkupCalculator = lazy(() => import("./pages/tools/business-marketing/MarkupCalculator"));
const BreakEven = lazy(() => import("./pages/tools/business-marketing/BreakEven"));
const RevenueCalculator = lazy(() => import("./pages/tools/business-marketing/RevenueCalculator"));
const CostCalculator = lazy(() => import("./pages/tools/business-marketing/CostCalculator"));

// Personal Finance Tools
const SavingsCalculator = lazy(() => import("./pages/tools/personal-finance/SavingsCalculator"));
const BudgetPlanner = lazy(() => import("./pages/tools/personal-finance/BudgetPlanner"));
const ExpenseTracker = lazy(() => import("./pages/tools/personal-finance/ExpenseTracker"));
const NetWorth = lazy(() => import("./pages/tools/personal-finance/NetWorth"));
const BillSplit = lazy(() => import("./pages/tools/personal-finance/BillSplit"));
const HourlyRate = lazy(() => import("./pages/tools/personal-finance/HourlyRate"));
const SalaryCalculator = lazy(() => import("./pages/tools/personal-finance/SalaryCalculator"));
const OvertimeCalculator = lazy(() => import("./pages/tools/personal-finance/OvertimeCalculator"));

// Loan & Credit Related Tools
const MortgageCalculator = lazy(() => import("./pages/tools/loan-credit/MortgageCalculator"));
const DebtPayoff = lazy(() => import("./pages/tools/loan-credit/DebtPayoff"));
const LoanComparison = lazy(() => import("./pages/tools/loan-credit/LoanComparison"));
const DebtToIncome = lazy(() => import("./pages/tools/loan-credit/DebtToIncome"));

// Trading & Crypto Tools
const CryptoProfit = lazy(() => import("./pages/tools/trading-crypto/CryptoProfit"));
const PNLCalculator = lazy(() => import("./pages/tools/trading-crypto/PNLCalculator"));
const TradingFee = lazy(() => import("./pages/tools/trading-crypto/TradingFee"));
const PositionSize = lazy(() => import("./pages/tools/trading-crypto/PositionSize"));
const RiskReward = lazy(() => import("./pages/tools/trading-crypto/RiskReward"));

// Misc Finance Tools
const PercentageCalculator = lazy(() => import("./pages/tools/misc/PercentageCalculator"));
const DiscountCalculator = lazy(() => import("./pages/tools/misc/DiscountCalculator"));
const SimpleInterest = lazy(() => import("./pages/tools/misc/SimpleInterest"));
const TimeValueMoney = lazy(() => import("./pages/tools/misc/TimeValueMoney"));
const RentVsBuy = lazy(() => import("./pages/tools/misc/RentVsBuy"));
const GoalSavings = lazy(() => import("./pages/tools/misc/GoalSavings"));
const InvestmentGrowth = lazy(() => import("./pages/tools/misc/InvestmentGrowth"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <ThemeProvider>
          <IdleSonner />
          <BrowserRouter>
          <ScrollToTop />
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
                    
                    {/* Existing Tools */}
                    <Route path="/currency-converter" element={<CurrencyConverter />} />
                    <Route path="/loan-calculator" element={<LoanCalculatorPage />} />
                    <Route path="/emi-calculator" element={<EMICalculator />} />
                    <Route path="/income-tax-calculator" element={<IncomeTaxCalculator />} />
                    <Route path="/compound-interest-calculator" element={<CompoundInterestCalculator />} />
                    
                    {/* Investment Calculators */}
                    <Route path="/tools/investment/sip-calculator" element={<SIPCalculator />} />
                    <Route path="/tools/investment/mutual-fund-return" element={<MutualFundReturn />} />
                    <Route path="/tools/investment/fd-calculator" element={<FDCalculator />} />
                    <Route path="/tools/investment/rd-calculator" element={<RDCalculator />} />
                    <Route path="/tools/investment/stock-profit" element={<StockProfit />} />
                    <Route path="/tools/investment/dividend-yield" element={<DividendYield />} />
                    <Route path="/tools/investment/roi-calculator" element={<ROICalculator />} />
                    <Route path="/tools/investment/cagr-calculator" element={<CAGRCalculator />} />
                    <Route path="/tools/investment/inflation-calculator" element={<InflationCalculator />} />
                    <Route path="/tools/investment/retirement-planning" element={<RetirementPlanning />} />
                    <Route path="/tools/investment/advanced-compound-interest" element={<AdvancedCompoundInterest />} />
                    
                    {/* Business & Marketing Finance Tools */}
                    <Route path="/tools/business-marketing/gst-calculator" element={<GSTCalculator />} />
                    <Route path="/tools/business-marketing/vat-calculator" element={<VATCalculator />} />
                    <Route path="/tools/business-marketing/profit-margin" element={<ProfitMargin />} />
                    <Route path="/tools/business-marketing/markup-calculator" element={<MarkupCalculator />} />
                    <Route path="/tools/business-marketing/break-even" element={<BreakEven />} />
                    <Route path="/tools/business-marketing/revenue-calculator" element={<RevenueCalculator />} />
                    <Route path="/tools/business-marketing/cost-calculator" element={<CostCalculator />} />
                    
                    {/* Personal Finance Tools */}
                    <Route path="/tools/personal-finance/savings-calculator" element={<SavingsCalculator />} />
                    <Route path="/tools/personal-finance/budget-planner" element={<BudgetPlanner />} />
                    <Route path="/tools/personal-finance/expense-tracker" element={<ExpenseTracker />} />
                    <Route path="/tools/personal-finance/net-worth" element={<NetWorth />} />
                    <Route path="/tools/personal-finance/bill-split" element={<BillSplit />} />
                    <Route path="/tools/personal-finance/hourly-rate" element={<HourlyRate />} />
                    <Route path="/tools/personal-finance/salary-calculator" element={<SalaryCalculator />} />
                    <Route path="/tools/personal-finance/overtime-calculator" element={<OvertimeCalculator />} />
                    
                    {/* Loan & Credit Related Tools */}
                    <Route path="/tools/loan-credit/mortgage-calculator" element={<MortgageCalculator />} />
                    <Route path="/tools/loan-credit/debt-payoff" element={<DebtPayoff />} />
                    <Route path="/tools/loan-credit/loan-comparison" element={<LoanComparison />} />
                    <Route path="/tools/loan-credit/debt-to-income" element={<DebtToIncome />} />
                    
                    {/* Trading & Crypto Tools */}
                    <Route path="/tools/trading-crypto/crypto-profit" element={<CryptoProfit />} />
                    <Route path="/tools/trading-crypto/pnl-calculator" element={<PNLCalculator />} />
                    <Route path="/tools/trading-crypto/trading-fee" element={<TradingFee />} />
                    <Route path="/tools/trading-crypto/position-size" element={<PositionSize />} />
                    <Route path="/tools/trading-crypto/risk-reward" element={<RiskReward />} />
                    
                    {/* Misc Finance Tools */}
                    <Route path="/tools/misc/percentage-calculator" element={<PercentageCalculator />} />
                    <Route path="/tools/misc/discount-calculator" element={<DiscountCalculator />} />
                    <Route path="/tools/misc/simple-interest" element={<SimpleInterest />} />
                    <Route path="/tools/misc/time-value-money" element={<TimeValueMoney />} />
                    <Route path="/tools/misc/rent-vs-buy" element={<RentVsBuy />} />
                    <Route path="/tools/misc/goal-savings" element={<GoalSavings />} />
                    <Route path="/tools/misc/investment-growth" element={<InvestmentGrowth />} />
                    
                    {/* Other Pages */}
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
