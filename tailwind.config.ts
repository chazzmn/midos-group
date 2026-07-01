import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Institutional palette — deep navy, charcoal, off-white, muted bronze.
        navy: {
          DEFAULT: "#0F1E33",
          900: "#0B1626",
          800: "#0F1E33",
          700: "#182B45",
          600: "#243a58",
        },
        charcoal: {
          DEFAULT: "#2A2E35",
          light: "#4A4F57",
          muted: "#6B7079",
        },
        paper: {
          DEFAULT: "#F6F4EF",
          soft: "#FBFAF6",
          dim: "#ECE8DF",
        },
        bronze: {
          DEFAULT: "#B08D57",
          dark: "#8A6C3F",
          hover: "#9A784A",
          soft: "#C7A876",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Cambria", "serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.22em",
      },
      maxWidth: {
        content: "76rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
