import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

interface NeuInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const NeuInput = forwardRef<HTMLInputElement, NeuInputProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block mb-2 text-sm font-medium text-foreground">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={cn(
            "neu-inset w-full px-4 py-3 bg-background text-foreground",
            "focus:outline-primary focus:ring-primary/50 transition-all",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

NeuInput.displayName = "NeuInput";

export default NeuInput;
