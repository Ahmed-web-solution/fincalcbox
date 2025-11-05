import { useState } from "react";
import NeuInput from "@/components/NeuInput";
import NeuButton from "@/components/NeuButton";
import NeuCard from "@/components/NeuCard";

export default function InvestmentEstimator() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100;
    const t = parseFloat(years);

    if (p > 0 && r > 0 && t > 0) {
      // Compound interest formula: A = P(1 + r)^t
      const futureValue = p * Math.pow(1 + r, t);
      setResult(futureValue);
    }
  };

  const profit = result ? result - parseFloat(principal) : 0;

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <NeuInput
          label="Initial Investment ($)"
          type="number"
          placeholder="10000"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
        <NeuInput
          label="Annual Return Rate (%)"
          type="number"
          placeholder="8"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
        <NeuInput
          label="Investment Period (years)"
          type="number"
          placeholder="10"
          value={years}
          onChange={(e) => setYears(e.target.value)}
        />
      </div>

      <NeuButton variant="primary" onClick={calculate} className="w-full">
        Calculate Returns
      </NeuButton>

      {result !== null && (
        <NeuCard inset>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Initial Investment</span>
              <span className="font-semibold">${parseFloat(principal).toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Estimated Profit</span>
              <span className="font-semibold text-accent">${profit.toFixed(2)}</span>
            </div>
            <div className="pt-3 border-t border-border flex justify-between items-center">
              <span className="font-bold text-lg">Future Value</span>
              <span className="font-bold text-lg text-primary">${result.toFixed(2)}</span>
            </div>
          </div>
        </NeuCard>
      )}
    </div>
  );
}
