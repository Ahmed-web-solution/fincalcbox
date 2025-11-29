import { useState } from "react";
import NeuInput from "@/components/NeuInput";
import NeuButton from "@/components/NeuButton";
import NeuCard from "@/components/NeuCard";

export default function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [emi, setEmi] = useState<number | null>(null);

  const calculate = () => {
    const p = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12; 

    if (p > 0 && r >= 0 && n > 0) {
      const emiValue = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      setEmi(emiValue);
    }
  };

  const totalPayment = emi ? emi * parseFloat(loanTerm) * 12 : 0;
  const totalInterest = totalPayment - parseFloat(loanAmount || "0");

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <NeuInput
          label="Loan Amount ($)"
          type="number"
          placeholder="50000"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
        <NeuInput
          label="Annual Interest Rate (%)"
          type="number"
          placeholder="5.5"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
        <NeuInput
          label="Loan Term (years)"
          type="number"
          placeholder="10"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        />
      </div>

      <NeuButton variant="primary" onClick={calculate} className="w-full">
        Calculate EMI
      </NeuButton>

      {emi !== null && (
        <NeuCard inset>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Monthly EMI</span>
              <span className="font-bold text-2xl text-primary">${emi.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Principal Amount</span>
              <span className="font-semibold">${parseFloat(loanAmount).toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Total Interest</span>
              <span className="font-semibold text-destructive">${totalInterest.toFixed(2)}</span>
            </div>
            <div className="pt-3 border-t border-border flex justify-between items-center">
              <span className="font-bold text-lg">Total Payment</span>
              <span className="font-bold text-lg text-accent">${totalPayment.toFixed(2)}</span>
            </div>
          </div>
        </NeuCard>
      )}
    </div>
  );
}
