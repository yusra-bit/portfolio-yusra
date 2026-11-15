import { useEffect, useState } from "react";

export function useTheme() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  useEffect(() => { document.documentElement.classList.toggle("dark", dark); }, [dark]);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch { /* storage unavailable */ }
  };
  return { dark, toggle };
}
