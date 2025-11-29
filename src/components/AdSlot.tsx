// ✅ Production-ready AdSlot component with CLS prevention
import { cn } from "@/lib/utils";

interface AdSlotProps {
  position: "top" | "mid" | "bottom" | "sidebar";
  format?: "banner" | "rectangle" | "skyscraper" | "responsive";
  className?: string;
  responsive?: boolean;
}

/**
 * AdSlot Component - Optimized for Zero CLS (Cumulative Layout Shift)
 * 
 * This component reserves fixed space for ads to prevent layout shifts.
 * Replace the placeholder div with your actual ad provider code (Google AdSense, etc.)
 * 
 * Usage:
 * <AdSlot position="top" format="banner" />
 * <AdSlot position="sidebar" format="skyscraper" />
 */
export default function AdSlot({ 
  position, 
  format = "responsive",
  className,
  responsive = true 
}: AdSlotProps) {
  
  // Fixed heights to prevent CLS - adjust based on your ad provider
  const formatSizes = {
    banner: "h-[90px] md:h-[90px]", // 728x90 or 970x90
    rectangle: "h-[250px] md:h-[250px]", // 300x250 or 336x280
    skyscraper: "h-[600px] w-[160px]", // 160x600
    responsive: "h-[100px] md:h-[90px]", // Responsive - adjust as needed
  };

  const positionStyles = {
    top: "w-full max-w-7xl mx-auto",
    mid: "w-full max-w-7xl mx-auto my-8",
    bottom: "w-full max-w-7xl mx-auto",
    sidebar: "w-[160px] md:w-[160px] lg:w-[300px]",
  };

  return (
    <div
      role="complementary"
      aria-label={`Advertisement - ${position}`}
      className={cn(
        "neu-inset flex items-center justify-center text-muted-foreground text-sm overflow-hidden rounded-xl",
        formatSizes[format],
        positionStyles[position],
        responsive && "w-full",
        className
      )}
      style={{
        minHeight: format === "banner" ? "90px" : undefined,
        // Prevents CLS by reserving exact space
      }}
    >
      {/* ========================================
          REPLACE THIS SECTION WITH YOUR AD CODE
          ======================================== */}
      
      {/* Example: Google AdSense */}
      {/* <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot="XXXXXXXXXX"
           data-ad-format={format}
           data-full-width-responsive={responsive ? "true" : "false"}
      ></ins> */}

      {/* Placeholder - Remove in production */}
      <span className="text-xs">
        Ad Space - {position.charAt(0).toUpperCase() + position.slice(1)} 
        {format !== "responsive" && ` (${format})`}
      </span>
      
      {/* ======================================== */}
    </div>
  );
}

