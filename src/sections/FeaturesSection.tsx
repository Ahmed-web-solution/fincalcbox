import NeuCard from "@/components/NeuCard";
import { TrendingUp, PiggyBank, Brain, Calculator, Globe, Receipt } from "@/components/icons";

const features = [
  { icon: TrendingUp, title: "Investment Tools", description: "Plan and analyze your investments with precision using our advanced calculators and growth estimators." },
  { icon: PiggyBank, title: "Expense Tracker", description: "Monitor your spending habits effortlessly and gain control over your financial lifestyle with smart tracking tools." },
  { icon: Brain, title: "AI Insights", description: "Get real-time, AI-powered financial insights tailored to your goals and market trends." },
  { icon: Calculator, title: "Loan & EMI Calculators", description: "Estimate monthly payments, compare loan options, and make informed borrowing decisions instantly." },
  { icon: Globe, title: "Currency Converter", description: "Access live exchange rates and convert currencies globally with real-time market accuracy." },
  { icon: Receipt, title: "Tax & Savings Planner", description: "Maximize your savings and plan taxes efficiently with automated calculations and detailed breakdowns." },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Powerful Features for Your Financial Success</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <NeuCard key={feature.title} hover className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent text-white mb-4">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </NeuCard>
          ))}
        </div>
      </div>
    </section>
  );
}


