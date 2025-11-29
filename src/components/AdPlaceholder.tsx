import { cn } from "@/lib/utils";

interface AdPlaceholderProps {
  position: "top" | "sidebar" | "bottom";
  className?: string;
}

export default function AdPlaceholder({ position, className }: AdPlaceholderProps) {
  const sizes = {
    top: "h-24",
    sidebar: "lg:w-64 h-96",
    bottom: "h-24",
  };

  return (
    <div
      role="complementary"
      aria-label={`Advertisement placeholder at ${position}`}
      className={cn(
        "neu-inset flex items-center justify-center text-muted-foreground text-sm",
        sizes[position],
        className
      )}
    >
      Ad Placement - {position.charAt(0).toUpperCase() + position.slice(1)}
    </div>
  );
}
