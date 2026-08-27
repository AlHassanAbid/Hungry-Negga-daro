import { useCallback, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

export const themeInitScript = `(function(){try{var s=localStorage.getItem("theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);}catch(e){}})();`;

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      try {
        localStorage.setItem("theme", next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={mounted ? isDark : false}
      aria-label="Toggle dark mode"
      onClick={toggle}
      className={`group relative inline-flex h-8 w-[3.4rem] shrink-0 items-center rounded-full border border-border bg-secondary p-1 transition-colors duration-500 hover:border-primary/50 ${className}`}
    >
      <span
        aria-hidden
        className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "var(--gradient-soft)" }}
      />
      <span
        aria-hidden
        className={`relative grid size-6 place-items-center rounded-full bg-card shadow-soft transition-transform duration-500 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] ${
          isDark ? "translate-x-[1.55rem]" : "translate-x-0"
        }`}
      >
        <Sun
          className={`absolute size-3.5 text-primary transition-all duration-400 ${
            isDark ? "scale-0 -rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
          }`}
        />
        <Moon
          className={`absolute size-3.5 text-primary transition-all duration-400 ${
            isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 rotate-90 opacity-0"
          }`}
        />
      </span>
    </button>
  );
}
