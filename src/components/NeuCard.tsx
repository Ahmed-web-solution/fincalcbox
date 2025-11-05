import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface NeuCardProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  inset?: boolean;
}

export default function NeuCard({ children, className, hover = false, inset = false, ...props }: NeuCardProps) {
  return (
    <div
      className={cn(
        inset ? "neu-inset" : hover ? "neu-card-hover" : "neu-card",
        "p-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
