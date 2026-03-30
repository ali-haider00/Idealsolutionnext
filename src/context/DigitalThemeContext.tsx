'use client';

import { createContext, useContext, useEffect, useState } from "react";

const DigitalThemeContext = createContext<{
  theme: string;
  toggleTheme: () => void;
}>({
  theme: 'light',
  toggleTheme: () => {},
});

export function DigitalThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' ? localStorage.getItem("digital-theme") || "light" : "light"
  );

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (theme === "dark") {
        document.documentElement.classList.add("digital-dark");
      } else {
        document.documentElement.classList.remove("digital-dark");
      }
      localStorage.setItem("digital-theme", theme);
    }
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <DigitalThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </DigitalThemeContext.Provider>
  );
}

export const useDigitalTheme = () => useContext(DigitalThemeContext);
