import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // ✅ Brand-consistent key
    const newKey = "fincalcbox-theme";
    const oldKey = "finwise-theme";

    // Try reading from new key
    let stored = localStorage.getItem(newKey) as Theme | null;

    // ✅ Safe migration from old key if needed
    if (!stored) {
      const oldStored = localStorage.getItem(oldKey);
      if (oldStored) {
        localStorage.setItem(newKey, oldStored);
        localStorage.removeItem(oldKey);
        stored = oldStored as Theme;
      }
    }

    return stored || "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    
    // ✅ Prevent flash of wrong theme
    root.style.transition = 'none';
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    
    // ✅ Force reflow to ensure class is applied before transition
    root.offsetHeight;
    
    // ✅ Re-enable transitions after theme is set
    root.style.transition = '';
    
    // ✅ Always update the correct key
    localStorage.setItem("fincalcbox-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
