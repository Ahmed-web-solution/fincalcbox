import { useState } from "react";
import NeuInput from "@/components/NeuInput";
import NeuButton from "@/components/NeuButton";
import { Plus, Trash2 } from "lucide-react";

interface Expense {
  id: number;
  category: string;
  amount: number;
}

export default function ExpenseCalculator() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (category && amount && parseFloat(amount) > 0) {
      setExpenses([
        ...expenses,
        { id: Date.now(), category, amount: parseFloat(amount) },
      ]);
      setCategory("");
      setAmount("");
    }
  };

  const removeExpense = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <NeuInput
          label="Category"
          placeholder="e.g., Food, Transport"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <NeuInput
          label="Amount ($)"
          type="number"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      
      <NeuButton variant="primary" onClick={addExpense} className="w-full">
        <Plus className="h-5 w-5 mr-2" />
        Add Expense
      </NeuButton>

      {expenses.length > 0 && (
        <div className="neu-inset p-4 space-y-3">
          {expenses.map((expense) => (
            <div
              key={expense.id}
              className="flex justify-between items-center p-3 bg-card rounded-lg"
            >
              <span className="font-medium">{expense.category}</span>
              <div className="flex items-center gap-3">
                <span className="text-primary font-semibold">
                  ${expense.amount.toFixed(2)}
                </span>
                <button
                  onClick={() => removeExpense(expense.id)}
                  className="text-destructive hover:scale-110 transition-transform"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
          <div className="pt-3 border-t border-border flex justify-between items-center font-bold text-lg">
            <span>Total</span>
            <span className="text-accent">${total.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
}
