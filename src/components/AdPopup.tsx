import { useState, useEffect } from "react";
import { X } from "@/components/icons";
import { cn } from "@/lib/utils";

interface AdPopupProps {
  onClose?: () => void;
  showCloseButton?: boolean;
  delay?: number;
}

export default function AdPopup({ 
  onClose, 
  showCloseButton = true,
  delay = 0 
}: AdPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if popup has been shown before (using localStorage)
    const shown = localStorage.getItem('adPopupShown');
    if (shown) return;

    // Show popup after delay
    const timer = setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => setIsOpen(true), 50);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsAnimating(false);
      onClose?.();
    }, 300);
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
          isAnimating && isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className={cn(
            "neu-card max-w-lg w-full p-8 relative transition-all duration-300",
            isAnimating && isOpen 
              ? "opacity-100 scale-100 translate-y-0" 
              : "opacity-0 scale-90 translate-y-5"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          {showCloseButton && (
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 neu-button p-2 hover:scale-110 transition-transform"
              aria-label="Close popup"
            >
              <X className="h-5 w-5" />
            </button>
          )}

          {/* Advertisement Content */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent text-white mb-6 shadow-lg">
              <svg
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>

            <h3 className="text-2xl font-bold mb-4">
              Special Offer!
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the best deals on financial tools and services. 
              Upgrade to premium features for enhanced calculations and insights.
            </p>

            <div 
              className={cn(
                "neu-inset h-32 flex items-center justify-center text-muted-foreground",
                "rounded-xl bg-gradient-to-br from-primary/5 to-accent/5"
              )}
            >
              <div className="text-center">
                <p className="text-sm font-semibold mb-1">Advertisement</p>
                <p className="text-xs">320 × 250</p>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              Close anytime to continue using our free tools
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
