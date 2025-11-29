import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface NeuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "primary" | "accent";
  size?: "sm" | "md" | "lg";
}

const NeuButton = forwardRef<HTMLButtonElement, NeuButtonProps>(
  ({ className, variant = "default", size = "md", children, ...props }, ref) => {
    const baseStyles = "neu-button font-medium transition-all duration-200 hover:scale-105";
    
    const variants = {
      default: "text-foreground",
      primary: "bg-gradient-to-r from-primary to-primary/90 text-primary-foreground",
      accent: "bg-gradient-to-r from-accent to-accent/90 text-accent-foreground",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

NeuButton.displayName = "NeuButton";

export default NeuButton;
