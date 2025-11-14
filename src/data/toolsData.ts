export type ToolSection = 
  | "investment"
  | "business-marketing"
  | "personal-finance"
  | "loan-credit"
  | "trading-crypto"
  | "misc";

export interface Tool {
  id: string;
  title: string;
  description: string;
  icon: string;
  route: string;
  section: ToolSection;
  isExisting?: boolean; // Mark existing tools
}

export const toolsData: Tool[] = [
  // Investment Calculators
  {
    id: "sip-calculator",
    title: "SIP Calculator",
    description: "Calculate returns on Systematic Investment Plans",
    icon: "TrendingUp",
    route: "/tools/investment/sip-calculator",
    section: "investment",
  },
  {
    id: "mutual-fund-return",
    title: "Mutual Fund Return",
    description: "Calculate returns on mutual fund investments",
    icon: "TrendingUp",
    route: "/tools/investment/mutual-fund-return",
    section: "investment",
  },
  {
    id: "fd-calculator",
    title: "FD Calculator",
    description: "Calculate fixed deposit returns and maturity amount",
    icon: "PiggyBank",
    route: "/tools/investment/fd-calculator",
    section: "investment",
  },
  {
    id: "rd-calculator",
    title: "RD Calculator",
    description: "Calculate recurring deposit returns",
    icon: "PiggyBank",
    route: "/tools/investment/rd-calculator",
    section: "investment",
  },
  {
    id: "stock-profit",
    title: "Stock Profit Calculator",
    description: "Calculate profit or loss from stock investments",
    icon: "TrendingUp",
    route: "/tools/investment/stock-profit",
    section: "investment",
  },
  {
    id: "dividend-yield",
    title: "Dividend Yield Calculator",
    description: "Calculate dividend yield on stocks",
    icon: "DollarSign",
    route: "/tools/investment/dividend-yield",
    section: "investment",
  },
  {
    id: "roi-calculator",
    title: "ROI Calculator",
    description: "Calculate return on investment percentage",
    icon: "Target",
    route: "/tools/investment/roi-calculator",
    section: "investment",
  },
  {
    id: "cagr-calculator",
    title: "CAGR Calculator",
    description: "Calculate Compound Annual Growth Rate",
    icon: "TrendingUp",
    route: "/tools/investment/cagr-calculator",
    section: "investment",
  },
  {
    id: "inflation-calculator",
    title: "Inflation Calculator",
    description: "Calculate the impact of inflation on your money",
    icon: "TrendingUp",
    route: "/tools/investment/inflation-calculator",
    section: "investment",
  },
  {
    id: "retirement-planning",
    title: "Retirement Planning",
    description: "Plan your retirement savings and goals",
    icon: "Target",
    route: "/tools/investment/retirement-planning",
    section: "investment",
  },
  {
    id: "compound-interest-calculator",
    title: "Compound Interest Calculator",
    description: "Calculate compound returns based on principal, rate, and time",
    icon: "TrendingUp",
    route: "/compound-interest-calculator",
    section: "investment",
    isExisting: true,
  },

  // Business & Marketing Finance Tools
  {
    id: "gst-calculator",
    title: "GST Calculator",
    description: "Calculate Goods and Services Tax",
    icon: "Receipt",
    route: "/tools/business-marketing/gst-calculator",
    section: "business-marketing",
  },
  {
    id: "vat-calculator",
    title: "VAT Calculator",
    description: "Calculate Value Added Tax",
    icon: "Receipt",
    route: "/tools/business-marketing/vat-calculator",
    section: "business-marketing",
  },
  {
    id: "profit-margin",
    title: "Profit Margin Calculator",
    description: "Calculate profit margins for your business",
    icon: "Calculator",
    route: "/tools/business-marketing/profit-margin",
    section: "business-marketing",
  },
  {
    id: "markup-calculator",
    title: "Markup Calculator",
    description: "Calculate markup percentage on products",
    icon: "Calculator",
    route: "/tools/business-marketing/markup-calculator",
    section: "business-marketing",
  },
  {
    id: "break-even",
    title: "Break-Even Calculator",
    description: "Calculate break-even point for your business",
    icon: "Target",
    route: "/tools/business-marketing/break-even",
    section: "business-marketing",
  },
  {
    id: "revenue-calculator",
    title: "Revenue Calculator",
    description: "Calculate business revenue and projections",
    icon: "DollarSign",
    route: "/tools/business-marketing/revenue-calculator",
    section: "business-marketing",
  },
  {
    id: "cost-calculator",
    title: "Cost Calculator",
    description: "Calculate total costs and expenses",
    icon: "Calculator",
    route: "/tools/business-marketing/cost-calculator",
    section: "business-marketing",
  },

  // Personal Finance Tools
  {
    id: "savings-calculator",
    title: "Savings Calculator",
    description: "Calculate savings goals and timelines",
    icon: "PiggyBank",
    route: "/tools/personal-finance/savings-calculator",
    section: "personal-finance",
  },
  {
    id: "budget-planner",
    title: "Budget Planner",
    description: "Plan and track your monthly budget",
    icon: "FileText",
    route: "/tools/personal-finance/budget-planner",
    section: "personal-finance",
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    description: "Track and categorize your expenses",
    icon: "Receipt",
    route: "/tools/personal-finance/expense-tracker",
    section: "personal-finance",
  },
  {
    id: "net-worth",
    title: "Net Worth Calculator",
    description: "Calculate your total net worth",
    icon: "DollarSign",
    route: "/tools/personal-finance/net-worth",
    section: "personal-finance",
  },
  {
    id: "bill-split",
    title: "Bill Split Calculator",
    description: "Split bills and expenses among friends",
    icon: "Users",
    route: "/tools/personal-finance/bill-split",
    section: "personal-finance",
  },
  {
    id: "hourly-rate",
    title: "Hourly Rate Calculator",
    description: "Convert salary to hourly rate and vice versa",
    icon: "Clock",
    route: "/tools/personal-finance/hourly-rate",
    section: "personal-finance",
  },
  {
    id: "salary-calculator",
    title: "Salary Calculator",
    description: "Calculate take-home salary after deductions",
    icon: "DollarSign",
    route: "/tools/personal-finance/salary-calculator",
    section: "personal-finance",
  },
  {
    id: "overtime-calculator",
    title: "Overtime Calculator",
    description: "Calculate overtime pay and hours",
    icon: "Clock",
    route: "/tools/personal-finance/overtime-calculator",
    section: "personal-finance",
  },
  {
    id: "income-tax-calculator",
    title: "Income Tax Calculator",
    description: "Estimate tax payable based on annual income",
    icon: "Receipt",
    route: "/income-tax-calculator",
    section: "personal-finance",
    isExisting: true,
  },

  // Loan & Credit Related Tools
  {
    id: "mortgage-calculator",
    title: "Mortgage Calculator",
    description: "Calculate mortgage payments and interest",
    icon: "Calculator",
    route: "/tools/loan-credit/mortgage-calculator",
    section: "loan-credit",
  },
  {
    id: "debt-payoff",
    title: "Debt Payoff Calculator",
    description: "Plan your debt payoff strategy",
    icon: "Calculator",
    route: "/tools/loan-credit/debt-payoff",
    section: "loan-credit",
  },
  {
    id: "loan-comparison",
    title: "Loan Comparison",
    description: "Compare different loan options",
    icon: "ArrowLeftRight",
    route: "/tools/loan-credit/loan-comparison",
    section: "loan-credit",
  },
  {
    id: "debt-to-income",
    title: "Debt-to-Income Calculator",
    description: "Calculate your debt-to-income ratio",
    icon: "Calculator",
    route: "/tools/loan-credit/debt-to-income",
    section: "loan-credit",
  },
  {
    id: "loan-calculator",
    title: "Loan Calculator",
    description: "Calculate loan interest, duration, and total payable amount",
    icon: "Calculator",
    route: "/loan-calculator",
    section: "loan-credit",
    isExisting: true,
  },
  {
    id: "emi-calculator",
    title: "EMI Calculator",
    description: "Compute monthly installments for loans or credits",
    icon: "Calendar",
    route: "/emi-calculator",
    section: "loan-credit",
    isExisting: true,
  },

  // Trading & Crypto Tools
  {
    id: "crypto-profit",
    title: "Crypto Profit Calculator",
    description: "Calculate profit or loss from cryptocurrency trading",
    icon: "TrendingUp",
    route: "/tools/trading-crypto/crypto-profit",
    section: "trading-crypto",
  },
  {
    id: "pnl-calculator",
    title: "P&L Calculator",
    description: "Calculate profit and loss for trades",
    icon: "Calculator",
    route: "/tools/trading-crypto/pnl-calculator",
    section: "trading-crypto",
  },
  {
    id: "trading-fee",
    title: "Trading Fee Calculator",
    description: "Calculate trading fees and commissions",
    icon: "Calculator",
    route: "/tools/trading-crypto/trading-fee",
    section: "trading-crypto",
  },
  {
    id: "position-size",
    title: "Position Size Calculator",
    description: "Calculate optimal position size for trades",
    icon: "Target",
    route: "/tools/trading-crypto/position-size",
    section: "trading-crypto",
  },
  {
    id: "risk-reward",
    title: "Risk-Reward Calculator",
    description: "Calculate risk-reward ratio for trades",
    icon: "Target",
    route: "/tools/trading-crypto/risk-reward",
    section: "trading-crypto",
  },

  // Misc Finance Tools
  {
    id: "percentage-calculator",
    title: "Percentage Calculator",
    description: "Calculate percentages, increases, and decreases",
    icon: "Calculator",
    route: "/tools/misc/percentage-calculator",
    section: "misc",
  },
  {
    id: "discount-calculator",
    title: "Discount Calculator",
    description: "Calculate discounts and final prices",
    icon: "Calculator",
    route: "/tools/misc/discount-calculator",
    section: "misc",
  },
  {
    id: "simple-interest",
    title: "Simple Interest Calculator",
    description: "Calculate simple interest on loans or investments",
    icon: "Calculator",
    route: "/tools/misc/simple-interest",
    section: "misc",
  },
  {
    id: "time-value-money",
    title: "Time Value of Money",
    description: "Calculate present and future value of money",
    icon: "Clock",
    route: "/tools/misc/time-value-money",
    section: "misc",
  },
  {
    id: "rent-vs-buy",
    title: "Rent vs Buy Calculator",
    description: "Compare renting vs buying a property",
    icon: "ArrowLeftRight",
    route: "/tools/misc/rent-vs-buy",
    section: "misc",
  },
  {
    id: "goal-savings",
    title: "Goal Savings Calculator",
    description: "Calculate savings needed to reach financial goals",
    icon: "Target",
    route: "/tools/misc/goal-savings",
    section: "misc",
  },
  {
    id: "investment-growth",
    title: "Investment Growth Calculator",
    description: "Project investment growth over time",
    icon: "TrendingUp",
    route: "/tools/misc/investment-growth",
    section: "misc",
  },
  {
    id: "currency-converter",
    title: "Currency Converter",
    description: "Convert between international currencies with live rates",
    icon: "Globe",
    route: "/currency-converter",
    section: "misc",
    isExisting: true,
  },
];

