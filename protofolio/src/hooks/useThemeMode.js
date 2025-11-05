import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "portfolio_theme_mode";

export default function useThemeMode(defaultMode = "light") {
  const [mode, setMode] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ?? defaultMode;
    } catch {
      return defaultMode;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, mode);
    } catch {}
  }, [mode]);

  const toggle = useCallback(() => {
    setMode((m) => (m === "light" ? "dark" : "light"));
  }, []);

  return { mode, setMode, toggle };
}
