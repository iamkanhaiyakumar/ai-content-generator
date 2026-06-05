import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f0f4ff",
          100: "#e0eaff",
          200: "#c7d7fe",
          300: "#a5b8fc",
          400: "#818cf8",
          500: "#6366f1",   // primary
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
        },
        accent: {
          DEFAULT: "#14b8a6",  // teal accent
          light: "#5eead4",
          dark:  "#0f766e",
        },
        surface: {
          DEFAULT: "#0f172a",  // dark bg
          card:    "#1e293b",
          border:  "#334155",
        },
      },
      fontFamily: {
        sans:    ["Inter", "sans-serif"],
        display: ["Syne", "sans-serif"],
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease forwards",
        "fade-in":    "fadeIn 0.5s ease forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "typing":     "typing 3s steps(40) infinite alternate",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        typing: {
          "0%":   { width: "0" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;