// Section metadata
export const sectionMetadata: Record<ToolSection, { title: string; description: string; icon: string }> = {
  investment: {
    title: "Investment Calculators",
    description: "Plan your financial future with powerful investment calculators. Calculate SIP returns, mutual fund growth, fixed deposits, stock profits, ROI, CAGR, and retirement planning to make informed investment decisions.",
    icon: "TrendingUp",
  },
  "business-marketing": {
    title: "Business & Marketing Finance Tools",
    description: "Essential financial tools for businesses and entrepreneurs. Calculate GST, VAT, profit margins, markup, break-even points, revenue projections, and cost analysis to optimize your business operations.",
    icon: "Calculator",
  },
  "personal-finance": {
    title: "Personal Finance Tools",
    description: "Take control of your personal finances with comprehensive budgeting and planning tools. Track expenses, calculate savings goals, manage budgets, split bills, and plan your financial journey effectively.",
    icon: "PiggyBank",
  },
  "loan-credit": {
    title: "Loan & Credit Related Tools",
    description: "Make smart borrowing decisions with our loan and credit calculators. Calculate mortgage payments, compare loan options, plan debt payoff strategies, and understand your debt-to-income ratio.",
    icon: "Calculator",
  },
  "trading-crypto": {
    title: "Trading & Crypto Tools",
    description: "Master trading and cryptocurrency investments with precision. Calculate profit and loss, trading fees, position sizes, risk-reward ratios, and crypto returns to optimize your trading strategy.",
    icon: "TrendingUp",
  },
  misc: {
    title: "Misc Finance Tools",
    description: "A collection of versatile financial utilities for everyday calculations. Convert currencies, calculate percentages, discounts, simple interest, time value of money, and make informed financial comparisons.",
    icon: "Calculator",
  },
};

// Helper functions
export const getToolsBySection = (section: ToolSection): Tool[] => {
  return toolsData.filter((tool) => tool.section === section);
};

export const getAllSections = (): ToolSection[] => {
  return Object.keys(sectionMetadata) as ToolSection[];
};
